// @generated by protobuf-ts 2.8.2
// @generated from protobuf file "task/v1alpha/task.proto" (package "task.v1alpha", syntax proto3)
// tslint:disable
import { ServiceType } from "@protobuf-ts/runtime-rpc";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message task.v1alpha.Task
 */
export interface Task {
    /**
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * @generated from protobuf field: string fields = 2;
     */
    fields: string;
    /**
     * @generated from protobuf field: string due_date = 3;
     */
    dueDate: string;
}
/**
 * @generated from protobuf message task.v1alpha.StreamTasksRequest
 */
export interface StreamTasksRequest {
}
/**
 * @generated from protobuf message task.v1alpha.StreamTasksResponse
 */
export interface StreamTasksResponse {
    /**
     * @generated from protobuf field: task.v1alpha.Task task = 1;
     */
    task?: Task;
    /**
     * @generated from protobuf field: string event_type = 2;
     */
    eventType: string;
}
/**
 * @generated from protobuf message task.v1alpha.ListTasksRequest
 */
export interface ListTasksRequest {
    /**
     * The parent resource name, for example, "shelves/shelf1"
     *
     * @generated from protobuf field: string parent = 1;
     */
    parent: string;
    /**
     * The maximum number of items to return.
     *
     * @generated from protobuf field: int32 page_size = 2;
     */
    pageSize: number;
    /**
     * The next_page_token value returned from a previous List request, if any.
     *
     * @generated from protobuf field: string page_token = 3;
     */
    pageToken: string;
}
/**
 * @generated from protobuf message task.v1alpha.ListTasksResponse
 */
