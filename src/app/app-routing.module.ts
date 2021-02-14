import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {HomeComponent} from './home/home.component'
import {EditingComponent} from './editing/editing.component'
import {AnimalsComponent} from './animals/animals.component'
import {Animals} from "./animal/animal.component";
import {ErrorPageComponent} from './error-page/error-page.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'animals', component: AnimalsComponent},
  {path: 'editing/:id', component: EditingComponent},
  {path: 'error', component: ErrorPageComponent},
  {path: '**', redirectTo: '/error'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
