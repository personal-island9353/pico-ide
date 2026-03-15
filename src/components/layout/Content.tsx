import useResizable from "@hooks/layout/useResizable";

function Content() {
  const {
    dimension: height,
    elementRef: bottomPanelRef,
    startResizing,
  } = useResizable({
    orientation: "vertical",
    side: "bottom",
  });

  return (
    <div className="flex flex-1 flex-col justify-between bg-white overflow-hidden">
      <div className="w-full p-4">Center Column</div>
      <div className="w-full">
        <div
          className="h-1 cursor-row-resize hover:bg-blue-400 active:bg-blue-600 transition-colors"
          onMouseDown={startResizing}
        />
        <div
          ref={bottomPanelRef}
          style={{ height: height !== undefined ? `${height}px` : "auto" }}
          className=" bg-gray-50 border-t p-4"
        >
          Bottom panel
        </div>
      </div>
    </div>
  );
}

export default Content;
