import React from 'react';

export default props => (
    <label>
        Please enter a user name
        <input onInput={ event => props.changeUserName(event.target.value) } />
    </label>
);