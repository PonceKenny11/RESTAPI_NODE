import express , { Application} from 'express';


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