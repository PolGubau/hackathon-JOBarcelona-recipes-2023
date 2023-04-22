/**
 * This code defines a React component called Icon which takes three props:

icon: A JSX.Element which is the icon to be displayed.
boolean (optional): A boolean value which determines the color of the background. If true, the background color will be the success color from the theme, otherwise it will be the error color.
text (optional): A string which will be displayed next to the icon.
The component is styled using styled-components. It has a IconStyled div that wraps the icon and text. The background color of the IconStyled div is determined by the boolean prop, using the success or error color from the theme. The IconStyled div has a minimum width and height of 20px, and a border radius of 9999px, making it a circle. It also has a transition effect applied to it. The color of the icon and text is the neutral color from the theme.

Finally, the Icon component returns the IconStyled div with the icon and text wrapped inside. If the text prop is not provided, it will not be rendered.
 */

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
