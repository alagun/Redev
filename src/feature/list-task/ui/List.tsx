import React, { useState, useRef } from 'react'
import { Button, Card, Input, List, Space, InputRef } from 'antd'
import { ListItem } from './ListItem'
import { TListComponent, IListItem } from '../models/listTask'

const ListComponent = (props:TListComponent) => {

  const [items, setItems] = useState<IListItem[]>(props.list || [])
  const [inputValue, setInputValue] = useState('')
  const inputRef = useRef<InputRef>(null)

  const addItem = () => {
    if (inputValue.trim()) {
      setItems([...items, { id: Date.now(), text: inputValue }])
      setInputValue('')
    }
  }

  const modifyItem = (id: number) => {
    setItems(items.map(item => item.id === id ? { ...item, text: `!!!${item.text}` } : item,
    ))
  }

  const focusInput = () => {
    inputRef.current?.focus()
  }

  const deleteItem = (id: number) => {
    setItems(items.filter(item => item.id !== id))
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      addItem()
    }
  }

  return (
    <Card title='Задание 3: Список с ключами и ссылками' style={{ marginBottom: 20 }}>
      <Space direction='vertical' style={{ width: '100%' }}>
        <Space>
          <Input
            ref={inputRef}
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder='Введите элемент'
          />
          <Button type='primary' onClick={addItem}>Добавить</Button>
          <Button onClick={focusInput}>Фокус на поле</Button>
        </Space>

        <List
          dataSource={items}
          renderItem={item => (
            <List.Item>
              <ListItem
                item={item}
                onModify={modifyItem}
                onDelete={deleteItem}
              />
            </List.Item>
          )}
        />
      </Space>
    </Card>
  )
}

export default ListComponent