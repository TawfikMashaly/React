import axios from "axios";

export async function getUsNews() {
    const url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d07ae6e8b6a84d9ea7bfe134e30f596e";
    
    
    try {
        return await axios.get(url)
    }
    catch(err) {
        console.log(err.message);
    } 
}

export async function getEgyNews() {
    const url = "https://newsapi.org/v2/top-headlines?country=eg&category=business&apiKey=d07ae6e8b6a84d9ea7bfe134e30f596e";

    try {
        return await axios.get(url)
    }
    catch(err) {
        console.log(err.message);
    }
}

