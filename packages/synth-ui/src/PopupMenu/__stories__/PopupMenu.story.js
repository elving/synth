import { storiesOf } from '@storybook/react'
import centered from '@storybook/addon-centered/react'
import React from 'react'
import styled from 'styled-components'

import PopupMenuDivider from '../src/PopupMenuDivider'
import PopupMenuItem from '../src/PopupMenuItem'
import usePopupMenu from '../src/usePopupMenu'
import { Button } from '../../Button'
import { LogoutIcon } from '../../Icons/src'

const CustomPopupMenu = styled.div`
  width: 220px;
`

const PopupMenu = (props = {}) => {
  const { isOpen, open, triggerRef, Popup } = usePopupMenu(props)

  return (
    <div>
      <Button ref={triggerRef} onClick={open}>
        Open Popup
      </Button>
      {isOpen && (
        <CustomPopupMenu as={Popup}>
          <PopupMenuItem>Item 1</PopupMenuItem>
          <PopupMenuItem>Item 2</PopupMenuItem>
          <PopupMenuDivider />
          <PopupMenuItem icon={<LogoutIcon />}>Item 3</PopupMenuItem>
        </CustomPopupMenu>
      )}
    </div>
  )
}

storiesOf('Popup/PopupMenu', module)
  .addDecorator(centered)
  .add('default', () => (
    <PopupMenu x="left" y="bottom" yOffset={5} isOpenByDefault />
  ))
