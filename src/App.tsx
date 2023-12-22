import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { Navbar } from "./component/Navbar/Navbar";
import { Page } from "./layout/Page";
import { TabComponent } from "./component/Tab/Tab";
import { Home } from "./pages/Home";

export default function App() {
  return (
    <MantineProvider>
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
