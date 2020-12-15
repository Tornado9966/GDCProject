import { getPresets } from 'config/validator-config';
import { validate } from 'services/validator';
import { passwordNotMatch } from 'constants/text-constants';

export const isInvalid = (value, name) => {
  return validate(value, getPresets(name));
};

export function confirmPass(pass, confimPass) {
  return (pass !== confimPass) ? passwordNotMatch : false;
}