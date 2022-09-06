/**
 * 
 * @param {any} param0 
 * @returns 
 */
export async function load({ url }) {
    let _birthdate = url.searchParams.get('birthdate');
    let _lifespan = url.searchParams.get('lifespan');

    let birthdate = (_birthdate == undefined) ? new Date('2000-01-01') : new Date(_birthdate);
    let lifespan = (_lifespan == undefined) ? 80 : _lifespan;

	return {
		birthdate,
        lifespan,
	};
}