import { NextResponse } from 'next/server';

import { connectToDB } from 'utils';
import { User } from 'models';

export const GET = async () => {
  await connectToDB();
  const existingUsers = await User.find();

  return NextResponse.json({ existingUsers });
};
