import { Request, Response } from 'express'

import { setActivationToken, setHash } from '../../utils/auth.utils'
import Mailgun from "mailgun.js";
import Client from "mailgun.js/dist/lib/client";
import formData from 'form-data';
import {User} from "../../utils/interfaces/User";
import {insertUser} from "../../utils/user/insertUser";
import {Status} from "../../utils/interfaces/Status";


export async function signupUserController(request: Request, response: Response): Promise<Response | undefined> {
    try {
console.log("anything")
        const mailgun: Mailgun = new Mailgun(formData)
        const mailgunClient: Client = mailgun.client({username: "api", key: <string>process.env.MAILGUN_API_KEY})
        const {userIsAdmin, userEmail, userName, userPassword} = request.body;
        const userHash = await setHash(userPassword)
        const userActivationToken = setActivationToken()
        const basePath = `${request.protocol}://${request.get('host')}${request.originalUrl}activation/${userActivationToken}`
        console.log(userActivationToken)

        const message = `<h2>Welcome to ABQ Wildlife Federation.</h2>
        <p>To upload an image of a New Mexico location you must sign up for an account.
            <p><a href="${basePath}">${basePath}</a></p>`

        const mailgunMessage = {
            from: `Mailgun Sandbox <postmaster@${process.env.MAILGUN_DOMAIN}>`,
            to: userEmail,
            subject: 'One step closer to Wildlife Federation -- Account Activation',
            html: message
        }

        const user: User = {
            userId: null,
            userName,
            userEmail,
            userHash,
            userIsAdmin: false,
            userActivationToken,
        };

        await insertUser(user)

        await mailgunClient.messages.create(<string>process.env.MAILGUN_DOMAIN, mailgunMessage)

        const status: Status = {
            status: 200,
            message: 'User successfully created please check your email.',
            data: null
        };

        return response.json(status)

    } catch (error: any) {
        const status: Status = {
            status: 500,
            message: error.message,
            data: null
        };

        return response.json(status)
    }

}



