import {Router} from 'express';
import { gamesCo } from '../controllers/gameController'; //import un class declarado con una varible


class GameRouter{
    public route_ruta: Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.route_ruta.get('/', gamesCo.getListGames);
        this.route_ruta.get('/:id', gamesCo.getOnetGame);
        this.route_ruta.post('/', gamesCo.gamesCreate);
        this.route_ruta.delete('/:id', gamesCo.gamesDelete);
        this.route_ruta.put('/:id', gamesCo.gamesUpdate);

    }
}

const gamesRouter = new GameRouter();

export default gamesRouter.route_ruta;