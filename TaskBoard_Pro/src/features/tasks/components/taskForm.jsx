import { TASK_UI_TEXT } from "../constants/task-ui.constants"
import { HTML_TAGS } from "../../../shared/constants/html-tags.constants"

export function TaskForm({ taskText, onTaskTextChange, onAddTask }) {
  const SectionTag = HTML_TAGS.SECTION
  const H3Tag = HTML_TAGS.H3
  const InputTag = HTML_TAGS.INPUT
  const ButtonTag = HTML_TAGS.BUTTON

  return (
    <SectionTag>
      <H3Tag>{TASK_UI_TEXT.FORM_TITLE}</H3Tag>

      <InputTag
        type="text"
        value={taskText}
        onChange={onTaskTextChange}
        placeholder={TASK_UI_TEXT.INPUT_PLACEHOLDER}
      />

      <ButtonTag onClick={onAddTask}>{TASK_UI_TEXT.ADD_BUTTON}</ButtonTag>
    </SectionTag>
  )
}