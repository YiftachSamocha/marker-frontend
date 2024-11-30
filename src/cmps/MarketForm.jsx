import { useState } from "react"
import { marketService } from "../services/market"
import { addMarket, setMsg } from "../store/actions/market.actions"

export function MarketForm() {
    const [criteria, setCriteria] = useState(marketService.getEmptyMarket())

    function handleChange({ target }) {
        let { name, value } = target
        if (name === 'budget') value = Number(value)
        setCriteria(prev => ({ ...prev, [name]: value }))
    }

    async function submit() {
        try {
            await addMarket(criteria)
            await setMsg('Thank you')
            reset()
            setTimeout((() => {
                setMsg('')
            }), 3000)
        } catch (err) {
            setMsg(err)
        }
    }

    function reset() {
        setCriteria(marketService.getEmptyMarket())
    }

    return <section className="market-form">
        <div>
            <div>
                <label htmlFor="firstName">First name</label>
                <input type="text" name="firstName" id="firstName"
                    value={criteria.firstName} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="lastName">Last name</label>
                <input type="text" name="lastName" id="lastName"
                    value={criteria.lastName} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="email">Email address</label>
                <input type="text" name="email" id="email"
                    value={criteria.email} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="website">Website address</label>
                <input type="text" name="website" id="website"
                    value={criteria.website} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="linkedin">LinkedIn profile address</label>
                <input type="text" name="linkedin" id="linkedin"
                    value={criteria.linkedin} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="yearsOfExp">How many years of experience do you have with Facebook Marketing?</label>
                <select name="yearsOfExp" id="yearsOfExp"
                    onChange={handleChange}>
                    <option value="0-1">0-1 years</option>
                    <option value="1-2">1-2 years</option>
                    <option value="2+">2 or more years</option>
                </select>
            </div>

            <div>
                <label htmlFor="budget">What was the biggest campaign budget you have managed in a single month?</label>
                <input type="number" name="budget" id="budget" min={1000} max={500000}
                    value={criteria.budget} onChange={handleChange} />
            </div>
        </div>
        <div>
            <button onClick={reset}>Reset</button>
            <button onClick={submit}>Submit</button>
        </div>
    </section>
}