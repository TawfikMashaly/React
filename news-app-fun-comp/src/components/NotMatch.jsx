import ErrImg from '../assets/images/error404.jpg';

function NotMatch() {
    return (  
        <>
            <div className="my-5 w-50 mx-auto d-flex justify-content-center">
                <img src={ErrImg} alt="" style={{
                    width: '800px',
                    height: '500px',
                    paddingTop:  '80px',

                }}/>
            </div>
        </>
    );
}

export default NotMatch;