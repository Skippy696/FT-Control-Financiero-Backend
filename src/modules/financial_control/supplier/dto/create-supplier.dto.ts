import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class CreateSupplierDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  supplier_name: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  created_at: Date;

  @ApiProperty()
  @IsOptional()
  @IsString()
  updated_at: Date;
}
