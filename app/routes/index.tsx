import { Text, Button, Stack } from "@mantine/core";

export default function Index() {
  return (
    <Stack align="center" mt={50}>
      <Text size="xl" weight={500}>
        Welcome to Mantine!
      </Text>
      <Button>Click the button</Button>
    </Stack>
  );
}
