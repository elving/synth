import React from 'react'
import {
  Button,
  Checkbox,
  Flex,
  ConfirmationModal,
  FormRow,
  FormField,
  ModalContent,
  ModalHeader,
  ModalTitle,
  Text,
  usePopup,
} from '@beatgig/synth-ui'

const basic = () => {
  console.log('Checkbox => ', Checkbox, Checkbox.propTypes)
  return <Checkbox />
}

basic.story = {
  parameters: { foo: 'bar' },
}

export { basic }

export const BasicConfirmationModal = (props) => {
  const {
    close,
    isOpen,
    open,
    popupRef: modalRef,
    props: modalProps,
    triggerRef,
  } = usePopup()

  return (
    <div style={{ padding: 20 }}>
      <FormField label={'lol'} centered>
        Boom
      </FormField>

      <Button ref={triggerRef} onClick={open}>
        Open Modal
      </Button>

      <div id="confirmation-modal-target" />

      {isOpen && (
        <ConfirmationModal
          {...props}
          {...modalProps}
          container={document.getElementById('confirmation-modal-target')}
          cancelLabel="No, stop it!"
          close={close}
          confirmLabel="Yes, do it now!"
          onCancel={close}
          onConfirm={() => console.log('confirmed!')}
          ref={modalRef}
        >
          <ModalHeader close={close}>
            <ModalTitle>Modal Title</ModalTitle>
          </ModalHeader>
          <ModalContent>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
          </ModalContent>
        </ConfirmationModal>
      )}
    </div>
  )
}

// storiesOf('Modal/ConfirmationModal', module)
//   .add('default', () => <WithHook />)
//   .add('with custom cancel button', () => (
//     <WithHook
//       renderCancel={() => (
//         <Button intent="danger" onClick={() => console.log('canceled!')}>
//           Nope
//         </Button>
//       )}
//     />
//   ))
//   .add('with custom confirm button', () => (
//     <WithHook
//       renderConfirm={() => (
//         <Button intent="success" onClick={() => console.log('confirmed!')}>
//           Yes!
//         </Button>
//       )}
//     />
//   ))
