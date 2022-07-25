
import { IconButton, Typography } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView } from "../views/NoteView";
import { NothingSelectedView } from "../views/NothingSelectedView";
import {AddOutlined} from '@mui/icons-material'
import { useDispatch } from "react-redux";
import { startNewNote } from "../../store/journal/journalThunks";

const drawerWidth = 240
export const JournalPage = () => {

const dispatch = useDispatch();

const onClickNewNote = ()=>{
  dispatch(startNewNote())
}

  return (
   <JournalLayout>
    {/* <Typography>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab enim deserunt sunt quasi animi, mollitia repudiandae tempora! Hic quisquam consequuntur ut, perferendis deleniti soluta veniam incidunt enim, amet temporibus adipisci.
    </Typography> */}

    <NothingSelectedView/>

    <IconButton 
    onClick={onClickNewNote}
    size="large"
    sx={{color:'white',
    backgroundColor:'error.main',
    ':hover':{backgroundColor:'error.main',opacity:0.9},
    position:'fixed',
    right:50,bottom:50
    }}>
      <AddOutlined sx={{fontSize:30}}/>
      
    </IconButton>
    {/* <NoteView/> */}
   </JournalLayout>
  );
};
