"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indexController_1 = require("../controllers/indexController");
class IndexRouter {
    constructor() {
        this.route_ruta = (0, express_1.Router)();
        this.config();
    }
    config() {
        //this.route_ruta.get('/', (req, res) => { res.send('Hola Index')});
        this.route_ruta.get('/', indexController_1.indexCo.GetIndex);
    }
}
const indexRouter = new IndexRouter();
exports.default = indexRouter.route_ruta;
