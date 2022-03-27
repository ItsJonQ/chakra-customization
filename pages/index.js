import Head from 'next/head';
import { Formik, Form, Field } from 'formik';
import {
  Button,
  ButtonGroup,
  Heading,
  Stack,
  Text,
  TextInput,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from '../components/base';

function FormikExample() {
  function validateName(value) {
    let error;
    if (!value) {
      error = 'Name is required';
    } else if (value.toLowerCase() !== 'naruto') {
      error = "Jeez! You're not a fan 😱";
    }
    return error;
  }

  return (
    <Formik
      initialValues={{ name: 'Sasuke' }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
    >
      {(props) => (
        <Form>
          <Field name="name" validate={validateName}>
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.name && form.touched.name}>
                <FormLabel htmlFor="name">First name</FormLabel>
                <TextInput {...field} id="name" placeholder="name" />
                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Button
            mt={4}
            colorScheme="brand"
            isLoading={props.isSubmitting}
            type="submit"
          >
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default function Home() {
  return (
    <div>
      <FormikExample />
      <Stack>
        <TextInput variant="outline" placeholder="Outline" />
        <TextInput variant="filled" placeholder="Filled" />
        <TextInput variant="flushed" placeholder="Flushed" />
        <TextInput variant="unstyled" placeholder="Unstyled" />
      </Stack>
      <br />
      <Heading>Text</Heading>
      <Stack>
        <Text fontSize="6xl">(6xl) In love with React & Next</Text>
        <Text fontSize="5xl">(5xl) In love with React & Next</Text>
        <Text fontSize="4xl">(4xl) In love with React & Next</Text>
        <Text fontSize="3xl">(3xl) In love with React & Next</Text>
        <Text fontSize="2xl">(2xl) In love with React & Next</Text>
        <Text fontSize="xl">(xl) In love with React & Next</Text>
        <Text fontSize="lg">(lg) In love with React & Next</Text>
        <Text fontSize="md">(md) In love with React & Next</Text>
        <Text fontSize="sm">(sm) In love with React & Next</Text>
        <Text fontSize="xs">(xs) In love with React & Next</Text>
      </Stack>
      <br />
      <Heading>Buttons</Heading>
      <Stack direction="row" spacing={4} align="center">
        <Button colorScheme="brand" variant="solid">
          Button
        </Button>
        <Button colorScheme="brand" variant="outline">
          Button
        </Button>
        <Button colorScheme="brand" variant="ghost">
          Button
        </Button>
        <Button colorScheme="brand" variant="link">
          Button
        </Button>
      </Stack>
      <Stack direction="row" spacing={4} align="center">
        <Button colorScheme="yellow" variant="solid">
          Button
        </Button>
        <Button colorScheme="yellow" variant="outline">
          Button
        </Button>
        <Button colorScheme="yellow" variant="ghost">
          Button
        </Button>
        <Button colorScheme="yellow" variant="link">
          Button
        </Button>
      </Stack>
      <Stack direction="row" spacing={4} align="center">
        <Button colorScheme="green" variant="solid">
          Button
        </Button>
        <Button colorScheme="green" variant="outline">
          Button
        </Button>
        <Button colorScheme="green" variant="ghost">
          Button
        </Button>
        <Button colorScheme="green" variant="link">
          Button
        </Button>
      </Stack>
      <Stack direction="row" spacing={4} align="center">
        <Button colorScheme="red" variant="solid">
          Button
        </Button>
        <Button colorScheme="red" variant="outline">
          Button
        </Button>
        <Button colorScheme="red" variant="ghost">
          Button
        </Button>
        <Button colorScheme="red" variant="link">
          Button
        </Button>
      </Stack>
      <Stack direction="row" spacing={4} align="center">
        <Button colorScheme="orange" variant="solid">
          Button
        </Button>
        <Button colorScheme="orange" variant="outline">
          Button
        </Button>
        <Button colorScheme="orange" variant="ghost">
          Button
        </Button>
        <Button colorScheme="orange" variant="link">
          Button
        </Button>
      </Stack>
      <Stack direction="row" spacing={4} align="center">
        <Button>Button</Button>
        <Button variant="outline">Button</Button>
        <Button variant="ghost">Button</Button>
        <Button variant="link">Button</Button>
      </Stack>
    </div>
  );
}
