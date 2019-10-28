import { storiesOf } from '@storybook/react'
import faker from 'faker'
import centered from '@storybook/addon-centered/react'
import React from 'react'
import styled from 'styled-components'

import TagSelect from '../src/TagSelect'

const CustomTagSelect = styled(TagSelect)`
  width: 450px;
`

const username = [
  faker.internet.userName(),
  faker.internet.userName(),
  faker.internet.userName(),
  faker.internet.userName(),
  faker.internet.userName(),
  faker.internet.userName(),
]

const tags = [
  {
    value: username[0],
    label: username[0],
  },
  {
    value: username[1],
    label: username[1],
  },
  {
    value: username[2],
    label: username[2],
  },
  {
    value: username[3],
    label: username[3],
  },
  {
    value: username[4],
    label: username[4],
  },
  {
    value: username[5],
    label: username[5],
  },
]

storiesOf('TagSelect', module)
  .addDecorator(centered)
  .add('default', () => <CustomTagSelect tags={tags} />)
  .add('with placeholder', () => (
    <CustomTagSelect tags={tags} placeholder="Select some tags..." />
  ))
  .add('with pre-selected tags', () => (
    <CustomTagSelect
      tags={tags}
      defaultSelected={[tags[1], tags[3], tags[4]]}
    />
  ))
  .add('can create tags', () => (
    <CustomTagSelect
      canCreateTags
      tags={tags}
      placeholder="Select some tags..."
    />
  ))
  .add('single value', () => (
    <CustomTagSelect
      canCreateTags
      placeholder="Select some tags..."
      single
      tags={tags}
    />
  ))
