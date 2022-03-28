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
  Tr,
  Th,
  Tbody,
  Td,
} from '../../components/base';
import { AppBar } from '../../components/mocks';

function StatusExample() {
  return (
    <Table>
      <Thead>
        <Th width="20%">Status</Th>
        <Th>Example</Th>
      </Thead>
      <Tbody>
        <Tr>
          <Td>Info (default)</Td>
          <Td>
            <Alert>This is an alert</Alert>
          </Td>
        </Tr>
        <Tr>
          <Td>Success</Td>
          <Td>
            <Alert status="success">This is an alert</Alert>
          </Td>
        </Tr>
        <Tr>
          <Td>Error</Td>
          <Td>
            <Alert status="error">This is an alert</Alert>
          </Td>
        </Tr>
        <Tr>
          <Td>Warning</Td>
          <Td>
            <Alert status="warning">This is an alert</Alert>
          </Td>
        </Tr>
      </Tbody>
    </Table>
  );
}

const TitleExample = () => {
  return (
    <Table>
      <Thead>
        <Th width="20%">Configuration</Th>
        <Th>Example</Th>
      </Thead>
      <Tbody>
        <Tr>
          <Td>Title</Td>
          <Td>
            <Alert title="Title">This is an alert</Alert>
          </Td>
        </Tr>
        <Tr>
          <Td>No title</Td>
          <Td>
            <Alert>This is an alert</Alert>
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
      <PageHeader title="Alert" />
      <Container>
        <Card size="none">
          <CardBody size="lg">
            <VStack>
              <Heading>Status</Heading>
              <Spacer>
                <StatusExample />
              </Spacer>
            </VStack>
          </CardBody>
          <CardBody size="lg">
            <VStack>
              <Heading>Title</Heading>
              <Spacer>
                <TitleExample />
              </Spacer>
            </VStack>
          </CardBody>
        </Card>
      </Container>
    </>
  );
}
