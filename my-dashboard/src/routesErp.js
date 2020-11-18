import SearchInsumo from './Views/Insumos/SearchInsumo';
import CreateInsumo from './Views/Insumos/CreateInsumo';

import SearchComposicao from './Views/Composicoes/SearchComposicao';
import CreateComposicao from './Views/Composicoes/CreateComposicao';


const dashboardRoutes = [
  {
    path: "/insumo/search",
    name: "DashClean",
    component: SearchInsumo,
    layout: "/orcamento"
  },
  {
    path: "/insumo/create",
    name: "DashClean",
    component: CreateInsumo,
    layout: "/orcamento"
  },
  {
    path: "/composicao/search",
    name: "DashClean",
    component: SearchComposicao,
    layout: "/orcamento"
  },
  {
    path: "/composicao/create",
    name: "DashClean",
    component: CreateComposicao,
    layout: "/orcamento"
  },
];

export default dashboardRoutes;
