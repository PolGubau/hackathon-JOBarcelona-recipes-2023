import styled from "styled-components";

export const ImageStyled = styled.div`
  img {
    width: 100%;
    max-width: ${({ theme }) => theme.width.max};
    height: 100%;
    max-height: 20ch;
    object-fit: cover;
    position: relative;
    border-radius: 40px;
  }
`;

const Image = ({ url, title }: { url: string; title: string }) => {
  return (
    <ImageStyled>
      <img src={url} alt={title} />
    </ImageStyled>
  );
};
export default Image;
