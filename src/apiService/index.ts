import api from '@/api/index'

import request from "@/utils/request"

function getEnum(){
    return request.get(api.getEnum)
}

export default {
    getEnum
}
