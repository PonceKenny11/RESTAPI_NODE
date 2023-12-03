import {Router} from 'express'

class GameRouter{
    public route_ruta: Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.route_ruta.get('/', (req, res) => { res.send('Hola Game')});
    }
}

const gamesRouter = new GameRouter();

export default gamesRouter.route_ruta;