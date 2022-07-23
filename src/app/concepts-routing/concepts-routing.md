# Routing Concepts

## Basic Routing

Routing starts at the `app.module.ts` where the root `app-routing.module.ts` is imported.  
The routing module then imports sub Modules than have their own `Routing Modules`

```TypeScript
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  // Note we use RouterModule.forRoot(), in branching routes we
  // will use RouterModule.forChild()
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

## Lazy loading modules

Only Reference to `concepts-routing.module.ts` in root app is the lazy loaded import inside `app-routing.module.ts`
