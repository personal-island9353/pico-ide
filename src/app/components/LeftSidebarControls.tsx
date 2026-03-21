import Sidebar from "@/components/layout/Sidebar";
import ButtonIcon from "@/components/ui/ButtonIcon";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  toggleLeftSidebar,
  toggleMaximizeLeftSidebar,
} from "@/store/slices/layoutSlice";
import { ArrowsPointingOutIcon, XMarkIcon } from "@heroicons/react/24/outline";
import styles from "./LeftSidebarControls.module.css";

function LeftSidebarControls() {
  const dispatch = useAppDispatch();
  const leftSidebarOpened = useAppSelector(
    (state) => state.layout.leftSidebar.opened,
  );

  return (
    <Sidebar side="left" resizable={false}>
      <div className={styles.actions}>
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
          title="Toggle Left Sidebar"
        />
      </div>
    </Sidebar>
  );
}

export default LeftSidebarControls;
