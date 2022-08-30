import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TelaInfo from '../pages/TelaInfo//TelaInfo'
import TelaList from '../pages/TelaList/TelaList'


const Router = () => {

    return (
        <BrowserRouter>
            <Routes>

                <Route index element={<TelaInfo />} />

                <Route path='/list' element={<TelaList/>} />

            </Routes>
        </BrowserRouter>
    )

}

export default Router