export interface ListTasksResponse {
    /**
     * The field name should match the noun "Task" in the method name.
     * There will be a maximum number of items returned based on the page_size field in the request.
     *
     * @generated from protobuf field: repeated task.v1alpha.Task tasks = 1;
     */
    tasks: Task[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     *
     * @generated from protobuf field: string next_page_token = 2;
     */
    nextPageToken: string;
}
/**
 * @generated from protobuf message task.v1alpha.GetTaskRequest
 */
export interface GetTaskRequest {
    /**
     * The field will contain name of the resource requested.
     *
     * @generated from protobuf field: string name = 1;
     */
    name: string;
}
/**
 * @generated from protobuf message task.v1alpha.CreateTaskRequest
 */
export interface CreateTaskRequest {
    /**
     * The parent resource name where the Task is to be created.
     *
     * @generated from protobuf field: string parent = 1;
     */
    parent: string;
    /**
     * The Task id to use for this Task.
     *
     * @generated from protobuf field: string task_id = 2;
     */
    taskId: string;
    /**
     * The Task resource to create.
     * The field name should match the Noun in the method name.
     *
     * @generated from protobuf field: task.v1alpha.Task task = 3;
     */
    task?: Task;
}
/**
 * @generated from protobuf message task.v1alpha.UpdateTaskRequest
 */
export interface UpdateTaskRequest {
    /**
     * The Task resource which replaces the resource on the server.
     *
     * @generated from protobuf field: task.v1alpha.Task task = 1;
     */
    task?: Task;
}
/**
 * @generated from protobuf message task.v1alpha.DeleteTaskRequest
 */
export interface DeleteTaskRequest {
    /**
     * The resource name of the Task to be deleted.
     *
     * @generated from protobuf field: string name = 1;
     */
    name: string;
}
// @generated message type with reflection information, may provide speed optimized methods
class Task$Type extends MessageType<Task> {
    constructor() {
        super("task.v1alpha.Task", [
            { no: 1, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "fields", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "due_date", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<Task>): Task {
        const message = { name: "", fields: "", dueDate: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<Task>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Task): Task {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string name */ 1:
                    message.name = reader.string();
                    break;
                case /* string fields */ 2:
                    message.fields = reader.string();
                    break;
                case /* string due_date */ 3:
                    message.dueDate = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: Task, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string name = 1; */
        if (message.name !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.name);
        /* string fields = 2; */
        if (message.fields !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.fields);
        /* string due_date = 3; */
        if (message.dueDate !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.dueDate);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message task.v1alpha.Task
 */
export const Task = new Task$Type();
// @generated message type with reflection information, may provide speed optimized methods
class StreamTasksRequest$Type extends MessageType<StreamTasksRequest> {
    constructor() {
        super("task.v1alpha.StreamTasksRequest", []);
    }
    create(value?: PartialMessage<StreamTasksRequest>): StreamTasksRequest {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<StreamTasksRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: StreamTasksRequest): StreamTasksRequest {
        return target ?? this.create();
    }
    internalBinaryWrite(message: StreamTasksRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message task.v1alpha.StreamTasksRequest
 */
export const StreamTasksRequest = new StreamTasksRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class StreamTasksResponse$Type extends MessageType<StreamTasksResponse> {
    constructor() {
        super("task.v1alpha.StreamTasksResponse", [
            { no: 1, name: "task", kind: "message", T: () => Task },
            { no: 2, name: "event_type", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<StreamTasksResponse>): StreamTasksResponse {
        const message = { eventType: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<StreamTasksResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: StreamTasksResponse): StreamTasksResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* task.v1alpha.Task task */ 1:
                    message.task = Task.internalBinaryRead(reader, reader.uint32(), options, message.task);
                    break;
                case /* string event_type */ 2:
                    message.eventType = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: StreamTasksResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* task.v1alpha.Task task = 1; */
        if (message.task)
            Task.internalBinaryWrite(message.task, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* string event_type = 2; */
        if (message.eventType !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.eventType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message task.v1alpha.StreamTasksResponse
 */
export const StreamTasksResponse = new StreamTasksResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ListTasksRequest$Type extends MessageType<ListTasksRequest> {
    constructor() {
        super("task.v1alpha.ListTasksRequest", [
            { no: 1, name: "parent", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "page_size", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 3, name: "page_token", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<ListTasksRequest>): ListTasksRequest {
        const message = { parent: "", pageSize: 0, pageToken: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ListTasksRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ListTasksRequest): ListTasksRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string parent */ 1:
                    message.parent = reader.string();
                    break;
                case /* int32 page_size */ 2:
                    message.pageSize = reader.int32();
                    break;
                case /* string page_token */ 3:
                    message.pageToken = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: ListTasksRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string parent = 1; */
        if (message.parent !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.parent);
        /* int32 page_size = 2; */
        if (message.pageSize !== 0)
            writer.tag(2, WireType.Varint).int32(message.pageSize);
        /* string page_token = 3; */
        if (message.pageToken !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.pageToken);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message task.v1alpha.ListTasksRequest
 */
export const ListTasksRequest = new ListTasksRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ListTasksResponse$Type extends MessageType<ListTasksResponse> {
    constructor() {
        super("task.v1alpha.ListTasksResponse", [
            { no: 1, name: "tasks", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Task },
            { no: 2, name: "next_page_token", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<ListTasksResponse>): ListTasksResponse {
        const message = { tasks: [], nextPageToken: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ListTasksResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ListTasksResponse): ListTasksResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated task.v1alpha.Task tasks */ 1:
                    message.tasks.push(Task.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* string next_page_token */ 2:
                    message.nextPageToken = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: ListTasksResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated task.v1alpha.Task tasks = 1; */
        for (let i = 0; i < message.tasks.length; i++)
            Task.internalBinaryWrite(message.tasks[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* string next_page_token = 2; */
        if (message.nextPageToken !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.nextPageToken);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message task.v1alpha.ListTasksResponse
 */
export const ListTasksResponse = new ListTasksResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetTaskRequest$Type extends MessageType<GetTaskRequest> {
    constructor() {
        super("task.v1alpha.GetTaskRequest", [
            { no: 1, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<GetTaskRequest>): GetTaskRequest {
        const message = { name: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GetTaskRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetTaskRequest): GetTaskRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string name */ 1:
                    message.name = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: GetTaskRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string name = 1; */
        if (message.name !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.name);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message task.v1alpha.GetTaskRequest
 */
export const GetTaskRequest = new GetTaskRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CreateTaskRequest$Type extends MessageType<CreateTaskRequest> {
    constructor() {
        super("task.v1alpha.CreateTaskRequest", [
            { no: 1, name: "parent", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "task_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "task", kind: "message", T: () => Task }
        ]);
    }
    create(value?: PartialMessage<CreateTaskRequest>): CreateTaskRequest {
        const message = { parent: "", taskId: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<CreateTaskRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CreateTaskRequest): CreateTaskRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string parent */ 1:
                    message.parent = reader.string();
                    break;
                case /* string task_id */ 2:
                    message.taskId = reader.string();
                    break;
                case /* task.v1alpha.Task task */ 3:
                    message.task = Task.internalBinaryRead(reader, reader.uint32(), options, message.task);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: CreateTaskRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string parent = 1; */
        if (message.parent !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.parent);
        /* string task_id = 2; */
        if (message.taskId !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.taskId);
        /* task.v1alpha.Task task = 3; */
        if (message.task)
            Task.internalBinaryWrite(message.task, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message task.v1alpha.CreateTaskRequest
 */
export const CreateTaskRequest = new CreateTaskRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UpdateTaskRequest$Type extends MessageType<UpdateTaskRequest> {
    constructor() {
        super("task.v1alpha.UpdateTaskRequest", [
            { no: 1, name: "task", kind: "message", T: () => Task }
        ]);
    }
    create(value?: PartialMessage<UpdateTaskRequest>): UpdateTaskRequest {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<UpdateTaskRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UpdateTaskRequest): UpdateTaskRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* task.v1alpha.Task task */ 1:
                    message.task = Task.internalBinaryRead(reader, reader.uint32(), options, message.task);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: UpdateTaskRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* task.v1alpha.Task task = 1; */
        if (message.task)
            Task.internalBinaryWrite(message.task, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message task.v1alpha.UpdateTaskRequest
 */
export const UpdateTaskRequest = new UpdateTaskRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DeleteTaskRequest$Type extends MessageType<DeleteTaskRequest> {
    constructor() {
        super("task.v1alpha.DeleteTaskRequest", [
            { no: 1, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<DeleteTaskRequest>): DeleteTaskRequest {
        const message = { name: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<DeleteTaskRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DeleteTaskRequest): DeleteTaskRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string name */ 1:
                    message.name = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: DeleteTaskRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string name = 1; */
        if (message.name !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.name);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message task.v1alpha.DeleteTaskRequest
 */
export const DeleteTaskRequest = new DeleteTaskRequest$Type();
/**
 * @generated ServiceType for protobuf service task.v1alpha.TaskService
 */
export const TaskService = new ServiceType("task.v1alpha.TaskService", [
    { name: "ListTasks", options: { "google.api.http": { get: "/v1alpha1/Tasks" } }, I: ListTasksRequest, O: ListTasksResponse },
    { name: "GetTask", options: { "google.api.http": { get: "/v1alpha1/{name=Tasks/*}" } }, I: GetTaskRequest, O: Task },
    { name: "CreateTask", options: { "google.api.http": { post: "/v1alpha1/Tasks", body: "Task" } }, I: CreateTaskRequest, O: Task },
    { name: "UpdateTask", options: { "google.api.http": { patch: "/v1alpha1/{Task.name=Tasks/*}", body: "Task" } }, I: UpdateTaskRequest, O: Task },
    { name: "DeleteTask", options: { "google.api.http": { delete: "/v1alpha1/{name=Tasks/*}" } }, I: DeleteTaskRequest, O: Task },
    { name: "StreamTasks", serverStreaming: true, options: {}, I: StreamTasksRequest, O: StreamTasksResponse }
]);
