import Head from 'next/head';
import {
  Alert,
  Card,
  CardBody,
  HStack,
  Heading,
  Body,
  Container,
  PageHeader,
  Spacer,
  VStack,
  Table,
  Thead,
  Switch,
  Tr,
  Th,
  Tbody,
  Td,
} from '../../components/base';
import { AppBar } from '../../components/mocks';

function BasicExample() {
  return (
    <Table>
      <Thead>
        <Th width="25%">Default (brand)</Th>
        <Th width="25%">green</Th>
        <Th width="25%">red</Th>
        <Th width="25%">yellow</Th>
      </Thead>
      <Tbody>
        <Tr>
          <Td>
            <Switch defaultChecked />
          </Td>
          <Td>
            <Switch colorScheme="green" defaultChecked />
          </Td>
          <Td>
            <Switch colorScheme="red" defaultChecked />
          </Td>
          <Td>
            <Switch colorScheme="yellow" defaultChecked />
          </Td>
        </Tr>
      </Tbody>
    </Table>
  );
}

const SizeExample = () => {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>sm</Th>
          <Th>md</Th>
          <Th>lg</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>
            <Switch size="sm" defaultChecked />
          </Td>
          <Td>
            <Switch size="md" defaultChecked />
          </Td>
          <Td>
            <Switch size="lg" defaultChecked />
          </Td>
        </Tr>
      </Tbody>
    </Table>
  );
};

export default function Page() {
  return (
    <>
      <AppBar />
      <PageHeader title="Switch" />
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
          <CardBody size="lg">
            <VStack>
              <Heading>Sizes</Heading>
              <Spacer>
                <SizeExample />
              </Spacer>
            </VStack>
          </CardBody>
        </Card>
      </Container>
    </>
  );
}
