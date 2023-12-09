import { Request, Response } from "express";
import pool from "../db/database";
export class GamesController {

    constructor(){

    }

    index (req:Request, res:Response){
        pool.query('DESCRIBE games');
        res.json("Conectado a la base de datos");
    }
    
    //POST games
    async gamesCreate (req:Request, res:Response){ 
        await pool.promise().query('INSERT INTO games set ?', [req.body]);
        res.json({message: 'Games Saved Success!'});
    }
    
    //GET games
    async getListGames (req:Request, res:Response){
        const listGame = await pool.promise().query('SELECT * FROM games');
        res.json({message: 'Mostrando List Games'});
        res.json(listGame);
    }

    async getOnetGame (req:Request, res:Response):Promise<any>{
        const {id} = req.params;
        const game  = await pool.promise().query('SELECT * FROM games WHERE id = ?', [id]);

        if(game.length > 0){
            return res.json(game[0]);
        }
        
        return res.status(404).json({message: 'The game does not exist!'});
        

        //res.json({message: 'Dato Game Obtenido!'});
    }

    //DELETE games
    async gamesDelete (req:Request, res:Response){
        const {id} = req.params;
        await pool.promise().query('DELETE FROM games WHERE id = ?',[id]);
        res.json({message: 'The Game was deleted with success!'});
    }

    //PUT games
    async gamesUpdate (req:Request, res:Response){
        const {id} = req.params;
        await pool.promise().query('UPDATE games set ? WHERE id = ?',[req.body , id]);
        res.json({message: 'The Game was update with success!'});
    }

    
}

export const gamesCo = new GamesController();