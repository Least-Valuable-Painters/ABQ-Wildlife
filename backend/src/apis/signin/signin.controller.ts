import { Request, Response } from 'express'
import 'express-session'
import { v4 as uuid } from 'uuid'
import { generateJwt, validatePassword } from '../../utils/auth.utils'
import { User } from '../../utils/interfaces/User'
import {selectUserByUserEmail} from "../../utils/user/selectUserByUserEmail";


export async function signInController (request: Request, response: Response): Promise<Response> {
    try {
        const { UserEmail, UserPassword } = request.body
        const User: User | null = await selectUserByUserEmail(UserEmail)

        return (User !== null) && await validatePassword(User.userHash, UserPassword)
            ? signInSuccessful(request, response, User)
            : signInFailed(response)
    } catch (error: any) {
        return response.json({ status: 500, data: null, message: error.message })
    }
}

function signInFailed (response: Response): Response {
    return response.json({ status: 400, message: 'Email or password is incorrect please try again.', data: null })
}

function signInSuccessful (request: Request, response: Response, User: User): Response {
    const { userId, userActivationToken, userEmail, userHash, userIsAdmin, userName } = User
    const signature: string = uuid()
    const authorization: string = generateJwt({
        userId,
        userActivationToken,
        userEmail,
        userHash,
        userIsAdmin,
        userName
    }, signature)

    request.session.user = User
    request.session.jwt = authorization
    request.session.signature = signature

    response.header({
        authorization
    })
    return response.json({ status: 200, message: 'Sign in successful', data: null })
}
