// export class TodoItem {
// 	description: string;
// 	actions: string;
// 	constructor(description: string, actions: string) {
// 		this.description = description;
// 		this.actions = actions;
// 	}
// }
// export class TodoItem {
// 	constructor(public description: string, public actions: string) {
// 		this.description = description;
// 		this.actions = actions;
// 	}
// }

export interface TodoItem {
	description: string;
	actions: boolean;
}
