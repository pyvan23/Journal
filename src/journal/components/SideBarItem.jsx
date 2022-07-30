import { TurnedInNot } from "@mui/icons-material";
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveNote } from "../../store/journal/journalSlice";


export const SideBarItem = ({title='',body,id,date,imageUrl=[]}) => {

  const dispatch = useDispatch();

  
  const handleOnClickNote = ()=>{
    dispatch(setActiveNote({id,title,body,imageUrl,date}))
  }
  
  const newTitle = useMemo(() => {
    
  return title.length > 17 ? title.substring(0,17) + '...' : title}, [title])


  return (
    <ListItem disablePadding>
      <ListItemButton onClick={handleOnClickNote}>
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>
        <Grid container>
          <ListItemText primary={newTitle}  />
          <ListItemText secondary={body} />
        </Grid>
      </ListItemButton>
    </ListItem>
  );
};
