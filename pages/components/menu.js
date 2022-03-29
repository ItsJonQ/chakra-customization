import Head from 'next/head';
import {
  Avatar,
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
} from '../../components/base';
import { AppBar } from '../../components/mocks';
import { FiAirplay, FiAperture, FiArchive, FiBookOpen } from 'react-icons/fi';

const BasicMenuExample = () => {
  return (
    <Menu>
      <MenuButton>Actions</MenuButton>
      <MenuList>
        <MenuItem>Download</MenuItem>
        <MenuItem>Create a Copy</MenuItem>
        <MenuItem>Mark as Draft</MenuItem>
        <MenuItem>Delete</MenuItem>
      </MenuList>
    </Menu>
  );
};

const CustomMenuContent = ({ avatar, children }) => {
  const avatarMarkup = avatar ? <Avatar size="sm" /> : null;
  return (
    <HStack spacing={3}>
      {avatarMarkup}
      <Spacer alignSelf="auto">
        <Text>{children}</Text>
      </Spacer>
    </HStack>
  );
};

const CustomMenuItem = ({ avatar, children, isChecked }) => {
  return (
    <MenuItemOption isChecked={isChecked}>
      <CustomMenuContent avatar={avatar}>{children}</CustomMenuContent>
    </MenuItemOption>
  );
};

const CustomMenuWithAvatarsExample = () => {
  return (
    <Menu placement="bottom">
      <MenuButton width={300}>
        <CustomMenuContent avatar>Current</CustomMenuContent>
      </MenuButton>
      <MenuList width={300}>
        <CustomMenuItem avatar isChecked>
          Download
        </CustomMenuItem>
        <CustomMenuItem avatar>Create a Copy</CustomMenuItem>
        <CustomMenuItem>Mark as Draft</CustomMenuItem>
        <CustomMenuItem>Delete</CustomMenuItem>
      </MenuList>
    </Menu>
  );
};

const CustomMenuWithIconsExample = () => {
  return (
    <Menu placement="bottom">
      <MenuButton width={200} leftIcon={<Icon as={FiAirplay} />}>
        Date created
      </MenuButton>
      <MenuList width={200}>
        <MenuItemOption isChecked leftIcon={<Icon as={FiAperture} />}>
          Option
        </MenuItemOption>
        <MenuItemOption leftIcon={<Icon as={FiArchive} />}>
          Option
        </MenuItemOption>
        <MenuItemOption leftIcon={<Icon as={FiBookOpen} />}>
          Option
        </MenuItemOption>
      </MenuList>
    </Menu>
  );
};

export default function Page() {
  return (
    <>
      <AppBar />
      <PageHeader title="Menu" />
      <Container>
        <Card size="none">
          <CardBody size="lg">
            <VStack>
              <Heading>Basic menu</Heading>
              <Spacer>
                <BasicMenuExample />
              </Spacer>
            </VStack>
          </CardBody>
          <CardBody size="lg">
            <VStack>
              <Heading>Custom menu with Avatars (sometimes)</Heading>
              <CustomMenuWithAvatarsExample />
            </VStack>
          </CardBody>
          <CardBody size="lg">
            <VStack>
              <Heading>Custom menu with icons</Heading>
              <CustomMenuWithIconsExample />
            </VStack>
          </CardBody>
        </Card>
      </Container>
    </>
  );
}
