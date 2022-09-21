import { TodoItem } from "./todoitem";

export class Model {
	name: string;
	items: TodoItem[];

	constructor() {
		this.name = "THY"
		this.items = [
			{ description: "Proje Konusu", actions: true },
			{ description: "Kullanılacak Api", actions: false },
			{ description: "Mentörle Görüşme", actions: false },
		];
	}
}
const m = new Model();