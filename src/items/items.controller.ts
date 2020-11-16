import { Controller, Get, Post, Put, Delete, Body } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto'

@Controller('items')
export class ItemsController {
    @Get()
    findAll(): string{
        return 'Get All Items';
    }

    @Post()
    create(@Body () itemType: CreateItemDto): string{
    return `Name: ${itemType.name} Description: ${itemType.description}`;       
    }
}
