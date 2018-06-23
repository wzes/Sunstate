import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const login = r => require.ensure([], () => r(require('@/page/login')), 'login')
const manage = r => require.ensure([], () => r(require('@/page/manage')), 'manage')
const home = r => require.ensure([], () => r(require('@/page/home')), 'home')
const contractList = r => require.ensure([], () => r(require('@/page/contractList')), 'contractList')
const addContract = r => require.ensure([], () => r(require('@/page/addContract')), 'addContract')
const jobList = r => require.ensure([], () => r(require('@/page/jobList')), 'jobList')
const addEquipment = r => require.ensure([], () => r(require('@/page/addEquipment')), 'addEquipment')
const driverList = r => require.ensure([], () => r(require('@/page/driverList')), 'driverList')
const addDriver = r => require.ensure([], () => r(require('@/page/addDriver')), 'addDriver')
const equipmentList = r => require.ensure([], () => r(require('@/page/equipmentList')), 'equipmentList')
const addJob = r => require.ensure([], () => r(require('@/page/addJob')), 'addJob')
export default new Router({
  routes: [
    {
      path: '/',
      component: login
    },
    {
      path: '/manage',
      component: manage,
      name: '',
      children: [{
        path: '',
        component: home,
        meta: []
      },
      {
        path: '/contractList',
        component: contractList,
        meta: ['view', 'contract']
      },
      {
        path: '/addContract',
        component: addContract,
        meta: ['add', 'contract']
      },
      {
        path: '/jobList',
        component: jobList,
        meta: ['view', 'job']
      },
      {
        path: '/addJob',
        component: addJob,
        meta: ['add', 'job']
      },
      {
        path: '/equipmentList',
        component: equipmentList,
        meta: ['view', 'equipment']
      },
      {
        path: '/addDriver',
        component: addDriver,
        meta: ['add', 'driver']
      },
      {
        path: '/driverList',
        component: driverList,
        meta: ['view', 'driver']
      },
      {
        path: '/addEquipment',
        component: addEquipment,
        meta: ['add', 'equipment']
      }]
    }
  ]
})
