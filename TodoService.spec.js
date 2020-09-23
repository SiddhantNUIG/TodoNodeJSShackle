import { createTodo } from './TodoService'
import todo from './TodoModel'

jest.mock('./TodoModel');

describe('createTodo', () => {
    it('should invoke the model', () => {
        createTodo()
        expect(todo).toHaveBeenCalled()
    })
});

