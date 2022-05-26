import {Request, Response} from 'express';

import {User} from "../../utils/interfaces/User";
import {Favorite} from "../../utils/interfaces/Favorite";
import {selectFavoriteByFavoriteId} from "../../utils/favorite/selectFavoriteByFavoriteId";
import {deleteFavorite} from "../../utils/favorite/deleteFavorite";
import {insertFavorite} from "../../utils/favorite/insertFavorite";
import { Status } from 'cloudinary';


export async function toggleFavoriteController(request: Request, response: Response): Promise<Response<string>> {

    try {
        const {favoriteLocationId} = request.body;
        // @ts-ignore
        const user = <User>request.session.user
        const favoriteUserId = <string>user.userId

        const favorite: Favorite = {
            favoriteUserId,
            favoriteLocationId
        }
        const select = await selectFavoriteByFavoriteId(favorite)

        // @ts-ignore
        if (select[0]){
            const result = await deleteFavorite(favorite)
        }else{
            const result = await insertFavorite(favorite)
        }

        const status: Status = {
            status: 200,
            message: 'Favorite successfully updated',
            data: null
        };
        return response.json(status);
    } catch (error: any) {
        return(response.json({status: 500, data: null, message: error.message}))
    }
}