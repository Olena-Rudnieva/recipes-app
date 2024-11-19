export const formatInstructionText = (instructions: string) => {
  const formattedInstructions = instructions.split('\n').map((line, index) => (
    <span key={index}>
      {line}
      <br />
    </span>
  ));

  return formattedInstructions;
};
