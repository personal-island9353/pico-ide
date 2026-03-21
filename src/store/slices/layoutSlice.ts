import { LayoutState } from "@/types/store/slices/layoutSlice";
import { createSlice } from "@reduxjs/toolkit";

const initialState: LayoutState = {
  leftSidebar: {
    opened: true,
    maximized: false,
  },
  rightSidebar: {
    opened: true,
    maximized: false,
  },
};

const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    toggleLeftSidebar(state) {
      state.leftSidebar.opened = !state.leftSidebar.opened;
      state.leftSidebar.maximized = false;
    },
    toggleRightSidebar(state) {
      state.rightSidebar.opened = !state.rightSidebar.opened;
      state.rightSidebar.maximized = false;
    },
    toggleMaximizeLeftSidebar(state) {
      state.leftSidebar.maximized = !state.leftSidebar.maximized;
    },
    toggleMaximizeRightSidebar(state) {
      state.rightSidebar.maximized = !state.rightSidebar.maximized;
    },
  },
});

export const {
  toggleLeftSidebar,
  toggleRightSidebar,
  toggleMaximizeLeftSidebar,
  toggleMaximizeRightSidebar,
} = layoutSlice.actions;

export default layoutSlice.reducer;
