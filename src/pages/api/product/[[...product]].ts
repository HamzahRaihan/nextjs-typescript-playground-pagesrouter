import type { NextApiRequest, NextApiResponse } from 'next';
import { retrieveData, retrieveDataByID } from '@/lib/firebase/service';

type Response = {
  status: number;
  result: any;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Response>) {
  if (req.query.product?.[1]) {
    const data = await retrieveDataByID('products', req.query.product[1]);
    res.status(200).json({ status: 200, result: data });
  } else {
    const data = await retrieveData('products');
    res.status(200).json({ status: 200, result: data });
  }
}
