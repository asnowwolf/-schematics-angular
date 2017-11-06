"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createAppModule(tree, path) {
    tree.create(path || '/src/app/app.module.ts', `
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    @NgModule({
    declarations: [
      AppComponent
    ],
    imports: [
      BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
    })
    export class AppModule { }
  `);
    return tree;
}
exports.createAppModule = createAppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLWFwcC1tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3R3ZXIvZGV2L3Nkay9kZXZraXQvIiwic291cmNlcyI6WyJwYWNrYWdlcy9zY2hlbWF0aWNzL2FuZ3VsYXIvdXRpbGl0eS90ZXN0L2NyZWF0ZS1hcHAtbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBVUEseUJBQWdDLElBQVUsRUFBRSxJQUFhO0lBQ3ZELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLHdCQUF3QixFQUFFOzs7Ozs7Ozs7Ozs7Ozs7O0dBZ0I3QyxDQUFDLENBQUM7SUFFSCxNQUFNLENBQUMsSUFBSSxDQUFDO0FBQ2QsQ0FBQztBQXBCRCwwQ0FvQkMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5pbXBvcnQgeyBUcmVlIH0gZnJvbSAnQGFuZ3VsYXItZGV2a2l0L3NjaGVtYXRpY3MnO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVBcHBNb2R1bGUodHJlZTogVHJlZSwgcGF0aD86IHN0cmluZyk6IFRyZWUge1xuICB0cmVlLmNyZWF0ZShwYXRoIHx8ICcvc3JjL2FwcC9hcHAubW9kdWxlLnRzJywgYFxuICAgIGltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbiAgICBpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuICAgIGltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XG5cbiAgICBATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgQXBwQ29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICBCcm93c2VyTW9kdWxlXG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtdLFxuICAgIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF1cbiAgICB9KVxuICAgIGV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XG4gIGApO1xuXG4gIHJldHVybiB0cmVlO1xufVxuIl19