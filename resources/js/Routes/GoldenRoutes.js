import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../components/Home";
import Winner from "../components/Winner";
import Entry from "../components/Entry";
import NoLuck from "../components/NoLuck";
import WinnerList from "../components/WinnerList";

export default function GoldenRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/entry" element={<Entry/>}/>
                <Route path="/winner" element={<Winner/>}/>
                <Route path="/good-crack" element={<NoLuck/>}/>
                <Route path="/winner-list" element={<WinnerList/>}/>
            </Routes>
        </BrowserRouter>
    );
}
