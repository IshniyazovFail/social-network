import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export type DialogPostType={
    post:string
}
export const DialogPost:React.FC<InjectedFormProps<DialogPostType>> = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field name={'post'} component={'input'} type={'text'}/>
                </div>
                <div>
                    <button >Submit</button>
                </div>
            </form>
        </div>
    );
};

const DialogReduxForm = reduxForm<DialogPostType>({
    // a unique name for the form
    form: 'post'
})(DialogPost)

export default DialogReduxForm
