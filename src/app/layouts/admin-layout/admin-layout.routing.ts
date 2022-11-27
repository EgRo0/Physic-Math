import { Routes } from '@angular/router';

import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { HomeComponent } from 'app/home/home.component';
import { MathComponent } from 'app/math/math.component';
import { PhysicsComponent } from 'app/physics/physics.component';

export const AdminLayoutRoutes: Routes = [
 
    { path: 'home',      component: HomeComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'math',     component: MathComponent },
    { path: 'physic',     component: PhysicsComponent },
    
];
