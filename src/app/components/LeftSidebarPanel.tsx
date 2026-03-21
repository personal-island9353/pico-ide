import Sidebar from "@/components/layout/Sidebar";
import { useAppSelector } from "@/store/hooks";

function LeftSidebarPanel() {
  const { opened, maximized } = useAppSelector(
    (state) => state.layout.leftSidebar,
  );

  if (!opened) {
    return null;
  }

  return (
    <Sidebar side="left" maximized={maximized}>
      Left Column
    </Sidebar>
  );
}

export default LeftSidebarPanel;
