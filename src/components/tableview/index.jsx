import PropTypes from 'prop-types';
import React from 'react';
import { Table } from 'reactstrap';
import TableItem from './TableItem';

const TableView = ({todos, toggleSelect, toggleComplete}) => {
    return (
        <Table bordered hover className="my-3">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Time</th>
                    <th>Todo</th>
                    <th>Work</th>
                </tr>
            </thead>
            <tbody>
                 {todos.map((todo) => (
                <TableItem
                    todo={todo}
                    toggleSelect={toggleSelect}
                    toggleComplete={toggleComplete}
                />
            ))}
            </tbody>
        </Table>
    );
}

TableView.propTypes = {
    todos: PropTypes.object.isRequired,
    toggleSelect: PropTypes.func.isRequired,
    toggleComplete: PropTypes.func.isRequired
}

export default TableView;