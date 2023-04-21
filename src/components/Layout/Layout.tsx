import { LayoutStyled } from "./GlobalStyled";

interface LayoutProps {
  hasHeader?: boolean;
  children: any;
}

const Layout = ({ hasHeader = false, children }: LayoutProps) => {
  return (
    <LayoutStyled>
      {hasHeader && <div>Header</div>} <main>{children}</main>
    </LayoutStyled>
  );
};
export default Layout;
