import type { Actions } from './$types';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const text = data.get('message');
		console.log('Received message:', text);
		// TODO: store text in DB
		return { success: true };
	}
} satisfies Actions;
