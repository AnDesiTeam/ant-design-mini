import { Text, View } from 'tsxml';

interface Props {
  todoList: { id: string; content: string }[];
}

export default ({ todoList }: Props) => (
  <View class="ant-calendar">
    {todoList.map((task, taskIndex) => (
      <Text key={task.id} data-item-id={taskIndex}>
        {taskIndex} {task.content}
      </Text>
    ))}
    <test loading />
  </View>
);
