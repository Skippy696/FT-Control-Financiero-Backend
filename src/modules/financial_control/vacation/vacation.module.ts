import { Module } from '@nestjs/common';
import { VacationService } from './vacation.service';
import { VacationController } from './vacation.controller';
import { Vacation } from './vacation.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from '../employee/entities/employee.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Vacation, Employee])],
  controllers: [VacationController],
  providers: [VacationService],
})
export class VacationModule {}
