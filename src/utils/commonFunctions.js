import _ from 'lodash';
export function selectRandomInt(min, max) {
  return Math.floor(Math.random() * max - min + 1 + min);
}

/**
 * CHECKS IF THE PASSED VALUE IS EMPTY STRING OR NOT
 * RETURN `true` IF STRING IS EMPTY ELSE RETURN `false`
 */
export function isEmpty(val) {
  let isValEmpty = true;
  if (!_.isNil(val) && _.trim(String(val)).length > 0) {
    isValEmpty = false;
  }
  return isValEmpty;
}

/**
 * CHECKS IF THE PASSED VALUE IS VALID EMAIL
 * RETURN `true` IF VALID ELSE RETURN `false`
 */
export function isEmail(val) {
  let isValid = true;
  const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (isEmpty(val)) {
    isValid = false;
  } else if (!regex.test(val)) {
    isValid = false;
  }
  return isValid;
}

export function isValidMobileNumber(val) {
  let isValid = true;
  const regex = /^\+?[1-9]\d{1,14}$/;

  if (isEmpty(val)) {
    isValid = false;
  } else if (!regex.test(val)) {
    isValid = false;
  }
  return isValid;
}

/* To handle required validation */
export function requireValidate(fieldName, value, isBool = false) {
  if (isBool) {
    if (value) {
      return {status: true, message: ''};
    }
    return {status: false, message: ''};
  }
  if (value === '' || value === undefined || value === null) {
    if (fieldName === 'lmsUrl') {
      return {status: false, message: `Please select ${fieldName}`};
    } else {
      return {status: false, message: `Please enter ${fieldName}`};
    }
  }
  return {status: true, message: ''};
}
