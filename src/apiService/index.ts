import api from '@/api/index'

import request from "@/utils/request"

function getAppleType() {
    return request.get(api.appleType)
}

interface IloginParam {
    username: string,
    password: string
}
function login(param: IloginParam) {
    return request.post(api.login, param)
}

interface IappleType {
    name: string,
    code: string
}
function insertAppleType(param: IappleType) {
    return request.post(api.insertAppleType, param)
}

interface IdelEnum {
    id: string
}
function delEnum(param:IdelEnum){
    return request.post(api.delEnum, param)
}

export default {
    getAppleType,
    login,
    insertAppleType,
    delEnum
}
