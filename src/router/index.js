import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import routerView from '@/layout/router-view/routerView';
import Body from '@/layout/router-view/body';
import Content from '@/layout/router-view/content'

import Demo1 from '@/components/demo1'
import Demo2 from '@/components/demo2'
import Demo3 from '@/components/demo3'
import Test1 from '@/components/test1'
import Test2 from '@/components/test2'
Vue.use(Router)

let router=new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Body,
      hidden:true,
      redirect: '/home',
    },

    {
      path: '/home',
      name: 'Home',
      component: Body,
      redirect:'/home/demo1',
      children:[
        {
          path: 'demo1',
          name: 'Demo1',
          component: Demo1
        },
        {
          path: 'demo2',
          name: 'Demo2',
          component: Demo2
        },
        {
          path: 'demo3',
          name: 'Demo3',
          component: Demo3
        }
      ]
    },  {
        path: '/test',
        name: 'Test',
        component: Body,
        redirect:'/test/testdemo1',
        children:[

          {
            path: 'testdemo1',
            name: 'testDemo1',
            component: Content,
            redirect:'/test/testdemo1/fist',
            children:[
              {
                path:'fist',
                name:'第一个子页面',
                component:Test1
              },
              {
                path:'second',
                name:'第二个子页面',
                component:Test2
              }
            ]
          },
          {
            path: 'testdemo2',
            name: 'testDemo2',
            component: Demo2
          },
          {
            path: 'testdemo3',
            name: 'testDemo3',
            component: Content,
            redirect:'/test/testdemo3/fist',
            children:[
              {
                path:'fist',
                name:'第一个子页面',
                component:Test1
              },
              {
                path:'second',
                name:'第二个子页面',
                component:Test2
              }
            ]
          }
        ]
      }

  ]
});


export default router;
