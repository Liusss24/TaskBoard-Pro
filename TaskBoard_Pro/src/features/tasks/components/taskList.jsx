import { TASK_UI_TEXT } from "../constants/task-ui.constants"
import { HTML_TAGS } from "../../../shared/constants/html-tags.constants"

export function TaskList({ tasks }) {
  const SectionTag = HTML_TAGS.SECTION
  const H3Tag = HTML_TAGS.H3
  const PTag = HTML_TAGS.P
  const UlTag = HTML_TAGS.UL
  const LiTag = HTML_TAGS.LI

  return (
    <SectionTag>
      <H3Tag>{TASK_UI_TEXT.LIST_TITLE}</H3Tag>

      {tasks.length === 0 ? (
        <PTag>{TASK_UI_TEXT.EMPTY_MESSAGE}</PTag>
      ) : (
        <UlTag>
          {tasks.map((task) => (
            <LiTag key={task.id}>{task.title}</LiTag>
          ))}
        </UlTag>
      )}
    </SectionTag>
  )
}