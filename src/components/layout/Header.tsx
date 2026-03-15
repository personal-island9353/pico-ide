import { PropsWithChildren } from "react";

function Header({ children }: PropsWithChildren) {
  return <header className="p-4 bg-gray-100 border-b">{children}</header>;
}

export default Header;
