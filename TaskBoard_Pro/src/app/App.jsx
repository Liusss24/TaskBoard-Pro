import { HTML_TAGS } from "../shared/constants/html-tags.constants"
import { TaskBoard } from "../features/tasks/components/taskBoard"
import { ThemeProvider } from "../features/theme/context/themeProvider"
import { ThemeToggle } from "../features/theme/context/themeToggle"
import { useTheme } from "../features/theme/hooks/useTheme"
import { useDocumentTitle } from "../shared/hooks/useDocumentTitle"
import "./styles/index.css"

function AppContent() {
  const MainTag = HTML_TAGS.MAIN
  const TitleTag = HTML_TAGS.H1
  const { theme } = useTheme()
  useDocumentTitle("TaskBoard Hooks Lab")

  return (
    <MainTag className={theme}>
      {/* <TitleTag>TaskBoard Hooks Lab</TitleTag> */} 
      <ThemeToggle />
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