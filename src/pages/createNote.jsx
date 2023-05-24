import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io"
import { useState } from "react";
import {v4 as uuid} from "uuid"
import userCreateDate from "../components/userCreateDate";
import { useNavigate } from "react-router-dom";

function CreateNotes({setNotes}) {

    const [title, setTitle] = useState('')
    const [details, setDetails] = useState('')
    const date=userCreateDate();
    const navigate=useNavigate();

    const handleSubmit = (e) => {

        e.preventDefault();
        if (title && details) {
          const note={id:uuid(),title,details,date}
          setNotes(preNotes=>[note,...preNotes]);
          navigate('/')
        }
       
    }

    return (

        <section>
            <header className="create-note__header">
                <Link to="/" className="btn danger"><IoIosArrowBack /></Link>
                <button className="btn primary lg" onClick={handleSubmit}>Save</button>

            </header>

            <form className="create-note__form" onSubmit={handleSubmit}>
                <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} autoFocus />
                <textarea rows="6" placeholder="Note Deatils" value={details} onChange={(e) => setDetails(e.target.value)} ></textarea>
            </form>
        </section>

    );
}

export default CreateNotes;