import React, { Component } from 'react';
import Task from "./Task";


class Tasks extends Component {

    render() {
        let taskObj = this.props.taskObj;
        return (
            <div>
                {Object.keys(taskObj).map((key) => (
                <Task
                    key = {key}
                    id = {key}
                    name = {taskObj[key].name}
                    taskObj = {taskObj}
                    showTask = {taskObj[key].showTask}
                    removeTask = {this.props.removeTask}
                    doneStatusToggle = {this.props.doneStatusToggle}
                    done={taskObj[key].done}
                />

            ))}
            </div>
        );
    }
}


export default Tasks;