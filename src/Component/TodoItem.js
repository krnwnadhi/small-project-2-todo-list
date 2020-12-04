import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BsCheckAll } from "react-icons/bs";

export class TodoItem extends Component {

    componentWillUnmount() {
        console.log("Component unmounted");
    }

    render() {
        return (
            <div onDoubleClick={this.props.handleEdit} className="list-group animate__animated animate__slideInDown " data-toggle="tooltip" data-placement="top" title="Double Click to Edit">
                <div className="list-group-item text-primary d-inline-flex p-2 bd-highlight d-flex justify-content-between ">
                    <li className="text-break"><BsCheckAll /> {this.props.list}</li>
                    <button onClick={this.props.handleDelete} style={{ cursor: "pointer" }} type="button" className="close" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </div>
        )
    }
}
export default TodoItem