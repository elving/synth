import { useOnClickOutside } from '@beatgig/hooks'
import { useLayoutEffect, useCallback, useRef, useState } from 'react'

import { noop } from '../utils'
import { getRect } from './utils'

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

  const [state, setState] = useState({
    isOpen: isOpenByDefault,
    popupRect: getRect(),
    triggerRect: getRect(),
  })

  const open = useCallback(() => {
    onOpen()

    setState((prevState) => ({
      ...prevState,
      isOpen: true,
    }))
  }, [onOpen, setState])

  const close = useCallback(() => {
    onClose()

    setState((prevState) => ({
      ...prevState,
      isOpen: false,
    }))
  }, [onClose, setState])

  const toggle = useCallback(() => {
    onToggle()

    setState((prevState) => ({
      ...prevState,
      isOpen: !prevState.isOpen,
    }))
  }, [onToggle, setState])

  const clickOutsideCallback = useCallback(() => {
    close()
    onClickOutside()
  }, [close, onClickOutside])

  useOnClickOutside(popupRef, clickOutsideCallback, [triggerRef])

  /**
   * We don't use the `useRect` hook for the popup element because it is not
   * rendered by the time the hook tries to get it's DOMRect object. In this
   * case, we have to run a useLayoutEffect that checks when the popup is both
   * opened and rendered to get it's DOMRect object and return it.
   */
  useLayoutEffect(() => {
    if (state.isOpen && popupRef.current && triggerRef.current) {
      setState((prevState) => ({
        ...prevState,
        popupRect: popupRef.current.getBoundingClientRect(),
        triggerRect: triggerRef.current.getBoundingClientRect(),
      }))
    }
  }, [state.isOpen])

  return {
    close,
    isOpen: state.isOpen,
    open,
    popupRef,
    props: state,
    toggle,
    triggerRef,
  }
}

export default usePopup
