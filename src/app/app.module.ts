import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./routes/00/home/home.module').then(
        (m) => m.HomeModule
      ),
  },
  {
    path: 'input-binds',
    loadChildren: () =>
      import('./routes/01/input-binds/input-binds.module').then(
        (m) => m.InputBindsModule
      ),
  },
  {
    path: 'input-getters',
    loadChildren: () =>
      import('./routes/02/input-getters/input-getters.module').then(
        (m) => m.InputGettersModule
      ),
  },
  {
    path: 'ng-on-changes',
    loadChildren: () =>
      import('./routes/03/ng-on-changes/ng-on-changes.module').then(
        (m) => m.NgOnChangesModule
      ),
  },
  {
    path: 'output-binds',
    loadChildren: () =>
      import('./routes/04/output-binds/output-binds.module').then(
        (m) => m.OutputBindsModule
      ),
  },
  {
    path: 'local-template-variables',
    loadChildren: () =>
      import(
        './routes/05/local-template-variables/local-template-variables.module'
      ).then((m) => m.LocalTemplateVariablesModule),
  },
  {
    path: 'view-child',
    loadChildren: () =>
      import('./routes/06/view-child/view-child.module').then(
        (m) => m.ViewChildModule
      ),
  },
  {
    path: 'services',
    loadChildren: () =>
      import('./routes/07/services/services.module').then(
        (m) => m.ServicesModule
      ),
  },
  {
    path: 'ngrx-component-store',
    loadChildren: () =>
      import(
        './routes/08/ngrx-component-store/ngrx-component-store.module'
      ).then((m) => m.NgrxComponentStoreModule),
  },
  {
    path: 'dependency-inject',
    loadChildren: () =>
      import('./routes/09/dependency-inject/dependency-inject.module').then(
        (m) => m.DependencyInjectModule
      ),
  },
  {
    path: 'child-pipes',
    loadChildren: () =>
      import('./routes/10/child-pipes/child-pipes.module').then(
        (m) => m.ChildPipesModule
      ),
  },
  {
    path: 'memos',
    loadChildren: () =>
      import('./routes/11/memos/memos.module').then((m) => m.MemosModule),
  },
  {
    path: 'to-observable-pipe',
    loadChildren: () =>
      import('./routes/12/to-observable-pipe/to-observable-pipe.module').then(
        (m) => m.ToObservablePipeModule
      ),
  },
  {
    path: 'structural-directive',
    loadChildren: () =>
      import(
        './routes/13/structural-directive/structural-directive.module'
      ).then((m) => m.StructuralDirectiveModule),
  },
  {
    path: 'getter-subject-pattern',
    loadChildren: () =>
      import(
        './routes/14/getter-subject-pattern/getter-subject-pattern.module'
      ).then((m) => m.GetterSubjectPatternModule),
  },
  {
    path: 'ng-on-changes-subject-pattern',
    loadChildren: () =>
      import(
        './routes/15/ng-on-changes-subject-pattern/ng-on-changes-subject-pattern.module'
      ).then((m) => m.NgOnChangesSubjectPatternModule),
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
