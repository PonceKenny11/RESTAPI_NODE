import express , { Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';

import indexRouter from './routers/indexRouter';
import gamesRouter from './routers/gameRouter';

class Server{


    app: Application;
    constructor(){
        this.app = express();
        this.configurarApp();
        this.routers_rutas();
    }

    //method
    configurarApp():void{
        this.app.set('port', process.env.PORT || 5000); //declaras el port
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());// permite las solicitudes en un cuerpo en formato json/ manejar datos entrantes Request.body
        this.app.use(express.urlencoded({ extended:false }));// es un middleware para analizar datos codificafos en la URL o en el cuerpo de la solicitud
        //Los middlewares en Express se utilizan mediante la funcion USE para aplicarlo en todas las solicitudes que llegan a la aplicacion
    }

    routers_rutas():void{
        this.app.use(indexRouter);
        this.app.use('/api/game',gamesRouter);
    }

    start():void{
            //escuhas obteniendo el port
            this.app.listen(this.app.get('port'), ()=>{
                console.log('Servidor escuchando el puerto: '+this.app.get('port'))
            }   
            ); 
    }
}

const serve = new Server();
serve.start();