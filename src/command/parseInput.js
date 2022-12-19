import { isValidArgs, isValidOperation } from "../domains/command.js";
import { parseErrorMessage } from "../domains/messages.js";

export const parseInput = (inputLine) => {
  const commandParts = inputLine.trim().split(" ");
  const operation = commandParts[0];
  const args = commandParts.slice(1);
  if (!isValidOperation(operation) || !isValidArgs[operation](args)) {
    throw new Error(parseErrorMessage);
  }

  return { operation, args };
};
