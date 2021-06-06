import PropTypes from 'prop-types';
import React from 'react';
import { Button, Input } from 'reactstrap';

const SearchPanel = ({term, handleSearch, toggleForm}) => (
    <div className='d-flex'>
        <Input
            placeholder="Search Here"
            className='mr-3 w90'
            value={term}
            onChange={(e) => handleSearch(e.target.value)}
        />

        <Button color="success" onClick={toggleForm} className="w10">New Todo</Button>
    </div>
);

SearchPanel.propTypes = {
    term: PropTypes.string.isRequired,
    handleSearch: PropTypes.func.isRequired,
    toggleForm: PropTypes.func.isRequired
}

export default SearchPanel;