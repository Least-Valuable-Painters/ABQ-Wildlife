import { Router } from 'express';
import {
    getAllImagesController,
    getImagesByImageIdController,
    getImagesByImageUserIdController,
    postImage
} from "./image.controller";
import { asyncValidatorController} from "../../utils/controllers/asyncValidator.controller";
import { imageValidator } from './image.validator';
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";
import {check} from "express-validator";
import {checkSchema} from "express-validator";

const router = Router();
router.route("/:imageId").get(asyncValidatorController([
    check("imageId", "please provide a valid imageId").isUUID()
    ]), getImagesByImageIdController)

router.route("/imageUserId/:imageUserId").get( asyncValidatorController([
    check("imageUserId", "please provide a valid imageUserId").isUUID()
]), getImagesByImageUserIdController)

router.route('/')
    .get( getAllImagesController)
    .post(isLoggedIn, asyncValidatorController(checkSchema(imageValidator)), postImage);

export default router;