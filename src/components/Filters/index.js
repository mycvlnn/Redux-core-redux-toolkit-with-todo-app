import { Col, Row, Input, Typography, Radio, Select, Tag } from "antd"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { changePrioritiesAction, changeStatusAction, searchTodoAction } from "../../redux/actions"

const { Search } = Input

export default function Filters() {
  const dispatch = useDispatch()

  const [enteredSearch, setEnteredSearch] = useState("")
  const [status, setStatus] = useState("All")
  const [priorities, setPriorities] = useState([])

  const changeStatusHandler = (e) => {
    const value = e.target.value
    setStatus(value)

    dispatch(changeStatusAction(value))
  }

  const changePrioritiesHandler = (values) => {
    setPriorities(values)

    dispatch(changePrioritiesAction(values))
  }

  const changeInputSearchHandler = (e) => {
    const value = e.target.value
    setEnteredSearch(value)

    dispatch(searchTodoAction(value))
  }

  return (
    <Row justify="center">
      <Col span={24}>
        <Typography.Paragraph style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}>
          Search
        </Typography.Paragraph>
        <Search
          placeholder="input search text"
          value={enteredSearch}
          onChange={changeInputSearchHandler}
        />
      </Col>
      <Col sm={24}>
        <Typography.Paragraph style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}>
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group value={status} onChange={changeStatusHandler}>
          <Radio value="All">All</Radio>
          <Radio value="Completed">Completed</Radio>
          <Radio value="Todo">To do</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}>
          Filter By Priority
        </Typography.Paragraph>
        <Select
          value={priorities}
          mode="multiple"
          allowClear
          placeholder="Please select"
          style={{ width: "100%" }}
          onChange={changePrioritiesHandler}
        >
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
      </Col>
    </Row>
  )
}
