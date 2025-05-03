import type { NextApiRequest, NextApiResponse } from 'next';

// Mock data for users
const sensor_data = [
  { id: 1, sensor: 'DS20L', distance: '20cm' },
];

// API route handler
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      // Handle GET request to fetch all users
      return res.status(200).json(sensor_data);

 /*   case 'POST':
      // Handle POST request to create a new user
      const newUser = {
        id: users.length + 1,
        name: req.body.name,
        email: req.body.email,
      };
      users.push(newUser);
      return res.status(201).json(newUser);
*/
    default:
      // Handle any other HTTP methods
      return res.status(405).json({ message: 'Method Not Allowed' });
  }
}
