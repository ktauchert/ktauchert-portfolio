const getLocalStorage = (storageKey = null) => {
  if (!storageKey) return 0;
  return JSON.parse(localStorage.getItem(storageKey));
};

const setLocalStorage = (storageKey = null, StorageContent = null) => {
  if (!storageKey) return 0;
  if (!StorageContent) return 0;

  localStorage.setItem(storageKey, JSON.stringify(StorageContent));
  return 1;
};

export { getLocalStorage, setLocalStorage };
