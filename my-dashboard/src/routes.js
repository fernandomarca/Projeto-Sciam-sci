// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
import Language from "@material-ui/icons/Language";
import Publish from "@material-ui/icons/Publish";
import Apartment from "@material-ui/icons/Apartment";
// core components/views for Admin layout
import Dash from './Views/Dash'
import UserProfile from "./Views/UserProfile/UserProfile";
import TableList from "./Views/TableList/TableList";
import Maps from "./Views/Maps/Maps";
import NotificationsPage from "./Views/Notifications/Notifications";
import Typography from "./Views/Typography/Typography";
import RTLPage from "./Views/RTLPage/RTLPage";
import UpgradeToPro from "./Views/UpgradeToPro/UpgradeToPro";
import Orca from "./layouts/Orca";
// core components/views for RTL layout

const dashboardRoutes = [
  {
    path: "/dash",
    name: "Dash",
    rtlName: "Dash",
    icon: Dashboard,
    component: Dash,
    layout: "/admin"
  },
  {
    path: "/dash",
    name: "DashClean",
    rtlName: "Dash",
    icon: Dashboard,
    component: Dash,
    layout: "/admin2"
  },
  {
    path: "/userProfile",
    name: "Perfil",
    rtlName: "Perfil",
    icon: Person,
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/tablelist",
    name: "Tabelas",
    rtlName: "Tabelas",
    icon: LibraryBooks,
    component: TableList,
    layout: "/admin"
  },
   {
    path: "/erp",
    name: "Orçamento",
    rtlName: "Orçamento",
    icon: Apartment,
    component: Orca,
    layout: "/orcamento"
  },
  {
    path: "/map",
    name: "Mapa",
    rtlName: "Mapa",
    icon: LocationOn,
    component: Maps,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "Notificações",
    rtlName: "Notificações",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/admin"
  },
  {
    path: "/global",
    name: "Global",
    rtlName: "Global",
    icon: Language,
    component: RTLPage,
    layout: "/admin"
  },
  {
    path: "/tipografia",
    name: "Tipografia",
    rtlName: "Tipografia",
    icon: Unarchive,
    component: Typography,
    layout: "/admin"
  },
  {
    path: "/upgrade",
    name: "Upgrade",
    rtlName: "Upgrade",
    icon: Publish,
    component: UpgradeToPro,
    layout: "/admin"
  },

];

export default dashboardRoutes;
