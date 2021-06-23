import React from 'react';
import PointTarget from 'react-point';
import { Center } from '@chakra-ui/layout';

export default function Keys({ clickHandler, ...rest }) {
  const bgToggler = rest.children === '=' ? '#B2F5EA' : '#38B2AC';
  const heightToggler = rest.children === '=' ? '160px' : '80px';

  return (
    // Wrapper to handle click or taps events.
    <PointTarget onPoint={clickHandler}>
      <Center
        as="button"
        fontSize="30px"
        color="#2D3748"
        background={bgToggler}
        height={heightToggler}
        data-key={rest.children}
        {...rest}
      />
    </PointTarget>
  );
}
