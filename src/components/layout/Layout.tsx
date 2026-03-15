import Header from "@components/layout/Header";
import Sidebar from "@components/layout/Sidebar";

function Layout() {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header>Header</Header>
      <div className="flex flex-1 overflow-hidden">
        <Sidebar side="left">
          Left Column
        </Sidebar>

        <div className="flex-1 bg-white overflow-auto p-4">Center Column</div>

        <Sidebar side="right">
          Right Column
        </Sidebar>
      </div>
    </div>
  );
}

export default Layout;
