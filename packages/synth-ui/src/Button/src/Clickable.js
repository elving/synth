import styled from 'styled-components'

import Button from './Button'

const Clickable = styled(Button)`
  &,
  &:hover,
  &:active,
  &:focus {
    background-color: transparent;
    border-color: transparent;
  }
`

export default Clickable
