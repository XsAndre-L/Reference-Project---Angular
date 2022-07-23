import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotoViewComponent } from './photo-view/photo-view.component';

const routesConceptsRouting: Routes = [
  { path: '', component: PhotoViewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routesConceptsRouting)],
  exports: [RouterModule],
})
export class ConceptsRxjsRoutingModule {}
