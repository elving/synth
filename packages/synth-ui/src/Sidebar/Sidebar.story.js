import React from 'react'
import { storiesOf } from '@storybook/react'

import Sidebar from './Sidebar'
import SidebarLink from './SidebarLink'
import { AdminIcon, ArtistIcon, InboxIcon } from '../Icons'

storiesOf('Sidebar', module).add('default', () => (
  <div style={{ width: '100vw' }}>
    <Sidebar>
      <SidebarLink icon={<AdminIcon height={26} width="auto" />}>
        Admin
      </SidebarLink>
      <SidebarLink icon={<ArtistIcon height={26} width="auto" />}>
        Discovery
      </SidebarLink>
      <SidebarLink icon={<InboxIcon height={26} width="auto" />}>
        Bookings
      </SidebarLink>
    </Sidebar>
  </div>
))
