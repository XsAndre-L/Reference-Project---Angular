import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Concept1Component } from './concept1/concept1.component';

const routesConceptsRouting: Routes = [
  { path: '', component: Concept1Component },
  { path: 'concept1', component: Concept1Component }, // available at /concepts-routing/concepts-routing/concept_1
];

@NgModule({
  imports: [RouterModule.forChild(routesConceptsRouting)],
  exports: [RouterModule],
})
export class ConceptsRoutingRoutingModule {}
