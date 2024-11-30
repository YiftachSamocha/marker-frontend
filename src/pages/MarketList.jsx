import { MarketSort } from "../cmps/MarketSort";
import { MarketTable } from "../cmps/MarketTable";

export function MarketList() {
    return <section className="market-list">
        <MarketSort />
        <MarketTable />
    </section>
}