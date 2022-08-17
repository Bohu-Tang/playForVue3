import SvgIcon from '@/components/common/svgIcon.vue' // svg组件
import type { App } from 'vue'

const requireAll = (requireContext:any) =>
  requireContext.keys().map(requireContext)
const req = require.context('@/assets/svg', false, /\.svg$/)
requireAll(req)

export default function svgIconRegistered(app:App):void {
  app.component('SvgIcon', SvgIcon)
}
