import config from "./config";

const policy = config.passwordPolicy;

type passwordChecker = (password: string) => boolean;
type passwordCheckerCreator = (...params: any[]) => passwordChecker;

export const isPasswordValid: passwordChecker = (password) => {
  return checkers.every((checkerFn) => checkerFn(password));
};

const hasNoSpaces: passwordCheckerCreator = (active: boolean) => {
  if (!active) {
    return () => true;
  }

  return (password) =>
    password.split("").every((character) => character !== " ");
};
const hasNoRepeatedCharacters: passwordCheckerCreator = (active: boolean) => {
  if (!active) {
    return () => true;
  }

  return (password) => {
    const characters = password.split("");
    const charactersSet = new Set(characters);

    return characters.length === charactersSet.size;
  };
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
  hasNoSpaces(policy.hasNoSpaces),
  hasNoRepeatedCharacters(policy.hasNoRepeatedCharacters),
  hasAtLeastNCharacters(policy.hasAtLeastNCharacters),
  hasAtLeastNDigits(policy.hasAtLeastNDigits),
  hasAtLeastNUppercase(policy.hasAtLeastNUppercase),
  hasAtLeastNLowercase(policy.hasAtLeastNLowercase),
  hasAtLeastNSpecialCharacters(policy.hasAtLeastNSpecialCharacters),
];
