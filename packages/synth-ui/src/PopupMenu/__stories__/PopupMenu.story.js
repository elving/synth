import { storiesOf } from '@storybook/react'
import centered from '@storybook/addon-centered/react'
import React from 'react'
import styled from 'styled-components'

import PopupMenu from '../src/PopupMenu'
import PopupMenuDivider from '../src/PopupMenuDivider'
import PopupMenuItem from '../src/PopupMenuItem'
import { usePopup } from '../../Popup'
import { Button } from '../../Button'
import { LogoutIcon } from '../../Icons/src'

const CustomPopupMenu = styled(PopupMenu)`
  width: 220px;
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

      {isOpen && (
        <CustomPopupMenu {...props} {...popupProps} ref={popupRef}>
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
    <WithHook x="left" y="bottom" yOffset={5} isOpenByDefault />
  ))
