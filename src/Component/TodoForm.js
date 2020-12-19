import React, { Component } from 'react'
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import 'bootstrap/dist/css/bootstrap.min.css'
import { HiClipboardCheck } from "react-icons/hi";

let timeOut;

export class TodoForm extends Component {

    state = {
        item: '',
        items: [],
        id: Math.random(),
        isEdit: false,
        loading: true,
        timeOut: undefined,
    };

    componentDidMount() {
        console.log("Component Mounted");
        timeOut = setTimeout(() => {
            this.setState({
                loading: false,
            });
        }, 2000);
    }

    componentDidUpdate() {
        console.log("Component Updated");
    }

    componentWillUnmount() {
        clearTimeout(timeOut);
    }

    handleChange = (e) => {
        this.setState({
            item: e.target.value
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();

        const newItem = {
            id: this.state.id,
            list: this.state.item
        };

        console.log(newItem);

        const updatedItems = [...this.state.items, newItem];

        this.setState({
            items: updatedItems,
            item: '',
            id: Math.random(),
            isEdit: false
        });

    };

    handleDelete = (id) => {

        const confirm = window.confirm('Are you sure to delete this item?');

        if (confirm) {
            const filteredItems = this.state.items.filter(item => item.id !== id)
            this.setState({
                items: filteredItems
            });
        }
        console.log(id);
    };

    handleEdit = (id) => {
        // console.log('Edited');

        const confirm = window.confirm('Are you sure to edit this item?');

        if (confirm) {
            const filteredItems = this.state.items.filter(item => item.id !== id);

            const selectedItem = this.state.items.find(item => item.id === id);

            console.log(selectedItem);

            this.setState({
                items: filteredItems,
                item: selectedItem.list,
                isEdit: true,
            });
        }
    };

    render() {
        if (this.state.loading) {
            return (
                <div className="text-primary ">
                    <div className="spinner-border spinner-border-sm" role="status">
                        <span className="sr-only"></span>
                    </div>
                    &nbsp; Loading...
                </div>
            );
        }
        return (
            <div className="animate__animated animate__fadeInDownBig">
                <h1 className="text-primary todo font-weight-bold"><HiClipboardCheck /> Todo List</h1><br />
                <TodoInput
                    item={this.state.item}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    isEdit={this.state.isEdit}
                />
                {this.state.items.length > 0 && (
                    <TodoList
                        items={this.state.items}
                        handleDelete={this.handleDelete}
                        handleEdit={this.handleEdit}
                    />
                )}
            </div>
        )
    }
}

export default TodoForm