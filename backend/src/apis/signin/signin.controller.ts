import { NextFunction , Request, Response } from 'express'
import {User} from "../../utils/interfaces/User";
import {selectUserByUserEmail} from "../../utils/user/selectUserByUserEmail";
import {generateJwt, validatePassword} from "../../utils/auth.utils";
import uuid from "uuid";



export async function signInController(request: Request, response: Response): Promise<Response | undefined> {

    const {userEmail} = request.body
    const mySqlResult: User | null = await selectUserByUserEmail(userEmail);
    const isEmailValid: boolean = mySqlResult ? true : false

    try {
        const authenticate: () => Promise<any> = async () => {

            const {userPassword} = request.body;

            // @ts-ignore isEmailValid determines mySqlResult will not be null
            const {userId, userActivationToken, userEmail, userHash, userIsAdmin, userUserName} = mySqlResult

            const user: User = {
                userId,
                userActivationToken,
                userEmail,
                userHash,
                userIsAdmin,
                userUserName
            }

            // @ts-ignore
            const signature: string = uuid();
            const authorization: string = generateJwt({
                userId,
                userEmail,
            }, signature);

            const signInFailed = (message: string) => response.json({
                status: 400,
                data: null,
                message
            });

            const signInSuccessful = () => {

                // commented out for testing purposes
                // if(profile.profileActivationToken !== null) {
                // 	signInFailed("please activate your account")
                // }

                if (request.session) {
                    request.session.user = user;
                    request.session.jwt = authorization;
                    request.session.signature = signature;
                }
                response.header({
                    authorization
                });

                return response.json({status: 200, data: null, message: "sign in successful"})
            };

            const isPasswordValid: boolean = user && await validatePassword(user.userHash, userPassword);

                return isPasswordValid ? signInSuccessful() : signInFailed("Invalid email or password. Please try again.");
            }

            return isEmailValid ? authenticate() : response.json({
                status: 400,
                data: null,
                message: "Invalid email or password."
            })

        }
    catch
        (error: any)
        {
            return response.json({status: 500, data: null, message: error.message})
        }
    }
