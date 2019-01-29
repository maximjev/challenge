import {initialTodoState, TodoState} from "./todo.state";
import {TodoAction, TodoActions} from "./todo.actions";

export function todoReducer(
  state = initialTodoState,
  action: TodoAction
): TodoState {
  switch (action.type) {
    case TodoActions.SET_TODOS: {
      return {
        ...state,
        todos: action.payload
      };
    }
    case TodoActions.SET_ARCHIVED_TODOS: {
      return {
        ...state,
        archivedTodos: action.payload
      };
    }
    default:
      return state;
  }
}
