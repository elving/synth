import React, { Fragment } from 'react'
import styled from 'styled-components'

import { Button, Flex, Popup, usePopup } from '../src'

const Box = styled(Flex)`
  background-color: ${({ bg }) => bg || 'rgba(0, 0, 0, 0.15)'};
  height: ${({ height }) => height || 'inherit'};
  max-width: ${({ maxWidth }) => maxWidth || 'inherit'};
  padding: 15px;
  width: ${({ maxWidth, width }) => (width || maxWidth ? '100%' : 'inherit')};
`

const PopupWrapper = styled.div`
  min-height: 300px;
  position: relative;
  transform: translateZ(0);
  max-width: ${({ maxWidth }) => maxWidth || '100%'};
  width: 100%;
`

const CardWrapper = styled.div`
  max-width: ${({ maxWidth }) => maxWidth || '480px'};
  width: 100%;
`

const StyledPopup = styled(Popup)`
  width: 320px;
`

const PopupWithHookInner = (props = {}) => {
  const { isOpen, open, popupRef, props: popupProps, triggerRef } = usePopup(
    props,
  )

  console.log('triggerRef', triggerRef, Button)

  return (
    <Fragment>
      <Button ref={triggerRef} onClick={open}>
        Open Popup
      </Button>

      {isOpen ? (
        <StyledPopup {...props} {...popupProps} ref={popupRef}>
          Popup Content
        </StyledPopup>
      ) : null}
    </Fragment>
  )
}

const PopupWithHook = (props) => <PopupWithHookInner {...props} />

export { Box, CardWrapper, PopupWrapper, PopupWithHook }
