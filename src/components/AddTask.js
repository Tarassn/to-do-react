import React, { Component } from 'react';
let nanoid = require('nanoid');//random id


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
    handleClick = () => {
            let randomId = nanoid(4);
            this.props.addTask(randomId, this.state.currentName)
    };

    render() {

        return (
            <div className={'add-task'}>
                <input onChange={this.changeName} type="text"/>
                <button onClick={this.handleClick}
                        className="btn btn-outline-success"
                        disabled={this.state.inputLength<1}
                >Add</button>
            </div>
        );
    }
}


export default AddTask;