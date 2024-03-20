'use client';
import Image from 'next/image';
import Link from 'next/link';
import { redirect, usePathname, useRouter } from 'next/navigation';

export const Logo = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Link
      href='/'
      onClick={() =>
        pathname === '/search' || pathname.startsWith('/characters/')
          ? redirect('/')
          : router.push('/')
      }
    >
      <Image
        src='/assets/marvel-logo.svg'
        alt='Marvel Logo'
        width={130}
        height={52}
        priority={true}
      />
    </Link>
  );
};
