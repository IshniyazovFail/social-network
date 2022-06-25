import React from 'react';
import style from "./Users.module.css"
import axios from "axios";
import photoUser from "../../assets/images/user2.png"
import {UserType} from "../../Redux/user-reduser";

export class Users extends React.Component<any, any>{

   componentDidMount()
   {
       axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response=>{
           this.props.setUser(response.data.items)
       });

      /* p.setUser([
           {id:v1(),followed:true, photoUrl:"https://proprikol.ru/wp-content/uploads/2021/05/kartinki-terminator-4.jpg", fullName:"Termitor",status:'I am be back', location:{country :"USA",city:"Boston"}},
           {id:v1(),followed:false,photoUrl:"https://sun9-16.userapi.com/impg/0dIEyVrShxj0h-mYXSSgcb5p81DpUuPZslieLA/9JHuEjMtEAY.jpg?size=1280x1280&quality=96&sign=936bd501330d1a5811eb7c395799eb63&c_uniq_tag=bSf1Ol4IqP6xOWvFwwqz5LavE4udWcPQ2b-J8ODaT_k&type=album", fullName:"Danila",status:'В чем сила брат?',location:{country:"Russia",city:"Moscow"}},
           {id:v1(),followed:false,photoUrl:"https://www.proficinema.ru/upload/iblock/cee/ceeb997500264f0e53100e04e0ea6032.jpg", fullName:"Alex Nevskiy",status:'Абсолютли !',location:{country:"USA",city:"Miami"}},
       ])*/
   }

    render(){
        return <div><h3>Users</h3>
            {this.props.users.map((el:UserType)=>{
                return(
                    <div key={el.id} className={style.body}>
                        <div className={style.avatar}>
                            <div><img alt='user' className={style.img} src={photoUser}/></div>
                            {  el.followed? <button onClick={()=>this.props.UnFallow(el.id)}>Unfollow</button>: <button onClick={()=>this.props.Fallow(el.id)}>Follow</button>   }

                        </div>
                        <div className={style.info}>
                            <div>
                                {el.name}
                            </div>
                            <div>
                                {el.status}
                                <div> {'el.location.city'}<br/>
                                    {'el.location.country'}
                                </div>

                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    }
}
