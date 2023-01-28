import { Task } from '$lib/stubs/task/v1alpha/task';

export class TaskDto {
	name?: string;
	fields: any;
	dueDate?: Date;
	/**
	 * Creating a DTO Task object,
	 */
	constructor({ name, fields, dueDate }: { name?: string; fields: any; dueDate: Date | string }) {
		this.name = name;
		this.fields = fields && typeof fields === 'string' ? JSON.parse(fields) : fields;
		this.dueDate = typeof dueDate === 'string' ? new Date(dueDate) : dueDate;
	}

	toJson(): {
		name?: string;
		fields: any;
		dueDate?: Date;
	} {
		const task = {
			name: this.name,
			fields: this.fields,
			dueDate: this.dueDate
		};

		Object.keys(task).forEach((key) => (task[key] === undefined ? delete task[key] : {}));

		return task;
	}

	toPbTask(): Task {
		const t: any = this.toJson();
		if (t.fields) {
			t.fields = JSON.stringify(t.fields);
		}
		if (t.dueDate) {
			t.dueDate = (t.dueDate as Date).toISOString();
		}

		return Task.create(t);
	}
}

export class TasksDto {
	tasks: TaskDto[];

	constructor(tasks: Task[]) {
		this.tasks = tasks.map((t) => new TaskDto(t));
	}

	toJson() {
		return this.tasks.map((t) => t.toJson());
	}
}
