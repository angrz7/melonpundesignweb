import "@mantine/core/styles.css";
import { MantineProvider, createTheme } from "@mantine/core";
import { Navbar } from "./component/Navbar/Navbar";
import { Page } from "./layout/Page";
import { TabComponent } from "./component/Tab/Tab";
import { Home } from "./pages/Home";

const theme = createTheme({
  components: {
    Text: {
      defaultProps: {
        fz: "1.5rem",
        color: "black",
      },
    },
  },
});

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Page>
        <Navbar />
        <TabComponent defaultValue={"home"} tabList={
          [
            { label: "home", content: <Home /> },
          ]
        }/>
      </Page>
    </MantineProvider>
  );
}
