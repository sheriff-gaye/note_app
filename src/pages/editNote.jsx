import { Link, useParams,useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io"
import { AiFillDelete } from "react-icons/ai"
import { useState } from "react";
import userCreateDate from "../components/userCreateDate";

const EditNotes = ({notes, setNotes}) => {

    const { id } = useParams();
    const note = notes.find((item) => item.id === id);
    const[title,setTitle]=useState(note.title);
    const[details,setDetails]=useState(note.details);
    const date=userCreateDate();
    const navigate=useNavigate();

    const handleForm=(e)=>{
        e.preventDefault();

        if(title && details){
           const newNote={...note,details,title,date};

           const newNotes=notes.map(item=>{
            if(item.id===id){
                item=newNote
            }
            return item
           })

           setNotes(newNotes);
        }
        navigate('/');
    }


    const handleDelete=()=>{
        const newnNotes=notes.filter(item=>item.id!==id);

        setNotes(newnNotes);

        navigate('/');
    }


    return (

        <section>
            <header className="create-note__header">
                <Link to="/" className="btn primary"><IoIosArrowBack /></Link>
                <button className="btn success lg" onClick={handleForm}>Save</button>
                <button className="btn danger lg" onClick={handleDelete}><AiFillDelete /></button>


            </header>

            <form className="create-note__form" onSubmit={handleForm}>
                <input type="text" placeholder="Title" value={title} onChange={(e)=>setTitle(e.target.value)} autoFocus />
                <textarea rows="8" placeholder="Note Deatils" value={details} onChange={(e)=>setDetails(e.target.value)}></textarea>
            </form>
        </section>

    );
}

export default EditNotes;