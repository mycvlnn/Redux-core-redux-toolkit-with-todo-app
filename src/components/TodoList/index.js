import { Col, Row, Input, Button, Select, Tag } from 'antd'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'

import { todoListRemainingSelector } from '../../redux/selectors'
import Todo from '../Todo'
import { addNewTodo } from './todoListSlice'

export default function TodoList() {
  const dispatch = useDispatch()

  const todoList = useSelector(todoListRemainingSelector)
  const [eneteredTodo, setEnteredTodo] = useState('')
  const [prioritySelected, setPrioritySelected] = useState('Medium')

  const changePriorityHandler = (priority) => {
    setPrioritySelected(priority)
  }

  const changeInputTodoHandler = (e) => {
    setEnteredTodo(e.target.value)
  }

  const renderTodoList = () => {
    return todoList.map((todo) => {
      return (
        <Todo
          key={todo.id}
          id={todo.id}
          name={todo.name}
          prioriry={todo.priority}
          completed={todo.completed}
        />
      )
    })
  }

  const addTodoHandler = () => {
    dispatch(
      addNewTodo({
        id: uuidv4(),
        name: eneteredTodo,
        priority: prioritySelected,
        completed: false
      })
    )

    setEnteredTodo('')
    setPrioritySelected('Medium')
  }

  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {renderTodoList()}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input value={eneteredTodo} onChange={changeInputTodoHandler} />
          <Select defaultValue="Medium" value={prioritySelected} onChange={changePriorityHandler}>
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={addTodoHandler}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  )
}
