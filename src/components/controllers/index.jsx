import PropTypes from 'prop-types';
import React from 'react';
import { Col, Row } from 'reactstrap';
import BulkController from './bulk-controller';
import FilterController from './filter-controller';
import SearchPanel from './search-panel';
import ViewController from './view-controller';

const Controller = ({term, toggleForm, handleSearch, handleFilter, view, changeview, clearCompleted, clearSelected, reset}) => (
    <div>
        <SearchPanel
            term={term}
            toggleForm={toggleForm}
            handleSearch={handleSearch}
        />

        <Row className='my-3'>
            <Col md={{ size: 4 }}>
                <FilterController handleFilter={handleFilter}/>
            </Col>
            <Col md={{ size: 4 }}>
                <ViewController
                    view={view}
                    changeview={changeview}
                />
            </Col>
            <Col md={{ size: 4 }}  className="d-flex">
                <div className="ms-auto">
                <BulkController
                    clearCompleted={clearCompleted}
                    clearSelected={clearSelected}
                    reset={reset}
                />
                </div>
            </Col>
        </Row>
    </div>
)

Controller.propTypes = {
    term: PropTypes.string.isRequired,
    toggleForm: PropTypes.func.isRequired,
    handleSearch: PropTypes.func.isRequired,
    handleFilter: PropTypes.func.isRequired,
    view: PropTypes.string.isRequired,
    changeview: PropTypes.func.isRequired,
    clearCompleted: PropTypes.func.isRequired,
    clearSelected: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired
}

export default Controller;