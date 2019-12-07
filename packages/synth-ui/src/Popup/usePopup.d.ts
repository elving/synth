import * as React from 'react'

import { CardComponent } from '../Card'
import { ModalComponent } from '../Modal'
import { PopupComponent } from './Popup'

interface PopupHookOptions {
  /**
   * Flag that determines if the popup is visible or not.
   */
  isOpenByDefault?: boolean
  /**
   * Callback function that gets called whenever the user clicks outside of the
   * popup **and** it's target.
   */
  onClickOutside?()
  /**
   * Callback function that gets called whenever the popup is closed.
   */
  onClose?()
  /**
   * Callback function that gets called whenever the popup is opened.
   */
  onOpen?()
  /**
   * Callback function that gets called whenever the popup is toggled.
   */
  onToggle?()
}

interface PopupHookState {
  /**
   * Function used to close the popup.
   */
  close()
  /**
   * Boolean flag to determine whether or  not the popup is open.
   */
  isOpen: boolean
  /**
   * Function used to open the popup.
   */
  open()
  /**
   * React ref pointing to the popup DOM element.
   */
  popupRef: React.Ref<React.DOMElement>
  /**
   * Props to be passed on to the popup component.
   */
  props: {}
  /**
   * Function used to toggle the popup.
   */
  toggle()
  /**
   * React ref pointing to the trigger DOM element.
   */
  triggerRef: React.Ref<React.DOMElement>
}

declare const usePopup: (options?: PopupHookOptions) => PopupHookState

export { PopupHookOptions, PopupHookState }
export default usePopup
