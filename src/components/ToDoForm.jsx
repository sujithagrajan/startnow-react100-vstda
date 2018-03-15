import React, { Component } from "react";

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      priority: "1",
      index: null
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  onSubmit(event) {
    event.preventDefault();
    this.props.addItem(this.state);
    this.setState({ description: "" });
  }
  handleChange(e) {
    var priority = e.target.value;
    this.setState({ priority });
  }
  handleDescription(e) {
    var description = e.target.value;
    this.setState({ description });
  }
  render() {
    return (
      <div className="col-md-4">
        <div className="panel-group">
          <div className="panel panel-default">
            <div className="panel-heading">Add New Todo</div>
            <div className="panel-body">
              <strong>I want to..</strong>
              <textarea
                value={this.state.description}
                onChange={this.handleDescription.bind(this)}
                className="create-todo-text"
              />
              <strong>How much of a priority is this? </strong>
              <br />
              <select
                value={this.props.priority}
                onChange={this.handleChange}
                className="create-todo-priority form-control"
              >
                <option value="1">Low</option>
                <option value="2">Medium</option>
                <option value="3">High</option>
              </select>
            </div>
            <div className="panel-footer">
              <form onSubmit={this.onSubmit}>
                <button className="create-todo btn btn-block btn-success ">
                  Add
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TodoForm;