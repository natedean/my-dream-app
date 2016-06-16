import {Todo} from '../reducers/todos';

export interface AppState {
    todos: Todo[],
    visibilityFilter: string
}