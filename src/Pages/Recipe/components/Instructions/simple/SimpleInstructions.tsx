import styled from "styled-components";

export const SingleStyled = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  max-width: ${({ theme }) => theme.width.max};
  width: 100%;
  margin-bottom: 200px;
`;

const SimpleInstructions = ({ instructions }: { instructions: string }) => {
  return (
    <SingleStyled>
      <div dangerouslySetInnerHTML={{ __html: instructions }} />
    </SingleStyled>
  );
};
export default SimpleInstructions;
