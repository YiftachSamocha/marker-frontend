export const SET_MARKETS = 'SET_MARKETS'
export const SET_MARKET = 'SET_MARKET'
export const ADD_MARKET = 'ADD_MARKET'
export const SET_MSG = 'SET_MSG'
export const SET_FILTER_BY = 'SET_FILTER_BY'


const initialState = {
    markets: [],
    msg: '',
}

export function marketReducer(state = initialState, action) {
    var newState = state
    switch (action.type) {
        case SET_MARKETS:
            newState = { ...state, markets: action.markets }
            break
        case SET_MARKET:
            newState = { ...state, market: action.market }
            break
        case ADD_MARKET:
            newState = { ...state, markets: [...state.markets, action.market] }
            break
        case SET_MSG:
            newState = { ...state, msg: action.msg }
            break
        case SET_FILTER_BY:
            newState = { ...state, filterBy: action.filterBy }
            break

        default:
    }
    return newState
}

