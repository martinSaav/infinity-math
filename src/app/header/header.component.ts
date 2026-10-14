import { Component } from '@angular/core';
import { ActivatedRoute, Data, Router, RoutesRecognized } from '@angular/router';

@Component({
    selector: 'app-header',
    imports: [],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent {

  
    
  protected pageTitle: string = 'prueba';

  private routeData: Data = {};

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((data) => {
      if (data instanceof RoutesRecognized) {
        if (data.state.root.firstChild) {
          this.routeData = data.state.root.firstChild.data;
          this.pageTitle = this.routeData['title'];
        }
      }
    });
  }

}
