import connect from '@/utils/db';
import { NextResponse } from 'next/server';
import User from '@/models/User';

export const GET = async (req, res) => {
  await connect();

  const existingUser = await User.find();
  return NextResponse.json({ existingUser }, { status: 202 });
};
