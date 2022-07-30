import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {"API-KEY": '8412fccc-7db9-4f8c-90b3-198e2eb93072'}
})


export const usersAPI = {
    getUser(currentPage: number, pageSize: number) {
        return (
            instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
                return response.data
            })
        )
    },
    follow(id: string) {
        return instance.post(`follow/${id}`).then(response => response.data)
    },
    unfollow(id:string){
        return instance.delete(`follow/${id}`).then(response => response.data)
    },
    getAuthMe(){
return  instance.get(`auth/me`).then(response=>response.data)
    }
}
