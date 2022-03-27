import React from 'react';
import {
  Modal as ChakraModal,
  ModalOverlay as ChakraModalOverlay,
  ModalContent as ChakraModalContent,
  ModalHeader as ChakraModalHeader,
} from '@chakra-ui/react';

export {
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react';

export const Modal = React.forwardRef(
  (
    {
      autoFocus,
      blockScrollOnMount,
      children,
      closeOnEsc,
      closeOnOverlayClick,
      finalFocusRef,
      id,
      initialFocusRef,
      isCentered,
      isOpen,
      lockFocusAcrossFrames,
      maxWidth,
      motionPreset,
      onClose,
      onCloseComplete,
      onEsc,
      onOverlayClick,
      portalProps,
      preserveScrollBarGap,
      returnFocusOnClose,
      scrollBehavior = 'inside',
      size,
      trapFocus,
      variant,
      ...props
    },
    ref
  ) => {
    const modalProps = {
      autoFocus,
      blockScrollOnMount,
      closeOnEsc,
      closeOnOverlayClick,
      finalFocusRef,
      id,
      initialFocusRef,
      isCentered,
      isOpen,
      lockFocusAcrossFrames,
      maxWidth,
      motionPreset,
      onClose,
      onClose,
      onCloseComplete,
      onEsc,
      onOverlayClick,
      portalProps,
      preserveScrollBarGap,
      returnFocusOnClose,
      scrollBehavior,
      size,
      trapFocus,
      variant,
    };

    return (
      <ChakraModal {...modalProps} ref={ref}>
        <ChakraModalOverlay />
        <ChakraModalContent
          maxWidth={maxWidth}
          marginTop="2.5%"
          marginBottom="2.5%"
          {...props}
        >
          {children}
        </ChakraModalContent>
      </ChakraModal>
    );
  }
);

Modal.displayName = 'Modal';

export const ModalHeader = React.forwardRef((props, ref) => {
  return (
    <ChakraModalHeader
      borderTopLeftRadius="md"
      borderTopRightRadius="md"
      background="white"
      borderBottom="1px solid"
      borderBottomColor="gray.100"
      {...props}
      ref={ref}
    />
  );
});

ModalHeader.displayName = 'ModalHeader';
