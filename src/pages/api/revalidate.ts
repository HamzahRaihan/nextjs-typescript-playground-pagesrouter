// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  revalidated: boolean;
  message?: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.query.token !== process.env.REVALIDATE_TOKEN) {
    return res.status(500).send({ revalidated: false, message: 'Incorrect Authorization' });
  }
  if (req.query.data === 'product') {
    try {
      await res.revalidate('/product/static');
      res.status(200).json({ revalidated: true });
    } catch (error) {
      return res.status(500).send({ revalidated: false });
    }
  }
  return res.status(500).send({ revalidated: false, message: 'no query found.' });
}
