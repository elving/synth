import { useOnClickOutside, useRect } from '@beatgig/hooks'
import { useLayoutEffect, useCallback, useRef, useState } from 'react'

import { noop } from '../utils'

const usePopup = (options = {}) => {
  const {
    isOpenByDefault = false,
    onClickOutside = noop,
    onClose = noop,
    onOpen = noop,
    onToggle = noop,
  } = options

  const popupRef = useRef(null)
  const triggerRef = useRef(null)
  const triggerRect = useRect(triggerRef)
  const [isOpen, setOpenState] = useState(isOpenByDefault)
  const [popupRect, setPopupRect] = useState({})

  const open = useCallback(() => {
    onOpen()
    setOpenState(true)
  }, [onOpen, setOpenState])

  const close = useCallback(() => {
    onClose()
    setOpenState(false)
  }, [onClose, setOpenState])

  const toggle = useCallback(() => {
    onToggle()
    setOpenState((prevState) => !prevState)
  }, [onToggle, setOpenState])

  const clickOutsideCallback = useCallback(() => {
    close()
    onClickOutside()
  }, [close, onClickOutside])

  useOnClickOutside(popupRef, clickOutsideCallback, [triggerRef])

  /**
   * We don't use the `useRect` hook for the popup element because it is not
   * rendered by the time the hook tries to get it's DOMRect object. In this
   * case, we have to run a useLayoutEffect that checks when the popup is both
   * opened and rendered to get it's DOMRect object and pass it to the
   * `ControlledPopup` component so it can position itself correctly.
   */
  useLayoutEffect(() => {
    if (isOpen && popupRef.current) {
      setPopupRect(popupRef.current.getBoundingClientRect())
    }
  }, [isOpen])

  return {
    close,
    isOpen,
    open,
    popupRef,
    props: { popupRect, triggerRect },
    toggle,
    triggerRef,
  }
}

export default usePopup
