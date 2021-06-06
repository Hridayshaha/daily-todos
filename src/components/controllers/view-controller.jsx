import PropTypes from 'prop-types';
import React from 'react';
import { CustomInput, Label } from 'reactstrap';

const ViewController = ({changeview, view}) => (
    <div className="d-flex">
            <Label for="list-view" className="me-4">
            <CustomInput
            type="radio"
                name="view"
                value="list"
                id="list-view"
                onChange={changeview}
                checked={view === 'list'}
                className="d-inline-block me-1"
            />
            List View
            </Label>

        <Label for="table-view" className="me-4">
            <CustomInput
            type="radio"
                id='table-view'
                value='table'
                name='view'
                onChange={changeview}
                checked={view === 'table'}
                className="d-inline-block me-1"
            />
            Table View
        </Label>
    </div>
)

ViewController.propTypes = {
    view: PropTypes.string.isRequired,
    changeview: PropTypes.func.isRequired
}

export default ViewController;