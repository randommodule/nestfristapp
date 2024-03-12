/* eslint-disable prettier/prettier */

import { TaskStatus } from "../task.entity";
import {IsNotEmpty, IsOptional, IsString,MinLength,IsIn} from 'class-validator'

//usa un decorador para validar datos y otro para que no vengan datos vacios
// otro para que contenga una cantidad minima de caracteres
// uno para datos opcionales
//y en el caso del Enum, los valores listados

//esta clase es solo un formato para poder ordenar la informacion que se recibe desde
//el cliente
export class CreateTaskDTO{
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  title: string;
  @IsString()
  descripcion: string;
}
export class UpdateTaskDTO{
  @IsString()
  @IsOptional()
  title?: string;
  @IsString()
  @IsOptional()
  descripcion?: string;
  @IsString()
  @IsOptional()
  @IsIn([TaskStatus.DONE,TaskStatus.IN_PROGRESS,TaskStatus.PENDING])
  status?: TaskStatus
}