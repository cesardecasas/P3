import React,{ useState } from "react";
import Nav from './Nav';
import { Form } from 'react-final-form';
import { useHistory } from "react-router-dom";

const validators = (value)=> {
    const errors = {}

    if (!value.name) {
        errors.name = 'Title is required'
    
    }
    if (!value.task) {
        errors.task = "task is required"
    }
    return errors
}

const NewBoard = () => {
    const [loading,setLoading] = useState(false);
    const [message,setMessage] = useState('');
    const history = useHistory();

    const onSubmit = values=>{
        const {name} = values;
        setLoading(true);
        BoardService.create({name})
        .then(res=>{
            setLoading(false);
            setMessage(res.data.message);
            setInterval(function(){ 
                history.push('/');
            },2000);
        });
    }
    return (
        <div className="Board">
            <Nav title="Boards" />
            <div>
                <div>
                    <div>
                        { message!==''? (<div className="alert alert-success" >{message}</div>) :''}
                        <h3>New Board</h3>
                        <Form
                        validate={validators}
                        onSubmit={onSubmit}
                        render={(formProps) =>(
                            <div>
                                <CustomField name="name" inputType="text" label="name"  placeholder="name..." />
                                <CustomField name = "task" inputType ="text" label="task" placeholder="task..."/>
                                <button type="submit" className="btn btn-success" onClick={formProps.handleSubmit} disabled={loading}>
                                    {loading ? ('Creating board...'): ('Create')}
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

export default NewBoard