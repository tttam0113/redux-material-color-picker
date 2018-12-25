import AppView from 'views/AppView';
// import requireAuth from '../hoc/requireAuth';

const indexRoutes = [
  {
    name: 'AppView',
    path: '/',
    component: AppView,
    exact: true,
  },
];

export default indexRoutes;
