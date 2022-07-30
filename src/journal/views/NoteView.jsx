import { Button, Grid, IconButton, TextField, Typography } from "@mui/material";
import { SaveOutlined, UploadFileOutlined } from "@mui/icons-material";
import { ImageGallery } from "../components/ImageGallery";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { useEffect, useMemo, useRef } from "react";
import { setActiveNote, updateNote } from "../../store/journal/journalSlice";
import {  startSaveNote, startUploadingFiles } from "../../store/journal/journalThunks";
import Swal from "sweetalert2";

export const NoteView = () => {
  const { active,messageSaved,isSaving } = useSelector((state) => state.journal);

  const { title, body, date, onInputChange,formState } = useForm(active);
  const dispatch = useDispatch();

  const dateString = useMemo(() => {
    const newDate = new Date(date);

    return newDate.toUTCString();
  }, [date]);

const fileInputRef = useRef()

  useEffect(() => {
  dispatch(setActiveNote(formState))

 
  }, [formState])

  const onSaveNote = () =>{
  dispatch(startSaveNote())
  //  console.log('click');

  }
  useEffect(() => {
  if(messageSaved.length > 0){
    Swal.fire('updated note',messageSaved,'success')
  }

  
  }, [messageSaved])

  

  const onFileInputChange = ({target}) =>{
    if(target.files === 0)return
    dispatch(startUploadingFiles(target.files))

    // console.log('subiendo archivos')
    //dispatch(startUpLoadingFiles(target.files))
  }




  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ mb: 1 }}
    >
      <Grid item>
        <Typography fontSize={39} fontWeight="light">
          {dateString}
        </Typography>
      </Grid>
      <Grid item>

        <input type="file"
        multiple
        ref={fileInputRef}
        onChange={onFileInputChange} 
        style={{display:'none'}}/>

      <IconButton color="primary"
      disabled={isSaving}
      onClick={()=>fileInputRef.current.click()}>
        <UploadFileOutlined/>
      </IconButton>

        <Button onClick={onSaveNote} disabled={isSaving} >
          <SaveOutlined  sx={{ fontSize: 30, mr: 1 }} />
          Save
        </Button>
      </Grid>
      <Grid container>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          placeholder="enter a text"
          label="title"
          sx={{ border: "none", mb: 1 }}
          name="title"
          value={title}
          onChange={onInputChange}
        />
        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="whats happened today?"
          sx={{ border: "none", mb: 1 }}
          minRows={5}
          name="body"
          value={body}
          onChange={onInputChange}
        />
      </Grid>
       <ImageGallery images={active.imageUrl} />

    </Grid>
  );
};
