import { IsString, IsNumber } from 'class-validator';
import {CreateMovieDto} from "./create-movie.dto";
import { PartialType } from '@nestjs/mapped-types';

// export class CreateMovieDto {
//     @IsString()
//     readonly title?: string;
//
//     @IsNumber()
//     readonly year?: number;
//
//     @IsString({ each: true })
//     readonly genres?: string[];
// }

export class UpdateMovieDto extends PartialType(CreateMovieDto) {

}