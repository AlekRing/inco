import React, {FormEvent} from "react";
import { Link, useNavigate } from "react-router-dom";
import ButtonBase from "../../components/button/buttonBase";
import InputBase from "../../components/input/inputBase";

interface fieldsInterface {
    [string: string]: {
        placeholder: string;
        type?: 'number' | 'password' | 'text';
    }
} 

const fields: fieldsInterface = {
    username: {
        placeholder: 'user name',
    },
    password: {
        placeholder: 'password',
        type: 'password',
    },
    firstName: {
        placeholder: 'first name',
    },
    lastName: {
        placeholder: 'last name',
    },
};

const SignUp = () => {
    const navigate = useNavigate();

    const handleSubmit = (e: any, inputsKeys: string[]) => {
        e.preventDefault();

        const inputValues: {[string: string]: {name: string, value: FormDataEntryValue | null}} = {};

        const formData = new FormData(e.target);
        
        inputsKeys.forEach(name => inputValues[name] = {name, value: formData.get(name)});

        console.log(inputValues);

        navigate('/');
    };

    return (
        <>
            <div>
                Please fill the form below
            </div>
            <form action="submit" onSubmit={e => handleSubmit(e, Object.keys(fields))}>
                {
                    Object.entries(fields).map(([key, value]) => (
                        <>
                            <label htmlFor={key} key={key}>
                                {key}
                                <InputBase key={key} name={key} {...value} />
                            </label>
                        </>
                    ))
                }
                <ButtonBase text="Submit" type="submit" />
            </form>
            <Link to='/login'>Login</Link>
        </>
    )
};

export default SignUp;