export const loadMemesFromStorage = () => {
  const stored = localStorage.getItem('memes');
  return stored ? JSON.parse(stored) : null;
};

export const saveMemesToStorage = memes => {
  localStorage.setItem('memes', JSON.stringify(memes));
};
