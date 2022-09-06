/**
 * 
 * @param {any} param0 
 * @returns 
 */
export async function load({ url }) {
    //console.log(url.searchParams.get('date'));
    let birthdate = new Date(url.searchParams.get('birthdate'));
    let lifespan = url.searchParams.get('lifespan');
    //console.log(birthdate);
	return {
		birthdate,
        lifespan,
	};
}