import { CUTEIMG, CUTETEXT } from './actions_type'

export function getCute(url) {
    return {
        type: CUTEIMG,
        url
    }
}

export const getText = (text) => {
    return {
        type: CUTETEXT,
        text
    }
}