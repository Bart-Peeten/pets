import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {
  @Input() pet: string;
  @Input() index: number;
  @Output() selectedPet = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  deletePet() {
        console.log(this.index);
        this.selectedPet.emit(this.index);
  }
}
