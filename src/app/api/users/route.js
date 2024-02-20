import { NextResponse } from 'next/server';

import connect from '@/utils/db';
import User from '@/models/User';

export const GET = async () => {
  await connect();
  const existingUsers = await User.find();

  return NextResponse.json({ existingUsers });
};
