import { PropsWithChildren } from "react";

function Layout({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col h-screen overflow-hidden">{children}</div>
  );
}

export default Layout;
