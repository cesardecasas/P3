import React, { useState } from "react";
// import { Form } from 'react-final-form';
import { useHistory } from "react-router-dom";
import BoardService from '../services/BoardServices'

const  Board = () => {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const history = useHistory();
    
    const onSubmit = values => {
        const { name } = values;
        setLoading(true);
        BoardService.create({ name })
        .then(res => {
            setLoading(false);
            setMessage(res.data.message);
            setInterval(function () {
                history.push('/');
            }, 2000);
        });
    }
    const validators = (value) => {
        const errors = {}
    
        if (!value.name) {
            errors.name = 'name is required'
    
        }
        if (!value.task) {
            errors.task = "task is required"
        }
        return errors
    }
    
    
    return (
        <div className="Board">
            <div>
                <div>
                    <div>
                        {message !== '' ? (<div className="alert alert-success" >{message}</div>) : ''}
                        <h3>Board</h3>
                        {/* <Form
                            validate={validators}
                            onSubmit={onSubmit}
                            render={(formProps) => (
                                <div>
                                    
                                    <button type="submit" className="btn btn-success" onClick={formProps.handleSubmit} disabled={loading}>
                                        {loading ? ('Creating board...') : ('Create')}
                                    </button>
                                </div>

                            )}



                        /> */}
                        <h1>boards</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Board