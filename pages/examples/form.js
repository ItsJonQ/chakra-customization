import Head from 'next/head';
import {
  Alert,
  Box,
  Button,
  Card,
  CardBody,
  HStack,
  FormFooter,
  Grid,
  Heading,
  Body,
  Container,
  FormControl,
  FormLabel,
  PageHeader,
  Spacer,
  VStack,
  Textarea,
  TextInput,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Text,
  Td,
} from '../../components/base';
import { AppBar } from '../../components/mocks';

const DescriptiveFormGroup = ({ htmlFor, label, children, description }) => {
  return (
    <Grid templateColumns="1fr calc(100% / 3)" gap={8}>
      <FormControl>
        {label ? <FormLabel htmlFor={htmlFor}>{label}</FormLabel> : null}
        {children}
      </FormControl>
      <Box paddingTop="30px">
        <Box borderLeft="1px solid" borderLeftColor="gray.200" paddingLeft={8}>
          <Text variant="secondary">{description}</Text>
        </Box>
      </Box>
    </Grid>
  );
};

const FormWithRightDescription = () => {
  return (
    <Card size="lg">
      <VStack>
        <Heading>Billing & Invoicing Info</Heading>
        <VStack>
          <DescriptiveFormGroup
            description="
If you belong to a Company, it will be added to billing receipts."
            label="Company"
          >
            <TextInput />
          </DescriptiveFormGroup>
          <DescriptiveFormGroup
            description="
If you belong to a Company, it will be added to billing receipts."
            label="Company"
          >
            <TextInput />
          </DescriptiveFormGroup>
          <DescriptiveFormGroup
            description="
If you belong to a Company, it will be added to billing receipts."
            label="Company"
          >
            <Textarea />
          </DescriptiveFormGroup>
          <Alert>No credit card on file.</Alert>
          <FormFooter>
            <Button colorScheme="brand" variant="solid">
              Save Changes
            </Button>
            <Button disabled>Discard Changes</Button>
          </FormFooter>
        </VStack>
      </VStack>
    </Card>
  );
};

const FormWithMultipleInlineFields = () => {
  return (
    <Card size="lg">
      <VStack>
        <Heading>Account Info</Heading>
        <VStack>
          <DescriptiveFormGroup
            description="
            Displayed on your public profile, notifications and other places."
          >
            <Grid templateColumns="1fr 1fr" gap={8}>
              <FormControl>
                <FormLabel>First name:</FormLabel>
                <TextInput />
              </FormControl>
              <FormControl>
                <FormLabel>Last name:</FormLabel>
                <TextInput />
              </FormControl>
            </Grid>
          </DescriptiveFormGroup>
          <DescriptiveFormGroup
            label="Username:"
            description="
            Username must be between 3 and 20 characters long containing only letters and numbers with no spaces. Used in public pages like your public profile."
          >
            <TextInput />
          </DescriptiveFormGroup>
          <FormFooter>
            <Button colorScheme="brand" variant="solid">
              Save Changes
            </Button>
            <Button disabled>Discard Changes</Button>
          </FormFooter>
        </VStack>
      </VStack>
    </Card>
  );
};

export default function Page() {
  return (
    <>
      <AppBar />
      <PageHeader title="Form" />
      <Container>
        <VStack spacing={8}>
          <FormWithMultipleInlineFields />
          <FormWithRightDescription />
        </VStack>
      </Container>
    </>
  );
}
