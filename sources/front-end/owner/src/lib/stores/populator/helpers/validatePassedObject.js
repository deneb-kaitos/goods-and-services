export const validatePassedObject = (o = null) => {
  if (o === null) {
    throw new ReferenceError('object is null/undefined');
  }

  if (Array.isArray(o) === true && o.length === 0) {
    throw new RangeError('array is empty');
  }

  if (o instanceof Map && o.size === 0) {
    throw new RangeError('Map is empty');
  }

  if (o instanceof Set && o.size === 0) {
    throw new RangeError('Set is empty');
  }
}