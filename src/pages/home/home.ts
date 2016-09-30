import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // Refs
  users: FirebaseListObservable<any[]>;
  banner: FirebaseObjectObservable<any>;

  constructor(public navCtrl: NavController, public af: AngularFire) {

    this.banner = this.af.database.object('/banner');

    this.users = this.af.database.list('/users', {
      query: {
        orderByChild: 'timestamp'
      }
    });
  }

}
