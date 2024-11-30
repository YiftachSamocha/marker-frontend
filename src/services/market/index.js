const { DEV, VITE_LOCAL } = import.meta.env

import { getRandomIntInclusive, makeId } from '../util.service'

import { marketService as local } from './market.service.local'
import { marketService as remote } from './market.service.remote'

function getEmptyMarket() {
    return {
        firstName: '',
        lastName: '',
        email: '',
        website: '',
        linkedin: '',
        yearsOfExp: '1-2',
        budget: 1000
    }
}

const service = VITE_LOCAL === 'true' ? local : remote
export const marketService = { getEmptyMarket, ...service }

// Easy access to this service from the dev tools console
// when using script - dev / dev:local

if (DEV) window.marketService = marketService
