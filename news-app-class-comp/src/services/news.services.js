import axios from "axios";

export async function getEgyptNews() {
    const url = "https://newsapi.org/v2/top-headlines?country=eg&category=business&apiKey=1a20ed3b070f4b8ab9663ee3e49b2a0c";

    try {
        return await axios.get(url);
    }catch(err) {
        console.log(err.message);
    }
}
export async function getUsNews() {
    const url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=1a20ed3b070f4b8ab9663ee3e49b2a0c";

    try {
        return await axios.get(url);
    }catch(err) {
        console.log(err.message)
    }
}

