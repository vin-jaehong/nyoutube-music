import Image from 'next/image';
import UserIcon from '@/components/user-icon';
import PagePadding from '@/components/page-pading';
import { FaChromecast } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import Logo from './elements/Logo';
import Navigator from './elements/Navigator';

const HeaderDrawer = ({ children }: { children: React.ReactNode }) => {
  return (
    <Drawer direction="left">
      <DrawerTrigger>{children}</DrawerTrigger>
      <DrawerContent className="w-[240px] h-full">
        <div className="py-3">
          <div className="px-3">
            <Logo />
          </div>
          <Navigator />
        </div>
      </DrawerContent>
    </Drawer>
  );
};

const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <header className="relative overflow-y-auto w-full h-full">
      <section className="absolute top-0 w-full">
        <div className="relative h-[400px] w-full">
          <Image
            fill
            src="https://images.unsplash.com/photo-1707833558984-3293e794031c"
            alt="mediaItem"
            className="object-cover"
          />
          <div className="absolute top-0 bg-black opacity-40 w-full h-[400px]"></div>
          <div className="absolute top-0 bg-gradient-to-t from-black w-full h-[400px]"></div>
        </div>
      </section>
      <section className="sticky">
        <PagePadding>
          <div className="flex flex-row justify-between items-center h-[64px]">
            <article className="hidden lg:flex flex-row items-center h-[42px] min-w-[480px] bg-[rgba(0,0,0,0.14)] rounded-2xl gap-[16px] px-[16px]">
              <div>
                <FiSearch size={24} />
              </div>
              <input
                className="h-full w-full bg-transparent outline-none"
                placeholder="노래, 앨범, 아티스트, 팟캐스트 검색"
                type="text"
              />
            </article>
            <HeaderDrawer>
              <article className="lg:hidden">
                <Logo />
              </article>
            </HeaderDrawer>
            <article className="flex flex-row gap-6 items-center">
              <FaChromecast size={26} />
              <UserIcon />
            </article>
          </div>
        </PagePadding>
      </section>
      <section className="relative">{children}</section>
    </header>
  );
};

export default Header;
