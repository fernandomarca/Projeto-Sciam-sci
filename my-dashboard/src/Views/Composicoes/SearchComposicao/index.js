import React, { useState } from 'react';
//material core
import Icon from "@material-ui/core/Icon";
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
import Button from '../../../components/CustomButtons/Button';
// @material-ui/icons
import Widgets from '@material-ui/icons/Widgets';
//form
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormControl from '@material-ui/core/FormControl';

import TableExpasiva from '../../../components/Table/TableComposicoes';


import api from '../../../services/api';

import './styles.css';

function SearchComposicao() {

    const [banco, setBanco] = React.useState(0);

    const [pending, setPending] = React.useState(false);

    const [input, setInput] = useState('');

    const [composicoesData, setComposicoesData] = useState([]);

    const [initialPage, setInitialPage] = useState(1);

    const handleChange = (event) => {
        setBanco(event.target.value);
    };

    async function loadComposicoes() {
        setPending(true)
        if (banco === 0) {
            const response = await api.get('/composicoes/search', {
                params: {
                    input: `${input}`,
                    page: '1'
                }
            });
            setComposicoesData(response.data);
            setPending(false)
            setInitialPage(1);
        } else {
            const response = await api.get(`/composicoes/proprios/search`, {
                params: {
                    input: `${input}`,
                    page: '1'
                }
            });
            setComposicoesData(response.data);
            setPending(false)
            setInitialPage(1);
        }
    }

    return (
        <div className="content">
            <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                    <Card>
                        <CardHeader color="success" stats icon>
                            <CardIcon color="success">
                                <Icon> <Widgets /></Icon>
                            </CardIcon>
                            <p>Pesquisa de Composições</p>
                        </CardHeader>
                        <CardBody>
                            <form className="form">
                                <FormControl variant="outlined" margin='normal' >
                                    <InputLabel shrink htmlFor="outlined-filtro">código ou Descrição</InputLabel>
                                    <OutlinedInput
                                        id="outlined-filtro"
                                        labelWidth={80}
                                        value={input}
                                        onChange={e => setInput(e.target.value)}
                                    />
                                </FormControl>

                                <FormControl variant="outlined" >
                                    <InputLabel shrink id="demo-simple-select-outlined-label">Banco</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-outlined-label"
                                        id="demo-simple-select-outlined"
                                        value={banco}
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={0}>SINAPI</MenuItem>
                                        <MenuItem value={1}>PRÓPRIO</MenuItem>
                                    </Select>
                                </FormControl>

                                <Button onClick={loadComposicoes} color="primary" block={true} size="lg">Buscar</Button>
                            </form>
                            <div className="table">
                                <TableExpasiva composicoes={composicoesData} load={pending} initialPage={initialPage} />
                            </div>
                        </CardBody>
                    </Card>
                </GridItem>
            </ GridContainer>
        </div>
    )
}

export default SearchComposicao;