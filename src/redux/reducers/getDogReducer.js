import { CUTEIMG } from '../actions/actions_type'
const initState = {
    url: 123
}
export default function cuteReducers(state = initState, actions) {
    switch (actions.type) {
        case CUTEIMG:
            return Object.assign({}, state, {
                url: actions.url
            })
        default:
            return state
    }
}