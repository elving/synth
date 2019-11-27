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
import { Menu, MenuDivider, MenuItem } from '../Menu'
import { Spacer } from '../Spacer'
import { Status } from '../Typography'
import { Tag } from '../Tag'
import { usePopup } from '../Popup'

import { init, reducer } from './reducer'
import { noop, ScrollIntoView } from '../utils'
import { setSelectStyles } from '../Select'

import {
  setTagsContainerActiveBorder,
  setTagsContainerBorder,
  setTagsContainerPadding,
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
  ${setTagsContainerPadding()}
  align-items: center;
  display: flex;
  overflow: hidden;

  &.active {
    ${setTagsContainerActiveBorder()}
  }
`

/**
 * @type {import('@beatgig/synth-styled-components').SynthStyledComponent<React.ComponentType<import('@beatgig/synth-ui').SynthEditableProps>>}
 */
const StyledEditable = styled(Editable)`
  cursor: pointer;
  width: 100%;
  padding: 0;
`

/**
 * @typedef {object} SearchInputProps
 * @property {function} onDelete
 * @property {function} onEnter
 * @property {function} onEscape
 * @property {function} onNavigateDown
 * @property {function} onNavigateUp
 */

/**
 * @type {React.ForwardRefExoticComponent<React.PropsWithoutRef<SearchInputProps & import('@beatgig/synth-ui').SynthEditableProps> & React.RefAttributes<React.Ref<HTMLInputElement>>>}
 */
const SearchInput = forwardRef(
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
  border-right-width: 0;
  padding: 0;
`

/**
 * @param {object} props
 * @param {string} [props.className]
 * @param {(TagType) => void} props.onClickClose
 * @param {TagType} props.tag
 * @returns {React.ReactElement<import('@beatgig/synth-ui').SynthTagProps>}
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

/**
 * @param {import('@beatgig/synth-ui').SynthTagSelectProps} props
 */
const TagSelect = ({
  canCreateTags,
  className = '',
  defaultSelected = [],
  groupAfter = 2,
  onUpdate = noop,
  onCreate = noop,
  placeholder = '',
  ref,
  renderEmptyResults = () => <Status>No results found...</Status>,
  single,
  synth,
  tags = [],
}) => {
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
      onCreate(last(state.createdTags))
      onUpdate(state.selectedTags)
    } else if (state.selectedTags.length !== prevState.selectedTags.length) {
      onUpdate(state.selectedTags)
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
    if (state.activeTag !== -1) {
      dispatch({ type: ACTION_TOGGLE_ACTIVE_TAG })
    } else if (
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
    }
  }, [canCreateTags, state.activeTag, state.filter, state.filteredTags])

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
          {state.ungroupedSelectedTags.map((selectedTag, index) => (
            <Fragment key={`selection--${selectedTag.value}`}>
              {index !== 0 && <Spacer inline left scale={1} />}
              {single ? (
                <SearchInput
                  value={state.filter || selectedTag.label}
                  onChange={filterTags}
                  onDelete={removeLastTag}
                  onEnter={onInputEnter}
                  onEscape={close}
                  onFocus={open}
                  onNavigateDown={setNextActiveTag}
                  onNavigateUp={setPrevActiveTag}
                  placeholder={placeholder}
                  ref={inputRef}
                />
              ) : (
                <TagSelection tag={selectedTag} onClickClose={removeTag} />
              )}
            </Fragment>
          ))}

          {state.groupedSelectedTags.length > 0 && (
            <Fragment>
              <Spacer inline left scale={1} />
              <Tag>{state.groupedSelectedTags.length}+</Tag>
            </Fragment>
          )}

          {state.hasTagsSelected && <Spacer inline left scale={1} />}

          {single && state.hasTagsSelected ? null : (
            <SearchInput
              value={state.filter}
              onChange={filterTags}
              onDelete={removeLastTag}
              onEnter={onInputEnter}
              onEscape={close}
              onFocus={open}
              onNavigateDown={setNextActiveTag}
              onNavigateUp={setPrevActiveTag}
              placeholder={placeholder}
              ref={inputRef}
            />
          )}

          {state.hasTagsSelected && (
            <ClearButton onClick={clearSelectedTags}>
              <CloseIcon scale={1} />
            </ClearButton>
          )}
        </TagsContainer>
      </SelectContainer>

      {isOpen && (
        <TagList
          {...popupProps}
          ref={popupRef}
          useTriggerWidth
          yOffset={synth.getValue('@spacing.1')}
        >
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
                isActive={index + state.selectedTags.length === state.activeTag}
                isSelected={tagIsSelected(state.selectedTags, unselectedTag)}
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
              <TagListState synth={synth}>{renderEmptyResults()}</TagListState>
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
                Create "{state.filter}"
              </MenuItem>
            )}
        </TagList>
      )}
    </Container>
  )
}

TagSelect.propTypes = {
  canCreateTags: PropTypes.bool,
  className: PropTypes.string,
  defaultSelected: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
    }),
  ),
  groupAfter: PropTypes.number,
  onUpdate: PropTypes.func,
  onCreate: PropTypes.func,
  placeholder: PropTypes.string,
  renderEmptyResults: PropTypes.func,
  single: PropTypes.bool,
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
    }),
  ),
}

export default withSynth(TagSelect)
