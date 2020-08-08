import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export default function ListElements({ data }) {
  /*const [items, setItems] = useState([
    { name: 'First User' },
    { name: 'Second User' },
    { name: 'Third User' }
  ]);*/

  return (
    <List>
      {data.map((item, index) => (
        <ListItem key={index} button>
          <ListItemText primary={item} />
        </ListItem>
      ))}
    </List>
  );
}
