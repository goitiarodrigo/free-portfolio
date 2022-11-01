import { lazy, LazyExoticComponent } from 'react'

type JSXComponent = () => JSX.Element

interface IRoutes{
    to: string,
    path: string,
    Component: LazyExoticComponent<JSXComponent> | JSXComponent,
    name: string,
    private?: boolean,
}

const LazySignIn = lazy(() => import(/*webpackChunkName: "LazyLogin"*/"../pages/SignIn"))
const LazySignUp = lazy(() => import(/*webpackChunkName: "LazySignUp"*/"../pages/SignUp"))
const LazyDashboard = lazy(() => import(/*webpackChunkName: "LazyDashboard"*/"../pages/Home"))
const LazyNewProject = lazy(() => import(/*webpackChunkName: "LazyNewProject"*/"../components/NewProject"))
const LazyMyprojects = lazy(() => import(/*webpackChunkName: "LazyMyprojects"*/"../components/MyProjects"))
const LazyProfile = lazy(() => import(/*webpackChunkName: "LazyProfile"*/"../components/Profile"))
const LazyNewPortfolio = lazy(() => import(/*webpackChunkName: "LazyNewPortfolio"*/"../components/NewPortfolio"))

export const routes: IRoutes[] = [
    {
        to: '/signin',
        path:'/signin',
        Component: LazySignIn,
        name:'Signin',
        private: false,
    },
    {
        to: '/signup',
        path:'/signup',
        Component: LazySignUp,
        name:'Signup',
        private: false,
    },
    {
        to: '/home',
        path:'/home',
        Component: LazyDashboard,
        name:'Dashboard',
        private: true,
    },
    {
        to: '/newproject',
        path:'/newproject',
        Component: LazyNewProject,
        name:'NewProject',
        private: true,
    },
    {
        to: '/myprojects',
        path:'/myprojects',
        Component: LazyMyprojects,
        name:'MyProjects',
        private: true,
    },
    {
        to: '/profile',
        path:'/profile',
        Component: LazyProfile,
        name:'Profile',
        private: true,
    },
    {
        to: '/newportfolio',
        path:'/newportfolio',
        Component: LazyNewPortfolio,
        name:'NewPortfolio',
        private: true,
    },
]