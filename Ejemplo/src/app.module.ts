import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import {UsuarioController} from "./Usuario.Controller";

@Module({
  imports: [], //otros modulos
  controllers: [//Controladores
      AppController,
      UsuarioController
  ],
  components: [],
})
export class AppModule {}
