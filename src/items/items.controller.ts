import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto'

@Controller('items')
export class ItemsController {
    @Get()
    findAll(): string{
        return 'Get All Items';
    }

    @Post()
    create(@Body () createDto: CreateItemDto): string{
    return `Name: ${createDto.name} Description: ${createDto.description}`;       
    }

    @Delete(':id')
    delete(@Param('id') id): string{
        return `Delete ${id}`
    }
}
