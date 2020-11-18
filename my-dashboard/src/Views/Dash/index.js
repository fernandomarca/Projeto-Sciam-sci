import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// react plugin for creating charts
import ChartBar1 from '../../components/Charts/Bar/ChartBar1'
import ChartBar2 from '../../components/Charts/Bar/ChartBar2'
import ChartBar3 from '../../components/Charts/Bar/ChartBar3'
import ChartDoughnut from '../../components/Charts/Doughnut'
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
//icons
import Assignment from "@material-ui/icons/Assignment";
import PlaylistAddCheck from "@material-ui/icons/PlaylistAddCheck";
import AddBox from "@material-ui/icons/AddBox";
//components
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
import Card from '../../components/Card/Card';
import CardHeader from '../../components/Card/CardHeader'
import CardIcon from '../../components/Card/CardIcon'
import CardFooter from '../../components/Card/CardFooter'
import CardBody from '../../components/Card/CardBody'
import Danger from '../../components/Typography/Danger';
import Warning from '../../components/Typography/Warning';
import Tasks from "../../components/Tasks/Tasks";
import CustomTabs from '../../components/CustomTabs/CustomTabs';
import TableShow from "../../components/Table/TableShow";
import TableEdit from "../../components/Table/edittable";
//styles
import styles from '../../assets/jss/material-dashboard-react/views/dashboardStyle'
//variaveis
import { server } from "../../variables/general";

import ValorMax from '../../variables/tables/data'

const useStyles = makeStyles(styles);

