import React, { useEffect } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import CardActions from '@material-ui/core/CardActions';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import DraftsIcon from '@material-ui/icons/Drafts';
// import InboxIcon from '@material-ui/icons/Inbox';
import ListElements from './ListElements';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
  card: {
    width: '100%'
  },
  media: {
    width: 522,
    height: 622
  }
});

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

const CardGnome = withStyles(styles)(({ classes, gnome }) => {
  const {
    name,
    thumbnail,
    age,
    hair_color,
    height,
    weight,
    professions = [],
    friends = []
  } = gnome;

  useEffect(() => {});
  return (
    <Card className={classes.card}>
      <CardHeader title={name} subheader={`${age} years old`} />
      <CardMedia
        className={classes.media}
        image={thumbnail}
        title="Grapefruit"
      />
      <CardContent>
        <Typography>Gnome Information</Typography>
        <List component="nav" aria-label="main mailbox folders">
          <ListItem button>
            <ListItemText primary={`Hair color`} secondary={hair_color} />
          </ListItem>
          <ListItemLink href="#">
            <ListItemText primary={`Heigth`} secondary={height} />
          </ListItemLink>
          <ListItemLink href="#">
            <ListItemText primary={`Weigth`} secondary={weight} />
          </ListItemLink>
        </List>
        <Divider />
        {professions.length === 0 || professions === undefined ? (
          <Typography>Without professions</Typography>
        ) : (
          <>
            <Typography>Professions</Typography>
            <ListElements data={professions} />
          </>
        )}
        <Divider />
        {!friends || friends.length === 0 ? (
          <Typography>Without friends</Typography>
        ) : (
          <>
            <Typography>Friends</Typography>
            <ListElements data={friends} />
          </>
        )}
      </CardContent>
    </Card>
  );
});

export default CardGnome;
