    import { Component } from '@angular/core';
    @Component({
      selector: 'my-app',
      templateUrl:'app2/app.component.html',
      styleUrls:['app2/app.component.css'],
    })
    export class AppComponent {
      title = 'Customer Admin';
  private _open: boolean = false;

  private _toggleSidebar() {
    this._open = !this._open;
  }
    }
