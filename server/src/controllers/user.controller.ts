import { Show } from "../models/user.model"
import { Response, Request } from "express";

class UserController {
    public static index = (req: Request, res: Response) => {
        const user = Show()
        res.json(user)
    }
}


export default UserController