import React, {
  forwardRef,
  Fragment,
  useCallback,
  useReducer,
  useRef,
} from 'react'

import styled from 'styled-components'
import PropTypes from 'prop-types'
import { last } from '@beatgig/array'
import { padding } from '@beatgig/synth-styled-components'
import { usePreviousValue } from '@beatgig/hooks'
import { withSynth } from '@beatgig/synth-react'

import { Checkbox } from '../Checkbox'
import { Clickable } from '../Clickable'
import { CloseIcon } from '../Icons'
import { Editable } from '../Editable'
import { Flex } from '../Flex'
import { Menu, MenuDivider, MenuItem } from '../Menu'
import { Spacer } from '../Spacer'
import { Status } from '../Typography'
import { Tag } from '../Tag'
import { Popup, usePopup } from '../Popup'

import { init, reducer } from './reducer'
import { noop, ScrollIntoView } from '../utils'
import { setSelectStyles } from '../Select'

import {
  setTagsContainerActiveBorder,
  setTagsContainerBorder,
  shouldHideCreateOption,
  tagIsSelected,
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

/**
 * @typedef {object} TagType
 * @property {string} label
 * @property {string} value
 */

const Container = styled.div`
  position: relative;
`

/**
 * @type {import('@beatgig/synth-styled-components').SynthStyledComponent<'div'>}
 */
const SelectContainer = styled.div`
  ${setSelectStyles()}
  width: 100%;
`

/**
 * @type {import('@beatgig/synth-styled-components').SynthStyledComponent<'div'>}
 */
const TagsContainer = styled.div`
  ${setTagsContainerBorder()}
  align-items: center;
  display: flex;
  overflow-x: hidden;
  width: 100%;

  & > *:not(:first-child) {
    flex: 1;
  }

  &.active {
    ${setTagsContainerActiveBorder()}
  }
`

const TagsInnerContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  overflow-x: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    height: 0px;
  }
`

/**
 * @type {import('@beatgig/synth-styled-components').SynthStyledComponent<import('@beatgig/synth-ui').EditableComponent>}
 */
const StyledEditable = styled(Editable)`
  cursor: pointer;
  min-width: 15%;
  padding: 0;
  width: 100%;

  &.active {
    min-width: 50%;
  }
`

/**
 * @typedef {object} SearchInputProps
 * @property {function} onDelete
 * @property {function} onEnter
 * @property {function} onEscape
 * @property {function} onNavigateDown
 * @property {function} onNavigateUp
 */
const SearchInput = forwardRef(
  /**
   * @param {import('@beatgig/synth-ui').EditableComponentProps & import('@beatgig/synth-react').SynthComponentProps & SearchInputProps} props
   */
  (
    {
      className = '',
      onBlur = noop,
      onChange = noop,
      onDelete = noop,
      onEnter = noop,
      onEscape = noop,
      onFocus = noop,
      onNavigateDown = noop,
      onNavigateUp = noop,
      ...props
    },
    ref,
  ) => (
    <StyledEditable
      {...props}
      className={className}
      ref={ref}
      onFocus={onFocus}
      onBlur={onBlur}
      onKeyDown={({ key, target: { value } }) => {
        if ((key === 'Backspace' || key === 'Delete') && !value) {
          onDelete()
        }

        if (key === 'ArrowDown') {
          onNavigateDown()
        }

        if (key === 'ArrowUp') {
          onNavigateUp()
        }

        if (key === 'Enter') {
          onEnter()
        }

        if (key === 'Escape' || key === 'Esc') {
          onEscape()
        }
      }}
      onChange={({ target: { value } }) => {
        onChange(value)
      }}
    />
  ),
)

const TagSelectionRemove = styled(Clickable)`
  border-width: 0;
  padding: 0;
`

/**
 * @param {object} props
 * @param {string} [props.className]
 * @param {(TagType) => void} props.onClickClose
 * @param {TagType} props.tag
 * @returns {React.ReactElement<import('@beatgig/synth-ui').TagProps>}
 */
const TagSelection = ({ className = '', onClickClose = noop, tag }) => (
  <Tag className={className}>
    {tag.label}
    <TagSelectionRemove
      onClick={(event) => {
        event.preventDefault()
        onClickClose(tag)
      }}
    >
      <CloseIcon scale={0} />
    </TagSelectionRemove>
  </Tag>
)

/**
 * @param {object} props
 * @param {string} [props.className]
 * @param {boolean} props.isActive
 * @param {boolean} props.isSelected
 * @param {(TagType) => void} props.onToggle
 * @param {TagType} props.tag
 * @returns {React.ReactElement}
 */
const TagOption = ({
  className = '',
  isActive,
  isSelected,
  onToggle = noop,
  tag,
}) => {
  const render = () => (
    <MenuItem
      className={`${className}${isActive ? ' active' : ''}`}
      onClick={() => {
        onToggle(tag)
      }}
    >
      <Checkbox
        checked={isSelected}
        label={tag.label}
        readOnly
        withoutLabelWrapper
      />
    </MenuItem>
  )

  return isActive ? (
    <ScrollIntoView
      shouldScroll
      options={{
        block: 'nearest',
        behavior: 'smooth',
      }}
    >
      {render()}
    </ScrollIntoView>
  ) : (
    render()
  )
}

const ClearButton = styled(Clickable)`
  border: 0 none;
  padding: 0;
