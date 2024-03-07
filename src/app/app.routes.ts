import {Routes} from '@angular/router';
import {MenuComponent} from "./presentation/menu-components/menu/menu.component";
import {AdminPageComponent} from "./presentation/menu-components/admin-page/admin-page.component";
import {adminGuard} from "./presentation/admin.guard";

export const routes: Routes = [
  { path: '', component: MenuComponent },
  {
    path: 'office',
    loadChildren: () => import('./presentation/game-components/office-components/office-components.module').then(m => m.OfficeComponentsModule)
  },
  {
    path: 'office/board',
    loadChildren: () => import('./presentation/game-components/board-components/board-components.module').then(m => m.BoardComponentsModule)
  },
  {
    path: 'office/computer',
    loadChildren: () => import('./presentation/game-components/computer-components/computer-components.module').then(m => m.ComputerComponentsModule)
  },
  { path: 'admin', component: AdminPageComponent, canActivate: [adminGuard]}
];

// import('./game-components/game-components.module').then(m => m.GameComponentsModule)
