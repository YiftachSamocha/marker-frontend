import { setFilterBy } from "../store/actions/market.actions"

export function MarketSort() {

    function onSetSort(sort) {
        setFilterBy({ sort })
    }

    return <section className="market-sort">
        <div>
            <button onClick={() => onSetSort('email')}>Email</button>
            <button onClick={() => onSetSort('date')} >Date</button>
        </div>
    </section>
}