import PropTypes from 'prop-types';
import React from 'react';
import { Button, CustomInput } from 'reactstrap';

const TableItem = ({todo, toggleSelect, toggleComplete}) => {
    return (
        <tr>
            <td className='pt-3'>
                <CustomInput
                    type='checkbox'
                    id={todo.id}
                    checked={todo.isSelect}
                    onClick={() => toggleSelect(todo.id)}
                />
            </td>
            <td className='pt-3'>{todo.time.toDateString()}</td>
            <td className='pt-3'>{todo.text}</td>
            <td>
                <Button
                    color={todo.isComplete ? 'danger' : 'success'}
                    onClick={() => toggleComplete(todo.id)}
                >
                    {todo.isComplete ? 'Completed' : 'Running'}
                </Button>
            </td>
        </tr>
    )
}

TableItem.propTypes  = {
    todo: PropTypes.object.isRequired,
    toggleComplete: PropTypes.func.isRequired,
    toggleSelect : PropTypes.func.isRequired
}

export default TableItem;