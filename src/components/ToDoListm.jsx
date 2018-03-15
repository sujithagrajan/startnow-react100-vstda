import React, { Component } from "react";
import TodoListItem from "./ToDoListItem";

class TodoList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    var items = this.props.items.map((item, index) => {
      return (
        <TodoListItem
          key={item.id}
          item={item}
          index={index}
          removeItem={this.props.removeItem}
          editItem={this.props.editItem}
          updateDescription={this.props.updateDescription}
          updatePriority={this.props.updatePriority}
          saveItem={this.props.saveItem}
          
        />
      );
    });
    return (
      <div className="col-md-8">
        <div />
        <div className="panel panel-default">
          <div className="panel-heading">View Todos</div>
          {this.props.header}
          <div style={{ paddingTop: 0, paddingBottom: 0 }}>{items}</div>
        </div>
      </div>
    );
  }
}

export default TodoList;