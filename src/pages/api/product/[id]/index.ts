import { retrieveData } from '@/lib/firebase/service';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function GET(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { id } = req.query;
    const data = await retrieveData('products');
    const getById = data.find((item) => item.id === id);

    if (getById) {
      res.status(200).json({ status: 200, result: getById });
    }
    res.status(404).json({ message: 'Data not found' });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}
