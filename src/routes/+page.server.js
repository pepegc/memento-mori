import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ( {request, url} ) => {
        const data = await request.formData();
        const birthdate = data.get('birthdate');
        const lifespan = data.get('lifespan');
        //console.log(url)
        const new_url = url.origin+'?birthdate='+birthdate+'&lifespan='+lifespan;
        throw redirect(303, new_url);
    }
};