const generateNumericString = (length) => {
  const result = [];

  for (let i = 0; i < length; i += 1) {
    result.push(Math.trunc(Math.random() * 9) + 1);
  }

  return result.join('');
};

const SEPARATOR = '-';

export const generatePhoneNumber = (separator = null) => {
  const phoneNumber = [3, 3, 2, 3].map((sectionLength) => generateNumericString(sectionLength)).join(separator === null ? SEPARATOR : separator);

  return `+49 ${phoneNumber}`;
};