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


      