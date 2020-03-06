
export const pcMenu=[
  {
    path: '/',
    redirect: '/Index',
    children: [
      {
        path: '/Index',
        name: 'Index',
        meta: { title: '首页' },
        component: () => import('../views/index.vue')
      },
    ]
  },
  {
    path: '/About',
    redirect: '/About',
    children: [
      {
        path: '/About',
        name: 'About',
        meta: { title: '关于我们' },
        component: () => import('../views/about.vue')
      }
    ]
  },
]
export const constantRouterMap =pcMenu