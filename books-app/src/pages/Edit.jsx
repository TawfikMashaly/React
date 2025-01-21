import { useParams , useNavigate} from "react-router-dom";
import { useState , useEffect } from "react";
import { getBook, editBook } from "../services/books.services";

function Edit() {
    const {id} = useParams();
  
    const [bookData , setInputData] = useState({
        id : id,
        title : '',
        price : '',
        author : '',
        description : ''
    })
    const navigate = useNavigate(); 

    useEffect(() => {
        getBook(id)
        .then(res=> setInputData(res.data))
        .catch(err => console.log(err.message))
    } , [])
    
    const handelSubmit = (event) => {
        event.preventDefault();
        if(bookData.title && bookData.price && bookData.author && bookData.description) {
            editBook(id , bookData)
            .then((res)=>{
                alert("Book Updated Successfully")
                navigate('/');
            }).catch((err)=>console.error(err))
        } else {
            alert("Something is wrong .. try again !")
            navigate(`/edit/${id}`)
        }
        
    }
    
    return (
        <>
            <header className="my-5 text-center bg-dark text-success rounded border shadow
            container w-50 mx-auto p-5">
                <h1>Edit Book</h1>
            </header>

            <section className="container w-50 mx-auto">
                <form onSubmit={handelSubmit}>
                    <div className="form-group">
                        <label htmlFor="title" style={{fontWeight : "bold"}}>Book title</label>
                        <input type="text" className="form-control" id="title" name="title"
                        value={bookData.title} 
                        onChange={e => setInputData({...bookData, title : e.target.value})} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="price" style={{fontWeight : "bold"}}>Book price</label>
                        <input type="number" className="form-control" id="price" name="price"
                        value={bookData.price}
                        onChange={e => setInputData({...bookData, price : e.target.value})} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="author" style={{fontWeight : "bold"}}>Book Author</label>
                        <input type="text" className="form-control" id="author" name="author"
                        value={bookData.author}
                        onChange={e => setInputData({...bookData, author: e.target.value})}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="description" style={{fontWeight : "bold"}}>Book Description</label>
                        <textarea type="text" className="form-control" id="description" name="description" 
                        value={bookData.description}
                        onChange={e => setInputData({...bookData, description : e.target.value})}></textarea> 
                    </div>
                    <input type="submit" value="Edit Book" className="btn btn-success mt-2"></input>
                    
                </form>
            </section>
        </>
    );
}

export default Edit;