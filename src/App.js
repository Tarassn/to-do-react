import React, { Component } from 'react';
import './App.css';
import Tasks from "./components/Tasks";
import FilterTask from "./components/FilterTask";
import {toArray, toDict} from "./utils";
import {tasks} from "./data-object";
import AddTask from "./components/AddTask";


class App extends Component {
    state = {
        taskObj:{

        },
    };
    componentDidMount(){
        this.loadBasicTasks()
    }
    loadBasicTasks = () =>{
        this.setState({taskObj:tasks})
    };
    addTask = (id,name) => {
        const taskObj = {...this.state.taskObj};
        taskObj[id] =
            {name: name,
                created: new Date(),
                id: id,
                done: false,
                showTask: true};

        this.setState({ taskObj });
    };
    removeTask = (id) => {
        const taskObj = {...this.state.taskObj};
        taskObj[id] = {};
        this.setState({ taskObj });

    };
    doneStatusToggle = (id) => {
        const taskObj = {...this.state.taskObj};
        taskObj[id].done = !taskObj[id].done;
        this.setState({
            taskObj
        })
    };
    filterTask = (e) => {
        let taskObj = toArray({...this.state.taskObj}, 'name');
        if (e.target.innerHTML ==='Done'){
            taskObj.map((key) => {
                if (key.done===true) {
                    return key.showTask = true
                }
                return key.showTask = false
            })
        }
        else if (e.target.innerHTML ==='Active'){
            taskObj.map((key) => {
                if (key.done===false) {
                    return key.showTask = true
                }
                return key.showTask = false

            })
        }
        else{
            taskObj.map((key) => {
                console.log(key);
                if(key.hasOwnProperty('id')){
                    key.showTask = true;
                }
            })
        }
        taskObj = toDict(taskObj,'id');
        this.setState({
            taskObj
        })
    };
  render() {
      return (
          <div className = {'to-do'}>
              <AddTask
                  addTask = {this.addTask}
              />
              <Tasks
                  doneStatusToggle = {this.doneStatusToggle}
                  taskObj ={this.state.taskObj}
                  removeTask = {this.removeTask}
              />
              <FilterTask
                  filterTask = {this.filterTask}/>
          </div>
      );
  }
}

export default App;
