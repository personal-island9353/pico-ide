import Layout from "@components/layout/Layout";
import Header from "@components/layout/Header";
import Sidebar from "@components/layout/Sidebar";
import Content from "@components/layout/Content";

function App() {
  return (
    <Layout>
      <Header>Header</Header>
      <div className="flex flex-1 overflow-hidden">
        <Sidebar side="left">Left Column</Sidebar>
        <Content bottomPanel={"Bottom Panel"}>Center Panel</Content>
        <Sidebar side="right">Right Column</Sidebar>
      </div>
    </Layout>
  );
}

export default App;
