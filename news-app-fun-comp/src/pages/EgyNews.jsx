import { useState , useEffect } from "react";
import { getEgyNews } from "../services/news.service";
import ImgNotFound from '../assets/images/imagenotfound.jpg';

function EgyNews() {
    const [egNews , setEgNews] = useState([]);

    useEffect(() => {
        getEgyNews()
        .then(res => setEgNews(res.data.articles))
        .catch(err => console.log(err.message));
    } , [])

    return ( 
        <>
            <h1 className="text-center bg-dark 
            container w-50 mx-auto mt-5 py-3 rounded 
            shadow border text-light"> Egypt News</h1>

            <section className="container my-5">
                {
                    egNews.length > 0 &&
                    <div className="row text-center">
                        {
                            egNews.map((egNew , index) => (
                                <div key={index} className="col-lg-4 col-md-4 col-md-6 col-ms-12 my-3">
                                    <div className="card" style={{width: "21rem"}}>
                                        <img src={egNew.urlToImage ? egNew.urlToImage : ImgNotFound} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{egNew.title}</h5>
                                            <p className="card-text">
                                                {egNew.description ? egNew.description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, neque!"}
                                            </p>
                                            <hr />
                                            <div className="info">
                                                By <span className="text-warning">{egNew.author}</span>
                                                Published At <strong className="text-info">{egNew.publishedAt}</strong>
                                            </div>
                                            <a href={egNew.url} target="_blank"
                                            className="btn btn-dark mt-3">Go somewhere</a>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                }
            </section>

        </>
     );
}

export default EgyNews;