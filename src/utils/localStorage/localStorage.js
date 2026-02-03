const localStorageGetItem = () => {
  const LSGetItem = localStorage.getItem("card");

  if (LSGetItem) {
    const data = JSON.parse(LSGetItem);
    return data;
  }
  return [];
};

const saveCardToLS = (card) => {
  const cardStringified = JSON.stringify(card);
  localStorage.setItem("card", cardStringified);
};

const addCardToLS = (id) => {
  const card = localStorageGetItem();
  card.push(id);
  saveCardToLS(card);
};

export { localStorageGetItem as getStoreCard, addCardToLS as addStoreCard };
