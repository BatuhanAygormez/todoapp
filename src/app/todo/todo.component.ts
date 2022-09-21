import { Component, OnInit } from '@angular/core';
import { Model } from '../model';


@Component({
	selector: 'app-todo',
	templateUrl: './todo.component.html',
	styleUrls: ['./todo.component.css']
})
export class TodoComponent {

	displayAll: boolean = true;

	constructor() { }

	model = new Model();

	// addItem(txtAdd: any) {
	// 	console.log(txtAdd.value);
	// }

	addItem(value: string) {
		if (value != "") {
			this.model.items.push({ description: value, actions: false },);
		}
		else {
			alert("Bilgi Giriniz");
		}
	}

	getName() {
		return this.model.name;
	}

	getItems() {
		if (this.displayAll) {
			return this.model.items;
		}
		return this.model.items.filter(item => !item.actions)

	}
	displayCount() {
		return this.model.items.filter(i => i.actions).length;
	}


}
