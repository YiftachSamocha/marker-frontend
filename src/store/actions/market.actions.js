import { marketService } from '../../services/market'
import { store } from '../store'
import { ADD_MARKET, SET_MARKETS, SET_MARKET, SET_MSG, SET_FILTER_BY } from '../reducers/market.reducer'

export async function loadMarkets(filterBy) {
    try {
        const markets = await marketService.query(filterBy)
        store.dispatch(getCmdSetMarkets(markets))
    } catch (err) {
        console.log('Cannot load markets', err)
        throw err
    }
}

export async function addMarket(market) {
    try {
        if (!market.email) throw 'Email inserion is mandatory'
        if (!_isValidEmail(market.email)) throw 'Email is not valid'
        const marketers = await store.getState().marketModule.markets
        if (marketers.some(item => item.email === market.email)) throw 'Email is already in the system'
        const savedMarket = await marketService.save(market)
        store.dispatch(getCmdAddMarket(savedMarket))
        return savedMarket
    } catch (err) {
        console.log('Cannot add market', err)
        throw err
    }
}

export async function setMsg(msg) {
    try {
        store.dispatch(getCmdSetMsg(msg))
        return msg
    } catch (err) {
        console.log('Cannot set message', err)
        throw err
    }
}

export async function setFilterBy(filterBy) {
    try {
        store.dispatch(getCmdSetFilterBy(filterBy))
        return filterBy
    } catch (err) {
        console.log('Cannot set filter by', err)
        throw err
    }
}

function _isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

// Command Creators:
function getCmdSetMarkets(markets) {
    return {
        type: SET_MARKETS,
        markets
    }
}
function getCmdSetFilterBy(filterBy){
    return {
        type: SET_FILTER_BY,
        filterBy
    }
}

function getCmdAddMarket(market) {
    return {
        type: ADD_MARKET,
        market
    }
}

function getCmdSetMsg(msg) {
    return {
        type: SET_MSG,
        msg
    }
}