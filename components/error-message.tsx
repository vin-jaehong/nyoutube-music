'use client';

import { GridLoader } from 'react-spinners';

// error message component
const ErrorMessage = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 my-20">
      <GridLoader color="red" />
      <div className="text-[50px]">Oops!</div>
      <div>잠시 후 다시 확인해주세요...</div>
    </div>
  );
};

export default ErrorMessage;
