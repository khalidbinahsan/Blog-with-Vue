import { reactive } from 'vue'
import fn from './functions'

const data = reactive({
    posts: [],
})
export { data, fn }