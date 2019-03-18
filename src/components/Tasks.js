import React, { Component } from 'react';
import Task from "./Task";


class Tasks extends Component {

    render() {

        return (
            <div>
                {Object.keys(this.props.taskObj).map((key) => (
                <Task
                    key = {key}
                    id = {key}
                    name = {this.props.taskObj[key].name}
                    taskObj = {this.props.taskObj}
                    showTask = {this.props.taskObj[key].showTask}
                    removeTask = {this.props.removeTask}
                    doneStatusToggle = {this.props.doneStatusToggle}
                    done={this.props.taskObj[key].done}
                />

            ))}
            </div>
        );
    }
}


export default Tasks;