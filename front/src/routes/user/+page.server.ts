import { UpdateRequest } from '../../lib/stubs/user/v1alpha/message';
import { toPb } from '$lib/helper/userDto';
import { fail, type Actions } from '@sveltejs/kit';

export const actions: Actions = {
	updateUser: async ({ request, locals }) => {
		const data = await request.formData();
		const stringUser = data.get('user') as string;

		try {
			const request = UpdateRequest.create({
				user: toPb(JSON.parse(stringUser))
			});
			await locals.taskClients.crudClient.updateUser(request);

			return { success: true };
		} catch (error: any) {
			console.error(error);
			return fail(400, { error: error?.message || 'something went wront' });
		}
	},
};
