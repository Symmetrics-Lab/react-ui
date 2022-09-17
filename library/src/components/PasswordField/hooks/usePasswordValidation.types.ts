export interface UsePasswordValidationResponse {
  length: boolean;
  lowerCase: boolean;
  upperCase: boolean;
  number: boolean;
  specialCharacter: boolean;
  allValid: boolean;
}
