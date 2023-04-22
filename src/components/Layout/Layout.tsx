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
        <section>
          {hasHeader && <Nav />} <main>{children}</main>
        </section>
        <LazyFooter />
      </main>
    </LayoutStyled>
  );
};
export default Layout;
