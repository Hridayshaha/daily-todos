import React from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import shortid from 'shortid';
import Controller from '../controllers';
import CreateTodoForm from '../create-todo-form';
import ListView from '../listview';
import TableView from '../tableview';

class Todos extends React.Component {

    state = {
        todos : [
            {
                id: "12345",
                text: "Main Todo Text",
                description: "A simple description",
                time: new Date(),
                isComplete: false,
                isSelect: false
                },
                {
                id: "12ffff45",
                text: "Main Todo Text 2",
                description: "A simple description",
                time: new Date(),
                isComplete: true,
                isSelect: true
                }
        ],
        isOpenTodoForm: false,
        searchTerm: "",
        view: 'list',
        filter : 'all',
 

    }
        
    toggleComplete = (todoId) => {
        const todos = [...this.state.todos]
        const todo = todos.find((obj) => obj.id === todoId)
        todo.isComplete = !todo.isComplete

        this.setState({todos})

            
    }
    toggleSelect = (todoId) => {
        const todos = [...this.state.todos]
        const todo = todos.find((obj) => obj.id === todoId)
        todo.isSelect = !todo.isSelect
        this.setState ({todos})
    }

    
    createTodo = (todo) => {
        todo.id = shortid.generate()
        todo.time = new Date()
        todo.isOpenTodoForm = false
        todo.isSelect = false

        const todos = [todo, ...this.state.todos]
        this.setState({ todos });
        this.toggleForm()
    }
    
    // Controller All Function 
    handleSearch = (searchValue) => {
        this.setState({searchTerm : searchValue})
     }
    
    toggleForm = () => {
        this.setState({
            isOpenTodoForm: !this.state.isOpenTodoForm
        })
    }

    handleFilter = (filter) => {
        this.setState({filter})
    }
    changeview = (event) => {
        this.setState({
            view: event.target.value
        })
    }
    clearSelected = () => {
        const todos = this.state.todos.filter(todo => !todo.isSelect);
        this.setState({todos: todos})
     }
    clearCompleted = () => {
        const todos = this.state.todos.filter(todo => !todo.isComplete)
        this.setState({todos: todos})
     }
    reset = () => {
        this.setState({
            filter: 'all',
            view: 'list',
            searchTerm: '',
            isOpenTodoForm : false
        })
     }


    // Todos Function Emplementation

    performFilter = (todos) => {
        const { filter } = this.state;
        if (filter === 'completed') {
             return todos.filter(todo => todo.isComplete)
        } else if (filter === 'running') {
            return todos.filter(todo => !todo.isComplete)
        } else {
            return todos
        }
    }

    performSearch = () => {
        return this.state.todos.filter(todo => todo.text.toLowerCase().includes(this.state.searchTerm.toLowerCase()));
    }

    getView = () => {
        let todos = this.performSearch();
        todos = this.performFilter(todos)
        return this.state.view === 'list' ? (
            <ListView
                        todos={todos}
                        toggleSelect={this.toggleSelect}
                        toggleComplete={this.toggleComplete}

            />
        ) : (
             <TableView
                        todos={todos}
                        toggleSelect={this.toggleSelect}
                        toggleComplete={this.toggleComplete}
            />   
        )
    }

    render() {
        return (
            <div>
                <h1 className="display-4 text-center mb-5">Daily Todos Here</h1>
                
                <Controller
                    term={this.state.searchTerm}
                    toggleForm={this.toggleForm}
                    handleSearch={this.handleSearch}
                    handleFilter={this.handleFilter}
                    view={this.state.view}
                    changeview={this.changeview}
                    clearCompleted={this.clearCompleted}
                    clearSelected={this.clearSelected}
                    reset={this.reset}
                />

                <div>
                    {this.getView()}
                </div>
           
                <Modal
                    isOpen={this.state.isOpenTodoForm}
                    toggle={this.toggleForm}
                >
                        <ModalHeader
                        toggle={this.toggleForm}
                    >
                        Create New Daily Todos
                    </ModalHeader>
                    <ModalBody>
                        <CreateTodoForm
                            createTodo={this.createTodo}
                        />
                    </ModalBody>
                
                </Modal>
            </div>
        )
    }
}
export default Todos;

// const Todos = {
//     id: "12345",
//     text: "Main Todo Text",
//     description: "A simple description",
//     time: "time",
//     isComplete: false,
//     isSelect: false
// }