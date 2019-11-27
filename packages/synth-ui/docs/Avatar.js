import React from 'react'
import { Avatar, Flex, Spacer } from '../src'

const Intro = () => (
  <Flex alignItems="baseline">
    <Avatar src="https://randomuser.me/api/portraits/men/1.jpg" />
    <Spacer left scale={3} />
    <Avatar src="https://randomuser.me/api/portraits/men/1.jpg" scale={1} />
    <Spacer left scale={3} />
    <Avatar src="https://randomuser.me/api/portraits/men/1.jpg" scale={2} />
    <Spacer left scale={3} />
    <Avatar src="https://randomuser.me/api/portraits/men/1.jpg" scale={3} />
    <Spacer left scale={3} />
    <Avatar src="https://randomuser.me/api/portraits/men/1.jpg" scale={4} />
    <Spacer left scale={3} />
    <Avatar src="https://randomuser.me/api/portraits/men/1.jpg" scale={5} />
  </Flex>
)

export { Intro }
