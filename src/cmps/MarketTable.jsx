import { useEffect } from "react"
import { useSelector } from "react-redux"
import { loadMarkets } from "../store/actions/market.actions"

export function MarketTable() {
    const marketers = useSelector(state => state.marketModule.markets)
    const filterBy = useSelector(state => state.marketModule.filterBy)

    useEffect(() => {
        loadMarkets(filterBy)
    }, [filterBy])

    return <section className="market-table">
        <table>
            <thead>
                <tr>
                    <td>First name</td>
                    <td>Last name</td>
                    <td>Email</td>
                    <td>Website</td>
                    <td>LinkedIn</td>
                    <td>Years of experience</td>
                    <td>Campaign budget</td>
                </tr>
            </thead>
            <tbody>
                {marketers.map(market => {
                    return <tr>
                        <td>{market.firstName}</td>
                        <td>{market.lastName}</td>
                        <td>{market.email}</td>
                        <td>{market.website}</td>
                        <td>{market.linkedin}</td>
                        <td>{market.yearsOfExp}</td>
                        <td>{market.budget}</td>
                    </tr>
                })}


            </tbody>
        </table>

    </section>
}