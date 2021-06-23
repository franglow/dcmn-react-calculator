import React from 'react';
import { Flex, Box, Heading } from '@chakra-ui/layout';

export default function Display({ value }) {
  // https://www.w3schools.com/jsref/jsref_tolocalestring.asp
  let formattedValue = parseFloat(value).toLocaleString('en-US', {
    useGrouping: true,
    maximumFractionDigits: 2,
  });
  const match = value.match(/\.\d*?(0*)$/);
  // Appending decimals
  if (match) formattedValue += /[1-9]/.test(match[0]) ? match[1] : match[0];

  return (
    <Flex bg="#171923" height="80px" justifyContent="right">
      <Heading paddingRight="5px" color="#F7FAFC">
        {formattedValue}
      </Heading>
    </Flex>
  );
}
