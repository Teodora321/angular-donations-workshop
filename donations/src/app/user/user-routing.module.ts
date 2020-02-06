import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
    {
        path: 'user',
        children: [
            {
                path: '',
                pathMatch: 'full',
                component:UserComponent
            },
            {
                path: 'profile',
                component: ProfileComponent,
                data: {
                    isLogged: true
                  }
            },
        ]
    },


];

export const UserRoutingModule = RouterModule.forChild(routes);