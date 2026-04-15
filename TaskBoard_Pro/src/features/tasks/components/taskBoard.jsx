import { useState } from "react"
import { TaskForm } from "./taskForm"
import { TaskList } from "./taskList"
import { TASK_UI_TEXT } from "../constants/task-ui.constants"
import { HTML_TAGS } from "../../../shared/constants/html-tags.constants"

export function TaskBoard() {
  const [taskText, setTaskText] = useState("")
  const [tasks, setTasks] = useState([])
  const SectionTag = HTML_TAGS.SECTION
  const H2Tag = HTML_TAGS.H2

  const handleTaskTextChange = (event) => {
    setTaskText(event.target.value)
  }

  const handleAddTask = () => {
    if (taskText.trim() === "") {
      return
    }

    const newTask = {
      id: Date.now(),
      title: taskText,
      completed: false,
    }

    setTasks([...tasks, newTask])
    setTaskText("")
  }

  return (
    <SectionTag>
      <H2Tag>{TASK_UI_TEXT.BOARD_TITLE}</H2Tag>

      <TaskForm
        taskText={taskText}
        onTaskTextChange={handleTaskTextChange}
        onAddTask={handleAddTask}
      />

      <TaskList tasks={tasks} />
    </SectionTag>
  )
}