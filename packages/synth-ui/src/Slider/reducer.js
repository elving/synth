import { ACTION_ENABLE, ACTION_SHOW_NEXT, ACTION_SHOW_PREV } from './actions'

/**
 * @param {number} firstPosition
 * @param {number} totalItems
 * @param {number} itemsToShow
 * @returns {boolean}
 */
const canShowNext = (firstPosition, totalItems, itemsToShow) =>
  totalItems - firstPosition >= itemsToShow

/**
 * @param {number} firstPosition
 * @returns {boolean}
 */
const canShowPrev = (firstPosition) => firstPosition > 1

/**
 * @typedef {object} State
 * @property {boolean} canShowNext
 * @property {boolean} canShowPrev
 * @property {boolean} isEnabled
 * @property {number} firstPosition
 * @property {number} totalItems
 * @property {number} itemsToShow
 */

/**
 * @param {{ firstPosition: number, totalItems: number, itemsToShow: number }} options
 * @returns {State}
 */
export const initReducer = ({
  firstPosition = 1,
  totalItems = 0,
  itemsToShow = 1,
}) => ({
  canShowNext: canShowNext(firstPosition, totalItems, itemsToShow),
  canShowPrev: canShowPrev(firstPosition),
  isEnabled: true,
  firstPosition,
  totalItems,
  itemsToShow,
})

export const reducer = (state, action) => {
  console.log(action.type)

  switch (action.type) {
    case ACTION_SHOW_PREV: {
      let nextPosition = state.firstPosition

      if (!canShowPrev(state.firstPosition)) {
        return state
      }

      nextPosition = state.firstPosition - state.itemsToShow
      nextPosition = !canShowPrev(nextPosition) ? 1 : nextPosition

      return {
        ...state,
        canShowPrev: canShowPrev(nextPosition),
        canShowNext: canShowNext(
          nextPosition,
          state.totalItems,
          state.itemsToShow,
        ),
        isEnabled: false,
        firstPosition: nextPosition,
      }
    }

    case ACTION_SHOW_NEXT: {
      let nextPosition = state.firstPosition

      if (
        !canShowNext(state.firstPosition, state.totalItems, state.itemsToShow)
      ) {
        return state
      }

      nextPosition = state.firstPosition + state.itemsToShow

      nextPosition = !canShowNext(
        nextPosition,
        state.totalItems,
        state.itemsToShow,
      )
        ? state.totalItems - state.itemsToShow + 1
        : nextPosition

      return {
        ...state,
        canShowPrev: canShowPrev(nextPosition),
        canShowNext: canShowNext(
          nextPosition,
          state.totalItems,
          state.itemsToShow,
        ),
        isEnabled: false,
        firstPosition: nextPosition,
      }
    }

    case ACTION_ENABLE: {
      return {
        ...state,
        isEnabled: true,
      }
    }

    default: {
      return state
    }
  }
}
