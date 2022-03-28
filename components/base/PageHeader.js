import React from 'react';
import { Helmet } from 'react-helmet';
import { Card } from './Card';
import { Container } from './Container';
import { HStack } from './HStack';
import { Spacer } from './Spacer';
import { Subheading } from './Typography';

export const PageHeader = React.forwardRef(
  ({ title = 'Page title', children, ...props }, ref) => {
    return (
      <>
        <Helmet>
          <title>{title} | Customizing Chakra</title>
        </Helmet>
        <Card
          borderTop="none"
          borderLeft="none"
          borderRight="none"
          boxShadow={0}
          size="sm"
          marginBottom={4}
          {...props}
          ref={ref}
        >
          <Container>
            <HStack height="100%" alignItems="center" minHeight="48px">
              <Subheading as="h1">{title}</Subheading>
              <Spacer>{children}</Spacer>
            </HStack>
          </Container>
        </Card>
      </>
    );
  }
);

PageHeader.displayName = 'PageHeader';
