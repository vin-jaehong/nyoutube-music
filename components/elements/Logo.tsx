'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import IconButton from './icon-button';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoCloseOutline } from 'react-icons/io5';

const Logo = ({ isInDrawer = false, onClickClose = () => {} }) => {
  const { push } = useRouter();

  const onClickLogo = () => {
    push('/');
  };

  const onClickMenu = () => {};

  return (
    <section className="flex flex-row items-center gap-3">
      {isInDrawer ? (
        <IconButton
          onClickIcon={onClickClose}
          icon={<IoCloseOutline size={30} />}
        />
      ) : (
        <IconButton
          onClickIcon={onClickMenu}
          icon={<RxHamburgerMenu size={24} />}
        />
      )}

      <div className="cursor-pointer" onClick={onClickLogo}>
        <Image width={100} height={30} alt="logo" src="/main-logo.svg" />
      </div>
    </section>
  );
};

export default Logo;
