import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { withSynth } from '@beatgig/synth-react'
import { borderRadius, padding } from '@beatgig/synth-styled-components'

import { Button } from '../Button'
import { CloseIcon } from '../Icons'

import { noop } from '../utils'
import { setCloseButtonMarginLeft, setTopContentMargin } from './utils'

/**
 * @type {import('@beatgig/synth-styled-components').SynthStyledComponent<'div'>}
 */
const Container = styled.div`
  ${padding('card')}
  ${borderRadius()}
  ${setTopContentMargin()}
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  display: flex;
  justify-content: space-between;
`

/**
 * @type {import('@beatgig/synth-styled-components').SynthStyledComponent<import('react').ComponentType<import('@beatgig/synth-ui').SynthButtonProps>>}
 */
const CloseButton = styled(Button)`
  ${setCloseButtonMarginLeft()}
`

const ModalHeader = ({
  children = null,
  className = '',
  close = noop,
  onCloseClick = noop,
  synth,
}) => {
  const handleCloseClick = () => {
    close()
    onCloseClick()
  }

  return (
    <Container className={className} synth={synth}>
      {children}
      <CloseButton
        icon={<CloseIcon scale={3} />}
        onClick={handleCloseClick}
        synth={synth}
      />
    </Container>
  )
}

ModalHeader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  close: PropTypes.func,
  onCloseClick: PropTypes.func,
}

export default withSynth(ModalHeader)
