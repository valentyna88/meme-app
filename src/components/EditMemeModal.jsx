import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from '@heroui/react';
import { Input } from '@heroui/input';
import { Button } from '@heroui/button';

const EditMemeModal = ({ isOpen, onClose, meme, setMeme, onSave }) => {
  return (
    <Modal isOpen={isOpen} onOpenChange={onClose}>
      <ModalContent>
        <ModalHeader>Edit Meme</ModalHeader>
        <ModalBody>
          <Input
            label="Meme Name"
            value={meme.name}
            onChange={e => setMeme({ ...meme, name: e.target.value })}
          />
          <Input
            label="Likes"
            type="number"
            value={meme.likes}
            onChange={e => setMeme({ ...meme, likes: e.target.value })}
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

export default EditMemeModal;
