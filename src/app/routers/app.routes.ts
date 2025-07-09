import { Routes } from '@angular/router';

export const routes: Routes = [
    
    {path:"",loadComponent:()=>import("./../layouts/public-layout/public-layout").then(m=>m.PublicLayout),children:[
        {path:"login",loadComponent:()=>import("./../auth/pages/login/login").then(m=>m.Login)},
        {path:"",redirectTo:"login",pathMatch:"full"}
    ]},
     
    {path:"dashboard",loadComponent:()=>import("./../layouts/private-layout/private-layout").then(m=>m.PrivateLayout),children:[
        {path:"productos",loadComponent:()=>import("./../features/productos/productos").then(m=>m.Productos)},
        {path:"dashboard",redirectTo:"productos",pathMatch:"full"},
    ]}
   
    


];
