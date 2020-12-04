import React, { Component } from 'react'
import TodoItem from './TodoItem'
import 'bootstrap/dist/css/bootstrap.min.css'

export class TodoList extends Component {
    render() {
        return (
            <div>
                <h2 className="text-primary todo font-italic">Your Current Todo:</h2>
                <br />
                {
                    this.props.items.map(item => {
                        return (
                            <TodoItem
                                key={item.id}
                                list={item.list}
                                handleDelete={() => this.props.handleDelete(item.id)}
                                handleEdit={() => this.props.handleEdit(item.id)}
                            />
                        )
                    })
                }
            </div>
        )
    }
}

export default TodoList
