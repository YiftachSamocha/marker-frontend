
import { storageService } from '../async-storage.service'
import { makeId } from '../util.service'

const STORAGE_KEY = 'market'

export const marketService = {
    query,
    getById,
    save,
    remove,
    addmarketMsg
}
window.cs = marketService


async function query(filterBy = { txt: '', price: 0 }) {
    var markets = await storageService.query(STORAGE_KEY)
    const { txt, minSpeed, maxPrice, sortField, sortDir } = filterBy

    if (txt) {
        const regex = new RegExp(filterBy.txt, 'i')
        markets = markets.filter(market => regex.test(market.vendor) || regex.test(market.description))
    }
    if (minSpeed) {
        markets = markets.filter(market => market.speed >= minSpeed)
    }
    if(sortField === 'vendor' || sortField === 'owner'){
        markets.sort((market1, market2) => 
            market1[sortField].localeCompare(market2[sortField]) * +sortDir)
    }
    if(sortField === 'price' || sortField === 'speed'){
        markets.sort((market1, market2) => 
            (market1[sortField] - market2[sortField]) * +sortDir)
    }
    
    markets = markets.map(({ _id, vendor, price, speed, owner }) => ({ _id, vendor, price, speed, owner }))
    return markets
}

function getById(marketId) {
    return storageService.get(STORAGE_KEY, marketId)
}

async function remove(marketId) {
    // throw new Error('Nope')
    await storageService.remove(STORAGE_KEY, marketId)
}

async function save(market) {
    var savedmarket
    if (market._id) {
        const marketToSave = {
            _id: market._id,
            price: market.price,
            speed: market.speed,
        }
        savedmarket = await storageService.put(STORAGE_KEY, marketToSave)
    } else {
        const marketToSave = {
            vendor: market.vendor,
            price: market.price,
            speed: market.speed,
            // Later, owner is set by the backend
            owner: userService.getLoggedinUser(),
            msgs: []
        }
        savedmarket = await storageService.post(STORAGE_KEY, marketToSave)
    }
    return savedmarket
}

async function addmarketMsg(marketId, txt) {
    // Later, this is all done by the backend
    const market = await getById(marketId)

    const msg = {
        id: makeId(),
        by: userService.getLoggedinUser(),
        txt
    }
    market.msgs.push(msg)
    await storageService.put(STORAGE_KEY, market)

    return msg
}