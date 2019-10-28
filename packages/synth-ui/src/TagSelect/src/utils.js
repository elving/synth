import { isNil } from '@beatgig/is'

export const tagIsSelected = (selectedTags, tag) =>
  !isNil(selectedTags.find((selectedTag) => selectedTag.value === tag.value))

export const tagWasCreated = (createdTags, tag) =>
  !isNil(createdTags.find((createdTag) => createdTag.value === tag.value))

export const removeTag = (selectedTags, tag) =>
  selectedTags.filter((selectedTag) => selectedTag.value !== tag.value)

export const removeCreatedTag = (createdTags, tag) =>
  createdTags.filter((createdTag) => createdTag.value !== tag.value)

export const toggleTag = (selectedTags, tag) =>
  tagIsSelected(selectedTags, tag)
    ? removeTag(selectedTags, tag)
    : [...selectedTags, tag]

export const toggleSingleTag = (selectedTags, tag) =>
  tagIsSelected(selectedTags, tag) ? [] : [tag]

export const getGroupedSelectedTags = (selectedTags, groupAfter) =>
  selectedTags.slice(groupAfter)

export const getUngroupedSelectedTags = (selectedTags, groupAfter) =>
  selectedTags.slice(0, groupAfter)

export const getUnselectedTags = (selectedTags, filteredTags) => {
  const selected = selectedTags.map((selectedTag) => selectedTag.value)

  return filteredTags.filter(
    (filteredTag) => !selected.includes(filteredTag.value),
  )
}

export const shouldHideCreateOption = (filteredTags, filter) =>
  filter &&
  !isNil(
    filteredTags.find(
      (filteredTag) =>
        filteredTag.value.toLowerCase() === filter.toLowerCase() ||
        filteredTag.label.toLowerCase() === filter.toLowerCase(),
    ),
  )
