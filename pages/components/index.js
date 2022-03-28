import Head from 'next/head';
import NextLink from 'next/link';
import {
  Card,
  Subheading,
  Container,
  UnorderedList,
  ListItem,
  Link,
  PageHeader,
  Spacer,
  VStack,
} from '../../components/base';
import { AppBar } from '../../components/mocks';

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
      <PageHeader title="Components" />
      <Container>
        <Card size="lg">
          <VStack>
            <Subheading>Basic examples</Subheading>
            <UnorderedList paddingLeft={4}>
              <ComponentLink href="/components/menu">Menu</ComponentLink>
            </UnorderedList>
          </VStack>
        </Card>
      </Container>
    </>
  );
}
