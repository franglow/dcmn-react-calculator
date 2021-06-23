import React from 'react';
import { Center } from '@chakra-ui/layout';

export default function Keys({ clickHandler, ...rest }) {
  const bgToggler = rest.children === '=' ? '#B2F5EA' : '#38B2AC';
  const heightToggler = rest.children === '=' ? '160px' : '80px';

  return (
    <Center
      as="button"
      fontSize="30px"
      color="#2D3748"
      background={bgToggler}
      height={heightToggler}
      data-key={rest.children}
      onClick={clickHandler}
      {...rest}
    />
  );
}
