import { LayoutStyled } from "./GlobalStyled";
import Nav from "./Nav/Nav";
import LazyFooter from "./Footer/Footer";

interface LayoutProps {
  hasHeader?: boolean;
  children: any;
}

const Layout = ({ hasHeader = false, children }: LayoutProps) => {
  return (
    <LayoutStyled>
      <main className="content">
        {hasHeader && <Nav />} <main>{children}</main>
        <LazyFooter />
      </main>
    </LayoutStyled>
  );
};
export default Layout;