function Dash() {
    const classes = useStyles();
    return (
        <div>
            <GridContainer>
                <GridItem xs={12} sm={6} md={3}>
                    <Card>
                        <CardHeader color="warning" stats icon>
                            <CardIcon color="warning">
                                <Icon> <Store /></Icon>
                            </CardIcon>
                            <p className={classes.cardCategory}>Índice custo de construção</p>
                            <h3 className={classes.cardTitle}>
                                R$ 1.615,33 <small>CUB/PR</small>
                            </h3>
                        </CardHeader>
                        <CardFooter stats>
                            <div className={classes.stats}>
                                <Danger>
                                    <Warning></Warning>
                                </Danger>
                                <a href="#p" onClick={e => e.preventDefault()}>
                                    Adquirir mais Resultados
                                </a>
                            </div>
                        </CardFooter>
                    </Card>
                </GridItem>

                <GridItem xs={12} sm={6} md={3}>
                    <Card>
                        <CardHeader color="success" stats icon>
                            <CardIcon color="success">
                                <Store />
                            </CardIcon>
                            <p className={classes.cardCategory}>Maior Preço</p>
                            <h3 className={classes.cardTitle}> <ValorMax /></h3>
                        </CardHeader>
                        <CardFooter stats>
                            <div className={classes.stats}>
                                <DateRange />
                                Julho 2020
                            </div>
                        </CardFooter>
                    </Card>
                </GridItem>

                <GridItem xs={12} sm={6} md={3}>
                    <Card>
                        <CardHeader color="danger" stats icon>
                            <CardIcon color="danger">
                                <Icon>informações</Icon>
                            </CardIcon>
                            <p className={classes.cardCategory}>Correções</p>
                            <h3 className={classes.cardTitle}>75</h3>
                        </CardHeader>
                        <CardFooter stats>
                            <div className={classes.stats}>
                                <LocalOffer />
                                Github
                            </div>
                        </CardFooter>
                    </Card>
                </GridItem>

                <GridItem xs={12} sm={6} md={3}>
                    <Card>
                        <CardHeader color="info" stats icon>
                            <CardIcon color="info">
                                <Accessibility />
                            </CardIcon>
                            <p className={classes.cardCategory}>Seguidores</p>
                            <h3 className={classes.cardTitle}>+245</h3>
                        </CardHeader>
                        <CardFooter stats>
                            <div className={classes.stats}>
                                <Update />
                                Just Updated
                            </div>
                        </CardFooter>
                    </Card>
                </GridItem>
            </GridContainer>

            <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                    <Card chart>
                        <CardHeader color="success">
                            <ChartBar1 />
                        </CardHeader>
                        <CardBody>
                            <h4 className={classes.cardTitle}>Distribuição de Unidades por Bairro</h4>
                            <p className={classes.cardCategory}>
                                <span className={classes.successText}>
                                    <ArrowUpward className={classes.upArrowCardCategory} />
                                </span>{" "}
                                Estátistica da distribuição
                            </p>
                        </CardBody>
                        <CardFooter chart>
                            <div className={classes.stats}>
                                <AccessTime /> Atualizado a 2 dias
                            </div>
                        </CardFooter>
                    </Card>
                </GridItem>

                <GridItem xs={12} sm={12} md={6}>
                    <Card chart>
                        <CardHeader color="danger">
                            <ChartDoughnut />
                        </CardHeader>
                        <CardBody>
                            <h4 className={classes.cardTitle}>Unidades no Banco de Dados</h4>
                            <p className={classes.cardCategory}>Procurando por mais unidades</p>
                        </CardBody>
                        <CardFooter chart>
                            <div className={classes.stats}>
                                <AccessTime /> Atualizado a 2 dias
                            </div>
                        </CardFooter>
                    </Card>

                </GridItem>

                <GridItem xs={12} sm={12} md={6}>
                    <Card chart>
                        <CardHeader color="warning">
                            <ChartBar3 />
                        </CardHeader>
                        <CardBody>
                            <h4 className={classes.cardTitle}>Tamanho médio por Bairro</h4>
                            <p className={classes.cardCategory}>Valores Calculados</p>
                        </CardBody>
                        <CardFooter chart>
                            <div className={classes.stats}>
                                <AccessTime /> atualizado a 2 dias
                            </div>
                        </CardFooter>
                    </Card>
                </GridItem>

                <GridItem xs={12} sm={12} md={6}>

                    <Card chart>
                        <CardHeader color="success">
                            <ChartBar2 />
                        </CardHeader>
                        <CardBody>
                            <h4 className={classes.cardTitle}>Valor do m² por Bairro</h4>
                            <p className={classes.cardCategory}>
                                <span className={classes.successText}>
                                    <ArrowUpward className={classes.upArrowCardCategory} />
                                </span>
                                Cálculo médio da região
                            </p>
                        </CardBody>
                        <CardFooter chart>
                            <div className={classes.stats}>
                                <AccessTime /> Atualizado a 2 dias
                            </div>
                        </CardFooter>
                    </Card>

                </GridItem>

            </GridContainer>

            <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                    <CardHeader >

                        <CustomTabs
                            title=""
                            headerColor="primary"
                            tabs={[
                                {
                                    tabName: "Tabela",
                                    tabIcon: Assignment,
                                    tabContent: (
                                        <Card>
                                            <CardHeader color="warning">
                                                <div>
                                                    <h3 className={classes.cardTitleWhite}>Relátório de Imóveis</h3>
                                                    <p className={classes.cardCategoryWhite}>
                                                        Novos apartamentos em Julho de 2020</p>
                                                </div>
                                            </CardHeader>
                                            <CardBody>
                                                <TableShow />
                                            </CardBody>
                                        </Card>
                                    )
                                },
                                {
                                    tabName: "Cadastrar",
                                    tabIcon: AddBox,
                                    tabContent: (
                                        <Card>
                                            <CardHeader color="warning">
                                                <div>
                                                    <h3 className={classes.cardTitleWhite}>Relátório de Imóveis Modo Edição</h3>
                                                    <p className={classes.cardCategoryWhite}>
                                                        Novos apartamentos em Julho de 2020</p>
                                                </div>
                                            </CardHeader>
                                            <CardBody>
                                                <TableEdit />
                                            </CardBody>
                                        </Card>
                                    )
                                },
                                {
                                    tabName: "Para Fazer",
                                    tabIcon: PlaylistAddCheck,
                                    tabContent: (
                                        <Tasks
                                            checkedIndexes={[1]}
                                            tasksIndexes={[0, 1, 2]}
                                            tasks={server}
                                        />
                                    )
                                }
                            ]}
                        />
                    </CardHeader>
                </GridItem>
            </GridContainer>

        </div >
    )
}

export default Dash