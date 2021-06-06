import PropTypes from 'prop-types';
import React from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'; //reactstrap

class CreateTodoForm extends React.Component {

    state = {
        text: '',
        description: '',
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.createTodo(this.state)
        event.target.reset()
        this.setState({
            text: '',
            description: '',
        })
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormGroup className="mb-3">
                    <Label className="h6">Enter Task</Label>
                    <Input
                        name="text"
                        placeholder="Enter Your Task"
                        value={this.state.text}
                        onChange={this.handleChange}
                    />
                </FormGroup>

                <FormGroup className="mb-3">
                    <Label className="h6">Enter Task Description</Label>
                    <Input
                        name="description"
                        type="textarea"
                        placeholder="Enter Description About Your Task"
                        value={this.state.description}
                        onChange={this.handleChange}
                    />
                </FormGroup>
                <Button type="submit" color="primary" className="align-center">Create Task</Button>
            </Form> 
        )
    }
}


CreateTodoForm.propTypes = {
    createTodo: PropTypes.func.isRequired,
}

export default CreateTodoForm;