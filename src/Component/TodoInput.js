import React, { Component } from 'react'
import "../App.css"
import 'bootstrap/dist/css/bootstrap.min.css'

export class TodoInput extends Component {
    render() {
        return (
            <form onSubmit={this.props.handleSubmit} className="form-group bd-highlight">
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control "
                        placeholder="Add a new todo..." aria-label="Recipient's username" aria-describedby="button-addon2"
                        value={this.props.item}
                        onChange={this.props.handleChange}
                    />
                    <div className="input-group-append">
                        <button
                            className={this.props.isEdit ? "btn btn-danger" : "btn btn-primary"}
                            type="submit" id="button-addon2"
                            disabled={!this.props.item} >
                            {this.props.isEdit ? "Edit" : "Add"}
                        </button>
                    </div>
                </div>
            </form>
        )
    }
}

export default TodoInput