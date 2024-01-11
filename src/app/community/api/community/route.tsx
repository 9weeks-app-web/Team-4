import { NextApiRequest, NextApiResponse } from 'next';
import { CommunityDummys, QnADummys } from '../community/(dummys)';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const { title, sortBy } = req.query;

    const dummys = title === '자유주제' ? CommunityDummys : QnADummys;
    let sortedDummys;

    if (sortBy === 'recommend') {
      sortedDummys = dummys;
    } else if (sortBy === 'latest') {
      sortedDummys = [...dummys].sort(
        (a, b) => b.createdAt.getTime() - a.createdAt.getTime(),
      );
    } else {
      sortedDummys = dummys;
    }

    res.status(200).json(sortedDummys);
  } catch (error) {
    console.error('Error in API handler:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
