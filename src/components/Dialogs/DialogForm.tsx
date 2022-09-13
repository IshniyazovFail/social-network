import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxValue, required} from "../../utils/validators";
import {UniversalForm} from "../../common/FormControls/FormControls";

export type DialogPostType={
    post:string
}
let maxLength=maxValue(15)
export const DialogPost:React.FC<InjectedFormProps<DialogPostType>> = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field formtype='textarea' validate={[required,maxLength]} name={'post'} component={UniversalForm} placeholder={'enter a message'} />
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
