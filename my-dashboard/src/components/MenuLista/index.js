import React from 'react';
import { useHistory } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
//icones
import Add from '@material-ui/icons/Add';

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Landscape from '@material-ui/icons/Landscape';
import Widgets from '@material-ui/icons/Widgets';
import Search from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));



export default function NestedList() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const history = useHistory();

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <div>
            <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                    </ListSubheader>
                }
                className={classes.root}
            >
                <ListItem button onClick={handleClick}>
                    <ListItemIcon>
                        <Landscape />
                    </ListItemIcon>
                    <ListItemText primary="Insumos" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem onClick={() => history.push('/orcamento/insumo/search')} button className={classes.nested}>
                            <ListItemIcon>
                                <Search />
                            </ListItemIcon>
                            <ListItemText primary="Pesquisar" />
                        </ListItem>
                        <ListItem onClick={() => history.push('/orcamento/insumo/create')} button className={classes.nested}>
                            <ListItemIcon>
                                <Add />
                            </ListItemIcon>
                            <ListItemText primary="Criar" />
                        </ListItem>
                    </List>
                </Collapse>
            </List>

            <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                    </ListSubheader>
                }
                className={classes.root}
            >
                <ListItem button onClick={handleClick}>
                    <ListItemIcon>
                        <Widgets />
                    </ListItemIcon>
                    <ListItemText primary="Composições" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem onClick={() => history.push('/orcamento/composicao/search')} button className={classes.nested}>
                            <ListItemIcon>
                                <Search />
                            </ListItemIcon>
                            <ListItemText primary="Pesquisar" />
                        </ListItem>
                        <ListItem onClick={() => history.push('/orcamento/composicao/create')} button className={classes.nested}>
                            <ListItemIcon>
                                <Add />
                            </ListItemIcon>
                            <ListItemText primary="Criar" />
                        </ListItem>
                    </List>
                </Collapse>
            </List>
        </div>
    );
}
