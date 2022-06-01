import { Router } from 'express'
import { asyncValidatorController } from '../../utils/controllers/asyncValidator.controller'
import { signInValidator } from './signin.validator'
import { signInController } from "./signin.controller"
import { checkSchema} from "express-validator";

export const SigninRoute: Router = Router()

SigninRoute.route('/')
    .post(asyncValidatorController(checkSchema(signInValidator)), signInController)