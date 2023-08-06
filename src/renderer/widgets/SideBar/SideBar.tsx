import { Drafts, Inbox } from '@mui/icons-material';
import {
  Divider,
  Grid,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { useState } from 'react';

export const SideBar = () => {
  const [selectedIndex, setSelectedIndex] = useState(1);

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
  };

  return (
    <Grid
      container
      sx={{ width: '100%', maxWidth: 360 }}
    >
      <List
        component='nav'
        aria-label='main mailbox folders'
      >
        <ListItemButton
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)}
        >
          <ListItemIcon>
            <Inbox />
          </ListItemIcon>
          <ListItemText primary='Inbox' />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
        >
          <ListItemIcon>
            <Drafts />
          </ListItemIcon>
          <ListItemText primary='Drafts' />
        </ListItemButton>
      </List>
      <Divider />
      <List
        component='nav'
        aria-label='secondary mailbox folder'
      >
        <ListItemButton
          selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}
        >
          <ListItemText primary='Trash' />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 3}
          onClick={(event) => handleListItemClick(event, 3)}
        >
          <ListItemText primary='Spam' />
        </ListItemButton>
      </List>
    </Grid>
  );
};
