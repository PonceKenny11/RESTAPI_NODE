import {Router} from 'express'

class IndexRouter{
    public route_ruta: Router = Router();

    constructor(){
        this.config();
    }

    config():void{
        this.route_ruta.get('/', (req, res) => { res.send('Hola Index')});
    }
}

const indexRouter = new IndexRouter();

export default indexRouter.route_ruta;