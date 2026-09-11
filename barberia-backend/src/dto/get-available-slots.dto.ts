import { IsNotEmpty, IsInt, IsString, Matches } from 'class-validator';
import { Type } from 'class-transformer';

export class GetAvailableSlotsDto {
  @Type(() => Number)
  @IsInt()
  @IsNotEmpty()
  barberId!: number;

  @Type(() => Number)
  @IsInt()
  @IsNotEmpty()
  serviceId!: number;

  @IsString()
  @Matches(/^\d{4}-\d{2}-\d{2}$/, { message: 'date must be YYYY-MM-DD' })
  date!: string; // ej: "2026-09-15"
}