import React, { Fragment, useRef } from 'react'
import styled from 'styled-components'

import { Avatar, Button, Flex, Popup, usePopup } from '../src'

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
  padding: 15px;
  width: 320px;
`

const PopupWithHook = (props) => {
  const { isOpen, popupRef, props: popupProps, toggle, triggerRef } = usePopup(
    props,
  )

  const imgRef = useRef()

  return (
    <Fragment>
      <Avatar scale={1} src="" ref={imgRef} />

      <Button ref={triggerRef} onClick={toggle}>
        {props.triggerLabel}
      </Button>

      {isOpen ? (
        <StyledPopup
          {...props}
          {...popupProps}
          container={document.body}
          ref={popupRef}
        >
          Popup Content
        </StyledPopup>
      ) : null}
    </Fragment>
  )
}

export { Box, CardWrapper, PopupWrapper, PopupWithHook }
