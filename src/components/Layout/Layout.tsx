import styled from "styled-components";

export const LayoutStyled = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.neutral};
  color: ${({ theme }) => theme.colors.primary};
  > main {
    flex: 1;
  }
  button {
    background-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.primary};
  }
  .accent {
    color: ${({ theme }) => theme.colors.accent};
  }
  .bgAccent {
    background-color: ${({ theme }) => theme.colors.accent};
  }
`;

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
