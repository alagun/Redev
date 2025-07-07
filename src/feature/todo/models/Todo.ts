export interface ITodo {
	id: string;
	title: string;
	isCompleted: boolean;
	createdAt: number;
	updatedAt?: number;
  }