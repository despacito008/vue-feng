import { LOGIN } from '@/store/mutation-types'
import { addCountAsync } from '@/service'

export default {
  [LOGIN](state) {
    const data = addCountAsync()
    state.count = state.count + data
  },
}