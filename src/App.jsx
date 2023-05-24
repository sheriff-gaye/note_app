import { BrowserRouter, Routes, Route } from "react-router-dom"
import CreateNotes from "./pages/createNote";
import EditNotes from "./pages/editNote";
import Notes from "./pages/note";
import { useState, useEffect } from "react";



function App() {
    const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) ||[])
    // useState(JSON.parse(localStorage.getItem('notes')) ||

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes))
    
    }, [notes])

    return (
        <main id="app">
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Routes>

                    <Route path="/" element={<Notes notes={notes} />}></Route>
                    <Route path="/create" element={<CreateNotes setNotes={setNotes} />}></Route>
                    <Route path="/edit/:id" element={<EditNotes setNotes={setNotes} notes={notes} />}></Route>

                </Routes>
            </BrowserRouter>


        </main>
    )
}


export default App;