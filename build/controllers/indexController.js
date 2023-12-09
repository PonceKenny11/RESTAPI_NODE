"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexCo = void 0;
class indexController {
    GetIndex(req, res) {
        res.send("Bienvenido la ruta de Games es /api/game");
    }
}
exports.indexCo = new indexController();
