import { Outlet, useNavigate } from "react-router-dom"
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import { useState, useEffect } from "react"

const Layout = () => {

  // get notes from local storage
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || []);

  // update notes in local storage whenever the notes state changes
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);
  
  let navigate = useNavigate();

  // add a new note to the notes state
  const handleAddNote = () => {
    const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    const newNote = { title: 'Untitled' + notes.length, text: '', html: ''};
    const updatedNotes = [ newNote, ...savedNotes];
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
    setNotes(updatedNotes);
    navigate(`/notes/1`);
  }

  const handleNoteChange = (htmlEdit, id, textEdit, titleEdit, timeEdit) => {
    const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    const updatedNotes = savedNotes.map((note, index) => {
      if (index === id - 1) {
        return {
          ...note,
          text: textEdit,
          title: titleEdit,
          time: timeEdit,
          html: htmlEdit
        }
      }
      return note;
    });
    setNotes(updatedNotes);
  }
  
  


  return (
    <div className='flex flex-col h-screen'>
      <Header />
      <div className='flex-1 grid grid-cols-4'>
        <Sidebar className='flex-grow' onAddNote={handleAddNote} notes={notes}/>
        <div className='col-span-3'>
          <Outlet context={[notes, handleNoteChange]} />
        </div>
      </div>
    </div>
  )
}

export default Layout