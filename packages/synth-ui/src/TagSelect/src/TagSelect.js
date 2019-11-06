import { last } from '@beatgig/array'
import { padding } from '@beatgig/synth-styled-components'
import { usePreviousValue } from '@beatgig/hooks'
import { withSynth } from '@beatgig/synth-react'
import styled from 'styled-components'

import React, {
  forwardRef,
  Fragment,
  useCallback,
  useReducer,
  useRef,
} from 'react'

import { Checkbox } from '../../Checkbox'
import { Clickable } from '../../Button'
import { CloseIcon } from '../../Icons'
import { Editable } from '../../Input'
import { init, reducer } from './reducer'
import { noop, ScrollIntoView } from '../../utils'
import { PopupMenu, PopupMenuDivider, PopupMenuItem } from '../../PopupMenu'
import { Select } from '../../Select'
import { shouldHideCreateOption, tagIsSelected } from './utils'
import { Spacer } from '../../Spacer'
import { Status } from '../../Typography'
import { Tag } from '../../Tag'
import { usePopup } from '../../Popup'

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

const Container = styled.div`
  position: relative;
`

const CustomSelect = styled(Select)`
  width: 100%;
`

/**
 * @typedef {object} SynthProps
 * @property {object} synth
 * @property {function} synth.getValue
 * @property {function} synth.getUnit
 */

const TagsContainer = withSynth(styled.div`
  border-right: 2px solid
    ${/** @param {SynthProps} props */ ({ synth }) =>
      synth.getValue('color:border:input')};
  align-items: center;
  display: flex;
  overflow: hidden;
  padding-right: ${/** @param {SynthProps} props */ ({ synth }) =>
    synth.getValue('space:padding:control')[1]}px;

  &.active {
    border-right-color: ${/** @param {SynthProps} props */ ({ synth }) =>
      synth.getValue('color:border:input:focus')};
  }
`)

/**
 * @typedef {object} SearchInputProps
 * @property {string} [className='']
 * @property {import('react').RefObject} ref
 * @property {*} ref.current
 * @property {function} onBlur
 * @property {function} onChange
 * @property {function} onDelete
 * @property {function} onEnter
 * @property {function} onEscape
 * @property {function} onFocus
 * @property {function} onNavigateDown
 * @property {function} onNavigateUp
 * @property {string} value
 */

/**
 * @typedef {import('styled-components').StyledFunction<SearchInputProps & import('react').InputHTMLAttributes<HTMLInputElement>>} SearchInput
 */

/**
 * @type {SearchInput}
 */
const Input = styled(Editable)`
  cursor: pointer;
  width: 100%;
  padding: 0;
`

const SearchInput = forwardRef(
  /**
   * @param {SearchInputProps} props
   * @param {import('react').RefObject} ref
   * @param {*} ref.current
   * @returns {import('react').ReactElement}
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
  ) => {
    return (
      <Input
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
    )
  },
)

const TagSelectionRemove = styled(Clickable)`
  border-right-width: 0;
  padding: 0;
`

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

const TagOption = ({
  className = '',
  isActive,
  isSelected,
  onToggle = noop,
  tag,
}) => {
  const render = () => (
    <PopupMenuItem
      className={`${className}${isActive ? ' active' : ''}`}
      onClick={() => {
        onToggle(tag)
      }}
    >
      <Checkbox as="span" checked={isSelected} label={tag.label} readOnly />
    </PopupMenuItem>
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

const TagList = styled(PopupMenu)`
  max-height: 200px;
  overflow-y: scroll;
`

const TagListState = withSynth(styled.div`
  ${padding('popupItem')}
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;
`)

const TagSelect = ({
  canCreateTags,
  className = '',
  defaultSelected = [],
  groupAfter = 2,
  onChange = noop,
  onCreate = noop,
  placeholder = '',
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
      onChange(state.selectedTags)
    } else if (state.selectedTags.length !== prevState.selectedTags.length) {
      onChange(state.selectedTags)
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
    <Container className={className}>
      <CustomSelect
        className={isOpen ? 'active' : ''}
        forwardedAs="div"
        onClick={focus}
        ref={triggerRef}
      >
        <TagsContainer className={isOpen ? 'active' : ''}>
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
      </CustomSelect>

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

          {!state.filter && state.hasTagsSelected && <PopupMenuDivider />}

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
              <TagListState>{renderEmptyResults()}</TagListState>
            )}

          {canCreateTags &&
            state.filter &&
            !shouldHideCreateOption(state.filteredTags, state.filter) && (
              <PopupMenuItem
                onClick={() => {
                  createTag({
                    label: state.filter,
                    value: state.filter,
                  })
                }}
              >
                Create "{state.filter}"
              </PopupMenuItem>
            )}
        </TagList>
      )}
    </Container>
  )
}

export default withSynth(TagSelect)
