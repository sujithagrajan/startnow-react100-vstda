import React, { Component } from "react";
import ToDoForm from "./components/ToDoFormnew";
import ToDoList from "./components/ToDoListnew";
import ToDoListItem from "./components/ToDoListItemnew";

var counter = 0;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoItems: []
    };
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.editItem = this.editItem.bind(this);
    this.updateDescription = this.updateDescription.bind(this);
    this.updatePriority = this.updatePriority.bind(this);
    this.saveItem = this.saveItem.bind(this);
  }
  addItem(todoItem) {
    let todoItemsCopy = [...this.state.todoItems];
    todoItemsCopy.push({
      id: counter++,
      description: todoItem.description,
      priority: todoItem.priority,
      editEnabled: false
    });
    this.setState({
      todoItems: todoItemsCopy
    });
  }
  removeItem(itemIndex) {
    let todoItemsCopy = [...this.state.todoItems];
    todoItemsCopy.splice(itemIndex, 1);
    this.setState({
      todoItems: todoItemsCopy
    });
  }
  updateDescription(itemIndex, description) {
    let todoItemsCopy = [...this.state.todoItems];
    todoItemsCopy[itemIndex].description = description;
    this.setState({todoItems:todoItemsCopy});
  }
  updatePriority(itemIndex , priority){
    let todoItemsCopy = [...this.state.todoItems];
    todoItemsCopy[itemIndex].priority = priority;
    this.setState({todoItems : todoItemsCopy})
  }
  saveItem(itemIndex){
    let todoItemsCopy = [...this.state.todoItems];
    todoItemsCopy[itemIndex].editEnabled = false;
    this.setState({todoItems:todoItemsCopy});
  }
  editItem(itemIndex) {
    let todoItemsCopy = [...this.state.todoItems];
    todoItemsCopy[itemIndex].editEnabled = true;
    this.setState({ todoItems:todoItemsCopy });
  }

  render() {
    let header;
    if (this.state.todoItems.length === 0) {
      header = (
        <div style={{ marginBottom: 0 }} className="alert alert-info">
          {" "}
          <strong>
            <p>Welcome to Very Simple Todo App</p>
          </strong>
          <p>Get started now by adding a new todo on the left.</p>
        </div>
      );
    }
    return (
      <div className="container">
        <h1 style={{color:"white"}}>Very Simple Todo App</h1>
        <p style={{color:"white"}}>Track all of the things</p>
        <hr/>
        <ToDoForm addItem={this.addItem} />
        <ToDoList
          items={this.state.todoItems}
          removeItem={this.removeItem}
          header={header}
          editItem={this.editItem}
          updateDescription={this.updateDescription}
          updatePriority={this.updatePriority}
          saveItem={this.saveItem}
        />
      </div>
    );
  }
}

export default App;