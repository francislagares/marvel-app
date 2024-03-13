'use client';
import { MouseEventHandler, useEffect, useState } from 'react';

interface Props {
  small?: boolean;
  isFavorite: boolean;
  onClick: () => void;
}

export const HeartIcon = ({ small = false, isFavorite, onClick }: Props) => {
  const [isFilled, setIsFilled] = useState<boolean>(isFavorite);

  useEffect(() => {
    setIsFilled(isFavorite);

    localStorage.setItem('isFilled', JSON.stringify(isFilled));
  }, [isFilled, isFavorite]);

  const handleClick: MouseEventHandler<SVGSVGElement> = e => {
    e.preventDefault();

    onClick();

    setIsFilled(!isFilled);
  };

  const smallFilledHeart = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='13'
      height='12'
      fill='none'
      viewBox='0 0 13 12'
    >
      <path
        fill='#EC1D24'
        fillRule='evenodd'
        d='M6.572 2.373l-3-1.82-3 1.82v3.902l6 5.115 6-5.115V2.373l-3-1.82-3 1.82z'
        clipRule='evenodd'
      ></path>
    </svg>
  );

  const bigFilledHeart = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='22'
      fill='none'
      viewBox='0 0 24 22'
    >
      <path
        fill='#EC1D24'
        fillRule='evenodd'
        d='M12 3.803L6 .162 0 3.803v7.804l12 10.231 12-10.231V3.803L18 .162l-6 3.641z'
        clipRule='evenodd'
      ></path>
    </svg>
  );

  const smallHeartIcon = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='15'
      height='14'
      fill='none'
      viewBox='0 0 15 14'
      onClick={handleClick}
    >
      {isFilled ? (
        smallFilledHeart
      ) : (
        <path
          fill='#fff'
          d='M4.25 1.612l.519-.855L4.25.443l-.519.314.519.855zm3 1.821l-.519.855.519.315.519-.315-.519-.855zm-6 0l-.519-.855-.481.292v.563h1zm0 3.902h-1v.461l.351.3.649-.761zm6 5.115l-.649.761.649.554.649-.554-.649-.76zm6-5.115l.649.76.351-.299v-.461h-1zm0-3.902h1V2.87l-.481-.292-.519.855zm-3-1.82l.519-.856-.519-.314-.519.314.519.855zm-6.519.854l3 1.821 1.038-1.71-3-1.82-1.038 1.71zM1.77 4.288l3-1.82L3.73.757l-3 1.82 1.038 1.71zm.481 3.047V3.433h-2v3.902h2zm5.649 4.355l-6-5.116L.6 8.096l6 5.115L7.9 11.69zm0 1.521l6-5.115L12.6 6.574l-6 5.116L7.9 13.21zm6.351-5.876V3.433h-2v3.902h2zm-.481-4.757l-3-1.82-1.038 1.71 3 1.82 1.038-1.71zM9.73.758l-3 1.82 1.038 1.71 3-1.82L9.73.757z'
        ></path>
      )}
    </svg>
  );

  const bigHeartIcon = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='26'
      height='25'
      fill='none'
      viewBox='0 0 26 25'
      onClick={handleClick}
    >
      {isFilled ? (
        bigFilledHeart
      ) : (
        <path
          fill='#fff'
          d='M7 1.662l.519-.855L7 .492l-.519.315.519.855zm6 3.641l-.519.855.519.315.519-.315L13 5.303zm-12 0L.481 4.45 0 4.74v.562h1zm0 7.804H0v.462l.351.299.649-.761zm12 10.231l-.649.761.649.553.649-.553-.649-.76zm12-10.231l.649.76.351-.299v-.461h-1zm0-7.804h1v-.562l-.481-.292-.519.854zm-6-3.641l.519-.855L19 .492l-.519.315.519.855zm-12.519.855l6 3.641 1.038-1.71-6-3.641-1.038 1.71zM1.52 6.158l6-3.641L6.48.807l-6 3.642 1.038 1.71zM2 13.107V5.303H0v7.804h2zm11.649 9.47l-12-10.231L.35 13.868l12 10.231 1.298-1.522zm0 1.522l12-10.231-1.298-1.522-12 10.231L13.65 24.1zM26 13.107V5.303h-2v7.804h2zm-.481-8.658l-6-3.642-1.038 1.71 6 3.641 1.038-1.71zM18.48.807l-6 3.642 1.038 1.71 6-3.642L18.48.807z'
        ></path>
      )}
    </svg>
  );

  return small ? smallHeartIcon : bigHeartIcon;
};
