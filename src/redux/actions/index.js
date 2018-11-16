import {CUTEIMG} from './actions_type'

export function getCute(url) {
    return {
        type: CUTEIMG,
        url
    }
}