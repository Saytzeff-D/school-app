import Vue from 'vue'
import App from './App.vue'
import FirstComponent from "./components/firstcomponent"
import Apply from "./components/apply"
import Contact from "./components/contact"
import Screening from "./components/screeningpass"
import UpdateApplicant from "./components/updateapply"
import NewApplication from "./components/newapply"
import ScreeningResult from "./components/screeningresult"
import ApplicantPage from "./components/applicantPage"
import TeacherLogIn from "./components/tutorlogin"
import NotFound from "./components/notfound"
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {path: '/', component: FirstComponent},
  {path: '/apply', component: Apply, children:[
    {path: "/", component: NewApplication},
     {path: 'updateApply', component: UpdateApplicant},
     {path: 'screening_pass', component: Screening},
     {path: 'screening_result', component: ScreeningResult}
      ]
    },
  {path: '/contact', name: "Contact", component: Contact},
  {path: '/applicantPage', component: ApplicantPage},
  {path: '/tutor', component: TeacherLogIn},
  {path: '*',  component: NotFound}
]

const myRouter = new VueRouter({routes, mode: 'history'})

Vue.config.productionTip = false

new Vue({
  router: myRouter,
  render: h => h(App),
}).$mount('#app')
