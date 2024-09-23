import { useState , useEffect } from "react";
import { getUsNews } from "../services/news.service";
import ImgNotFound from '../assets/images/imagenotfound.jpg';

function UsNews() {
    const [usNews , setUsNews] = useState([]);

    useEffect(() => {
        getUsNews()
        .then(res => setUsNews(res.data.articles))
        .catch(err => console.log(err.message));
    } , [])

    return ( 
        <>
            <h1 className="text-center bg-dark 
            container w-50 mx-auto mt-5 py-3 rounded 
            shadow border text-light"> US News</h1>

            <section className="container my-5">
                {
                    usNews.length > 0 &&
                    <div className="row text-center">
                        {
                            usNews.map((usNew , index) => (
                                <div key={index} className="col-lg-4 col-md-4 col-md-6 col-ms-12 my-3">
                                    <div className="card" style={{width: "21rem"}}>
                                        <img src={usNew.urlToImage ? usNew.urlToImage : ImgNotFound} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{usNew.title}</h5>
                                            <p className="card-text">
                                                {usNew.description ? usNew.description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, neque!"}
                                            </p>
                                            <hr />
                                            <div className="info">
                                                By <span className="text-warning">{usNew.author}</span>
                                                Published At <strong className="text-info">{usNew.publishedAt}</strong>
                                            </div>
                                            <a href={usNew.url} target="_blank"
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

export default UsNews;