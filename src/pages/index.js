import * as React from 'react';
import { Box, Heading, Container } from '@chakra-ui/layout';
import Calculator from '../components/Calculator';

const IndexPage = () => (
  <Box p={[2, 4, 8]} maxW="600px" m="0 auto">
    <Container maxW="3xl">
      <Heading
        fontWeight={600}
        fontSize={{ base: '1xl', sm: '3xl', md: '5xl' }}
      >
        <Calculator />
      </Heading>
    </Container>
  </Box>
);

export default IndexPage;
