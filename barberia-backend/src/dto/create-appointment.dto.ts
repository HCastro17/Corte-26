import { IsNotEmpty, IsInt, IsString, IsBoolean, IsOptional, Matches } from 'class-validator';

export class CreateAppointmentDto {
  @IsInt()
  @IsNotEmpty()
  clientId!: number;

  @IsInt()
  @IsNotEmpty()
  barberId!: number;

  @IsInt()
  @IsNotEmpty()
  serviceId!: number;

  @IsString()
  @Matches(/^\d{4}-\d{2}-\d{2}$/, { message: 'date must be YYYY-MM-DD' })
  date!: string; // ej: "2026-09-15"

  @IsString()
  @Matches(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, { message: 'time must be HH:mm' })
  time!: string; // ej: "11:00"

  @IsBoolean()
  @IsOptional()
  paidWithPoints?: boolean;
}