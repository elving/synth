import removeTag from './removeTag'
import tagIsSelected from './tagIsSelected'

/**
 * @param {{ value: string, label: string }[]} selectedTags
 * @param {{ value: string, label: string }} tag
 * @returns {{ value: string, label: string }[]}
 */
const toggleTag = (selectedTags, tag) =>
  tagIsSelected(selectedTags, tag)
    ? removeTag(selectedTags, tag)
    : [...selectedTags, tag]

export default toggleTag
