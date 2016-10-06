import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'main',

  templateUrl: 'application/components/main/partials/view.html',
  styleUrls: ['application/components/main/main.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class AppMain {}
