import {NextFunction, Request, Response} from 'express';

import {User} from "../../utils/interfaces/User";
import {Favorite} from "../../utils/interfaces/Favorite";
import {selectFavoriteByFavoriteId} from "../../utils/favorite/selectFavoriteByFavoriteId";
import {deleteFavorite} from "../../utils/favorite/deleteFavorite";
import {insertFavorite} from "../../utils/favorite/insertFavorite";
import {Status} from "../../utils/interfaces/Status";
import {selectFavoritesByFavoriteUserId} from "../../utils/favorite/selectFavoritesByFavoriteUserId";



export async function toggleFavoriteController(request: Request, response: Response): Promise<Response<string>> {

    try {
        const {favoriteLocationId} = request.body;
        const user = <User>request.session.user
        const favoriteUserId = <string>user.userId

        const favorite: Favorite = {
            favoriteUserId,
            favoriteLocationId
        }
        const select = await selectFavoriteByFavoriteId(favorite)
        let result = null
        // @ts-ignore
        if (select === null){
            result = await insertFavorite(favorite)
        }else{
            result = await deleteFavorite(favorite)
        }

        const status: Status = {
            status: 200,
            message: result,
            data: null
        };
        return response.json(status);
    } catch (error: any) {
        console.error(error)
        return(response.json({status: 500, data: null, message: error.message}))
    }
}

export async function getFavoritesByFavoriteUserId(request : Request, response: Response, nextFunction: NextFunction): Promise<Response<Status>>{


    try {
        const {favoriteUserId} = request.params
        const data = await selectFavoritesByFavoriteUserId(favoriteUserId)
        return response.json({status:200, message: null, data});
    } catch(error) {
        return response.json({
            status: 500,
            message: "",
            data: null
        })
    }
}