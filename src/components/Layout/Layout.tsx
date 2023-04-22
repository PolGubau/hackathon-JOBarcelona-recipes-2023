import { Suspense, lazy } from "react";
import { LayoutStyled } from "./GlobalStyled";
import Nav from "./Nav/Nav";

const LazyFooter = lazy(() => import("./Footer/Footer"));

interface LayoutProps {
  hasHeader?: boolean;
  children: any;
}

const Layout = ({ hasHeader = false, children }: LayoutProps) => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <LayoutStyled>
        <main className="content">
          {hasHeader && <Nav />} <main>{children}</main>
          <LazyFooter />
        </main>
      </LayoutStyled>
    </Suspense>
  );
};
export default Layout;
