import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { unstable_getServerSession } from 'next-auth';

import { images } from '../constants';

import SignOutButton from './ui/SignOutButton';

const Header = async () => {
  const session = await unstable_getServerSession();

  if (session) {
    return (
      <header className="sticky top-0 z-50 bg-white flex justify-between items-center p-10 shadow-sm">
        <div className="flex space-x-2 ">
          <Image
            className="rounded-full mx-2 object-contain"
            height={10}
            width={50}
            src={session.user?.image!}
            alt="Avatar"
          />
        </div>
        <div>
          <p className="text-blue-400">Logged in as:</p>
          <p className="font-bold text-lg">{session.user?.name}</p>
        </div>
        <SignOutButton>Sign Out</SignOutButton>
      </header>
    );
  }
  return (
    <header className="sticky top-0 z-50 bg-white flex justify-center items-center p-10 shadow-sm">
      <div className="flex flex-col items-center space-y-5">
        <div className="flex space-x-2 items-center">
          <Image src={images.metaLogo} alt="Logo" height={10} width={50} />
          <p className="text-blue-400">Welcome to Meta Messenger</p>
        </div>
        <Link
          href="/auth/signin"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Sign In
        </Link>
      </div>
    </header>
  );
};

export default Header;
