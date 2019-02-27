import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from './actions';

import NavBar from '../navbar/NavBar';

import './App.css';

const App = props => (
    <>
        <div className="navbar">
            <NavBar
                user={ props.user }
            />
        </div>
        <div className="lower">
            <div className="sidebar">side</div>
            <div className="content">content</div>
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
