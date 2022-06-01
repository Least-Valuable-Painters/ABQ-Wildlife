import {Router} from "express";
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";
import {toggleFavorite} from "../../utils/favorite/toggleFavorite";
import {toggleFavoriteController} from "./favorite.controller";
import {getAllCommentsController, postComment} from "../comment/comment.controller";
import {asyncValidatorController} from "../../utils/controllers/asyncValidator.controller";
import {checkSchema} from "express-validator";
import {commentValidator} from "../comment/comment.validator";
import {favoriteValidator} from "./favorite.validator";

const router = Router();

router.route('/')
    .post(isLoggedIn, toggleFavoriteController);

router.route('/')
    .post(isLoggedIn, asyncValidatorController(checkSchema(favoriteValidator)), toggleFavoriteController);

export default router;