import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// export const router = new VueRouter({
//     mode: 'history', //queda registro para despues poder navegar para atras y para adelante
//     routes : [
//         {path: '/', redirect : '/binding'},
//         {path: '/binding', component: Binding},
//         {path: '/estructura', component: Estructura},
//         {path: '/atributos', component: Atributos},
//         {path: '/contadores', component: Contadores},
//         {path: '/formulario', component: Formulario},
//         {path: '/formularioAv', component: FormularioAv},
//         {path: '/http-client', component: HttpClient},
//         {path: '/apirest-ful', component: ApiRestFul},
//         {path: '/padre', component: Padre},
//         {path: '/contadorvuex', component: ContadorVuex},
//         {path: '*', component: Binding} //se mantiene la ruta incorrecta en el url pero se visualiza binding

//     ]

// })