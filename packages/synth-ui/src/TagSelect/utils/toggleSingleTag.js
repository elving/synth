import tagIsSelected from './tagIsSelected'

/**
 * @param {{ value: string, label: string }[]} selectedTags
 * @param {{ value: string, label: string }} tag
 * @returns {{ value: string, label: string }[]}
 */
const toggleSingleTag = (selectedTags, tag) =>
  tagIsSelected(selectedTags, tag) ? [] : [tag]

export default toggleSingleTag
