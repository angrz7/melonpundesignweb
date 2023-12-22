import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { Navbar } from "./component/Navbar";
import { Page } from "./layout/Page";

export default function App() {
  return (
    <MantineProvider>
      <Page>
        <Navbar />
      </Page>
    </MantineProvider>
  );
}
