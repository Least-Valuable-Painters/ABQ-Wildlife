import {Router} from "express";
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";
import {getFavoritesByFavoriteUserId, toggleFavoriteController} from "./favorite.controller";
import {asyncValidatorController} from "../../utils/controllers/asyncValidator.controller";
import {check, checkSchema} from "express-validator";
import {favoriteValidator} from "./favorite.validator";

const router = Router();

router.route('/favoriteUserId/:favoriteUserId')
    .get(isLoggedIn, asyncValidatorController([
        check("favoriteUserId", "please provide a valid favoriteUserId").isUUID()
    ]), getFavoritesByFavoriteUserId);




router.route('/')
    .post(isLoggedIn, asyncValidatorController(checkSchema(favoriteValidator)), toggleFavoriteController);

export default router;

