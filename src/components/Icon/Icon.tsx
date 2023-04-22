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
  transition: 1s ease-in-out;

  color: ${({ theme }) => theme.colors.neutral};
`;

const Icon = ({ icon, boolean, text }: IconProps) => {
  return (
    <IconStyled boolean={boolean}>
      {icon}
      {text ? <span>{text}</span> : null}
    </IconStyled>
  );
};
export default Icon;
