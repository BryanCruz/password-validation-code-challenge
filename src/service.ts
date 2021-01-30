type passwordChecker = (password: string) => boolean;
type passwordCheckerCreator = (...params: any[]) => passwordChecker;

export const isPasswordValid: passwordChecker = (password) => {
  return checkers.every((checkerFn) => checkerFn(password));
};

const hasNoSpaces: passwordChecker = (password) =>
  password.split("").every((character) => character !== " ");

const hasAtLeastNCharacters: passwordCheckerCreator = (n: number) => {
  return (password) => password.length >= n;
};

const hasAtLeastNCharactersOfPattern: passwordCheckerCreator = (
  n: number,
  pattern: RegExp
) => {
  return (password: string) => {
    const characters = password.split("");
    const charactersOfPattern = characters.filter((character) =>
      character.match(pattern)
    );

    return charactersOfPattern.length >= n;
  };
};

const checkers: passwordChecker[] = [hasNoSpaces, hasAtLeastNCharacters(9)];
