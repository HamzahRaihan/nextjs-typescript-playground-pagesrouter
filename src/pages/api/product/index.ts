import type { NextApiRequest, NextApiResponse } from 'next';
import { retrieveData } from '@/lib/firebase/service';

type Response = {
  status: number;
  result: any;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Response>) {
  const data = await retrieveData('products');
  res.status(200).json({ status: 200, result: data });
}
