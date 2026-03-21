export type SidebarState = {
  opened: boolean;
  maximized: boolean;
};

export type LayoutState = {
  leftSidebar: SidebarState;
  rightSidebar: SidebarState;
};
