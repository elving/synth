import React from 'react'
import { storiesOf } from '@storybook/react'
import centered from '@storybook/addon-centered/react'
import styled from 'styled-components'

import Popup from '../src/Popup'
import usePopup from '../src/usePopup'
import { Button } from '../../Button'

const CustomPopup = styled(Popup)`
  width: 320px;
`

const WithHook = (props = {}) => {
  const { isOpen, open, popupRef, props: popupProps, triggerRef } = usePopup(
    props,
  )

  return (
    <div>
      <Button ref={triggerRef} onClick={open}>
        Open Popup
      </Button>

      {isOpen ? (
        <CustomPopup {...props} {...popupProps} ref={popupRef}>
          Popup Content
        </CustomPopup>
      ) : null}
    </div>
  )
}

storiesOf('Popup', module)
  .addDecorator(centered)
  .add('component', () => <CustomPopup>Popup Content</CustomPopup>)
  .add('hook', () => <WithHook />)
  .add('left-bottom', () => <WithHook x="left" y="bottom" isOpenByDefault />)
  .add('left-bottom with offset', () => (
    <WithHook x="left" y="bottom" isOpenByDefault xOffset={-10} yOffset={10} />
  ))
  .add('center-bottom', () => (
    <WithHook x="center" y="bottom" isOpenByDefault />
  ))
  .add('center-bottom with offset', () => (
    <WithHook
      x="center"
      y="bottom"
      isOpenByDefault
      xOffset="-30px"
      yOffset={5}
    />
  ))
  .add('right-bottom', () => <WithHook x="right" y="bottom" isOpenByDefault />)
  .add('right-bottom with offset', () => (
    <WithHook x="right" y="bottom" isOpenByDefault xOffset={-30} yOffset={10} />
  ))
  .add('left-top', () => <WithHook x="left" y="top" isOpenByDefault />)
  .add('left-top with offset', () => (
    <WithHook x="left" y="top" isOpenByDefault xOffset={-30} yOffset="-5%" />
  ))
  .add('center-top', () => <WithHook x="center" y="top" isOpenByDefault />)
  .add('center-top with offset', () => (
    <WithHook x="center" y="top" isOpenByDefault xOffset={-10} yOffset={15} />
  ))
  .add('right-top', () => <WithHook x="right" y="top" isOpenByDefault />)
  .add('right-top with offset', () => (
    <WithHook x="right" y="top" isOpenByDefault xOffset={10} yOffset={10} />
  ))
  .add('left-center', () => <WithHook x="left" y="center" isOpenByDefault />)
  .add('left-center with offset', () => (
    <WithHook x="left" y="center" isOpenByDefault xOffset={-5} yOffset={-5} />
  ))
  .add('right-center', () => <WithHook x="right" y="center" isOpenByDefault />)
  .add('right-center with offset', () => (
    <WithHook
      x="right"
      y="center"
      isOpenByDefault
      xOffset={-10}
      yOffset={-15}
    />
  ))
