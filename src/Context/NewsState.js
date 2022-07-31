import axios from "axios";
import { useState } from "react";
import newsContext from "./NewsContext";

const NewsState = (props) => {
    const [news,setNews] = useState({
        articles: []
    })

    const [theme, setTheme] = useState({
        mode: "light",
        text:"dark",
        bgColor:"white",
        card: "#C0C0C0",
        navbar:"black"
    })
    
    const [page, setPage] = useState(1);

    const [progress, setProgress] = useState(10)
   
    const fetchAll = async (category) => {
        setProgress(20)
        await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=0d896d1dde8e45d09ee92398097e3fc2&page=${page}`)
        .then(res => {
            setNews({
                ...news,
                articles:res.data.articles
            })
            setProgress(70)
        })
        setProgress(100)
    }

    return(
        <newsContext.Provider value = {{news , fetchAll , theme , setTheme, page, setPage, progress, setProgress}}>
            {props.children}
        </newsContext.Provider>
    )
}

export default NewsState;