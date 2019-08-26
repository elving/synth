import React from 'react'
import { storiesOf } from '@storybook/react'
import centered from '@storybook/addon-centered/react'

import Popup from '../src/Popup'
import usePopup from '../src/usePopup'
import { Button } from '../../Button'

const FromHook = (props = {}) => {
  const { isOpen, open, triggerRef, Popup: HookPopup } = usePopup(props)

  return (
    <div>
      <Button ref={triggerRef} onClick={open}>
        Open Popup
      </Button>
      {isOpen ? <HookPopup>Popup Content</HookPopup> : null}
    </div>
  )
}

storiesOf('Popup', module)
  .addDecorator(centered)
  .add('component', () => <Popup>Popup Content</Popup>)
  .add('hook', () => <FromHook />)
  .add('left-bottom', () => <FromHook x="left" y="bottom" isOpenByDefault />)
  .add('left-bottom with offset', () => (
    <FromHook x="left" y="bottom" isOpenByDefault xOffset={-10} yOffset={10} />
  ))
  .add('center-bottom', () => (
    <FromHook x="center" y="bottom" isOpenByDefault />
  ))
  .add('center-bottom with offset', () => (
    <FromHook
      x="center"
      y="bottom"
      isOpenByDefault
      xOffset="-30px"
      yOffset={5}
    />
  ))
  .add('right-bottom', () => <FromHook x="right" y="bottom" isOpenByDefault />)
  .add('right-bottom with offset', () => (
    <FromHook x="right" y="bottom" isOpenByDefault xOffset={-30} yOffset={10} />
  ))
  .add('left-top', () => <FromHook x="left" y="top" isOpenByDefault />)
  .add('left-top with offset', () => (
    <FromHook x="left" y="top" isOpenByDefault xOffset={-30} yOffset="-5%" />
  ))
  .add('center-top', () => <FromHook x="center" y="top" isOpenByDefault />)
  .add('center-top with offset', () => (
    <FromHook x="center" y="top" isOpenByDefault xOffset={-10} yOffset={15} />
  ))
  .add('right-top', () => <FromHook x="right" y="top" isOpenByDefault />)
  .add('right-top with offset', () => (
    <FromHook x="right" y="top" isOpenByDefault xOffset={10} yOffset={10} />
  ))
  .add('left-center', () => <FromHook x="left" y="center" isOpenByDefault />)
  .add('left-center with offset', () => (
    <FromHook x="left" y="center" isOpenByDefault xOffset={-5} yOffset={-5} />
  ))
  .add('right-center', () => <FromHook x="right" y="center" isOpenByDefault />)
  .add('right-center with offset', () => (
    <FromHook
      x="right"
      y="center"
      isOpenByDefault
      xOffset={-10}
      yOffset={-15}
    />
  ))
