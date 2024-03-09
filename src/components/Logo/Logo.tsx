import Image from 'next/image';
import Link from 'next/link';

export const Logo = () => {
  return (
    <Link href='/'>
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
