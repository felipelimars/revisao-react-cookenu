import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {
LoginPage,
SignupPage,
FeedPage,
RecipeDetailPage,
AddRecipePage
} from '../pages/'
import { Header } from '../components/'
import { useState } from 'react'

export const Router = () => {
const [isLoggedIn, setIsLoggedIn] = useState(false)
    return (
    <BrowserRouter>
        <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
        <Routes>

            <Route path="/" element={<LoginPage setIsLoggedIn={setIsLoggedIn}/>}/>
            <Route path="/signup" element={<SignupPage/>}/>
            <Route path="/feed" element={<FeedPage/>}/>
            <Route path="/add-recipe" element={<AddRecipePage/>}/>
            <Route path="/recipe/:id" element={<RecipeDetailPage/>}/>
        </Routes>
    </BrowserRouter>
)}