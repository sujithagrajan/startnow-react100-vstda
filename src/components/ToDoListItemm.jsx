import React, { Component } from "react";

class TodoListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: this.props.item.description,
      initialPriority: this.props.item.priority,
      priority: this.props.item.priority,
      index: this.props.item.index,
      
    }
    this.onClickClose = this.onClickClose.bind(this);
    this.onClickEdit = this.onClickEdit.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.onDescriptionChange = this.onDescriptionChange.bind(this);
    this.onPriorityChange = this.onPriorityChange.bind(this);   
    this.finishedItem = this.finishedItem.bind(this);
  }
  getPriority() {
    switch (this.state.priority) {
      case "1":
        return "list-group-item-success";
      case "2":
        return "list-group-item-warning";
      case "3":
        return "list-group-item-danger";
      case "4":
        return " disabled"
    }
  }
  onClickClose() {
    var index = parseInt(this.props.index);
    console.log(index);
    this.props.removeItem(index);
  }
  onClickEdit() {
    var index = parseInt(this.props.index);
    this.props.editItem(index);
  }
  handleSave() {
    var index = parseInt(this.props.index);
    this.props.saveItem(index);
    this.props.updatePriority(index, this.state.priority);
    this.setState({
      initialPriority:this.state.priority
    });
  }
  onDescriptionChange(e) {
    var index = parseInt(this.props.index);
    var description = e.target.value;
    this.props.updateDescription(index, description);
    this.setState({description});
  }
  onPriorityChange(e){
    var initialPriority = this.state.initialPriority;
    var priority = e.target.value;
    var index = parseInt(this.props.index);
    this.state.priority = priority;
    this.setState({priority});
    
  } 
  finishedItem(e){
    if(e.target.checked){
      this.setState({
        priority: "4"
      })
    }else {
      this.setState({
        priority: this.props.item.priority
      });
    }
  }
  render() {
    let body;
    if (this.props.item.editEnabled) {
      body = (
        <div
          className={`list-group-item ${this.getPriority()}`}
        >
          <div className="form-group">
            <label>Description</label>
            <br />
            <textarea
              className="update-todo-text form-control"
              value={this.props.item.description}
              onChange={this.onDescriptionChange}
            />
          </div>
          <div className="row">
           
            <div className="priority col-xs-6">
              <div className="form-group">
                <label>Priority</label>
                <select
                  className="update-todo-priority form-control"
                  onChange={this.onPriorityChange}
                  defaultValue={this.props.item.priority}
                >
                  <option value="1">Low</option>
                  <option value="2">Medium</option>
                  <option value="3">High</option>
                </select>
              </div>
            </div>
            <button
              style={{ float: "right", marginRight: 1.3 + "em" }}
              type="submit"
              onClick={this.handleSave}
              className="update-todo btn btn-success"
            >
              Save
            </button>
          </div>
        </div>
      );
    } else {
      body = (
        <div
          className={`list-group-item ${this.getPriority()}`}
        >
          <input type="checkbox" id="finishedCheckBox" onChange={this.finishedItem} value="off"/>
          {this.props.item.description}
          <span
            style={{ marginRight: 1 + "em" }}
            className="glyphicon glyphicon-trash pull-right"
            onClick={this.onClickClose}
          />
          <span
            style={{ marginRight: 1 + "em" }}
            className="glyphicon glyphicon-edit pull-right"
            onClick={this.onClickEdit}
          />
        </div>
      );
    }
    return body;
  }
}

export default TodoListItem;