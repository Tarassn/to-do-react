import React, { Component } from 'react';



class Task extends Component {

    render() {
        if(this.props.taskList[this.props.id]) {
            return (
                <div className="task" hidden={!this.props.showTask} data-done={this.props.done}>
                    <input type="checkbox" checked={this.props.taskList[this.props.id].done}
                           value={this.props.taskList[this.props.id].done}
                           onChange={()=>{this.props.doneStatusToggle(this.props.id)}}/>
                    {this.props.name}
                    <button className="btn btn-outline-danger"
                            onClick={() => {
                            this.props.removeTask(this.props.id)
                    }}>Delete
                    </button>
                    ({this.props.id})

                </div>
            );
        }
        else{
            return null
        }
    }
}


export default Task;