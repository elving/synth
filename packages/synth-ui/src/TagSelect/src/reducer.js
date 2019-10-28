import { filterByKey, last } from '@beatgig/array'

import {
  tagWasCreated,
  removeTag,
  removeCreatedTag,
  toggleTag,
  toggleSingleTag,
  getGroupedSelectedTags,
  getUngroupedSelectedTags,
  getUnselectedTags,
} from './utils'

import {
  ACTION_REMOVE_TAG,
  ACTION_REMOVE_LAST_TAG,
  ACTION_TOGGLE_TAG,
  ACTION_CREATE_TAG,
  ACTION_CLEAR_SELECTED,
  ACTION_FILTER,
  ACTION_CLEAR_FILTER,
  ACTION_SET_NEXT_ACTIVE_TAG,
  ACTION_SET_PREV_ACTIVE_TAG,
  ACTION_CLEAR_ACTIVE_TAG,
  ACTION_TOGGLE_ACTIVE_TAG,
} from './actions'

export const init = ({
  defaultSelected = [],
  groupAfter = 0,
  single = false,
  tags = [],
}) => ({
  activeTag: -1,
  createdTags: [],
  filter: '',
  filteredTags: tags,
  groupAfter,
  groupedSelectedTags: getGroupedSelectedTags(defaultSelected, groupAfter),
  hasTagsSelected: defaultSelected.length > 0,
  originalTags: tags,
  selectedTags: defaultSelected,
  single,
  ungroupedSelectedTags: getUngroupedSelectedTags(defaultSelected, groupAfter),
  unselectedTags: getUnselectedTags(defaultSelected, tags),
})

const reducer = (state, action) => {
  const clearFilter = (selectedTags = state.selectedTags) => ({
    activeTag: -1,
    filter: '',
    filteredTags: [...state.originalTags, ...state.createdTags],
    unselectedTags: getUnselectedTags(selectedTags, state.originalTags),
  })

  switch (action.type) {
    case ACTION_REMOVE_TAG: {
      const selectedTags = removeTag(state.selectedTags, action.tag)

      return {
        ...state,
        createdTags: tagWasCreated(state.createdTags, action.tag)
          ? removeCreatedTag(state.createdTags, action.tag)
          : state.createdTags,
        selectedTags,
        hasTagsSelected: selectedTags.length > 0,
        unselectedTags: getUnselectedTags(selectedTags, state.filteredTags),
        groupedSelectedTags: getGroupedSelectedTags(
          selectedTags,
          state.groupAfter,
        ),
        ungroupedSelectedTags: getUngroupedSelectedTags(
          selectedTags,
          state.groupAfter,
        ),
      }
    }

    case ACTION_REMOVE_LAST_TAG: {
      const lastTag = last(state.selectedTags)
      const selectedTags = state.selectedTags.slice(0, -1)

      return {
        ...state,
        selectedTags,
        createdTags: tagWasCreated(state.createdTags, lastTag)
          ? removeCreatedTag(state.createdTags, lastTag)
          : state.createdTags,
        hasTagsSelected: selectedTags.length > 0,
        unselectedTags: getUnselectedTags(selectedTags, state.filteredTags),
        groupedSelectedTags: getGroupedSelectedTags(
          selectedTags,
          state.groupAfter,
        ),
        ungroupedSelectedTags: getUngroupedSelectedTags(
          selectedTags,
          state.groupAfter,
        ),
      }
    }

    case ACTION_TOGGLE_TAG: {
      const selectedTags = state.single
        ? toggleSingleTag(state.selectedTags, action.tag)
        : toggleTag(state.selectedTags, action.tag)

      return {
        ...state,
        ...clearFilter(selectedTags),
        selectedTags,
        createdTags: tagWasCreated(state.createdTags, action.tag)
          ? removeCreatedTag(state.createdTags, action.tag)
          : state.createdTags,
        hasTagsSelected: selectedTags.length > 0,
        groupedSelectedTags: getGroupedSelectedTags(
          selectedTags,
          state.groupAfter,
        ),
        ungroupedSelectedTags: getUngroupedSelectedTags(
          selectedTags,
          state.groupAfter,
        ),
      }
    }

    case ACTION_CREATE_TAG: {
      const createdTags = state.single
        ? [action.tag]
        : [...state.createdTags, action.tag]
      const selectedTags = state.single
        ? [action.tag]
        : [...state.selectedTags, action.tag]

      return {
        ...state,
        ...clearFilter(selectedTags),
        createdTags,
        groupedSelectedTags: getGroupedSelectedTags(
          selectedTags,
          state.groupAfter,
        ),
        hasTagsSelected: selectedTags.length > 0,
        selectedTags,
        ungroupedSelectedTags: getUngroupedSelectedTags(
          selectedTags,
          state.groupAfter,
        ),
      }
    }

    case ACTION_CLEAR_SELECTED: {
      return {
        ...state,
        ...clearFilter([]),
        groupedSelectedTags: [],
        hasTagsSelected: false,
        selectedTags: [],
        ungroupedSelectedTags: [],
      }
    }

    case ACTION_FILTER: {
      const allTags = [...state.originalTags, ...state.createdTags]
      let filteredTags = []

      if (!action.query) {
        filteredTags = allTags
      } else {
        filteredTags = filterByKey(
          state.filter.length > action.query.length
            ? allTags
            : state.filteredTags,
          'label',
          action.query,
        )
      }

      return {
        ...state,
        activeTag: -1,
        filter: action.query,
        filteredTags,
      }
    }

    case ACTION_CLEAR_FILTER: {
      return {
        ...state,
        ...clearFilter(),
      }
    }

    case ACTION_SET_NEXT_ACTIVE_TAG: {
      const lastTagIndex = state.filteredTags.length - 1
      const nextActiveTag = state.activeTag + 1

      return {
        ...state,
        activeTag: nextActiveTag > lastTagIndex ? 0 : nextActiveTag,
      }
    }

    case ACTION_SET_PREV_ACTIVE_TAG: {
      const lastTagIndex = state.filteredTags.length - 1
      const nextActiveTag = state.activeTag - 1

      return {
        ...state,
        activeTag: nextActiveTag < 0 ? lastTagIndex : nextActiveTag,
      }
    }

    case ACTION_CLEAR_ACTIVE_TAG: {
      return {
        ...state,
        activeTag: -1,
      }
    }

    case ACTION_TOGGLE_ACTIVE_TAG: {
      const tag = state.filteredTags[state.activeTag]
      const selectedTags = state.single
        ? toggleSingleTag(state.selectedTags, tag)
        : toggleTag(state.selectedTags, tag)

      return {
        ...state,
        ...clearFilter(selectedTags),
        createdTags: tagWasCreated(state.createdTags, tag)
          ? removeCreatedTag(state.createdTags, tag)
          : state.createdTags,
        groupedSelectedTags: getGroupedSelectedTags(
          selectedTags,
          state.groupAfter,
        ),
        hasTagsSelected: selectedTags.length > 0,
        selectedTags,
        ungroupedSelectedTags: getUngroupedSelectedTags(
          selectedTags,
          state.groupAfter,
        ),
      }
    }

    default: {
      return state
    }
  }
}

export { reducer }
