import React, { Component } from 'react';
import { getUsNews } from '../services/news.services';
import defaultImage from '../assets/image/about-bg.jpg'

class UsNews extends Component {
    state = {
        usNews : []
    }

    componentDidMount() {
        getUsNews()
        .then(res => this.setState({usNews: res.data.articles}))
        .catch(err => console.log(err))
    }
    render() { 
        return (
            <>
                <header className="my-5 text-center container 
                w-50 mx-auto p-5 bg-dark py-2 text-warning">
                    <h1>Latest US News</h1>
                    
                </header>

                <section className="container my-5">
                    {
                        this.state.usNews.length > 0 &&
                        <div className="row text-center">
                            {
                                this.state.usNews.map((val, index) => (
                                    <div className="col-lg-4 col-md-6 col-sm-12"
                                    key={index}>
                                        <div className="card" style={{width: "20rem"}}>
                                            <img src={val.urlToImage ? val.urlToImage : defaultImage} className="card-img-top" alt="..."/>
                                            <div className="card-body">
                                                <h5 className="card-title">{val.title}</h5>
                                                <p className="card-text">{val.description}</p>
                                                <a href={val.url}
                                                 className="btn btn-primary"
                                                 target='_blank'>Go To Sourse</a>
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
}
 
export default UsNews;