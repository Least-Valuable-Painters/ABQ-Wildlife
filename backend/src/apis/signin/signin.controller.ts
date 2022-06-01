import { Request, Response } from 'express'
import 'express-session'
import { v4 as uuid } from 'uuid'
import { generateJwt, validatePassword } from '../../utils/auth.utils'
import { User } from '../../utils/interfaces/User'
import {selectUserByUserEmail} from "../../utils/user/selectUserByUserEmail";


export async function signInController (request: Request, response: Response): Promise<Response> {
    try {
        const { userEmail, userPassword } = request.body
        const user: User | null = await selectUserByUserEmail(userEmail)

        return (user !== null) && await validatePassword(user.userHash, userPassword)
            ? signInSuccessful(request, response, user)
            : signInFailed(response)
    } catch (error: any) {
        return response.json({ status: 500, data: null, message: error.message })
    }
}

function signInFailed (response: Response): Response {
    return response.json({ status: 400, message: 'Email or password is incorrect please try again.', data: null })
}

function signInSuccessful (request: Request, response: Response, user: User): Response {
    const { userId, userActivationToken, userEmail, userHash, userIsAdmin, userName } = user
    const signature: string = uuid()
    const authorization: string = generateJwt({
        userId,
        userActivationToken,
        userEmail,
        userHash,
        userIsAdmin,
        userName
    }, signature)

    request.session.user = user
    request.session.jwt = authorization
    request.session.signature = signature

    response.header({
        authorization
    })
    return response.json({ status: 200, message: 'Sign in successful', data: null })
}
