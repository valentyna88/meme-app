import { useEffect, useState } from 'react';
import { Card, CardBody, CardHeader, CardFooter } from '@heroui/card';
import { Image } from '@heroui/image';
import initialMemes from '../data/initialMemes';

const MemeList = () => {
  const [memes, setMemes] = useState([]);

  useEffect(() => {
    const storedMemes = localStorage.getItem('memes');
    if (storedMemes) {
      setMemes(JSON.parse(storedMemes));
    } else {
      setMemes(initialMemes);
      localStorage.setItem('memes', JSON.stringify(initialMemes));
    }
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {memes.map(meme => (
        <Card key={meme.id}>
          <CardHeader>
            <Image
              src="https://heroui.com/images/hero-card-complete.jpeg"
              alt={meme.name}
              className="rounded-xl object-cover w-full"
            />
          </CardHeader>
          <CardBody>
            <h3 className="text-lg font-semibold">{meme.name}</h3>
            <p className="text-sm text-gray-500">Likes: {meme.likes}</p>
          </CardBody>
          <CardFooter>
            <a
              href="https://heroui.com/images/hero-card-complete.jpeg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline text-sm"
            >
              View full image
            </a>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default MemeList;
