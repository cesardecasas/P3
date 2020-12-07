import React,{ useState } from "react";
import Nav from './Nav';
import { Form } from 'react-final-form';
import { useHistory } from "react-router-dom";

const validators = (value)=> {
    const errors = {}

    if (!value.name) {
        errors.name = 'Title is required'
    }
    return errors
}

const NewBoard = () => {
    const [loading,setLoading] = useState(false);
    const [message,setMessage] = useState('');
    const history = useHistory();

    const onSubmit = values=>{
        const {title} = values;
        setLoading(true);
        BoardService.create({title})
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
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 offset-md-3 col-sm-12">
                        { message!==''? (<div className="alert alert-success" >{message}</div>) :''}
                        <h3>New Board</h3>
                        <Form
                        validate={validators}
                        onSubmit={onSubmit}
                        render={(formProps) =>(
                            <div>
                                <CustomField name="name" inputType="text" label="name"  placeholder="name..." />
                                <button type="submit" className="btn btn-success" onClick={formProps.handleSubmit} disabled={loading}>
                                    {loading ? ('Creating post...'): ('Create')}
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