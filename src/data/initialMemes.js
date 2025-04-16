export const getRandomLikes = () => Math.floor(Math.random() * 100);

const initialMemes = [
  {
    id: 1,
    name: 'Success Kid',
    image:
      'https://i1.wp.com/media.globalnews.ca/videostatic/297/599/successkid_thumb.jpg?w=1040&quality=70&strip=all',
    likes: 34,
  },
  {
    id: 2,
    name: 'Distracted Boyfriend',
    image:
      'https://upload.wikimedia.org/wikipedia/en/b/be/Disloyal_man_with_his_girlfriend_looking_at_another_girl.jpg',
    likes: 27,
  },
  {
    id: 3,
    name: 'Grumpy Cat',
    image:
      'https://media.cnn.com/api/v1/images/stellar/prod/190517103414-01-grumpy-cat-file-restricted.jpg?q=x_3,y_172,h_1684,w_2993,c_crop/w_800',
    likes: 44,
  },
  {
    id: 4,
    name: 'Woman Yelling at a Cat',
    image:
      'https://upload.wikimedia.org/wikipedia/en/1/1f/WomanYellingAtACat_meme.jpg',
    likes: 59,
  },
  {
    id: 5,
    name: 'Hide the Pain Harold',
    image:
      'https://i.guim.co.uk/img/media/3aab8a0699616ac94346c05f667b40844e46322f/0_123_5616_3432/master/5616.jpg?width=445&dpr=1&s=none&crop=none',
    likes: 22,
  },
  {
    id: 6,
    name: 'Disaster Girl',
    image:
      'https://static01.nyt.com/images/2021/04/30/multimedia/30xp-meme/29xp-meme-videoSixteenByNineJumbo1600-v6.jpg',
    likes: 18,
  },
  {
    id: 7,
    name: 'Roll Safe',
    image: 'https://upload.wikimedia.org/wikipedia/en/7/79/Roll_Safe_meme.jpg',
    likes: 39,
  },
  {
    id: 8,
    name: 'Confused Nick Young',
    image: 'https://en.meming.world/images/en/c/c7/Confused_Nick_Young.jpg',
    likes: 46,
  },
  {
    id: 9,
    name: 'Drake Hotline Bling',
    image:
      'https://www.figma.com/community/resource/df5cc507-a8cb-4858-90ba-04a5c3c83a0f/thumbnail',
    likes: 31,
  },
  {
    id: 10,
    name: 'Two Buttons',
    image:
      'https://i.kym-cdn.com/entries/icons/facebook/000/019/571/dailystruggg.jpg',
    likes: 50,
  },
];

const memesWithLikes = initialMemes.map(meme => ({
  ...meme,
  likes: getRandomLikes(),
}));

export default memesWithLikes;
