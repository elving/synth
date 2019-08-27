import { createPortal } from 'react-dom'
import { storiesOf } from '@storybook/react'
import React, { Fragment } from 'react'
import styled from 'styled-components'

import Header from '../src/Header'
import HeaderLink from '../src/HeaderLink'
import { Avatar } from '../../Avatar'
import { ChevronDownIcon, LogoutIcon } from '../../Icons'
import { Flex } from '../../Flex'
import { MiniLogo } from '../../Logo'
import { Button, Clickable } from '../../Button'
import { SearchInput } from '../../Input'
import { Spacer } from '../../Spacer'
import { PopupMenuDivider, PopupMenuItem, usePopupMenu } from '../../PopupMenu'

const UserAvatarClickable = styled(Clickable)`
  padding: 0;
`

const CustomPopupMenu = styled.div`
  width: 220px;
`

const UserPopupMenu = (props = {}) => {
  const { isOpen, open, Popup, triggerRef } = usePopupMenu(props)

  return (
    <Fragment>
      <UserAvatarClickable
        icon={<ChevronDownIcon />}
        iconPosition="right"
        onClick={open}
        ref={triggerRef}
      >
        <Avatar scale={1} src="https://i.pravatar.cc/40" />
      </UserAvatarClickable>

      {isOpen &&
        createPortal(
          <CustomPopupMenu as={Popup}>
            <PopupMenuItem>Lists</PopupMenuItem>
            <PopupMenuItem>Account</PopupMenuItem>
            <PopupMenuDivider />
            <PopupMenuItem icon={<LogoutIcon />}>Logout</PopupMenuItem>
          </CustomPopupMenu>,
          document.body,
        )}
    </Fragment>
  )
}

storiesOf('Header', module)
  .add('default', () => (
    <Flex full>
      <Header>
        <Flex alignItems="center">
          <MiniLogo height={40} />
          <Spacer inline right scale={5} />
          <HeaderLink href="#">Artists</HeaderLink>
          <Spacer inline right scale={3} />
          <HeaderLink href="#">Genres</HeaderLink>
        </Flex>
        <Flex alignItems="center">
          <SearchInput />
          <Spacer inline right scale={3} />
          <Button outline primary>
            Register
          </Button>
          <Spacer inline right scale={3} />
          <HeaderLink href="#">Login</HeaderLink>
        </Flex>
      </Header>
    </Flex>
  ))
  .add('logged in', () => (
    <div style={{ width: '100vw' }}>
      <Header>
        <Flex alignItems="center">
          <MiniLogo height={40} />
          <Spacer inline right scale={5} />
          <HeaderLink href="#">Artists</HeaderLink>
          <Spacer inline right scale={3} />
          <HeaderLink href="#">Genres</HeaderLink>
        </Flex>
        <Flex alignItems="center">
          <SearchInput />
          <Spacer inline right scale={3} />
          <UserPopupMenu y="bottom" yOffset="3%" x="right" />
        </Flex>
      </Header>
    </div>
  ))
