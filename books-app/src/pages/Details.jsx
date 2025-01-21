import { useParams , useNavigate } from "react-router-dom";
import { useState , useEffect } from 'react';
import { deleteBook, getBook } from "../services/books.services";


function Details() {
    const {id} = useParams();

    const [book , setBook] = useState({})

    const navigate = useNavigate();

    useEffect(() => {
        getBook(id)
        .then(res => setBook(res.data))
        .catch(err => console.log(err.message))
                
    } ,[])

    const backHome = () => {
        navigate('/')
    }

    const onDelete = (id) => {
        const confirm = window.confirm('Are You Sure ?')
        if(confirm) {
            deleteBook(id)
            .then(() => {
                alert("Deleted Successfully")
                navigate("/");
            })
            .catch(err => console.log(err.message))
        }
    }
    return (
        <>
            <header className="my-5 text-center bg-dark text-light rounded border shadow
            container w-50 mx-auto p-5">
                <h1>Book Details</h1>
            </header>

            <section className="my-5 container w-50 mx-auto bg-light 
            text-dark text-center shadow border rounded p-5">
                <h2>{book.title}</h2>    
                <hr className="w-25 mx-auto my-2" />
                <p>{book.description}</p>
                <div className="m-2 bg-info mx-auto my-4 py-2">
                    Book Price <strong>{book.price}</strong> <br />
                    Created By <strong>{book.authot}</strong>
                </div>
                <button className="btn btn-secondary my-2 mx-1" 
                onClick={backHome}>Return To Books</button>

                <button className="btn btn-danger mx-1" 
                onClick={e => onDelete(book.id)}>Delet Book</button>
            </section>
        </>
    );
}

export default Details;