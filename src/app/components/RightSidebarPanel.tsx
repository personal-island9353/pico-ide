import Sidebar from "@/components/layout/Sidebar";
import { useAppSelector } from "@/store/hooks";

function RightSidebarPanel() {
  const { opened, maximized } = useAppSelector(
    (state) => state.layout.rightSidebar,
  );

  if (!opened) {
    return null;
  }

  return (
    <Sidebar side="right" maximized={maximized}>
      Right Column
    </Sidebar>
  );
}

export default RightSidebarPanel;
