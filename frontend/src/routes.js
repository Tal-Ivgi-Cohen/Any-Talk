import { Home } from './pages/Home.jsx'
import { Login } from './pages/Login.jsx'
import { Chat } from './pages/Chat'

export const routes = [
    {
        path: '/',
        component: Home,
    },
   {
        path: '/chat',
        component: Chat,
    },
    {
        path: '/login',
        component: Login,
    },
]
