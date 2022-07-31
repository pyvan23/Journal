import { createSlice } from "@reduxjs/toolkit";

export const journalSlice = createSlice({
  name: "journal",
  initialState: {
    isSaving: false,
    messageSaved: "",
    notes: [],
    active: null,
  },
  reducers: {
    savingNewNote: (state) => {
      state.isSaving = true;
    },
    addNewEmptyNote: (state, action) => {
      state.notes.push(action.payload);
      state.isSaving = false;
    },
    setActiveNote: (state, action) => {
      state.active = action.payload;
      state.messageSaved = "";
    },
    setNotes: (state, action) => {
      state.notes = action.payload;
    },
    setSaving: (state) => {
      state.isSaving = true;
      state.messageSaved = "";
    },
    updateNote: (state, action) => {
      state.isSaving = false;
      state.notes = state.notes.map((note) => {

        if (note.id === action.payload.id) {
          return action.payload;
        }

        return note;
      });
      state.messageSaved = `${action.payload.title},succesfully updated`;
    },
    setPhotosActiveNote: (state, action) => {
    
      state.active.imageUrl = [...state.active.imageUrl, ...action.payload];

      state.isSaving = false;
    },
    clearJournalLogOut:(state) =>{
      state.isSaving= false;
      state.messageSaved = '';
      state.notes = [];
      state.active = null;
    },
    deleteNoteById: (state, action) => {
      state.active = null;
      state.notes = state.notes.filter(note=>note.id !== action.payload);

    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addNewEmptyNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNote,
  deleteNoteById,
  savingNewNote,
  setPhotosActiveNote,
  clearJournalLogOut
} = journalSlice.actions;
