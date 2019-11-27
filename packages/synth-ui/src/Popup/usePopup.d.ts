import * as React from 'react'
import { SynthCardComponent } from '../Card'
import { SynthModalComponent } from '../Modal'
import { SynthPopupComponent } from './Popup'

interface SynthPopupHookOptions {
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

interface SynthPopupHookState {
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
  popupRef: React.Ref<
    SynthCardComponent | SynthModalComponent | SynthPopupComponent
  >
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
  triggerRef: React.Ref<HTMLElement>
}

declare const usePopup: (options: SynthPopupHookOptions) => SynthPopupHookState

export { SynthPopupHookOptions, SynthPopupHookState }
export default usePopup
