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
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from '@heroui/react';
import { Input } from '@heroui/input';

const MemeTable = () => {
  const [memes, setMemes] = useState([
    { id: 1, name: 'Distracted Boyfriend', likes: 25 },
    { id: 2, name: 'Mocking SpongeBob', likes: 40 },
  ]);

  const [selectedMeme, setSelectedMeme] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleEditClick = meme => {
    setSelectedMeme(meme);
    onOpen();
  };

  const handleSave = () => {
    const updatedMemes = memes.map(meme =>
      meme.id === selectedMeme.id ? selectedMeme : meme
    );
    setMemes(updatedMemes);
    onClose();
    setSelectedMeme(null);
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

      {selectedMeme && (
        <Modal isOpen={isOpen} onOpenChange={onClose}>
          <ModalContent>
            <ModalHeader>Edit Meme</ModalHeader>
            <ModalBody>
              <div>
                <Input
                  label="Meme Name"
                  value={selectedMeme.name}
                  onChange={e =>
                    setSelectedMeme({ ...selectedMeme, name: e.target.value })
                  }
                />
                <Input
                  label="Likes"
                  type="number"
                  value={selectedMeme.likes}
                  onChange={e =>
                    setSelectedMeme({ ...selectedMeme, likes: e.target.value })
                  }
                />
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
              <Button color="primary" onPress={handleSave}>
                Save
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </div>
  );
};

export default MemeTable;
