"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("@nestjs/common");
var fs = require("fs");
var AppController = /** @class */ (function () {
    function AppController() {
    }
    AppController.prototype.root = function (request, response) {
        console.log('1 Inicio');
        var contenidoHtml = '';
        console.log('2 contenidoHtml', contenidoHtml);
        fs.readFile(__dirname + '/html/Index.html', 'utf8', function (error, contenidoDelArchivo) {
            console.log('3 Respondio');
            var nombre = 'Adrian';
            if (error) {
                console.log('4 Error', error);
                console.log('5 contenidoHtml', contenidoHtml);
                console.log('6 Termino');
                return response.send('Error');
            }
            else {
                contenidoHtml = contenidoDelArchivo;
                contenidoHtml = contenidoHtml.replace('{{nombre}}', nombre);
                console.log('4 contenidoHtml', contenidoHtml);
                console.log('5 contenidoHtml', contenidoHtml);
                console.log('6 Termino');
                return response.send(contenidoHtml);
            }
        });
    };
    __decorate([
        common_1.Get(),
        __param(0, common_1.Req()), __param(1, common_1.Res())
    ], AppController.prototype, "root", null);
    AppController = __decorate([
        common_1.Controller() // decorators
    ], AppController);
    return AppController;
}());
exports.AppController = AppController;
