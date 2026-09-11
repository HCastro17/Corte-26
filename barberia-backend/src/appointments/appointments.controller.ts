import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { AppointmentsService } from './appointments.service';
import { CreateAppointmentDto } from '../dto/create-appointment.dto';
import { GetAvailableSlotsDto } from '../dto/get-available-slots.dto';
import { AppointmentStatus } from '@prisma/client';

@Controller('appointments')
export class AppointmentsController {
  constructor(private readonly appointmentsService: AppointmentsService) {}

  @Get('available')
  getAvailableSlots(@Query() query: GetAvailableSlotsDto) {
    return this.appointmentsService.getAvailableSlots(
      query.barberId,
      query.serviceId,
      query.date,
    );
  }

  @Post()
  create(@Body() createAppointmentDto: CreateAppointmentDto) {
    return this.appointmentsService.create(createAppointmentDto);
  }

  @Patch(':id/status')
  updateStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body('status') status: AppointmentStatus,
  ) {
    return this.appointmentsService.updateStatus(id, status);
  }

  @Patch(':id/cancel')
  cancel(@Param('id', ParseIntPipe) id: number) {
    return this.appointmentsService.cancelByClient(id);
  }
}