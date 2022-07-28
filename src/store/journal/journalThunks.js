import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firerbase/config";
import { loadNotes } from "../../helpers/loadNotes";
import { addNewEmptyNote, savingNewNote, setActiveNote, setNotes, setSaving, updateNote } from "./journalSlice";

export const startNewNote = () => {
  return async (dispatch, getState) => {
    dispatch(savingNewNote())
    const { uid } = getState().auth;
    
    const newNote = {
      title: "",
      body: "",
      date: new Date().getTime(),
    };

    const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`));
    
    await setDoc(newDoc, newNote);
    newNote.id = newDoc.id
    dispatch(addNewEmptyNote(newNote))
    dispatch(setActiveNote(newNote))
   
  };
};
export const startLoadingNotes = ()=>{
  return async (dispatch,getState)=>{
    const {uid} = getState().auth;

   const notes = await loadNotes(uid);
    dispatch(setNotes(notes))
  }
}
export const startSaveNote = () => {
  return async(dispatch,getState)=>{

    dispatch(setSaving())

    const {uid} = getState().auth
    const {active} = getState().journal

    const noteToFireStore = {...active}
    
    delete noteToFireStore.id

   const docRef = doc(FirebaseDB,`${uid}/journal/notes/${active.id}`)
   await setDoc(docRef,noteToFireStore,{merge:true})

   dispatch(updateNote(active))
  }
}