import Header from "@/components/layout/Header";
import ButtonIcon from "@/components/ui/ButtonIcon";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  toggleMaximizeRightSidebar,
  toggleRightSidebar,
} from "@/store/slices/layoutSlice";
import { ArrowsPointingOutIcon, XMarkIcon } from "@heroicons/react/24/outline";
import styles from "./AppHeader.module.css";

function AppHeader() {
  const dispatch = useAppDispatch();
  const rightSidebarOpened = useAppSelector(
    (state) => state.layout.rightSidebar.opened,
  );

  return (
    <Header>
      <div className={styles.headerContent}>
        Header
        <div className={styles.actions}>
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
            title="Toggle Right Sidebar"
          />
        </div>
      </div>
    </Header>
  );
}

export default AppHeader;
