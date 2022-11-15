const numbersOnlyFormatter = (value: string) => value.replaceAll(/[^0-9]/g, '');
const trimFormatter = (value: string) => value.trim();

export { numbersOnlyFormatter, trimFormatter };
