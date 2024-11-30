import { useSelector } from "react-redux";
import { MarketForm } from "../cmps/MarketForm";

export function MarketInsert() {
    const msg = useSelector(state => state.marketModule.msg)
    return <section className="market-insert">
        <MarketForm />
        <h4>{msg}</h4>
    </section>
}