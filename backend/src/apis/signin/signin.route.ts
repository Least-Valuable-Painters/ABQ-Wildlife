import { Router } from 'express'
import { asyncValidatorController } from '../../utils/controllers/asyncValidator.controller'
import { signInValidator } from './signin.validator'
import { signInController } from "./signin.controller"
import { checkSchema} from "express-validator";

export const SignInRoute: Router = Router()

SignInRoute.route('/')
    .post(asyncValidatorController(checkSchema(signInValidator)), signInController)