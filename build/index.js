"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
    }
    //method
    configurarApp() {
        this.app.set('port', process.env.PORT || 5000); //declaras el port
    }
    routers_rutas() {
    }
    start() {
        //escuhas obteniendo el port
        this.app.listen(this.app.get('port'), () => {
            console.log('Servidor escuchando el puerto: ' + this.app.get('port'));
        });
    }
}
new Server();
