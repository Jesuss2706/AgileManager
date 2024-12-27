import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'users', loadChildren: () => import('src/app/pages/user/user.module').then(m => m.UserModule) },
    { path: 'settings', loadChildren: () => import('src/app/pages/settings/settings.module').then(m => m.SettingsModule) },
    { path: 'tasks', loadChildren: () => import('src/app/pages/task/task.module').then(m => m.TaskModule) },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'user-profile', component: UserProfileComponent },
    { path: 'tables', component: TablesComponent },
    { path: 'icons', component: IconsComponent },
    { path: 'maps', component: MapsComponent }
];
