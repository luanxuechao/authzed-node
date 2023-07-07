// @generated by protobuf-ts 2.8.1 with parameter generate_dependencies,long_type_string,client_grpc1
// @generated from protobuf file "authzed/api/v1/watch_service.proto" (package "authzed.api.v1", syntax proto3)
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
import { RelationshipUpdate } from "./core";
import { ZedToken } from "./core";
/**
 * WatchRequest specifies the object definitions for which we want to start
 * watching mutations, and an optional start snapshot for when to start
 * watching.
 *
 * @generated from protobuf message authzed.api.v1.WatchRequest
 */
export interface WatchRequest {
    /**
     * @generated from protobuf field: repeated string optional_object_types = 1;
     */
    optionalObjectTypes: string[];
    /**
     * optional_start_cursor is the ZedToken holding the point-in-time at
     * which to start watching for changes.
     * If not specified, the watch will begin at the current head revision
     * of the datastore, returning any updates that occur after the caller
     * makes the request.
     * Note that if this cursor references a point-in-time containing data
     * that has been garbage collected, an error will be returned.
     *
     * @generated from protobuf field: authzed.api.v1.ZedToken optional_start_cursor = 2;
     */
    optionalStartCursor?: ZedToken;
}
/**
 * WatchResponse contains all tuple modification events in ascending
 * timestamp order, from the requested start snapshot to a snapshot
 * encoded in the watch response. The client can use the snapshot to resume
 * watching where the previous watch response left off.
 *
 * @generated from protobuf message authzed.api.v1.WatchResponse
 */
export interface WatchResponse {
    /**
     * @generated from protobuf field: repeated authzed.api.v1.RelationshipUpdate updates = 1;
     */
    updates: RelationshipUpdate[];
    /**
     * @generated from protobuf field: authzed.api.v1.ZedToken changes_through = 2;
     */
    changesThrough?: ZedToken;
}
// @generated message type with reflection information, may provide speed optimized methods
class WatchRequest$Type extends MessageType<WatchRequest> {
    constructor() {
        super("authzed.api.v1.WatchRequest", [
            { no: 1, name: "optional_object_types", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/, options: { "validate.rules": { repeated: { minItems: "0", items: { string: { maxBytes: "128", pattern: "^([a-z][a-z0-9_]{1,62}[a-z0-9]/)?[a-z][a-z0-9_]{1,62}[a-z0-9]$" } } } } } },
            { no: 2, name: "optional_start_cursor", kind: "message", T: () => ZedToken }
        ]);
    }
    create(value?: PartialMessage<WatchRequest>): WatchRequest {
        const message = { optionalObjectTypes: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<WatchRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: WatchRequest): WatchRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated string optional_object_types */ 1:
                    message.optionalObjectTypes.push(reader.string());
                    break;
                case /* authzed.api.v1.ZedToken optional_start_cursor */ 2:
                    message.optionalStartCursor = ZedToken.internalBinaryRead(reader, reader.uint32(), options, message.optionalStartCursor);
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
    internalBinaryWrite(message: WatchRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated string optional_object_types = 1; */
        for (let i = 0; i < message.optionalObjectTypes.length; i++)
            writer.tag(1, WireType.LengthDelimited).string(message.optionalObjectTypes[i]);
        /* authzed.api.v1.ZedToken optional_start_cursor = 2; */
        if (message.optionalStartCursor)
            ZedToken.internalBinaryWrite(message.optionalStartCursor, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message authzed.api.v1.WatchRequest
 */
export const WatchRequest = new WatchRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class WatchResponse$Type extends MessageType<WatchResponse> {
    constructor() {
        super("authzed.api.v1.WatchResponse", [
            { no: 1, name: "updates", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => RelationshipUpdate },
            { no: 2, name: "changes_through", kind: "message", T: () => ZedToken }
        ]);
    }
    create(value?: PartialMessage<WatchResponse>): WatchResponse {
        const message = { updates: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<WatchResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: WatchResponse): WatchResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated authzed.api.v1.RelationshipUpdate updates */ 1:
                    message.updates.push(RelationshipUpdate.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* authzed.api.v1.ZedToken changes_through */ 2:
                    message.changesThrough = ZedToken.internalBinaryRead(reader, reader.uint32(), options, message.changesThrough);
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
    internalBinaryWrite(message: WatchResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated authzed.api.v1.RelationshipUpdate updates = 1; */
        for (let i = 0; i < message.updates.length; i++)
            RelationshipUpdate.internalBinaryWrite(message.updates[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* authzed.api.v1.ZedToken changes_through = 2; */
        if (message.changesThrough)
            ZedToken.internalBinaryWrite(message.changesThrough, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message authzed.api.v1.WatchResponse
 */
export const WatchResponse = new WatchResponse$Type();
/**
 * @generated ServiceType for protobuf service authzed.api.v1.WatchService
 */
export const WatchService = new ServiceType("authzed.api.v1.WatchService", [
    { name: "Watch", serverStreaming: true, options: { "google.api.http": { post: "/v1/watch", body: "*" } }, I: WatchRequest, O: WatchResponse }
]);
