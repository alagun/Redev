import { createBrowserRouter } from 'react-router-dom'
import App from '@/app/App'
import { RegistrationPage } from '@/pages/registration'
import { ParentComponent } from '@/feature/component-hierarchy'
import { LifecycleTask } from '@/feature/lifecycle-task'
import { InProgress } from '@/feature/component-in-progress'
import { ListTask } from '@/feature/list-task'
import { ThemeToggle } from '@/feature/theme-toggle'
import { NotFoundPage } from '@/pages/not-found'
import { CribRoadmap } from '@/feature/crib-roadmap'
import { Introduction } from '@/pages/crib/introduction'
import { ProjectStructure } from '@/pages/crib/project-structure'

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      errorElement: <NotFoundPage />,
      children: [
        { index: true, element: <ParentComponent /> },
        { path: 'lifecycle', element: <LifecycleTask /> },
        { path: 'list', element: <ListTask /> },
        { path: 'theme', element: <ThemeToggle /> },
        { path: 'in-progress', element: <InProgress /> },
        { path: 'registration', element: <RegistrationPage /> },
      ],
    },
    {
      path: '/crib',
      element: <App />,
      children: [
        { path: 'roadmap', element: <CribRoadmap /> },
        { path: 'react', element: <Introduction /> },
        { path: 'structure', element: <ProjectStructure /> },
      ],
    },
    {
      path: '*',
      element: <NotFoundPage />,
    },
  ],
  {
    basename: '/Redev/',
  },
)