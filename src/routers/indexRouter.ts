import {Router} from 'express'
import { indexCo } from '../controllers/indexController';

class IndexRouter{
    public route_ruta: Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        //this.route_ruta.get('/', (req, res) => { res.send('Hola Index')});
        this.route_ruta.get('/', indexCo.GetIndex);
    }
}

const indexRouter = new IndexRouter();

export default indexRouter.route_ruta;