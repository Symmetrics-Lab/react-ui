import { useState, useEffect } from 'react';

function usePasswordValidation(
  password: string,
  minLength: number,
  lowerCase?: boolean,
  upperCase?: boolean,
  number?: boolean,
  specialCharacter?: boolean
) {
  const [isValid, setIsValid] = useState({
    length: false,
    lowerCase: false,
    upperCase: false,
    number: false,
    specialCharacter: false,
    allValid: false,
  });

  useEffect(() => {
    function handlePasswordChange(pass: string) {
      const length = pass.length >= minLength;
      const lower = lowerCase ? /[a-z]/.test(pass) : true;
      const upper = upperCase ? /[A-Z]/.test(pass) : true;
      const num = number ? /\d/.test(pass) : true;
      const special = specialCharacter
        ? /[ !"#$%&'\(\)\*\+,\-\.\/:;<=>\?@\[\]\\\^_`\{\|\}~]/.test(pass)
        : true;
      const allValid = length && lower && upper && num && special;
      const validation = {
        length,
        lowerCase: lower,
        upperCase: upper,
        number: num,
        specialCharacter: special,
        allValid,
      };
      setIsValid(validation);
    }

    handlePasswordChange(password);
    return () => {
      setIsValid({
        length: false,
        lowerCase: false,
        upperCase: false,
        number: false,
        specialCharacter: false,
        allValid: false,
      });
    };
  }, [password, minLength, lowerCase, upperCase, number, specialCharacter]);

  return isValid;
}

export default usePasswordValidation;
