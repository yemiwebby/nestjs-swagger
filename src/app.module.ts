import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosModule } from './todos/todos.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest'),
    TodosModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
