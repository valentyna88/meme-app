import { useEffect, useState } from 'react';
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from '@heroui/table';
import { Button } from '@heroui/button';
import EditMemeModal from '../components/EditMemeModal';
import AddMemeModal from '../components/AddMemeModal';
import ConfirmDeleteModal from '../components/ConfirmDeleteModal';
import memesWithLikes, { getRandomLikes } from '../data/initialMemes';

const MemeTable = () => {
  const [memes, setMemes] = useState(() => {
    const storedMemes = localStorage.getItem('memes');
    return storedMemes ? JSON.parse(storedMemes) : memesWithLikes;
  });

  const [selectedMeme, setSelectedMeme] = useState(null);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [newMeme, setNewMeme] = useState({ name: '', likes: '' });
  const [isNewOpen, setIsNewOpen] = useState(false);

  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [memeToDelete, setMemeToDelete] = useState(null);

  useEffect(() => {
    if (memes.length) {
      console.log('Saving memes to localStorage:', memes);
      localStorage.setItem('memes', JSON.stringify(memes));
    }
  }, [memes]);

  const handleEditClick = meme => {
    setSelectedMeme(meme);
    setIsEditOpen(true);
  };

  const handleEditSave = () => {
    setMemes(
      memes.map(meme => (meme.id === selectedMeme.id ? selectedMeme : meme))
    );
    setIsEditOpen(false);
    setSelectedMeme(null);
  };

  const handleNewSave = () => {
    setMemes([
      ...memes,
      { ...newMeme, id: memes.length + 1, likes: getRandomLikes() },
    ]);
    setNewMeme({ name: '', likes: '' });
    setIsNewOpen(false);
  };

  const handleDeleteClick = meme => {
    setMemeToDelete(meme);
    setIsDeleteOpen(true);
  };

  const handleDeleteConfirm = () => {
    setMemes(memes.filter(meme => meme.id !== memeToDelete.id));
    setIsDeleteOpen(false);
    setMemeToDelete(null);
  };

  return (
    <div>
      <Table aria-label="Memes Table">
        <TableHeader>
          <TableColumn>ID</TableColumn>
          <TableColumn>Name</TableColumn>
          <TableColumn>Likes</TableColumn>
          <TableColumn>Actions</TableColumn>
        </TableHeader>
        <TableBody>
          {memes.map(meme => (
            <TableRow key={meme.id}>
              <TableCell>{meme.id}</TableCell>
              <TableCell>{meme.name}</TableCell>
              <TableCell>{meme.likes}</TableCell>
              <TableCell>
                <Button onPress={() => handleEditClick(meme)}>Edit</Button>
                <Button color="danger" onPress={() => handleDeleteClick(meme)}>
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Button onPress={() => setIsNewOpen(true)}>Add New Meme</Button>

      {selectedMeme && (
        <EditMemeModal
          isOpen={isEditOpen}
          onClose={() => setIsEditOpen(false)}
          meme={selectedMeme}
          setMeme={setSelectedMeme}
          onSave={handleEditSave}
        />
      )}

      <AddMemeModal
        isOpen={isNewOpen}
        onClose={() => setIsNewOpen(false)}
        newMeme={newMeme}
        setNewMeme={setNewMeme}
        onSave={handleNewSave}
      />

      <ConfirmDeleteModal
        isOpen={isDeleteOpen}
        onClose={() => setIsDeleteOpen(false)}
        onConfirm={handleDeleteConfirm}
        memeName={memeToDelete?.name || ''}
      />
    </div>
  );
};

export default MemeTable;
