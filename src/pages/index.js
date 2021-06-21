import * as React from 'react';
import { Box, Heading, Container } from '@chakra-ui/layout';

const IndexPage = () => (
  <Box p={[2, 4, 8]} maxW="1280px" m="0 auto">
    <Container maxW="3xl">
      <Heading
        fontWeight={600}
        fontSize={{ base: '1xl', sm: '3xl', md: '5xl' }}
        lineHeight="110%"
      >
        Happy Calculator
      </Heading>
    </Container>
  </Box>
);

export default IndexPage;
