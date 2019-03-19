import React, { Component } from 'react';


class FilterTask extends Component {

    render() {

        return (
            <div className={'filter-task'}>
                <button onClick={this.props.filterTask} name={'All'} className="btn btn-outline-secondary">All</button>
                <button onClick={this.props.filterTask} name={'Active'} className="btn btn-outline-secondary">Active</button>
                <button onClick={this.props.filterTask} name={'Done'} className="btn btn-outline-secondary">Done</button>
            </div>
        );
    }
}


export default FilterTask;