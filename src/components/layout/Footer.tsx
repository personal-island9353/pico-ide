import { PropsWithChildren } from "react";

function Footer({ children }: PropsWithChildren) {
  return <header className="p-4 bg-gray-100 border-t">{children}</header>;
}

export default Footer;
