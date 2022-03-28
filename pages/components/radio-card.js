import Head from 'next/head';
import {
  Card,
  CardBody,
  HStack,
  Heading,
  RadioCard,
  Body,
  Container,
  PageHeader,
  Text,
  Spacer,
  VStack,
  useRadioGroup,
} from '../../components/base';
import { AppBar } from '../../components/mocks';

function BasicExample() {
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
    <>
      <AppBar />
      <PageHeader title="RadioCard" />
      <Container>
        <Card size="none">
          <CardBody size="lg">
            <VStack>
              <Heading>Basic</Heading>
              <Spacer>
                <BasicExample />
              </Spacer>
            </VStack>
          </CardBody>
        </Card>
      </Container>
    </>
  );
}
