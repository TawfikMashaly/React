import { useState , useEffect} from "react";
import { getBooks } from "../services/books.services";
import { Link } from "react-router-dom";

function Home() {
    const [books , setBooks] = useState([]);

    useEffect(() => {
        getBooks()
        .then(res => setBooks(res.data))
        .catch(err => console.log(err))
    } , [])
    
    return (
        <>
            <header className="my-5 text-center bg-dark text-light rounded border shadow
            container w-50 mx-auto p-5">
                <h1>All Books</h1>
            </header>

            <section className="my-5 container">
                <table className="table table-striped teable-hovered">
                    <thead>
                        <tr className="table-info text-center">
                            <th>ID</th>
                            <th>Book Title</th>
                            <th>Book Price</th>
                            <th>Book Author</th>
                            <th>Book Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    {
                        books.length > 0 &&
                        <tbody>
                            { books.map((book, index) => (
                                <tr key={index}>
                                    <td>{book.id}</td>
                                    <td>{book.title}</td>
                                    <td>{book.price}</td>
                                    <td>{book.author}</td>
                                    <td>{book.description}</td>
                                    <td>
                                        <Link to={`/${book.id}`} className="btn btn-sm btn-primary mx-1">Show</Link>
                                        <Link to={`/edit/${book.id}`} className="btn btn-sm btn-success mx-1">Edit</Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    }
                </table>
            </section>
        </>
    );
}

export default Home;