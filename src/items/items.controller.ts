import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto'
import { Item } from './interfaces/item.interface'
import { ItemsService } from './items.service'

@Controller('items')
export class ItemsController {
    constructor(private readonly itemsService: ItemsService){}
    @Get()
    findAll(): Item[]{
        return this.itemsService.findAll();
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
