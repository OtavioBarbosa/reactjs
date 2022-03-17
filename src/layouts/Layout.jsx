import React from "react"
import { Route, Routes } from "react-router-dom"
import routes_layout from "../routes/routes_layout"

const Layout = () => {

    const routes = (routes_layout) => {
        return routes_layout.map((route, key) => {
            return (
                <Route
                    path={`${route.path}`}
                    element={ <route.element /> }
                    key={key}
                />
            )
        })
    }

    return (
        <>
            <div>
                <Routes>
                    {routes(routes_layout)}
                </Routes>
            </div>
        </>
    )
}

export default Layout