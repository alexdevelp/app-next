import { NextApiRequest, NextApiResponse } from 'next';

export default (request: NextApiRequest, response: NextApiResponse) => {
  const courses = [
    { id: 1, name: 'Next.Js com TypeScript' },
    { id: 2, name: 'Javascript com TypeScript' },
    { id: 3, name: 'Node.Js com TypeScript' },
    { id: 4, name: 'Api REST com TypeScript' },
    { id: 5, name: 'Dashboard com TypeScript' },
  ];

  return response.json(courses);
};
