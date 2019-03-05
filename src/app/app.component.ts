import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pets';
  newPet: string;
  pets: string[] = ['Hond', 'Kat', 'Poes', 'Kip', 'Haan', 'Parkiet'];

    getSelectedIndex(index: number) {
        console.log(index);
        this.pets.splice(index, 1);
    }

    addNewPet() {
        this.pets.push(this.newPet);
        /* After adding the new pet to the List clear the input field.
          Since it is 2 way databinding setting the newPet string to '' is enough.
         */
        this.newPet = '';
    }
}
