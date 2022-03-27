import React from 'react';
import { useRadioGroup } from '@chakra-ui/react';
import {
  Body,
  BodyLarge,
  Button,
  Caption,
  Container,
  Card,
  Grid,
  GridItem,
  CardBody,
  Divider,
  FormControl,
  FormLabel,
  Subheading,
  HStack,
  RadioCard,
  Select,
  Spacer,
  TextInput,
  VStack,
} from '../components/base';

function RadioCardExample() {
  const options = ['Option 1', 'Option 2'];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'framework',
    defaultValue: 'react',
    onChange: console.log,
  });

  const group = getRootProps();

  return (
    <VStack {...group} spacing={2}>
      {options.map((value) => {
        const radio = getRadioProps({ value });
        return (
          <RadioCard size="lg" key={value} {...radio}>
            <Body>{value}</Body>
          </RadioCard>
        );
      })}
    </VStack>
  );
}

export default function Page() {
  return (
    <Container>
      <Grid templateColumns="1fr 300px" gap={8}>
        <GridItem>
          <VStack spacing={8}>
            <VStack>
              <Subheading>Section</Subheading>
              <RadioCardExample />
            </VStack>

            <VStack>
              <Subheading>Another section</Subheading>
              <Card size="lg">
                <VStack>
                  <FormControl>
                    <FormLabel htmlFor="email">Email address</FormLabel>
                    <TextInput id="email" type="email" />
                  </FormControl>
                  <FormControl>
                    <FormLabel htmlFor="options">Select</FormLabel>
                    <Select id="options" placeholder="Select option">
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </Select>
                  </FormControl>
                </VStack>
              </Card>
            </VStack>
          </VStack>
        </GridItem>
        <GridItem>
          <VStack>
            <Subheading>Another section</Subheading>

            <Card size="none">
              <CardBody>
                <VStack>
                  <HStack alignItems="flex-start">
                    <VStack spacing={0}>
                      <Body>Some value</Body>
                      <Caption variant="secondary">Some helper text</Caption>
                    </VStack>
                    <Body>$100.00</Body>
                  </HStack>
                  <Divider />
                  <HStack>
                    <BodyLarge fontWeight="bold">Total due today</BodyLarge>
                    <BodyLarge fontWeight="bold">$100.00</BodyLarge>
                  </HStack>
                </VStack>
              </CardBody>
              <Divider />
              <CardBody>
                <VStack>
                  <VStack spacing={2}>
                    <Caption variant="secondary">Some helper text</Caption>
                    <Caption variant="secondary">Some helper text</Caption>
                  </VStack>
                  <Button colorScheme="brand">Pay now</Button>
                </VStack>
              </CardBody>
            </Card>
          </VStack>
        </GridItem>
      </Grid>
    </Container>
  );
}
