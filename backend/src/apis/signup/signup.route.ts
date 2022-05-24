import { Router } from 'express'
import {signupUserController} from "./signup.controller";

const { checkSchema } = require('express-validator')

const router: Router = Router();

router.route('/')
    .post(
        asyncValidatorController(checkSchema(signupValidator)),
        signupUserController
    );

router.route('/activation/:activation')
    .get(
        asyncValidatorController([param("activation", "invalid activation link").isHexadecimal().notEmpty()]),
        activationController
    )

export default router;