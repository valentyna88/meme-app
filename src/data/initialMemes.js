export const getRandomLikes = () => Math.floor(Math.random() * 100);

const initialMemes = [
  {
    id: 1,
    name: 'Distracted Boyfriend',
    likes: 25,
  },
  {
    id: 2,
    name: 'Mocking SpongeBob',
    likes: 40,
  },
  {
    id: 3,
    name: 'Woman Yelling at a Cat',
    likes: 52,
  },
  {
    id: 4,
    name: 'Drake Hotline Bling',
    likes: 60,
  },
  {
    id: 5,
    name: 'Two Buttons',
    likes: 33,
  },
  {
    id: 6,
    name: 'Surprised Pikachu',
    likes: 41,
  },
  {
    id: 7,
    name: 'Change My Mind',
    likes: 37,
  },
  {
    id: 8,
    name: 'Expanding Brain',
    likes: 29,
  },
  {
    id: 9,
    name: 'Is This a Pigeon?',
    likes: 44,
  },
  {
    id: 10,
    name: 'Success Kid',
    likes: 55,
  },
];

const memesWithLikes = initialMemes.map(meme => ({
  ...meme,
  likes: getRandomLikes(),
}));

export default memesWithLikes;
