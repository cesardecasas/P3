import React, { useState } from "react";
import Nav from './Nav';
import { Form } from 'react-final-form';
import { useHistory } from "react-router-dom";

export default validators = (value) => {
    const errors = {}

    if (!value.name) {
        errors.name = 'name is required'

    }
    if (!value.task) {
        errors.task = "task is required"
    }
    return errors
}

export default Board = () => {
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


    return (
        <div className="Board">
            <Nav title="Boards" />
            <div>
                <div>
                    <div>
                        {message !== '' ? (<div className="alert alert-success" >{message}</div>) : ''}
                        <h3>Board</h3>
                        <Form
                            validate={validators}
                            onSubmit={onSubmit}
                            render={(formProps) => (
                                <div>
                                    <CustomField name="name" inputType="text" label="name" placeholder="name..." />
                                    <CustomField name="task" inputType="text" label="task" placeholder="task..." />
                                    <button type="submit" className="btn btn-success" onClick={formProps.handleSubmit} disabled={loading}>
                                        {loading ? ('Creating board...') : ('Create')}
                                    </button>
                                </div>

                            )}



                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditBoard = (props) => {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [board, setBoard] = useState({});
    const history = useHistory();
    const { match: { params } } = props;

    useEffect(() => {
        BoardService.getById(params.boardId)
            .then(res => {
                setBoard({
                    name: res.data.name,
                    task: res.data.task
                });
            });
    }, [])
    const onSubmitChange = values => {
        const { name, task } = values;
        setLoading(true);
        BoardService.update(params.boardId, { name, task })
            .then(res => {
                setLoading(false);
                setMessage(res.data.message);
                setInterval(function () {
                    history.push('/');
                }, 2000);
            });
    }
    return (
        <div className="Board">
            <NavBar title="Board" />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 offset-md-3 col-sm-12">
                        {message !== '' ? (<div className="alert alert-success" >{message}</div>) : ''}
                        <h3>Edit Board</h3>
                        <Form
                            initialValues={board}
                            validate={validators}
                            onSubmit={onSubmitChange}
                            render={(formProps) => (
                                <div>
                                    <CustomField name="name" inputType="text" label="name" placeholder="name..." />
                                    <CustomField name="task" inputType="textarea" label="task" placeholder="task..." />
                                    <button type="submit" className="btn btn-success" onClick={formProps.handleSubmit} disabled={loading}>
                                        {loading ? ('Updating board...') : ('Update')}
                                    </button>
                                </div>

                            )}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}