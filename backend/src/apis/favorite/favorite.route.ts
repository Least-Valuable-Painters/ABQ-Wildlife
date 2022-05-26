import {Router} from "express";
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";
import {toggleFavorite} from "../../utils/favorite/toggleFavorite";

const router = Router();

router.route('/')
    .post(isLoggedIn, toggleFavoriteController);

export default router;