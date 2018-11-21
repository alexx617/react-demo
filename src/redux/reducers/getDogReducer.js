import { CUTEIMG, CUTETEXT } from '../actions/actions_type'
const initState = {
    url: 333,
    text: '自我添加'
}
export default function cuteReducers(state = initState, actions) {
    switch (actions.type) {
        case CUTEIMG:
            return Object.assign({}, state, {
                url: actions.url
            })
        case CUTETEXT:
            console.log(actions);
            
            return Object.assign({}, state, {
                text: state.text+actions.text+'加'
            })
        default:
            return state
    }
}