import { TASK_STATUS } from "../constants/task.constants"
import { TASK_UI_TEXT } from "../constants/task-ui.constants"
import { HTML_TAGS } from "../../../shared/constants/html-tags.constants"

export function TaskFilters({
  searchText,
  statusFilter,
  onSearchTextChange,
  onStatusFilterChange,
}) {
	const SectionTag = HTML_TAGS.SECTION
	const InputTag = HTML_TAGS.INPUT
	const SelectTag = HTML_TAGS.SELECT
	const OptionTag = HTML_TAGS.OPTION
	const H3Tag = HTML_TAGS.H3
	
  return (
    <SectionTag>
      <H3Tag>{TASK_UI_TEXT.FILTERS_TITLE}</H3Tag>

      <InputTag
        type="text"
        value={searchText}
        onChange={onSearchTextChange}
        placeholder={TASK_UI_TEXT.SEARCH_PLACEHOLDER}
      />

      <SelectTag value={statusFilter} onChange={onStatusFilterChange}>
        <OptionTag value={TASK_STATUS.ALL}>{TASK_UI_TEXT.FILTER_ALL}</OptionTag>
        <OptionTag value={TASK_STATUS.PENDING}>{TASK_UI_TEXT.FILTER_PENDING}</OptionTag>
        <OptionTag value={TASK_STATUS.COMPLETED}>{TASK_UI_TEXT.FILTER_COMPLETED}</OptionTag>
      </SelectTag>
    </SectionTag>
  )
}