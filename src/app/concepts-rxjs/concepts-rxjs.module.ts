import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';
import { PhotoViewComponent } from './photo-view/photo-view.component';
import { ConceptsRxjsRoutingModule } from './concepts-rxjs-routing.module';

@NgModule({
  declarations: [PhotoViewComponent],
  imports: [CommonModule, HttpClientModule, ConceptsRxjsRoutingModule],
  providers: [DataService],
})
export class ConceptsRxjsModule {}
