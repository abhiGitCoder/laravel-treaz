import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Products from "./pages/Products";
import About from "./components/About";
import AllReviews from "./pages/AllReviews";
import WriteReview from "./pages/WriteReview";
import { Analytics } from "@vercel/analytics/react";

function Main() {
    return (
        <BrowserRouter>
            <div className="flex flex-col min-h-screen">
                <Analytics />
                <Header />
                <main className="flex-grow bg-gradient-to-b from-purple-100 via-pink-100 to-blue-100">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/products" element={<Products />} />
                        <Route path="/all-reviews" element={<AllReviews />} />
                        <Route path="/write-review" element={<WriteReview />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

const root = createRoot(document.getElementById("app"));
root.render(<Main />);
