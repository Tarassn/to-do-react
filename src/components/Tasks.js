import React, { Component } from 'react';
import Task from "./Task";


class Tasks extends Component {

    render() {

        return (
            <div>
                {Object.keys(this.props.taskList).map((key) => (
                <Task
                    key = {key}
                    id = {key}
                    name = {this.props.taskList[key].name}
                    taskList = {this.props.taskList}
                    showTask = {this.props.taskList[key].showTask}
                    removeTask = {this.props.removeTask}
                    doneStatusToggle = {this.props.doneStatusToggle}
                    done={this.props.taskList[key].done}
                />

            ))}
            </div>
        );
    }
}


export default Tasks;