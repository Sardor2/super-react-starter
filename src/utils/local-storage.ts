export const setStorage = (name: string, value: any) => {
  localStorage.setItem(name, value);
};

export const getStorage = (name: string) => {
  const item = localStorage.getItem(name);
  return item;
};

export const removeStorage = (name: string) => {
  localStorage.removeItem(name);
};
