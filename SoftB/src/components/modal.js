import React from 'react';
import { AlertDialog, Button } from 'native-base';

export const Modal = ({ isOpen, onClose, ref, text, onPress, header }) => {
  return (
    <AlertDialog leastDestructiveRef={ref} isOpen={isOpen} onClose={onClose}>
      <AlertDialog.Content>
        {header && (
          <>
            <AlertDialog.CloseButton />
            <AlertDialog.Header>{header}</AlertDialog.Header>
          </>
        )}
        <AlertDialog.Body mt="5" mx="2">
          {text}
        </AlertDialog.Body>
        <AlertDialog.Footer>
          <Button.Group space={2}>
            <Button
              variant="unstyled"
              colorScheme="coolGray"
              onPress={onClose}
              ref={ref}>
              Cancel
            </Button>
            <Button colorScheme="danger" onPress={onPress}>
              Confirm
            </Button>
          </Button.Group>
        </AlertDialog.Footer>
      </AlertDialog.Content>
    </AlertDialog>
  );
};
