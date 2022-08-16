import {defineStore} from "pinia"
const useCollapse = defineStore('collapse',{
    state(){
        return {
            isCollapsed: false
        }
    },
    getters:{

    },
    actions:{
        close(){
            this.isCollapsed = true
        },
        open(){
            this.isCollapsed = false
        }
    }
})
export default useCollapse
