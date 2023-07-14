import { IsEmail, IsNotEmpty, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  @IsNotEmpty()
  first_name: string;

  @ApiProperty()
  @IsNotEmpty()
  last_name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  password: string;

  @ApiProperty()
  @IsNotEmpty()
  company_start_date: string;

  @ApiProperty()
  @IsOptional()
  is_active: boolean;

  @ApiProperty()
  @IsNotEmpty()
  applications: any;

  @ApiProperty()
  @IsOptional()
  passwordReset: string;
}
