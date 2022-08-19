import api from '@/api/index'

import request from "@/utils/request"

function getEnum(){
    return request.get(api.getEnum)
}

interface IloginParam{
    username: string,
    password: string
}
function login(param:IloginParam){
    return request.post(api.login,param)
}

export default {
    getEnum,
    login
}
