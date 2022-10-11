import { SearchFlightComponent } from './search-flight.component';
import { ModifySearchComponent } from './modify-search/modify-search.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: SearchFlightComponent },
];

export const SearchFlightRoutes = RouterModule.forChild(routes);
