import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { DetailComponent } from './detail/detail.component';
import { CauseComponent } from './cause/cause.component';
import { AuthGuard } from '../core/guards/auth.guard';


const routes: Routes = [
    {
        path: 'cause',
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: '/cause/create'
            },
            {
                path: 'create',
                component: CreateComponent,
                canActivate: [AuthGuard],
                data: {
                    isLogged: true
                  }
            },
            {
                path: 'detail/:id',
                component: CauseComponent,
                canActivate: [AuthGuard],
                data: {
                    isLogged: true
                  }
            }
        ]
    },


];

export const CauseRoutingModule = RouterModule.forChild(routes);