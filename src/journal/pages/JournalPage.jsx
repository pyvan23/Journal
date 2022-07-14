
import { IconButton, Typography } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView } from "../views/NoteView";
import { NothingSelectedView } from "../views/NothingSelectedView";
import {AddOutlined} from '@mui/icons-material'

const drawerWidth = 240
export const JournalPage = () => {
  return (
   <JournalLayout>
    {/* <Typography>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab enim deserunt sunt quasi animi, mollitia repudiandae tempora! Hic quisquam consequuntur ut, perferendis deleniti soluta veniam incidunt enim, amet temporibus adipisci.
    </Typography> */}

    <NothingSelectedView/>

    <IconButton size="large"
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
