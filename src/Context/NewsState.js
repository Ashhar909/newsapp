import axios from "axios";
import { useState } from "react";
import newsContext from "./NewsContext";

const NewsState = (props) => {
    const [news,setNews] = useState({
        articles: []
    })

    const [theme, setTheme] = useState({
        mode: "light",
        bgColor: "#7DFDFE"
    })

    const fetchAll = async (category) => {
        await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=0d896d1dde8e45d09ee92398097e3fc2`)
        .then(res => {
            setNews({
              ...news,
              articles:res.data.articles
            })
        })
    }

    return(
        <newsContext.Provider value = {{news , fetchAll , theme , setTheme}}>
            {props.children}
        </newsContext.Provider>
    )
}

export default NewsState;