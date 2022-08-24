export function required(msg, trigger) {
  return {
    message: msg || '不能为空',
    trigger: trigger || 'change',
    required: true,
    validator: (rule, value, callback) => {
      if(value){
        callback()
      }else{
        callback(new Error())
      }
    },
  }
}
