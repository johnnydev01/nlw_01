import knex from '../database/connection';
import { Request, Response } from 'express';

class ItemsController {
    async index(request: Request, response: Response) {
    try {
        const items = await  knex('items').select('*');
        const serializedItems = items.map(item => {
            return {
                id: item.id,
                title:item.name,
                image_url: `https://localhost:3333/uploads/${item.image}`
            };
        })
        return response.json(serializedItems); 
        
    } catch (error) {
        console.log(error)
    }
        
   
    
}
}

export default  ItemsController;