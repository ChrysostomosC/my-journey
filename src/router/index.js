import { createRouter, createWebHashHistory } from 'vue-router';

function loadView(viewName) {
  return () => import(`@/views/${viewName}.vue`);
}

const routes = [
  { path: '/', name: 'home', component: loadView('HomeView') },
  { path: '/myView', name: 'myView', component: loadView('MyView') },
  { path: '/myProjectsView', name: 'myProjectsView', component: loadView('MyProjectsView') },
  { path: '/fizzBuzzView', name: 'fizzBuzzView', component: loadView('FizzBuzzView') },
  { path: '/mvcPortfolioView', name: 'mvcPortfolioView', component: loadView('MVCPortfolioView') },
  { path: '/träningsdagbokView', name: 'träningsdagbokView', component: loadView('TräningsdagbokView') },
  { path: '/ticTacToeView', name: 'ticTacToeView', component: loadView('TicTacToeView') },
  { path: '/företagssidaView', name: 'företagssidaView', component: loadView('FöretagssidaView') },
  { path: '/receptsidaView', name: 'receptsidaView', component: loadView('ReceptsidaView') },
  { path: '/bloggplattformView', name: 'bloggplattformView', component: loadView('BloggplattformView') },
  { path: '/träningsdagbokSQLView', name: 'träningsdagbokSQLView', component: loadView('TräningsdagbokSQLView') },
  { path: '/bloggplattformAPIView', name: 'bloggplattformAPIView', component: loadView('BloggplattformAPIView') },
  { path: '/cVPortfolioHbsView', name: 'cVPortfolioHbsView', component: loadView('CVPortfolioHbsView') },
  { path: '/receptlistaHbsView', name: 'receptlistaHbsView', component: loadView('ReceptlistaHbsView') },
  { path: '/restaurangsidaVueJSView', name: 'restaurangsidaVueJSView', component: loadView('RestaurangsidaVueJSView') },
  { path: '/bloggVueJSView', name: 'bloggVueJSView', component: loadView('BloggVueJSView') },
  { path: '/todoListaVueJSView', name: 'todoListaVueJSView', component: loadView('TodoListaVueJSView') },
  { path: '/webbutikVueJSView', name: 'webbutikVueJSView', component: loadView('WebbutikVueJSView') },
  { path: '/cRUDLoansView', name: 'cRUDLoansView', component: loadView('CRUDLoansView') },
  { path: '/cRUDBloggView', name: 'cRUDBloggView', component: loadView('CRUDBloggView') },
  { path: '/frontendBloggView', name: 'frontendBloggView', component: loadView('FrontendBloggView') },
  { path: '/todoListaFrontendBackendView', name: 'todoListaFrontendBackendView', component: loadView('TodoListaFrontendBackendView') },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;