import { Request, Response } from "express";

class indexController {
    GetIndex (req:Request, res:Response){
        res.send("Bienvenido la ruta de Games es /api/game");
    }
}


export const indexCo = new indexController()

