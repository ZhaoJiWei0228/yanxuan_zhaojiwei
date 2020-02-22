import Index from '../pages/Index/Index'
import ClassifyList from '../pages/ClassifyList/ClassifyList'
import DeserveBuy from '../pages/DeserveBuy/DeserveBuy'
import Mine from '../pages/Mine/Mine'
import Cart from '../pages/Cart/Cart'
import Search from '../pages/Search/Search'
import Login from '../pages/Login/Login'
export default [
  // {
  //   path: '路由路径',
  //   component: 路由组件
  // }
  {
    path: '/index',
    component: Index,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/classifyList',
    component: ClassifyList,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/deserveBuy',
    component: DeserveBuy,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/mine',
    component: Mine,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/cart',
    component: Cart,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/search',
    component: Search,
    meta: {
      isShowFooter: false
    }
  },
  {
    path: '/login',
    component: Login,
    meta: {
      isShowFooter: false
    }
  },
  {
    path: '/',
    redirect: '/index'
  }
]
