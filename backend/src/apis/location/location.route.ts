import { Router } from 'express';
import {
    getAllLocationsController,
    getLocationsByLocationIdController,
    postLocation
} from "./location.controller";
import { asyncValidatorController} from "../../utils/controllers/asyncValidator.controller";
import { locationValidator } from './location.validator';
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";
import {check} from "express-validator";
import {checkSchema} from "express-validator";

const router = Router();
router.route("/:locationId").get(asyncValidatorController([
    check("locationId", "please provide a valid locationId").isUUID()
]), getLocationsByLocationIdController)

//router.route("/locationId/:locationId").get( asyncValidatorController([
    //check("locationId", "please provide a valid imageUserId").isUUID()
//]), getImagesByImageUserIdController)

router.route('/')
    .get( getAllLocationsController)
    .post(isLoggedIn, asyncValidatorController(checkSchema(locationValidator)), postLocation);

export default router;