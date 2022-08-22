import {defineAsyncComponent} from "vue";

export default {
  defaultText: defineAsyncComponent(() => import('./defaultText.vue')),
  icon: defineAsyncComponent(() => import('./icon.vue')),
  textBtn: defineAsyncComponent(() => import('./textBtn.vue'))
}

