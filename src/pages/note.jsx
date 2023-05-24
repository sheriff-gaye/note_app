import React, { useEffect, useState } from "react";
import {CiSearch} from 'react-icons/ci';
import {BsPlusLg} from "react-icons/bs";
import NoteItem from "../components/NoteItem";
import { Link } from "react-router-dom";

function Notes({notes}) {

    const [showSearch,setShowSearch]=useState(false);
    const[text, setText]=useState('');
    const[filterNotes,setFilterNotes]=useState(notes);

    

    const handleSearch=()=>{
        setFilterNotes(notes.filter(note=>{
            if(note.title.toLowerCase().match(text.toLocaleLowerCase()))
            {
                return note;
            }
        }))

    }
    useEffect(handleSearch,[text]);
    return(
        <div>
           <section>
            <header className="notes__header">
                {!showSearch &&<h2>Easy Notes</h2>}
                {showSearch &&<input type="text" value={text} onChange={(e)=>{setText(e.target.value); handleSearch();}} placeholder="keyword...." autoFocus />}
                <button className="btn" onClick={()=>setShowSearch(prevState=>!prevState)}><CiSearch className="icon"/></button>
                
            </header>

            <div className="notes__container" >
                {
                    filterNotes.map(note=><NoteItem note={note} key={note.id} />)
                }

            </div>
            <Link to="/create" className="btn add__btn"><BsPlusLg/></Link>
            
           </section>
        </div>
    );
}

export default Notes;