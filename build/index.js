"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexRouter_1 = __importDefault(require("./routers/indexRouter"));
const gameRouter_1 = __importDefault(require("./routers/gameRouter"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.configurarApp();
        this.routers_rutas();
    }
    //method
    configurarApp() {
        this.app.set('port', process.env.PORT || 5000); //declaras el port
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json()); // permite las solicitudes en un cuerpo en formato json/ manejar datos entrantes Request.body
        this.app.use(express_1.default.urlencoded({ extended: false })); // es un middleware para analizar datos codificafos en la URL o en el cuerpo de la solicitud
        //Los middlewares en Express se utilizan mediante la funcion USE para aplicarlo en todas las solicitudes que llegan a la aplicacion
    }
    routers_rutas() {
        this.app.use(indexRouter_1.default);
        this.app.use('/api/game', gameRouter_1.default);
    }
    start() {
        //escuhas obteniendo el port
        this.app.listen(this.app.get('port'), () => {
            console.log('Servidor escuchando el puerto: ' + this.app.get('port'));
        });
    }
}
const serve = new Server();
serve.start();
