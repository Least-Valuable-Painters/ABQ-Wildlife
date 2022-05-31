import {NextFunction, Request, Response} from "express";
import {User} from "../../utils/interfaces/User";
import {updateUser} from "../../utils/user/updateUser";
import {Comment} from "../../utils/interfaces/Comment";
import {selectUserByUserActivationToken} from "../../utils/user/selectUserByUserActivationToken";

export async function activationController(request: Request, response: Response, nextFunction: NextFunction): Promise<Response<Comment>> {
    try {
        const {activation} = request.params
        const user = await selectUserByUserActivationToken(activation)
        console.log(user)

        const activationFailed = () : Response => response.json({
            status: 400,
            data: null,
            message: "Account activation has failed. Has this account already been activated?"
        });

        const activationSucceeded = async (user: User):Promise<Response> => {
            const updatedUser = {...user, userActivationToken: null}
            console.log(updatedUser)
            await updateUser(updatedUser)
            return response.json({
                status: 200,
                data: null,
                message: "Activation successful"
            });
        }

        return user ? await activationSucceeded(user) : activationFailed()

    } catch (error: any) {
        return response.json({status: 500, data: null, message: error.message})
    }

}