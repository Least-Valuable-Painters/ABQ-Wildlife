import { Comment } from '../../utils/interfaces/Comment'
import { Request, Response } from 'express'


export function signOutController (request: Request, response: Response): Response<Comment> {
    const status: Comment = { status: 200, message: 'sign out successful', data:null }
    const {session} = request
    session?.destroy(() => {})
    return response.json(status)
}