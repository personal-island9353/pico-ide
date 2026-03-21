import Content from "@/components/layout/Content";
import BottomPanel from "./BottomPanel";
import CenterPanel from "./CenterPanel";

function MainContent() {
  return (
    <Content bottomPanel={<BottomPanel />}>
      <CenterPanel />
    </Content>
  );
}

export default MainContent;
