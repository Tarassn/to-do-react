import React, { Component } from 'react';
import AddTask from "./AddTask";
import Tasks from "./Tasks";
import FilterTask from "./FilterTask";
import {toArray, toDict} from "../utils";
import {tasks} from "../data-object";


class ToDo extends Component {
    state = {
        taskList:{

        },
    };
    componentDidMount(){
        this.loadBasicTasks()
    }
    loadBasicTasks = () =>{
        this.setState({taskList:tasks})
    };
    addTask = (id,name) => {
        const taskList = {...this.state.taskList};
        taskList[id] =
            {name: name,
            created: new Date(),
            id: id,
            done: false,
            showTask: true};

        this.setState({ taskList });
    };
    removeTask = (id) => {
        const taskList = {...this.state.taskList};
        taskList[id] = {};
        this.setState({ taskList });

    };
    doneStatusToggle = (id) => {
        const taskList = {...this.state.taskList};
        taskList[id].done = !taskList[id].done;
        this.setState({
            taskList
        })
    };
    filterTask = (e) => {
        let taskList = toArray({...this.state.taskList}, 'name');
        if (e.target.innerHTML ==='Done'){
            taskList.map((key) => {
                if (key.done===true) {
                   return key.showTask = true
                }
                return key.showTask = false
            })
        }
        else if (e.target.innerHTML ==='Active'){
            taskList.map((key) => {
                if (key.done===false) {
                   return key.showTask = true
                }
                return key.showTask = false

            })
        }
        else{
            taskList.map((key) => {
                console.log(key);
                if(key.hasOwnProperty('id')){
                    key.showTask = true;
                }
            })
        }
        taskList = toDict(taskList,'id');
        this.setState({
            taskList
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
                    taskList ={this.state.taskList}
                    removeTask = {this.removeTask}
                />
                <FilterTask
                    filterTask = {this.filterTask}/>
            </div>
        );
    }
}


export default ToDo;