import { TASK_UI_TEXT } from "../constants/task-ui.constants"
import { HTML_TAGS } from "../../../shared/constants/html-tags.constants"

export function TaskItem({ task, onToggleTask, onDeleteTask }) {
  const ListItemTag = HTML_TAGS.LI
  const SpanTag = HTML_TAGS.SPAN
  const ButtonTag = HTML_TAGS.BUTTON

  return (
    <ListItemTag>
      <SpanTag>
        {task.title} -{" "}
        {task.completed
          ? TASK_UI_TEXT.STATUS_COMPLETED
          : TASK_UI_TEXT.STATUS_PENDING}
      </SpanTag>

      <ButtonTag onClick={() => onToggleTask(task.id)}>
        {TASK_UI_TEXT.TOGGLE_BUTTON}
      </ButtonTag>

      <ButtonTag  onClick={() => onDeleteTask(task.id)}>
        {TASK_UI_TEXT.DELETE_BUTTON}
      </ButtonTag>
    </ListItemTag>
  )
}