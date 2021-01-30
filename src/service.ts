type passwordChecker = (password: string) => boolean;

export const isPasswordValid: passwordChecker = (password) => {
  return checkers.every((checkerFn) => checkerFn(password));
};

const hasNoSpaces: passwordChecker = (password) =>
  password.split("").every((character) => character !== " ");

const checkers: passwordChecker[] = [hasNoSpaces];
