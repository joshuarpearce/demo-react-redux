import React from 'react';
import { connect } from 'react-redux';

import * as actions from './actions';

import NavBar from '../navbar/NavBar';
import SideBar from '../sidebar/SideBar';
import Grid from '../grid/Grid';

import './App.css';

const App = props => (
    <>
        <div className="navbar">
            <NavBar user={ props.user } />
        </div>
        <div className="lower">
            <div className="sidebar">
                <SideBar changeUserName={ props.changeUserName } />
            </div>
            <div className="content">
                <Grid />
            </div>
        </div>
    </>
);

const mapStateToProps = state => ({
    user: state.app.user
});

const mapDispatchToProps = dispatch => ({
    changeUserName: user => dispatch(actions.setUserName(user))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
