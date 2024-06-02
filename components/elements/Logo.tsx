'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import IconButton from './icon-button';
import { RxHamburgerMenu } from 'react-icons/rx';

const Logo = () => {
  const { push } = useRouter();

  const onClickLogo = () => {
    push('/');
  };

  const onClickMenu = () => {};

  return (
    <section className="flex flex-row items-center gap-3">
      <IconButton
        onClickIcon={onClickMenu}
        icon={<RxHamburgerMenu size={24} />}
      />
      <div className="cursor-pointer" onClick={onClickLogo}>
        <Image width={100} height={30} alt="logo" src="/main-logo.svg" />
      </div>
    </section>
  );
};

export default Logo;
