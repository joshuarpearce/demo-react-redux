import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from './actions';

class Grid extends Component {
    constructor(props){
        super(props);
        this.inputRef = React.createRef();

        this.handleAdd = this.handleAdd.bind(this);
    }

    handleAdd(){
        this.props.addRow(this.inputRef.current.value);
    }

    render(){
        return (
            <>
                { this.props.rows && (
                    <table>
                        { this.props.rows.map(r => (
                            <tr>
                                <td>{ r.id }</td>
                                <td>{ r.value }</td>
                                <td>
                                    <button onClick={ () => this.props.removeRow(r.id) }>X</button>
                                </td>
                            </tr>
                        )) }
                    </table>
                ) }
                <input ref={ this.inputRef } />
                <button type="button" onClick={ this.handleAdd }>Add row</button>
            </>
        );
    }
}

const mapStateToProps = state => ({
    rows: state.grid.rows
});

const mapDispatchToProps = dispatch => ({
    addRow: value => dispatch(actions.addRow(value)),
    removeRow: id => dispatch(actions.removeRow(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Grid);
