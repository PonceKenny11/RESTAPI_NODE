"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gamesCo = exports.GamesController = void 0;
const database_1 = __importDefault(require("../db/database"));
class GamesController {
    constructor() {
    }
    index(req, res) {
        database_1.default.query('DESCRIBE games');
        res.json("Conectado a la base de datos");
    }
    //POST games
    gamesCreate(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.promise().query('INSERT INTO games set ?', [req.body]);
            res.json({ message: 'Games Saved Success!' });
        });
    }
    //GET games
    getListGames(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const listGame = yield database_1.default.promise().query('SELECT * FROM games');
            res.json(listGame[0]);
            return listGame;
        });
    }
    getOnetGame(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const game = yield database_1.default.promise().query('SELECT * FROM games WHERE id = ?', [id]);
            if (game.length > 0) {
                return res.json(game[0]);
            }
            return res.status(404).json({ message: 'The game does not exist!' });
            //res.json({message: 'Dato Game Obtenido!'});
        });
    }
    //DELETE games
    gamesDelete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.promise().query('DELETE FROM games WHERE id = ?', [id]);
            res.json({ message: 'The Game was deleted with success!' });
        });
    }
    //PUT games
    gamesUpdate(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.promise().query('UPDATE games set ? WHERE id = ?', [req.body, id]);
            res.json({ message: 'The Game was update with success!' });
        });
    }
}
exports.GamesController = GamesController;
exports.gamesCo = new GamesController();
