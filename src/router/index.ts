// Composables
import AuthViews from '@/views/AuthViews.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { useAuhtStore } from '@/store/AuthStore'
import FullLayout from '@/layouts/full/FullLayout.vue'
import CompanyInfoForm from '@/components/CompanyInfoForm.vue'
import ProductLayout from '@/layouts/full/ProductLayout.vue'
import MenuLayout from '@/layouts/full/MenuLayout.vue'
import OrderLayout from '@/layouts/full/OrderLayout.vue'

const routes = [
  {
    path: '/',
    name:'Dashboard',
    component: FullLayout,
    meta:{islogin:true}
  },
  {
    path: '/auth',
    name:'Auth',
    component: AuthViews
  },
  {
    path: '/company',
    name:'Company',
    component: CompanyInfoForm,
    meta:{islogin:true}
  },
  {
    path: '/product',
    name:'Company',
    component: ProductLayout,
    meta:{islogin:true}
  },
  {
    path: '/menu',
    name:'Menu',
    component: MenuLayout,
    meta:{islogin:true}
  },
  {
    path: '/order',
    name:'Order',
    component: OrderLayout,
    meta:{islogin:true}
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach((to,from,next)=>{
  if(to.matched.some((record)=>record.meta.islogin)){
    const auth = useAuhtStore();
    if(auth.user.loggin){
      next();
    }else{
     router.push('/auth');
    }
  }else{
    next();
  }
})

export default router
