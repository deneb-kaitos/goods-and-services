const alphaSuffixes = Object.freeze((new Array(26)).fill(null).map((_, idx) => String.fromCharCode(65 + idx)));


export const generateBuildingNumber = () => {
  const buildingNumber = Math.trunc(Math.random() * 100) + 1;
  const shouldAddSuffix = 0.35 < Math.random() < 0.65;
  const suffix = shouldAddSuffix === true ? alphaSuffixes[Math.trunc(Math.random() * alphaSuffixes.length)] : '';

  return `${buildingNumber}${suffix}`;
};