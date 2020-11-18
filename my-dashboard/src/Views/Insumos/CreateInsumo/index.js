import React, { useState } from 'react';
//material core
import Icon from "@material-ui/core/Icon";
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
//components
import GridContainer from '../../../components/Grid/GridContainer';
import GridItem from '../../../components/Grid/GridItem';
import Card from '../../../components/Card/Card';
import CardHeader from '../../../components/Card/CardHeader';
import CardIcon from '../../../components/Card/CardIcon';
import CardBody from '../../../components/Card/CardBody';
import TableEditInsumos from '../../../components/Table/edittableInsumos';
// @material-ui/icons
import Landscape from '@material-ui/icons/Landscape';


import api from '../../../services/api';

import './styles.css';

function SearchInsumo() {

    const [banco, setBanco] = React.useState(0);

    const handleChange = (event) => {
        setBanco(event.target.value);
    };

    const [input, setInput] = useState('');

    const [insumosData, setInsumosData] = useState();


    async function loadInsumos() {
        if (banco === 0) {
            const response = await api.get(`/insumos/search?input=${input}&page=1`);
            setInsumosData(response.data);
        } else {
            console.log('proprio')
        }

    }

    return (
        <div className="content">
            <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                    <Card>
                        <CardHeader color="success" stats icon>
                            <CardIcon color="success">
                                <Icon> <Landscape /></Icon>
                            </CardIcon>
                            <p>Criar Insumo</p>
                        </CardHeader>
                        <CardBody>
                            <div className="table">
                                <TableEditInsumos insumos={insumosData} />
                            </div>
                        </CardBody>
                    </Card>
                </GridItem>
            </ GridContainer>
        </div>
    )
}

export default SearchInsumo;