`

const TagList = styled(Menu)`
  max-height: 200px;
  overflow-y: scroll;
`

/**
 * @type {import('@beatgig/synth-styled-components').SynthStyledComponent<'div'>}
 */
const TagListState = styled.div`
  ${padding('popupItem')}
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;
`

const defaultEmptyResults = () => <Status>No results found...</Status>

const TagSelect = forwardRef(
  /**
   * @param {import('@beatgig/synth-ui').TagSelectProps & import('@beatgig/synth-react').SynthComponentProps} props
   */
  (
    {
      canCreateTags = false,
      className = '',
      defaultSelected = [],
      groupAfter = 2,
      onTagsUpdated = noop,
      onTagCreated = noop,
      placeholder = '',
      renderEmptyResults = defaultEmptyResults,
      single = false,
      synth,
      tags = [],
    },
    ref,
  ) => {
    const inputRef = useRef(null)

    const [state, dispatch] = useReducer(
      reducer,
      {
        defaultSelected,
        groupAfter,
        single,
        tags,
      },
      init,
    )

    const prevState = usePreviousValue(state)

    if (prevState) {
      if (
        state.createdTags.length &&
        state.createdTags.length > prevState.createdTags.length
      ) {
        onTagCreated(last(state.createdTags))
        onTagsUpdated(state.selectedTags)
      } else if (state.selectedTags.length !== prevState.selectedTags.length) {
        onTagsUpdated(state.selectedTags)
      }
    }

    const focus = useCallback(() => {
      if (inputRef.current) {
        inputRef.current.focus()
      }
    }, [])

    const blur = () => {
      if (inputRef.current) {
        inputRef.current.blur()
      }

      dispatch({ type: ACTION_CLEAR_FILTER })
    }

    const {
      close,
      isOpen,
      open,
      popupRef,
      props: popupProps,
      triggerRef,
    } = usePopup({
      onClose: () => {
        blur()
        dispatch({ type: ACTION_CLEAR_ACTIVE_TAG })
      },
    })

    const removeTag = useCallback(
      (tag) => {
        dispatch({
          tag,
          type: ACTION_REMOVE_TAG,
        })
      },
      [dispatch],
    )

    const removeLastTag = useCallback(() => {
      dispatch({ type: ACTION_REMOVE_LAST_TAG })
    }, [])

    const toggleTag = useCallback(
      (tag) => {
        dispatch({
          tag,
          type: ACTION_TOGGLE_TAG,
        })

        focus()
      },
      [focus],
    )

    const createTag = useCallback((tag) => {
      dispatch({
        tag,
        type: ACTION_CREATE_TAG,
      })
    }, [])

    const filterTags = useCallback((query) => {
      dispatch({
        query,
        type: ACTION_FILTER,
      })
    }, [])

    const onInputEnter = useCallback(() => {
      if (
        canCreateTags &&
        state.filter &&
        !shouldHideCreateOption(state.filteredTags, state.filter)
      ) {
        dispatch({
          tag: {
            label: state.filter,
            value: state.filter,
          },
          type: ACTION_CREATE_TAG,
        })
      } else {
        dispatch({ type: ACTION_TOGGLE_ACTIVE_TAG })
      }
    }, [canCreateTags, state.filter, state.filteredTags])

    const setNextActiveTag = useCallback(() => {
      dispatch({ type: ACTION_SET_NEXT_ACTIVE_TAG })
    }, [])

    const setPrevActiveTag = useCallback(() => {
      dispatch({ type: ACTION_SET_PREV_ACTIVE_TAG })
    }, [])

    const clearSelectedTags = () => {
      dispatch({ type: ACTION_CLEAR_SELECTED })
    }

    return (
      <Container className={className} ref={ref}>
        <SelectContainer
          className={isOpen ? 'active' : ''}
          onClick={focus}
          ref={triggerRef}
          synth={synth}
        >
          <TagsContainer className={isOpen ? 'active' : ''} synth={synth}>
            {/** 
              <TagsInnerContainer> is needed here in order to be able to make justify-content: flex-end; 
              work with horizontal scrolling. However, this doesn't work on Firefox even though the issue
              was reported over 5 years ago: https://bugzilla.mozilla.org/show_bug.cgi?id=1042151.

              @TODO - Look to solve this by scrolling the container "manually" on a `useLayoutEffect` effect?
            */}
            <TagsInnerContainer>
              <Flex alignItems="center" justifyContent="flex-end" fullWidth>
                {state.ungroupedSelectedTags.map((selectedTag, index) => (
                  <Fragment key={`selection--${selectedTag.value}`}>
                    {index !== 0 && <Spacer inline left scale={1} />}
                    {single ? (
                      <SearchInput
                        className={isOpen ? 'active' : ''}
                        onChange={filterTags}
                        onDelete={removeLastTag}
                        onEnter={onInputEnter}
                        onEscape={close}
                        onFocus={open}
                        onNavigateDown={setNextActiveTag}
                        onNavigateUp={setPrevActiveTag}
                        placeholder={placeholder}
                        ref={inputRef}
                        value={state.filter || selectedTag.label}
                      />
                    ) : (
                      <TagSelection
                        tag={selectedTag}
                        onClickClose={removeTag}
                      />
                    )}
                  </Fragment>
                ))}

                {state.groupedSelectedTags.length > 0 && (
                  <Fragment>
                    <Spacer inline left scale={1} />
                    <Tag>{state.groupedSelectedTags.length}+</Tag>
                  </Fragment>
                )}
              </Flex>
            </TagsInnerContainer>

            {state.hasTagsSelected && <Spacer inline left scale={1} />}

            {single && state.hasTagsSelected ? null : (
              <SearchInput
                className={isOpen ? 'active' : ''}
                onChange={filterTags}
                onDelete={removeLastTag}
                onEnter={onInputEnter}
                onEscape={close}
                onFocus={open}
                onNavigateDown={setNextActiveTag}
                onNavigateUp={setPrevActiveTag}
                placeholder={placeholder}
                ref={inputRef}
                value={state.filter}
              />
            )}

            {state.hasTagsSelected && (
              <Fragment>
                <Spacer inline left scale={1} />
                <ClearButton onClick={clearSelectedTags}>
                  <CloseIcon scale={1} />
                </ClearButton>
                <Spacer inline left scale={2} />
              </Fragment>
            )}
          </TagsContainer>
        </SelectContainer>

        {isOpen && (
          <Popup
            {...popupProps}
            ref={popupRef}
            useTriggerWidth
            yOffset={synth.getValue('@spacing.1')}
          >
            <TagList>
              {!state.filter &&
                state.selectedTags.map((selectedTag, index) => (
                  <TagOption
                    isActive={index === state.activeTag}
                    isSelected
                    key={`tag--${selectedTag.value}`}
                    onToggle={toggleTag}
                    tag={selectedTag}
                  />
                ))}

              {!state.filter && state.hasTagsSelected && <MenuDivider />}

              {!state.filter &&
                state.unselectedTags.map((unselectedTag, index) => (
                  <TagOption
                    isActive={
                      index + state.selectedTags.length === state.activeTag
                    }
                    isSelected={tagIsSelected(
                      state.selectedTags,
                      unselectedTag,
                    )}
                    key={`tag--${unselectedTag.value}`}
                    onToggle={toggleTag}
                    tag={unselectedTag}
                  />
                ))}

              {state.filter &&
                state.filteredTags.map((filteredTag, index) => (
                  <TagOption
                    isActive={index === state.activeTag}
                    isSelected={tagIsSelected(state.selectedTags, filteredTag)}
                    key={`tag--${filteredTag.value}`}
                    onToggle={toggleTag}
                    tag={filteredTag}
                  />
                ))}

              {!canCreateTags &&
                state.filter &&
                state.filteredTags.length === 0 && (
                  <TagListState synth={synth}>
                    {renderEmptyResults()}
                  </TagListState>
                )}

              {canCreateTags &&
                state.filter &&
                !shouldHideCreateOption(state.filteredTags, state.filter) && (
                  <MenuItem
                    onClick={() => {
                      createTag({
                        label: state.filter,
                        value: state.filter,
                      })
                    }}
                  >
                    Create &quot;{state.filter}&quot;
                  </MenuItem>
                )}
            </TagList>
          </Popup>
        )}
      </Container>
    )
  },
)

TagSelect.propTypes = {
  /**
   * A boolean flag to determine if the <TagSelect> component has the ability to
   * create new tags based on the user's search query.
   */
  canCreateTags: PropTypes.bool,
  /**
   * Required to properly extend styled-components.
   * @see {@link https://www.styled-components.com/docs/api#caveat-with-classname}
   */
  className: PropTypes.string,
  /**
   * The tags that will be selected by default, if any.
   */
  defaultSelected: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
    }),
  ),
  /**
   * A number that indicates how many selected tags will be visible.
   */
  groupAfter: PropTypes.number,
  /**
   * A callback function that is called whenever tags get either selected or
   * removed
   */
  onTagsUpdated: PropTypes.func,
  /**
   * A callback function that is called whenever a tag is created.
   */
  onTagCreated: PropTypes.func,
  /**
   * Provides a placeholder text for the search input.
   */
  placeholder: PropTypes.string,
  /**
   * A render function used to render the results state whenever there are no
   * results to show.
   */
  renderEmptyResults: PropTypes.func,
  /**
   * A boolean flag to determine if the <TagSelect> component can only have
   * one selected tag at a time.
   */
  single: PropTypes.bool,
  /**
   * The tags that can be selected by the user.
   */
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
    }),
  ),
}

TagSelect.defaultProps = {
  canCreateTags: false,
  className: '',
  defaultSelected: [],
  groupAfter: 2,
  onTagsUpdated: noop,
  onTagCreated: noop,
  placeholder: '',
  renderEmptyResults: defaultEmptyResults,
  single: false,
  tags: [],
}

TagSelect.displayName = 'TagSelect'

export default withSynth(TagSelect)
