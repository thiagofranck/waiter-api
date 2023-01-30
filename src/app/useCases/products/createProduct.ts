import { Request, Response } from 'express';

import { Product } from '../../models/Product';

export async function createProduct(req: Request, res: Response) {
  try {
    const { icon, name } = req.body;

    if (!name) {
      return res.status(400).json({
        error: 'Name is required',
      });
    }


    const products = await Product.create({icon, name });

    res.json(products);

  }  catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
