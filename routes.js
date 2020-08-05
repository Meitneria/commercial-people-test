const nextRoutes = require('next-routes')
const routes = (module.exports = nextRoutes())

const APP_ROUTES = [
  {
    page: 'index',
    pattern: '/',
  },
  {
    page: 'about',
    pattern: '/about',
  },
  {
    page: 'library',
    pattern: '/library',
  },
]

APP_ROUTES.forEach((route) => routes.add(route))
