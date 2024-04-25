// Complete the Index page component here
// Use chakra-ui
import { Box, Flex, Text, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, SimpleGrid, Image } from "@chakra-ui/react";
import { FaChartLine, FaDollarSign, FaShoppingCart } from "react-icons/fa";

const Index = () => {
  return (
    <Box p={5}>
      <Flex justifyContent="space-between" alignItems="center" mb={10}>
        <Text fontSize="2xl" fontWeight="bold">
          Business Dashboard
        </Text>
        <Image src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGRhc2hib2FyZHxlbnwwfHx8fDE3MTQwNzQwMTl8MA&ixlib=rb-4.0.3&q=80&w=1080" boxSize="100px" borderRadius="full" />
      </Flex>
      <SimpleGrid columns={3} spacing={10}>
        <Stat p={5} shadow="md" border="1px" borderColor="gray.200" borderRadius="md">
          <StatLabel display="flex" alignItems="center">
            <FaShoppingCart />
            <Text ml={2}>Sales</Text>
          </StatLabel>
          <StatNumber>1,897</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            23.36%
          </StatHelpText>
        </Stat>
        <Stat p={5} shadow="md" border="1px" borderColor="gray.200" borderRadius="md">
          <StatLabel display="flex" alignItems="center">
            <FaDollarSign />
            <Text ml={2}>Revenue</Text>
          </StatLabel>
          <StatNumber>$289,400</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            9.45%
          </StatHelpText>
        </Stat>
        <Stat p={5} shadow="md" border="1px" borderColor="gray.200" borderRadius="md">
          <StatLabel display="flex" alignItems="center">
            <FaChartLine />
            <Text ml={2}>Growth</Text>
          </StatLabel>
          <StatNumber>7.3%</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            4.1% since last month
          </StatHelpText>
        </Stat>
      </SimpleGrid>
    </Box>
  );
};

export default Index;
