
//decorator
import {Controller, Get, HttpCode, Req, Res} from "@nestjs/common";

@Controller('Usuario')
export class UsuarioController{
    usuario = {
        nombre: 'ADan',
        apellido: 'Guzman',
        edad:29
    };
    @HttpCode(202)
    @Get('mostrar')

    mostrarUsuario(
        //@Req() request,
    //@Res() response
        )
        {
        return this.usuario;
    }
    @Get('mostrarExpress')
    mostrarUsuarioExpress(
        @Req() request,
        @Res() response
    ){
        return response
            .status(500)
            .send(this.usuario);
    }

}