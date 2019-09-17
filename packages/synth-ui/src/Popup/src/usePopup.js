import { useOnClickOutside, useRect } from '@beatgig/hooks'
import { useLayoutEffect, useCallback, useRef, useState } from 'react'

/**
 * @typedef {object} PopupHookData
 * @property {function} close - Function used to close the popup.
 * @property {boolean} isOpen - Boolean flag to determine whether or  not the popup is open.
 * @property {function} open - Function used to open the popup.
 * @property {import('react').RefObject} popupRef - React ref pointing to the popup DOM element.
 * @property {object} props - Props to be passed on to the popup component.
 * @property {function} toggle - Function used to toggle the popup.
 * @property {import('react').RefObject} triggerRef - React ref pointing to the trigger DOM element.
 */

/**
 * Generates everything you need to render and control a popup component.
 *
 * @param {object} options
 * @param {boolean} [options.isOpenByDefault] - Flag that determines if the popup is visible or not.
 * @param {function} [options.onClickOutside] - Callback function that gets called whenever the user clicks outside of the popup **and** it's target.
 * @returns {PopupHookData}
 */
const usePopup = (options = {}) => {
  const { isOpenByDefault = false, onClickOutside = () => {} } = options
  const popupRef = useRef(null)
  const triggerRef = useRef(null)
  const triggerRect = useRect(triggerRef)
  const [isOpen, setOpenState] = useState(isOpenByDefault)
  const [popupRect, setPopupRect] = useState({})

  const open = useCallback(() => {
    setOpenState(true)
  }, [setOpenState])

  const close = useCallback(() => {
    setOpenState(false)
  }, [setOpenState])

  const toggle = useCallback(() => setOpenState((prevState) => !prevState), [
    setOpenState,
  ])

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
