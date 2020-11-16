import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface'

@Injectable()
export class ItemsService {
    private readonly items: Item[] = [
        {
            id: "23423423423",
            name: "Item One",
            description: "This is item one",
            qty: 100,
        },
        {
            id: "423423",
            name: "Item Two",
            description: "This is item two",
            qty: 200,
        },        
    ]

    findAll(): Item[]{
        return this.items;
    }
}
