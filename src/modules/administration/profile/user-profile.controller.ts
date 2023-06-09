import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { UserProfileService } from './user-profile.service';
import { CreateProfileDto } from './create-profile.dto';
import { ApiParam, ApiResponse, ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
@ApiTags('User Profile')
@ApiBearerAuth()
@Controller('user-profile')
export class UserProfileController {
  constructor(private readonly userProfileService: UserProfileService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  create(@Body() createUserProfileDto: CreateProfileDto) {
    return this.userProfileService.create(createUserProfileDto);
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  @ApiResponse({
    status: 200,
    description: 'The record has been found.',
  })
  findAll() {
    return this.userProfileService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiParam({
    name: 'id',
    type: 'number',
    required: true,
    description: 'The id of the user profile to retrieve',
  })
  @ApiResponse({ status: 200, description: 'The record has been found.' })
  findOne(@Param('id') id: string) {
    return this.userProfileService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiParam({
    name: 'id',
    type: 'number',
    required: true,
    description: 'The id of the user profile to update',
  })
  @ApiResponse({
    status: 200,
    description: 'The record has been successfully updated.',
  })
  update(
    @Param('id') id: string,
    @Body() updateUserProfileDto: CreateProfileDto,
  ) {
    return this.userProfileService.update(+id, updateUserProfileDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiParam({
    name: 'id',
    type: 'number',
    required: true,
    description: 'The id of the user profile to delete',
  })
  @ApiResponse({
    status: 200,
    description: 'The record has been successfully deleted.',
  })
  remove(@Param('id') id: string) {
    return this.userProfileService.remove(+id);
  }
}
