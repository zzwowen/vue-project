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
      icon:'fa fa-map-marker',
      children:[
        {
          path: 'demo1',
          name: 'Demo1',
          icon:'fa fa-plane',
          component: Demo1
        },
        {
          path: 'demo2',
          name: 'Demo2',
          icon:'fa fa-pie-chart',
          component: Demo2
        },
        {
          path: 'demo3',
          name: 'Demo3',
          icon:'fa fa-plus-circle',
          component: Demo3
        }
      ]
    },
    {
      path: '/list',
      name: 'LIST',
      component: Body,
      redirect:'/list/demo1',
      icon:'fa fa-map-marker',
      children:[
        {
          path: 'demo1',
          name: 'Demo1',
          icon:'fa fa-plane',
          component: Demo1
        }
      ]
    },
    {
      path: '/list1',
      name: 'LIST1',
      component: Body,
      redirect:'/list1/demo1',
      icon:'fa fa-map-marker',
      children:[
        {
          path: 'demo1',
          name: 'Demo1',
          icon:'fa fa-plane',
          component: Demo1
        }
      ]
    },
    {
      path: '/list2',
      name: 'LIST2',
      component: Body,
      redirect:'/list2/demo1',
      icon:'fa fa-map-marker',
      children:[
        {
          path: 'demo1',
          name: 'Demo1',
          icon:'fa fa-plane',
          component: Demo1
        }
      ]
    },
    {
        path: '/test',
        name: 'Test',
        component: Body,
        redirect:'/test/testdemo1',
        icon:'fa fa-futbol-o',
        children:[

          {
            path: 'testdemo1',
            name: 'testDemo1',
            component: Content,
            icon:'fa fa-truck',
            redirect:'/test/testdemo1/fist',
            children:[
              {
                path:'fist',
                name:'第一个子页面',
                icon:'fa fa-universal-access',
                component:Test1
              },
              {
                path:'second',
                name:'第二个子页面',
                icon:'fa fa-user-circle-o',
                component:Test2
              }
            ]
          },
          {
            path: 'testdemo2',
            name: 'testDemo2',
            icon:'fa fa-sign-language',
            component: Demo2
          },
          {
            path: 'testdemo3',
            name: 'testDemo3',
            component: Content,
            icon:'fa fa-mars-stroke-h',
            redirect:'/test/testdemo3/fist',
            children:[
              {
                path:'fist',
                name:'第一个子页面',
                icon:'fa fa-file-text',
                component:Test1
              },
              {
                path:'second',
                name:'第二个子页面',
                icon:'fa fa-bandcamp',
                component:Test2
              }
            ]
          }
        ]
      }

  ]
});


export default router;
