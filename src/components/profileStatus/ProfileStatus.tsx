import React, {ChangeEvent} from 'react';


type ProfileStatusType={
    status:string,
    updateStatus:(status:string)=>void
}
export class ProfileStatus extends React.Component<ProfileStatusType> {
state= {
    editMode: false,
    status:this.props.status
}
    activateEditMode=()=>{
        this.setState({
            editMode: true,
        })
    }
    deactivateEditMode=()=>{
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }
    onChangeHandler=(e:ChangeEvent<HTMLInputElement>)=>{
        this.setState({
            status: e.currentTarget.value
        })
    }
    componentDidUpdate(prevProps: Readonly<ProfileStatusType>, prevState: Readonly<{}>) {

    if(prevProps.status!==this.props.status){
        this.setState({
            status: this.props.status
        })
    }
    }

    render() {
        console.log(this.props.status)
        return (
            <div>
                {this.state.editMode ?
                    <div><input onChange={this.onChangeHandler} autoFocus onBlur={this.deactivateEditMode} value={this.state.status}/>
                    </div> :
                    <div><span onDoubleClick={this.activateEditMode}>{this.state.status||'---'}</span></div>
                }
            </div>
        );

    }
}

