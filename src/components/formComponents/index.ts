import {defineAsyncComponent} from "vue";

export default {
  xInput: defineAsyncComponent(() => import('./xInput.vue')),
  yInput: defineAsyncComponent(() => import('./yInput.vue'))
}
