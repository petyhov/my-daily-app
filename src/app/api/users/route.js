import { NextResponse } from 'next/server';

import connect from '@/utils/db';
import User from '@/models/User';

export const GET = async () => {
  await connect();

  const existingUser = await User.find();
  return NextResponse.json({ existingUser }, { status: 202 });
};
