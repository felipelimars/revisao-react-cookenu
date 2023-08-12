import { useEffect } from "react"
import { Navigate } from "react-router-dom"
import { goToLoginPage } from "../routes"

export const UseProtectedPage = (navigate) => {
    useEffect(() => {
        const token = localStorage.getItem("cookenu.token")
        if(!token){
          goToLoginPage(navigate)
        }
      }, [navigate])
}