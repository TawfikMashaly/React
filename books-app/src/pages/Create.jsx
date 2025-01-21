import { useState } from "react";
import { addBook } from "../services/books.services";
import { useNavigate } from "react-router-dom";

function Create() {
    const [bookData , setInputData] = useState({
        title : '',
        price : '',
        author : '',
        description : ''
    })

    const navigate = useNavigate();

    const handelSubmit = (event) => {
        event.preventDefault();
        if(bookData.title && bookData.price && bookData.author && bookData.description) {
            addBook(bookData)
            .then((res)=>{
                alert("Book Added Successfully")
                navigate('/');
            }).catch((err)=>console.error(err))
        } else {
            alert('Please fill all the fields')
            navigate('/create')
        }
        
    }
    
    
    return (
        <>
            <header className="my-5 text-center bg-dark text-light rounded border shadow
            container w-50 mx-auto p-5">
                <h1>Add New Book</h1>
            </header>

            <section className="container w-50 mx-auto mb-5">
                <form onSubmit={handelSubmit}>
                    <div className="form-group">
                        <label htmlFor="title" style={{fontWeight : "bold"}}>Book title</label>
                        <input type="text" className="form-control" id="title" name="title"
                        onChange={e => setInputData({...bookData, title : e.target.value})} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="price" style={{fontWeight : "bold"}}>Book price</label>
                        <input type="number" className="form-control" id="price" name="price"
                        onChange={e => setInputData({...bookData, price : e.target.value})} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="author" style={{fontWeight : "bold"}}>Book Author</label>
                        <input type="text" className="form-control" id="author" name="author"
                        onChange={e => setInputData({...bookData, author: e.target.value})}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="description" style={{fontWeight : "bold"}}>Book Description</label>
                        <textarea type="text" className="form-control" id="description" name="description" 
                        onChange={e => setInputData({...bookData, description : e.target.value})}></textarea> 
                    </div>
                    <input type="submit" value="Add Book" className="btn btn-dark mt-2"></input>
                    
                </form>
            </section>
        </>
    );
}

export default Create;