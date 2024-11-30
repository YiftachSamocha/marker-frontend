import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { loadMarkets } from "../store/actions/market.actions";

export function MarketHeader() {
    const [numOfMarketers, setNumOfMarketers] = useState(0)
    const marketers = useSelector(state => state.marketModule.markets)

    useEffect(() => {
        loadMarkets()
    }, [])

    useEffect(() => {
        const num = marketers.length
        setNumOfMarketers(num)
    }, [marketers])

    return <section className="market-header">
        <h1>Market</h1>
        <div>
            <NavLink to={'insert'}>Submit</NavLink>
            <NavLink to={'list'}>Watch</NavLink>
        </div>
        <h3>{numOfMarketers} Submitted marketers</h3>
    </section>
}