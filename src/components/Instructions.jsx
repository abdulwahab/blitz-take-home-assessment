import { styled } from "goober";

// Feel free to remove this component from the final result.
const Instructions = () => {
  return (
    <Wrapper>
      <H1>Blitz.gg Take Home Test</H1>
      <H2>Directions:</H2>
      <InstructionsList>
        <li>
          Edit the <Code>&lt;Select/&gt;</Code> component, and save to test HMR
          updates.
        </li>
        <li>
          Use CSS vars where appropriate, see <Code>src/styles.js</Code>
        </li>
        <li>Remove this div before submission</li>
        <li>Good luck!</li>
      </InstructionsList>
    </Wrapper>
  );
};

const Wrapper = styled("section")`
  font-size: var(--sp-3);
  text-align: left;
  margin-bottom: var(--sp-8);
`;

const Code = styled("code")`
  font-size: var(--sp-3);
`;

const H1 = styled("h1")`
  font-size: var(--sp-14);
  margin: 0 0 var(--sp-4);
`;

const H2 = styled("h2")`
  margin: 0 0 var(--sp-4);
`;

const InstructionsList = styled("ul")``;

export default Instructions;
