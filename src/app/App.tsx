import Layout from "@components/layout/Layout";
import Header from "@components/layout/Header";
import Sidebar from "@components/layout/Sidebar";
import Content from "@components/layout/Content";
import Footer from "@components/layout/Footer";
import { XMarkIcon } from "@heroicons/react/16/solid";
import IconButton from "@components/ui/IconButton";

function App() {
  return (
    <Layout>
      <Header>Header</Header>
      <div className="flex flex-1 overflow-hidden">
        <Sidebar side="left" resizable={false}>Left Column</Sidebar>
        <Sidebar side="left">Left Column</Sidebar>
        <Content bottomPanel={"Bottom Panel"}>Center Panel</Content>
        <Sidebar side="right">
          <div className={"flex justify-end"}>
            <IconButton
              icon={<XMarkIcon />}
              onClick={() => console.log("Close clicked")}
              title="Close"
            />
          </div>
        </Sidebar>
        <Sidebar side="right" resizable={false}>Right Column</Sidebar>
      </div>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default App;
