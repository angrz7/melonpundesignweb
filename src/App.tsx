import "@mantine/core/styles.css";
import { Box, MantineProvider } from "@mantine/core";
import { Navbar } from "./component/Navbar";

export default function App() {
  return (
    <MantineProvider>
      <Box>
        <Navbar />
      </Box>
    </MantineProvider>
  );
}
