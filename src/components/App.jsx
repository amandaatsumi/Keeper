import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import notes from "../notes";




function App(){
    return(
        <div>
            <Header />
            {notes.map(noteItem => <Note 
                key = {noteItem.key}
                title = {noteItem.title}
                content = {noteItem.content}
              />
)}
            <Footer />
        </div>
    )
}

export default App;

//render all notes from "nots.js" into separate note component
//props and maping
//new notes should pop up dynamically

// function createNotes(noteItem){
//     return <Note 
//     key = {noteItem.key}
//     title = {noteItem.title}
//     content = {noteItem.content}
//     />
// }


// function App(){
//     return(
//         <div>
//             <Header />
//             {notes.map(createNotes)}
//             <Footer />
//         </div>
//     )
// }

// export default App;

