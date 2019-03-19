import React, { Component } from 'react';


class AddTask extends Component {
    state={
        currentName:'',
        inputLength:0,
    };
    changeName = (event) => {
        let currentName = event.target.value;
        let inputLength = event.target.value.length;
        this.setState({
            currentName,
            inputLength
        })
    };

    render() {

        return (
            <div className={'add-task'}>
                <input onChange={this.changeName} type="text"/>
                <button onClick={()=>{this.props.addTask(this.state.currentName)}}
                        className="btn btn-outline-success"
                        disabled={this.state.inputLength<1}
                >Add</button>
            </div>
        );
    }
}


export default AddTask;