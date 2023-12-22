import "@mantine/core/styles.css";
import { Box, Button, MantineProvider } from "@mantine/core";

export default function App() {
  return (
    <MantineProvider>
      <Box>
        <Button>Mantine</Button>
      </Box>
    </MantineProvider>
  );
}
