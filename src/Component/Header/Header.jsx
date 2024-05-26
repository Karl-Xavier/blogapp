import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './Header.css'
import axios from 'axios'

const Header = () => {
    const [quote , setQuote] = useState({
        content: "There is a saying, Embrace the chaos of life, for within its unpredictable dance lies the rhythm of possibility",
        author: "Emeka Bruno"
    })
    const [fade, setFade] = useState(false)

    useEffect(() =>{

        const getData = async () => {
            try {
                const response = await axios.get("https://api.quotable.io/random")
                const data = response.data
                setFade(true)
                setTimeout(() => {
                    setQuote({
                        content: data.content,
                        author: data.author
                    })
                    setFade(false)
                }, 500)
            } catch (error) {
                console.log("Error Fetching Quotes...", error)
                setQuote({
                    content: "Failed to get quotes", error,
                    author: ""
                })
            }
        }

        getData()

        const interval = setInterval(() => {
            getData()
        }, 5000)

        return () => clearInterval(interval)

    }, [])
  return (
    <header className='container'>
        <h1>Blogpost</h1>
        <div className="container rounded quote-box">
            <div className={`quote-container ${fade ? 'fade-out' : ''}`}>
                <h2>"{quote.content} "</h2>
                <p>--{quote.author}</p>
            </div>
        </div>
    </header>
  )
}

export default Header