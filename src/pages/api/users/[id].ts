import { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { id = '' } = req.query;

  const users = [
    { id: 1, name: 'Caue' }
  ]

  return res.json(users)
}
