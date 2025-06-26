import { withLogger } from '@/shared/hoc/withLogger'
import { Todo } from './Todo'

export const LoggedTodo = withLogger(Todo)