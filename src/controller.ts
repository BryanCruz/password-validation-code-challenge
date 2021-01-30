import { isPasswordValid } from "./service";

export const validatePassword = (password: string): { isValid: boolean } => {
  return {
    isValid: isPasswordValid(password),
  };
};
