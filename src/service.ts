type passwordChecker = (password: string) => boolean;

export const isPasswordValid: passwordChecker = (password) => {
  return checkers.every((checkerFn) => checkerFn(password));
};

const checkers: passwordChecker[] = [];
