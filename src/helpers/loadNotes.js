import { collection, getDocs } from "firebase/firestore/lite"
import { FirebaseDB } from "../firerbase/config"

export const loadNotes = async(uid='')=>{
    if(!uid) throw new Error('uid does not exist')

    const collectionRef = collection(FirebaseDB,`${uid}/journal/notes`)
    const docs = await getDocs(collectionRef)

    const notes = [];
  docs.forEach(doc =>{
    //data es una funcion que viene en el prototype
   notes.push({id:doc.id,...doc.data()})
  })

  return notes
}