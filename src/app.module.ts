import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movie.module'
import { AppController } from './app.controller';

@Module({
  imports: [MoviesModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
