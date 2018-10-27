import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/HelloWorld'
import Posts from '@/components/Posts'
import NewPost from '@/components/NewPost'
import EditPost from '@/components/EditPost'

Vue.use(Router)

const routes = [{
        path: '/',
        name: 'Hello',
        component: Hello
    },
    {
        path: '/posts',
        name: 'Posts',
        component: Posts
    },
    {
        path: '/posts/new',
        name: 'NewPost',
        component: NewPost
    },
    {
        path: '/posts/:id',
        name: 'EditPost',
        component: EditPost
    }
]
const router = new Router({ mode: 'history', routes })
export default router