import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // --------- Lazy Loading a Route -----------
  {
    path: 'concepts-routing',
    loadChildren: () =>
      import('./concepts-routing/concepts-routing.module').then(
        (m) => m.ConceptsRoutingModule
      ),
  },
  // -------------------------------------------
  {
    path: 'concepts-rxjs',
    loadChildren: () =>
      import('./concepts-rxjs/concepts-rxjs.module').then(
        (m) => m.ConceptsRxjsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
