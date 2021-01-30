type passwordChecker = (password: string) => boolean;
type passwordCheckerCreator = (...params: any[]) => passwordChecker;

export const isPasswordValid: passwordChecker = (password) => {
  return checkers.every((checkerFn) => checkerFn(password));
};

const hasNoSpaces: passwordChecker = (password) =>
  password.split("").every((character) => character !== " ");

const hasNoRepeatedCharacters: passwordChecker = (password) => {
  const characters = password.split("");
  const charactersSet = new Set(characters);

  return characters.length === charactersSet.size;
};

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

const hasAtLeastNDigits: passwordCheckerCreator = (n: number) => {
  return hasAtLeastNCharactersOfPattern(n, /[0-9]/);
};

const hasAtLeastNUppercase: passwordCheckerCreator = (n: number) => {
  return hasAtLeastNCharactersOfPattern(n, /[A-Z]/);
};

const hasAtLeastNLowercase: passwordCheckerCreator = (n: number) => {
  return hasAtLeastNCharactersOfPattern(n, /[A-Z]/);
};

const hasAtLeastNSpecialCharacters: passwordCheckerCreator = (n: number) => {
  return hasAtLeastNCharactersOfPattern(n, /[!@#$%^&*()+-]/);
};

const checkers: passwordChecker[] = [
  hasNoSpaces,
  hasNoRepeatedCharacters,
  hasAtLeastNCharacters(9),
  hasAtLeastNDigits(1),
  hasAtLeastNUppercase(1),
  hasAtLeastNLowercase(1),
  hasAtLeastNSpecialCharacters(1),
];
