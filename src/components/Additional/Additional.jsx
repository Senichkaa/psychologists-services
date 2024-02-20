import React from 'react';
import icons from '../../assets/icons.svg';
import {
  CustomerComment,
  CustomerInfo,
  CustomerName,
  CustomerRate,
  FeedbackImage,
  MarkWrapper,
  StarWrapper,
} from './Additional.styled';

const Additional = ({ review, index }) => {
  const avatarImageLetter = review.reviewer.charAt(0).toUpperCase();
  return (
    <>
      <li key={index}>
        <CustomerInfo>
          <FeedbackImage>{avatarImageLetter}</FeedbackImage>
          <MarkWrapper>
            <CustomerName>{review.reviewer}</CustomerName>
            <StarWrapper>
              <svg width={17} height={13}>
                <use href={`${icons}#icon-star`} />
              </svg>
              <CustomerRate>{review.rating}</CustomerRate>
            </StarWrapper>
          </MarkWrapper>
        </CustomerInfo>
        <CustomerComment>{review.comment}</CustomerComment>
      </li>
    </>
  );
};

export default Additional;
