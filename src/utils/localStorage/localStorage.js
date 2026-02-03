const localStorageGetItem = () => {
  const LSGetItem = localStorage.getItem("card");
  if (LSGetItem) {
    const data = JSON.parse(LSGetItem);
    return data;
  }
  return [];
};
