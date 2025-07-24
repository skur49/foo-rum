const EXP_DAYS = 7;

const getExpirationDate = () => {
  const expiration = new Date();
  expiration.setDate(expiration.getDate() + EXP_DAYS);
  return expiration;
};

export const persist = <T>(name: string, value: T): T => {
  const data = {
    value: value,
    expiration: getExpirationDate(),
  };
  localStorage.setItem(name, JSON.stringify(data));

  return value;
};

export const hydrate = <T>(name: string): T | null => {
  const storedData = localStorage.getItem(name);

  if (!storedData) {
    return null;
  }

  const parsedData = JSON.parse(storedData) as { value: T; expiration: string };

  // Check if the data has expired
  const expirationDate = new Date(parsedData.expiration);
  if (expirationDate < new Date()) {
    localStorage.removeItem(name);
    return null;
  }

  return parsedData.value;
};

export const remove = <T>(name: string) => {
  const removedValue = hydrate<T>(name);
  localStorage.removeItem(name);

  return removedValue;
};
