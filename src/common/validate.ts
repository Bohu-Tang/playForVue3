interface IValidate {
    msg?: string,
    trigger?: string
}

function required(param: IValidate) {
    return {
        message: param.msg || '不能为空',
        trigger: param.trigger || 'change',
        required: true,
        validator: (rule: any, value: any, callback: any) => {
            // console.log('表单校验：', value)

            if (value) {
                callback()
            } else {
                callback(new Error())
            }
        },
    }
}
function required1(param: IValidate) {
    return {
        message: param.msg || '不能为空',
        trigger: param.trigger || 'change',
        required: false,
        validator: (rule: any, value: any, callback: any) => {
            if (value) {
                callback()
            } else {
                callback(new Error())
            }
        },
    }
}

export {
    required,required1
}
