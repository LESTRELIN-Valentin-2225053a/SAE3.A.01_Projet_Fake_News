import {Routes} from '@angular/router';
import {GameComponent} from "./presentation/game-components/game/game.component";
import {MenuComponent} from "./presentation/menu-components/menu/menu.component";
import {FormLoginComponent} from "./presentation/menu-components/form-login/form-login.component";


export const routes: Routes = [
  { path: '', component: MenuComponent },
  {
    path: 'office',
    component: GameComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./presentation/game-components/office-components/office-components.module').then(m => m.OfficeComponentsModule)
      },
      {
        path: 'board',
        loadChildren: () => import('./presentation/game-components/board-components/board-components.module').then(m => m.BoardComponentsModule)
      },
      {
        path: 'computer',
        loadChildren: () => import('./presentation/game-components/computer-components/computer-components.module').then(m => m.ComputerComponentsModule)
      }
    ]
  },
  { path: 'login', component: FormLoginComponent }
];

// import('./game-components/game-components.module').then(m => m.GameComponentsModule)
