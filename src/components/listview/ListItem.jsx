import PropTypes from 'prop-types';
import React from 'react';
import { Button, CustomInput, ListGroupItem } from 'reactstrap';

const ListItem = ({todo, toggleSelect, toggleComplete}) => {
    return (
        <ListGroupItem className="d-flex align-items-center pt-3 pb-1">
            <CustomInput
                type="checkbox"
                checked={todo.isSelect}
                id={todo.id}
                onClick={() => toggleSelect(todo.id)}
            />
            <div className="mx-3">
                <h4>{todo.text}</h4>
                <p>{todo.time.toDateString()}</p>
            </div>
            <Button
                className="ml-auto"
                color={todo.isComplete ? 'danger' : 'success'}
                onClick={() => toggleComplete(todo.id)}
            >
                {todo.isComplete ? 'Completed' : 'Running'}
            </Button>
        </ListGroupItem>
    );
}
export default ListItem;

ListItem.propTypes = {
    todo: PropTypes.object.isRequired,
    toggleComplete: PropTypes.func.isRequired,
    toggleSelect: PropTypes.func.isRequired
}





// const Todos = {
//     id: "12345",
//     text: "Main Todo Text",
//     description: "A simple description",
//     time: "time",
//     isComplete: false,
//     isSelect: false
// }