import Content from "@/components/layout/Content";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Layout from "@/components/layout/Layout";
import Sidebar from "@/components/layout/Sidebar";
import ButtonIcon from "@/components/ui/ButtonIcon";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  toggleLeftSidebar,
  toggleMaximizeLeftSidebar,
  toggleMaximizeRightSidebar,
  toggleRightSidebar,
} from "@/store/slices/layoutSlice";
import { ArrowsPointingOutIcon, XMarkIcon } from "@heroicons/react/24/outline";
import styles from "./App.module.css";

function App() {
  const dispatch = useAppDispatch();
  const {
    leftSidebar: { opened: leftSidebarOpened, maximized: leftSidebarMaximized },
    rightSidebar: {
      opened: rightSidebarOpened,
      maximized: rightSidebarMaximized,
    },
  } = useAppSelector((state) => state.layout);

  return (
    <Layout
      header={
        <Header>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            Header
            <div className={styles.iconButtonWrapper}>
              {rightSidebarOpened && (
                <ButtonIcon
                  icon={<ArrowsPointingOutIcon />}
                  onClick={() => dispatch(toggleMaximizeRightSidebar())}
                  title="Maximize"
                />
              )}
              <ButtonIcon
                icon={<XMarkIcon />}
                onClick={() => dispatch(toggleRightSidebar())}
                title="Close"
              />
            </div>
          </div>
        </Header>
      }
      footer={<Footer>Footer</Footer>}
    >
      <Sidebar side="left" resizable={false}>
        <div className={styles.iconButtonWrapper}>
          {leftSidebarOpened && (
            <ButtonIcon
              icon={<ArrowsPointingOutIcon />}
              onClick={() => dispatch(toggleMaximizeLeftSidebar())}
              title="Maximize"
            />
          )}
          <ButtonIcon
            icon={<XMarkIcon />}
            onClick={() => dispatch(toggleLeftSidebar())}
            title="Close"
          />
        </div>
      </Sidebar>
      {leftSidebarOpened && (
        <Sidebar side="left" maximized={leftSidebarMaximized}>
          Left Column
        </Sidebar>
      )}
      <Content bottomPanel={"Bottom Panel"}>Center Panel</Content>
      {rightSidebarOpened && (
        <Sidebar side="right" maximized={rightSidebarMaximized}>
          Right Column
        </Sidebar>
      )}
    </Layout>
  );
}

export default App;
