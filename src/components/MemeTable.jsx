import { useState } from 'react';
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from '@heroui/table';
import { Button } from '@heroui/button';
import EditMemeModal from './EditMemeModal';
import AddMemeModal from './AddMemeModal';

const MemeTable = () => {
  const [memes, setMemes] = useState([
    { id: 1, name: 'Distracted Boyfriend', likes: 25 },
    { id: 2, name: 'Mocking SpongeBob', likes: 40 },
  ]);

  const [selectedMeme, setSelectedMeme] = useState(null);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [newMeme, setNewMeme] = useState({ name: '', likes: '' });
  const [isNewOpen, setIsNewOpen] = useState(false);

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
    setMemes([...memes, { ...newMeme, id: memes.length + 1 }]);
    setNewMeme({ name: '', likes: '' });
    setIsNewOpen(false);
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
    </div>
  );
};

export default MemeTable;
