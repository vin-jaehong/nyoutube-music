'use client';

import useUIState from '@/hooks/useUIState';
import { homeCategoryList } from '@/lib/dummy-data';

const Category = () => {
  const { homeCategory, headerImageSrc, setHomeCategory, setHeaderImageSrc } =
    useUIState();

  const onClickCategory = (item: { label: string; src: string }) => {
    if (homeCategory === item.label) {
      setHomeCategory('');
      setHeaderImageSrc('');
    } else {
      setHomeCategory(item.label);
      setHeaderImageSrc(item.src);
    }
  };

  return (
    <ul className="max-w-full overflow-x-auto flex flex-row gap-4">
      {homeCategoryList.map((item) => {
        return (
          <li
            onClick={() => {
              onClickCategory(item);
            }}
            className={`h-[38px] min-w-fit px-3 flex justify-center items-center border border-transparent rounded-lg bg-[rgba(144,144,144,0.2)] hover:bg-[rgba(144,144,144,0.45)] cursor-pointer ${
              item.label === homeCategory &&
              'bg-white text-black hover:bg-white'
            }`}
            key={`home-category-list-item-${item.label}`}
          >
            {item.label}
          </li>
        );
      })}
    </ul>
  );
};

export default Category;
