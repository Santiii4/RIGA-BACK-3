import { Request, Response } from 'express';
import {Products} from "../entities/Products"
import { AppDataSource } from '../db';

export const createProducts = async (req: Request, res: Response) => {
    
    const { firstname, Price, img } = req.body;

    try {

        const prod = new Products(firstname,Price,img);

        await AppDataSource.manager.save(prod);

        return res.json(prod);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(400).json({ message: error.message });
        }
    }



}

export const getProducts = async (req: Request, res: Response) => {

    try {
        const repo = AppDataSource.manager.getRepository(Products)
        const prod = await repo.find();
        return res.json(prod);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(400).json({ message: error.message });
        }
    }
}

export const updateProducts = async (req: Request, res: Response) => {

    try {
        const { id } = req.params;
        
        const repo = AppDataSource.manager.getRepository(Products)
        const prod = await repo.findOneBy({ id: parseInt(req.params.id) });

        if (!prod) return res.status(404).json({ message: 'prod does not exist' });

        await repo.update({ id: parseInt(id) }, req.body);

        return res.sendStatus(204);

    } catch (error) {
        if (error instanceof Error) {
            return res.status(400).json({ message: error.message });
        }
    }
}



export const deleteProducts = async (req: Request, res: Response) => {

    try {
        const { id } = req.params;

        const repo = AppDataSource.manager.getRepository(Products)
        const result = await repo.delete({ id: parseInt(id) });

        if (result.affected === 0) {
            return res.status(400).json({ message: 'User not found' });
        }

        return res.status(204);

    } catch (error) {
        if (error instanceof Error) {
            return res.status(400).json({ message: error.message });
        }
    }

}

export const getProduct = async (req: Request, res: Response) => {

    try {
        const { id } = req.params;

        const repo = AppDataSource.manager.getRepository(Products)
        const prod = await repo.findOneBy({ id: parseInt(id) });

        return res.json(prod);

    } catch (error) {
        if (error instanceof Error) {
            return res.status(400).json({ message: error.message });
        }

    }

}
