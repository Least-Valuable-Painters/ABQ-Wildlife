import { Request, Response } from 'express'

import { setActivationToken, setHash } from '../../utils/auth.utils'
import Mailgun from "mailgun.js";
import Client from "mailgun.js/dist/lib/client";
import {Status} from "../../utils/interfaces/Status";


export async function signupUserController(request: Request, response: Response): Promise<Response | undefined> {
    try {

        const mailgun: Mailgun = new Mailgun(formData)
        const mailgunClient: Client = mailgun.client({username: "api", key: <string>process.env.MAILGUN_API_KEY})
        const {userAtHandle, usereEmail, userPhone, userPassword} = request.body;
        const userHash = await setHash(userPassword)
        const userActivationToken = setActivationToken()
        const userAvatarUrl = 'http://www.fillmurray.com/100/150'
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
            userActivationToken,
            userEmail,
            userHash,
            userIsAdmin,
            userName,
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
    ;

}



