import { Routes } from '@angular/router';


export const routes: Routes = [

    {path:"",loadComponent:()=>import("./../layouts/public-layout/public-layout").then(m=>m.PublicLayout),children:[
        {path:"login",loadComponent:()=>import("./../auth/pages/login/login").then(m=>m.Login)},
        {path:"",redirectTo:"login",pathMatch:"full"},
        {path:"register",loadComponent:()=>import("./../auth/pages/register/register").then(m=>m.Register)}
    ]},

    {path:"dashboard",loadComponent:()=>import("./../layouts/private-layout/private-layout").then(m=>m.PrivateLayout),children:[
      {path:"productos",loadComponent:()=>import("./../features/productos/pages/productos/productos").then(m=>m.Productos)},
      {path:"producto",loadChildren:()=>import("./../features/productos/productos.routes").then(m=>m.ProductRoutes)},
      {path:"",redirectTo:"productos",pathMatch:"full"},
    ]},



    {path:"**",redirectTo:"notfound", pathMatch:"full"},
    {path:"notfound",loadComponent:()=>import("./../core/not-found/not-found").then(m=>m.NotFound)},

];
