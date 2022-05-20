import {NextFunction, Request, Response} from "express";
import {selectUserByUserActivationToken} from "../../utils/user/selectUserByUserActivationToken";
import {User} from "../../utils/interfaces/User";
import {updateUser} from "../../utils/interfaces/updateUser";
import {Status} from "../../utils/interfaces/Status";

export async function activationController(request: Request, response: Response, nextFunction: NextFunction): Promise<Response<Status>> {
    try {
        const {activation} = request.params
        const user = await selectUserbyUserActivationToken(activation)
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