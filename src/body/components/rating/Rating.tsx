import { Star } from '../star/Star.tsx';
import { useState } from 'react';

export const Rating = () => {
  const [selectionRating, setSrlrctedRating] = useState(0);
  // console.log("RanderReiteng")
  const onClickStar = (starIndex: number) => {
    setSrlrctedRating(starIndex);
    console.log('Я звезда номер ', starIndex);
  };

  const getStateIsActive = (index: number, rating: number) => {
    if (rating >= index) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div>
      <Star index={1} onClick={onClickStar} isActive={getStateIsActive(1, selectionRating)} />
      <Star index={2} onClick={onClickStar} isActive={getStateIsActive(2, selectionRating)} />
      <Star index={3} onClick={onClickStar} isActive={getStateIsActive(3, selectionRating)} />
      <Star index={4} onClick={onClickStar} isActive={getStateIsActive(4, selectionRating)} />
      <Star index={5} onClick={onClickStar} isActive={getStateIsActive(5, selectionRating)} />
    </div>
  );
};
