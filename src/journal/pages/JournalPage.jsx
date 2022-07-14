
import { Typography } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView } from "../views/NoteView";
import { NothingSelectedView } from "../views/NothingSelectedView";

const drawerWidth = 240
export const JournalPage = () => {
  return (
   <JournalLayout>
    {/* <Typography>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab enim deserunt sunt quasi animi, mollitia repudiandae tempora! Hic quisquam consequuntur ut, perferendis deleniti soluta veniam incidunt enim, amet temporibus adipisci.
    </Typography> */}

    {/* <NothingSelectedView/> */}
    <NoteView/>
   </JournalLayout>
  );
};
