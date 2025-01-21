import emaijs from 'emailjs-com';

function Contact() {
    const ssendEmail = (e) => {
        e.preventDefault();
        emaijs.sendForm('service_e3v6zm5' , 'template_4gknyey' 
        , e.target , 'BOGAvG4l5KFkqOJ_C')
        .then(() => {
            alert("Message Sent Successfully");
        })
        .catch(err => {
            console.log(err.message);
        })
    }
    return (
        <>
            <header className="my-5 text-center bg-dark text-light rounded border shadow
                container w-50 mx-auto p-5">
                <h1 className="fs-1">Contact Us</h1>
                
            </header>

            <section className="my-5 mx-auto w-50 container 
            bg-light rounded shadow p-5 bordered">
                <form onSubmit={ssendEmail}>
                    <div className="form-group my-2">
                        <label htmlFor="from_name">Your Name</label>
                        <input type="text" className="form-control" 
                        id="from_name" name="from_name"  />
                    </div>
                    <div className="form-group my-2">
                        <label htmlFor="from_email">Your Email</label>
                        <input type="email" className="form-control" 
                        id="from_email" name="from_email"  />
                    </div>
                    <div className="form-group my-2">
                        <label htmlFor="message"></label>
                        <textarea type="text" className="form-control" 
                        id="message" name="message">

                        </textarea>
                    </div>
                    <input type="submit" value="Send Message" className="btn btn-dark btn-lg my-2" />
                </form>
            </section>
        </>
    );
}

export default Contact;