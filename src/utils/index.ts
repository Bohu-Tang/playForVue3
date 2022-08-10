import {getCurrentInstance, ComponentInternalInstance} from "vue"

export function useGlobalConfig() {
    const instance: ComponentInternalInstance | null = getCurrentInstance()
    if (!instance) {
        console.log('useGlobalConfig 必须在setup中用')
        return
    }
    return instance.appContext.config.globalProperties.$AILEMENT || {}
}
