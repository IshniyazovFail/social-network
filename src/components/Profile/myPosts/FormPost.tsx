import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export type FormPostType={
    post:string
}
export const FormPost:React.FC<InjectedFormProps<FormPostType>> = (props) => {
    return (
        <div>
            <h3>My posts</h3>
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

const PostReduxForm = reduxForm<FormPostType>({
    // a unique name for the form
    form: 'post'
})(FormPost)

export default PostReduxForm
