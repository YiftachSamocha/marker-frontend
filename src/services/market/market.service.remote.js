import { httpService } from '../http.service'

export const marketService = {
    query,
    getById,
    save,
    remove,
}

async function query(filterBy = { sort: 'email' }) {
    return httpService.get(`market`, filterBy)
}

function getById(marketId) {
    return httpService.get(`market/${marketId}`)
}

async function remove(marketId) {
    return httpService.delete(`market/${marketId}`)
}
async function save(market) {
    var savedmarket = await httpService.post('market', market)
    return savedmarket
}