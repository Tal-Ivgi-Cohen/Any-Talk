import { Home } from './pages/Home.jsx'
import { Login } from './pages/Login.jsx'
import { Chat } from './pages/Chat'
import { SignUp } from './pages/SignUp.jsx'


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
    {
        path: '/signup',
        component: SignUp,
    },
]
