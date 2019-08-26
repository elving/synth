import React from 'react'
import { storiesOf } from '@storybook/react'

import Header from '../src/Header'
import HeaderLink from '../src/HeaderLink'
import { Avatar } from '../../Avatar'
import { ChevronDownIcon } from '../../Icons'
import { Flex } from '../../Flex'
import { MiniLogo } from '../../Logo'
import { PrimaryButton } from '../../Button'
import { SearchInput } from '../../Input'
import { Spacer } from '../../Spacer'

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
          <PrimaryButton secondary>Register</PrimaryButton>
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
          <Avatar scale={2} src="https://i.pravatar.cc/40" />
          <Spacer inline right />
          <ChevronDownIcon size={24} />
        </Flex>
      </Header>
    </div>
  ))
