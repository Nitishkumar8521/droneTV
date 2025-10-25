import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, Text } from '@chakra-ui/react';

export default function PropertyModal({ isOpen, onClose, property }) {
  if (!property) return null;
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{property.name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text><b>Type:</b> {property.type}</Text>
          <Text><b>Location:</b> {property.location}</Text>
          <Text><b>Price:</b> ₹{property.price}</Text>
          <Text><b>Description:</b> {property.description}</Text>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
