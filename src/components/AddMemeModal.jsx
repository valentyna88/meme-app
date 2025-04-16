import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from '@heroui/react';
import { Input } from '@heroui/input';
import { Button } from '@heroui/button';

const AddMemeModal = ({ isOpen, onClose, newMeme, setNewMeme, onSave }) => {
  return (
    <Modal isOpen={isOpen} onOpenChange={onClose}>
      <ModalContent>
        <ModalHeader>Create New Meme</ModalHeader>
        <ModalBody>
          <Input
            label="Meme Name"
            value={newMeme.name}
            onChange={e => setNewMeme({ ...newMeme, name: e.target.value })}
          />
          <Input
            label="Likes"
            type="number"
            value={newMeme.likes}
            onChange={e => setNewMeme({ ...newMeme, likes: e.target.value })}
          />
          <Input
            label="Image URL (.jpg)"
            value={newMeme.image}
            onChange={e => setNewMeme({ ...newMeme, image: e.target.value })}
            isRequired
            placeholder="https://example.com/meme.jpg"
          />
        </ModalBody>
        <ModalFooter>
          <Button color="danger" variant="light" onPress={onClose}>
            Close
          </Button>
          <Button color="primary" onPress={onSave}>
            Save
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AddMemeModal;
