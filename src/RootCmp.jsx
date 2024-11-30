import React from 'react'
import { Routes, Route } from 'react-router'
import { MarketInsert } from './pages/MarketInsert'
import { MarketHeader } from './cmps/MarketHeader'
import { MarketList } from './pages/MarketList'

export function RootCmp() {
    return (
        <div className="main-container">
            <MarketHeader />
            <main>
                <Routes>
                    <Route path="/" element={<MarketInsert />} />
                    <Route path="/insert" element={<MarketInsert />} />
                    <Route path="/list" element={<MarketList />} />
                </Routes>
            </main>
        </div>
    )
}


