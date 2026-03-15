import Header from "@components/layout/Header";
import Sidebar from "@components/layout/Sidebar";
import Content from "@components/layout/Content";

function Layout() {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header>Header</Header>
      <div className="flex flex-1 overflow-hidden">
        <Sidebar side="left">Left Column</Sidebar>

        <Content />

        <Sidebar side="right">Right Column</Sidebar>
      </div>
    </div>
  );
}

export default Layout;
