import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {UniversalForm} from "../../../common/FormControls/FormControls";
import {maxValue, required} from "../../../utils/validators";

export type FormPostType={
    post:string
}
const maxLength=maxValue(10)
export const FormPost:React.FC<InjectedFormProps<FormPostType>> = (props) => {
    return (
        <div>
            <h3>My posts</h3>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field formtype='textarea' validate={[required,maxLength]} name={'post'} component={UniversalForm} placeholder={'new post'}/>
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
