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
import { VirtualDOM } from '@/pages/crib/virtual-dom'
import { CribComponents } from '@/pages/crib/components'
import { CribProps } from '@/pages/crib/props'
import { CribState } from '@/pages/crib/state'
import { CribLifecycle } from '@/pages/crib/lifecycle'
import { CribEvents } from '@/pages/crib/events'
import { CribAdvanced } from '@/pages/crib/advanced'
import { CribContext } from '@/pages/crib/context'
import { CribReactRouter } from '@/pages/crib/route'
import { UserProfile } from '@/pages/crib/user-profile'
import { CribForms } from '@/pages/crib/form'

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
        { path: 'virtualdom', element: <VirtualDOM /> },
        { path: 'components', element: <CribComponents /> },
        { path: 'props', element: <CribProps /> },
        { path: 'state', element: <CribState /> },
        { path: 'class-component', element: <CribLifecycle /> },
        { path: 'events', element: <CribEvents /> },
        { path: 'advanced', element: <CribAdvanced /> },
        { path: 'context', element: <CribContext /> },
        {
          path: 'router',
          element: <CribReactRouter />,
          children: [
            { path: 'users/1', element: <UserProfile /> },
          ],
        },
        { path: 'forms', element: <CribForms /> },
        // { path: 'storage', element: < /> },
        // { path: 'hoc', element: < /> },
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