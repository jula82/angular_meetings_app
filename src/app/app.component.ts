import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'course-app';

    constructor(private afs: AngularFirestore) {
    }

    ngOnInit() {
        this.afs.collection('meeting').snapshotChanges().subscribe(items => {
            console.log(items.map(x => x.payload.doc.data()));
        });
    }
}
