import { HTML_TAGS } from "./shared/constants/html-tags.constants"
import { TaskBoard } from "./features/tasks/components/TaskBoard"
import { ThemeProvider } from "./features/theme/context/ThemeProvider"

function AppContent() {
  const MainTag = HTML_TAGS.MAIN
  const TitleTag = HTML_TAGS.H1

  return (
    <MainTag>
      <TitleTag>TaskBoard Hooks Lab</TitleTag>
      <TaskBoard />
    </MainTag>
  )
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

export default App