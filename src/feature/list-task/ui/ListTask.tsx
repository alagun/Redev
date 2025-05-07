import List from './List'

const ListTask = () => {
  const list = [
    {
      id: 1,
      text: 'Item1',
    },
    {
      id: 2,
      text: 'Item2',
    },
    {
      id: 3,
      text: 'Item3',
    },
  ]

  return (
    <>
      <List list={list}/>
    </>
  )
}

export default ListTask