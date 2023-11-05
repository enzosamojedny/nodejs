import { Router } from "express";
const router = Router()
import { Request, Response } from 'express';
import {Products,ProductId,AddProduct,UpdateProduct,DeleteProduct,PostCart,GetCartId,PostCartProduct} from '../../index';



router.get('/', (req: Request, res: Response) => {
    res.send('Welcome to my e-commerce!');
  });
  router.post('/api/:cartid/product/:productid',PostCartProduct)
  router.get('/products',Products)
  router.get('/products/:id',ProductId)
  router.post('/products',AddProduct)
  router.put('/products/:id',UpdateProduct)
  router.delete('/products/:id',DeleteProduct)
  //cart
  router.post('/api/carts',PostCart)
  router.get('/api/carts/:id',GetCartId)

  
export default router