import PropTypes from 'prop-types';
import React from 'react';
import ListItem from './ListItem';


const ListView = ({todos, toggleSelect, toggleComplete}) => {
    return (
        todos.map((todo) => (
            <ListItem
                todo={todo}
                toggleSelect={toggleSelect}
                toggleComplete={toggleComplete}
            />
        ))
    );
}

ListView.propTypes  = {
    todos: PropTypes.object.isRequired,
    toggleComplete: PropTypes.func.isRequired,
    toggleSelect: PropTypes.func.isRequired

}


export default ListView;