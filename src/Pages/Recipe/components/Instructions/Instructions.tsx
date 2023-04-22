import { AnalyzedInstructions } from "src/types";
import { ButtonSelect, InstructionsStyled } from "./Styled";
import React from "react";
import SimpleInstructions from "./simple/SimpleInstructions";
import ComplexInstructions from "./complex/ComplexInstructions";
import ChatTextHandIcon from "src/assets/HandIcons/ChatTextHandIcon";
interface InstructionsProps {
  simple: string | undefined;
  complex: AnalyzedInstructions[] | undefined;
}

const Instructions = ({ simple, complex }: InstructionsProps) => {
  const [short, setShort] = React.useState<boolean>(false);

  return (
    <InstructionsStyled>
      <h2>
        <ChatTextHandIcon
          style={{
            transform: "scale(0.5)",
          }}
        />
        Instructions
      </h2>

      <div className={`buttons `}>
        <ButtonSelect selected={short} onClick={() => setShort(true)}>
          Simple
        </ButtonSelect>
        <ButtonSelect selected={!short} onClick={() => setShort(false)}>
          Complex
        </ButtonSelect>
      </div>
      {short && simple && <SimpleInstructions instructions={simple} />}
      {!short && complex && <ComplexInstructions instructions={complex} />}
    </InstructionsStyled>
  );
};
export default Instructions;
