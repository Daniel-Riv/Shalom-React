import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ComNavabr } from '../Components/Utils/Navbar/ComNavabr'
import { Whatsap } from '../Components/Utils/WhatsapIcon/Whatsap'
import { AboutPages } from '../Pages/AboutPages'
import { ContactUsPages } from '../Pages/ContactUsPages'
import { DetailPages } from '../Pages/DetailPages'
import { HomePages } from '../Pages/HomePages'
import { ProductPage } from '../Pages/ProductPage'

export const AppRouter = () => {
  return (
    <BrowserRouter>
        <ComNavabr />
        <Whatsap />
        <Routes>
            <Route path="/" element={<HomePages/>} />
            <Route path="/:product" element={<ProductPage />} />
            <Route path="/category/:detailProduct" element={<DetailPages />} />
            <Route path="/about" element={<AboutPages />} />
            <Route path="/contact" element={<ContactUsPages/>} />
        </Routes>
    </BrowserRouter>
  )
}
