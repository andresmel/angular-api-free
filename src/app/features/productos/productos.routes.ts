
import { Routes } from '@angular/router';

export const ProductRoutes: Routes = [


  {
    path: ":id",
    loadComponent: () =>
      import("./../productos/pages/producto-details/producto-details").then(m => m.ProductoDetails)
  },
]
