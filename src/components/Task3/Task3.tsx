import List from "./List";

const Task3 = () => {
  const list = [
    {
      id: 1,
      text: 'Item1'
    },
    {
      id: 2,
      text: 'Item2'
    },
    {
      id: 3,
      text: 'Item3'
    },
  ]
  return (
    <>
      <List list={list}/>
    </>
  );
};

export default Task3;