// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { signUp } from '@/lib/firebase/service';
import type { NextApiRequest, NextApiResponse } from 'next';

type StatusProps = {
  status: string;
  message: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<StatusProps>) {
  const data = req.body;
  if (req.method === 'POST') {
    await signUp(data, ({ status, message }: StatusProps) => {
      if (status == 'succeed') {
        res.status(200).json({ status, message });
      } else {
        res.status(400).json({ status, message });
      }
    });
  } else {
    res.status(405).json({ status: 'failed', message: 'method not allowed' });
  }
}
