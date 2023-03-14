import { User, UserRole } from '$lib/stubs/user/v1alpha/message';
import type { Timestamp } from "../stubs/google/protobuf/timestamp";

export interface IUser {
	id: string;
	firstName: string;
	lastName: string;
    email: string;
    createdAt?: Timestamp,
	updatedAt?: Timestamp,
	role: UserRole,
}

export const toJson = (user: User): IUser => {
	return {
		id: user.id,
		firstName: user.firstName,
		lastName: user.lastName,
		email: user.email,
		createdAt: user.createdAt,
		updatedAt: user.updatedAt,
		role: user.role,
	};
};

export const toPb = (user: IUser) =>
    User.create({
		...user,
	});
