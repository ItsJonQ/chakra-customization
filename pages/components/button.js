import Head from 'next/head';
import {
  Card,
  CardBody,
  HStack,
  Button,
  ButtonGroup,
  Heading,
  Divider,
  Container,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  PageHeader,
  Icon,
  Spacer,
  Text,
  VStack,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from '../../components/base';
import { AppBar } from '../../components/mocks';

const VariantExample = () => {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>colorScheme</Th>
          <Th>solid</Th>
          <Th>outline</Th>
          <Th>ghost</Th>
          <Th>link</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>default</Td>
          <Td>
            <Button variant="solid">Button</Button>
          </Td>
          <Td>
            <Button variant="outline">Button</Button>
          </Td>
          <Td>
            <Button variant="ghost">Button</Button>
          </Td>
          <Td>
            <Button variant="link">Button</Button>
          </Td>
        </Tr>
        <Tr>
          <Td>brand</Td>
          <Td>
            <Button colorScheme="brand" variant="solid">
              Button
            </Button>
          </Td>
          <Td>
            <Button colorScheme="brand" variant="outline">
              Button
            </Button>
          </Td>
          <Td>
            <Button colorScheme="brand" variant="ghost">
              Button
            </Button>
          </Td>
          <Td>
            <Button colorScheme="brand" variant="link">
              Button
            </Button>
          </Td>
        </Tr>
        <Tr>
          <Td>green</Td>
          <Td>
            <Button colorScheme="green" variant="solid">
              Button
            </Button>
          </Td>
          <Td>
            <Button colorScheme="green" variant="outline">
              Button
            </Button>
          </Td>
          <Td>
            <Button colorScheme="green" variant="ghost">
              Button
            </Button>
          </Td>
          <Td>
            <Button colorScheme="green" variant="link">
              Button
            </Button>
          </Td>
        </Tr>
        <Tr>
          <Td>red</Td>
          <Td>
            <Button colorScheme="red" variant="solid">
              Button
            </Button>
          </Td>
          <Td>
            <Button colorScheme="red" variant="outline">
              Button
            </Button>
          </Td>
          <Td>
            <Button colorScheme="red" variant="ghost">
              Button
            </Button>
          </Td>
          <Td>
            <Button colorScheme="red" variant="link">
              Button
            </Button>
          </Td>
        </Tr>
        <Tr>
          <Td>yellow</Td>
          <Td>
            <Button colorScheme="yellow" variant="solid">
              Button
            </Button>
          </Td>
          <Td>
            <Button colorScheme="yellow" variant="outline">
              Button
            </Button>
          </Td>
          <Td>
            <Button colorScheme="yellow" variant="ghost">
              Button
            </Button>
          </Td>
          <Td>
            <Button colorScheme="yellow" variant="link">
              Button
            </Button>
          </Td>
        </Tr>
      </Tbody>
    </Table>
  );
};

const SizeExample = () => {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>xs</Th>
          <Th>sm</Th>
          <Th>md</Th>
          <Th>lg</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>
            <Button size="xs">Button</Button>
          </Td>
          <Td>
            <Button size="sm">Button</Button>
          </Td>
          <Td>
            <Button size="md">Button</Button>
          </Td>
          <Td>
            <Button size="lg">Button</Button>
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
      <PageHeader title="Button" />
      <Container>
        <Card size="none">
          <CardBody size="lg">
            <VStack>
              <Heading>Variants</Heading>
              <Spacer>
                <VariantExample />
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
