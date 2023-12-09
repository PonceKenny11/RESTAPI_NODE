"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const gameController_1 = require("../controllers/gameController"); //import un class declarado con una varible
class GameRouter {
    constructor() {
        this.route_ruta = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.route_ruta.get('/', gameController_1.gamesCo.getListGames);
        this.route_ruta.get('/:id', gameController_1.gamesCo.getOnetGame);
        this.route_ruta.post('/', gameController_1.gamesCo.gamesCreate);
        this.route_ruta.delete('/:id', gameController_1.gamesCo.gamesDelete);
        this.route_ruta.put('/:id', gameController_1.gamesCo.gamesUpdate);
    }
}
const gamesRouter = new GameRouter();
exports.default = gamesRouter.route_ruta;
