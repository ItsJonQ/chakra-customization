import Head from 'next/head';
import NextLink from 'next/link';
import {
  Card,
  CardBody,
  Subheading,
  Container,
  UnorderedList,
  ListItem,
  Link,
  PageHeader,
  Spacer,
  VStack,
} from '../components/base';
import { AppBar } from '../components/mocks';

/**
 * A Next.js implementation detail
 * @see https://nextjs.org/docs/api-reference/next/link
 */
const ComponentLink = ({ href, ...props }) => {
  return (
    <ListItem>
      <NextLink href={href} passHref>
        <Link {...props} />
      </NextLink>
    </ListItem>
  );
};

export default function Page() {
  return (
    <>
      <AppBar />
      <PageHeader title="Examples" />
      <Container>
        <Card size="none">
          <CardBody size="lg">
            <VStack>
              <Subheading>Base examples</Subheading>
              <UnorderedList paddingLeft={4}>
                <ComponentLink href="/components/alert">Alert</ComponentLink>
                <ComponentLink href="/components/button">Button</ComponentLink>
                <ComponentLink href="/components/menu">Menu</ComponentLink>
                <ComponentLink href="/components/radio-card">
                  RadioCard
                </ComponentLink>
                <ComponentLink href="/components/switch">Switch</ComponentLink>
              </UnorderedList>
            </VStack>
          </CardBody>
          <CardBody size="lg">
            <VStack>
              <Subheading>Custom examples</Subheading>
              <UnorderedList paddingLeft={4}>
                <ComponentLink href="/examples/checkout-modal">
                  Checkout modal
                </ComponentLink>
                <ComponentLink href="/examples/form">Form</ComponentLink>
              </UnorderedList>
            </VStack>
          </CardBody>
        </Card>
      </Container>
    </>
  );
}
