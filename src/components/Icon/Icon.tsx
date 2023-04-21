import { useState } from "react";
import styled from "styled-components";

interface IconProps {
  icon: JSX.Element;
  boolean?: boolean;
  text?: string;
}

interface IconStyledProps {
  boolean?: boolean;
}

export const IconStyled = styled.div<IconStyledProps>`
  display: flex;
  justify-content: center;
  gap: 5px;
  align-items: center;
  position: relative;
  min-width: 20px;
  min-height: 20px;
  background-color: ${({ theme, boolean }) =>
    boolean ? theme.colors.success : theme.colors.error};
  transition: 0.2s ease-in-out;
  font-size: 1.1rem;
  padding: 10px;
  border-radius: 9999px;
  width: 20px;
  transition: 1s ease-in-out;

  color: ${({ theme }) => theme.colors.neutral};
  span {
    font-size: 0.8rem;
    position: absolute;
    visibility: hidden;
  }
  :hover {
    min-width: 80px;
    span {
      position: relative;
      visibility: visible;
    }
  }
`;

const Icon = ({ icon, boolean, text }: IconProps) => {
  const [hover, setHover] = useState(false);

  return (
    <IconStyled boolean={boolean}>
      {icon}
      {text ? <span>{text}</span> : null}
    </IconStyled>
  );
};
export default Icon;
