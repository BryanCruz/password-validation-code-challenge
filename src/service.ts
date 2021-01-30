type passwordChecker = (password: string) => boolean;

export const isPasswordValid: passwordChecker = (password) => {
  return checkers.every((checkerFn) => checkerFn(password));
};

const hasNoSpaces: passwordChecker = (password) =>
  password.split("").every((character) => character !== " ");

const hasAtLeastNineCharacters: passwordChecker = (password) =>
  password.length >= 9;

const checkers: passwordChecker[] = [hasNoSpaces, hasAtLeastNineCharacters];
