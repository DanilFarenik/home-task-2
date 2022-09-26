import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { Note, NoteState } from "../type";


const initialState: NoteState = { list: [{ "name": "Note1", "date": [], "category": "task", "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum minima tempore doloremque, magnam eius earum voluptatum ab obcaecati", "dateOfCreation": "22.09.2022", "archived": false, "id": 941338190646 }, { "name": "Note 2", "date": ["20.12.2002"], "category": "idea", "text": "Lorem ipsum dolor sit amet 20/12/2002 consectetur adipisicing elit. Illum minima tempore doloremque", "dateOfCreation": "22.09.2022", "archived": false, "id": 1223242950903 }, { "name": "Note 3", "date": [], "category": "random", "text": "Lorem ipsum dolor sit amet", "dateOfCreation": "22.09.2022", "archived": false, "id": 888441480812 }, { "name": "Note 4", "date": [], "category": "random", "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum minima tempore doloremque", "dateOfCreation": "22.09.2022", "archived": false, "id": 461342351531 }, { "name": "Note 5", "date": [], "category": "task", "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum minima tempore doloremque, magnam", "dateOfCreation": "22.09.2022", "archived": false, "id": 791725710346 }, { "name": "Note 6", "date": [], "category": "quote", "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum minima tempore doloremque", "dateOfCreation": "22.09.2022", "archived": false, "id": 962401358775 }, { "name": "Note 7", "date": ["02.03.2010", "03.11.2013"], "category": "task", "text": "Lorem ipsum 02-03-2010 dolor 03/11/2013 sit amet", "dateOfCreation": "22.09.2022", "archived": false, "id": 747862329779 }] };

const noteSlice = createSlice({
  name: "notes",
  initialState: initialState,
  reducers: {
    addNote(state, action: PayloadAction<Note>) {

    },
    deleteNote(state, action: PayloadAction<number>) {

    },
    editNote(state, action: PayloadAction<number>) {

    },
    archiveNote(state, action: PayloadAction<number>) {

    },
  }
})

export const { addNote, deleteNote, editNote, archiveNote } = noteSlice.actions;

export default noteSlice.reducer;