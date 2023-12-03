import express , { Application} from 'express';
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