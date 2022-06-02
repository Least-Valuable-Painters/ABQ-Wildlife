import { Router } from 'express'
import { signOutController } from './signout.controller'

export const SignoutRoute: Router = Router()

SignoutRoute.route('/')
    .get(signOutController)