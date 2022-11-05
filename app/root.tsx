import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { StylesPlaceholder } from "@mantine/remix";
import { theme } from "./theme";
import {
  AppShell,
  Burger,
  Button,
  createEmotionCache,
  Group,
  MantineProvider,
  MediaQuery,
  Navbar,
  Stack,
  Text
} from "@mantine/core";
import { useState } from "react";
export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

createEmotionCache({ key: "mantine" });
function AppShellNavbar({ opened }:any) {
  return (
    <Navbar
      p="md"
      hiddenBreakpoint="sm"
      hidden={!opened}
      width={{ sm: 200, lg: 300 }}
      sx={{ backgroundColor: "#01001A", borderRight: "none" }}
    >
      <Stack mt="xl" align="center">
        <Button>Sign Usp</Button>
        <Button variant="light">Log In</Button>
        <Text>Promotions</Text>
        <Text>Tournaments</Text>
        <Text>Responsive Gaming</Text>
      </Stack>
    </Navbar>
  );
}

function AppShellHeader({ opened, setOpened }:any) {
  return (
    <Group
      p="sm"
      sx={{ backgroundColor: "#0C0F40", width: "100%" }}
      position="center"
    >
      <Button variant="subtle">Promotion</Button>
      <Button>Sign Up</Button>
      <Button variant="light">Log In</Button>
      <Button variant="subtle">Game</Button>
      <MediaQuery largerThan="sm" styles={{ display: "none" }}>
        <Burger
          opened={opened}
          onClick={() => setOpened((o:any) => !o)}
          size="sm"
          mr="xl"
        />
      </MediaQuery>
    </Group>
  );
}
export default function App() {
    const [opened, setOpened] = useState(false);

  return (
    <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
      <html lang="en">
        <head>
          <StylesPlaceholder />
          <Meta />
          <Links />
        </head>
        <body>
          <AppShell
        sx={{ backgroundColor: "#01001A" }}
        padding={0}
        navbar={<AppShellNavbar opened={opened} />}
      >
        <AppShellHeader opened={opened} setOpened={setOpened} />
        <Stack style={{ border: "solid #4EACE8", borderRadius: 10 }} p="sm">
          {Array(40)
            .fill("Page content goes here...")
            .map((str, i) => (
              <div key={i}>{str}</div>
            ))}
        </Stack>
      </AppShell>
          {/* <Outlet /> */}
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </body>
      </html>
    </MantineProvider>
  );
}
