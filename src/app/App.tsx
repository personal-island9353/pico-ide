import AppFooter from "@/app/components/AppFooter";
import AppHeader from "@/app/components/AppHeader";
import LeftSidebarControls from "@/app/components/LeftSidebarControls";
import LeftSidebarPanel from "@/app/components/LeftSidebarPanel";
import MainContent from "@/app/components/MainContent";
import RightSidebarPanel from "@/app/components/RightSidebarPanel";
import Layout from "@/components/layout/Layout";

function App() {
  return (
    <Layout header={<AppHeader />} footer={<AppFooter />}>
      <LeftSidebarControls />
      <LeftSidebarPanel />
      <MainContent />
      <RightSidebarPanel />
    </Layout>
  );
}

export default App;
