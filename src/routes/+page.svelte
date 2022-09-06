<script>
    import Rectangle from '$lib/Rectangle.svelte';

    /** @type {import('./$types').PageData} */
	export let data;

    let birthdate = (data.birthdate == undefined) ? new Date('2000-01-01') : data.birthdate;
    let lifespan = (data.lifespan == undefined) ? 80 : data.lifespan;

    const now = Date.now();
    //const a_week = 6.048e+8; // 60 * 60 * 24 * (7) * 1000
    const a_week = 606876923; // 60 * 60 * 24 * (365.25 / 52) * 1000 corrected

</script>

<div class='max-w-6xl mx-auto'>
    <div class='flex justify-between items-center p-2 md:pr-10'>
        <a href='https://pepegc.com/'>
            <p class='text-xs'>← Home</p>
        </a>
        <a href='https://github.com/pepegc/memento-mori' class='hover:underline' target='_blank'>
            <div class='flex items-center gap-1'>
                <svg class='fill-gray-700 w-4 h-4'>
                    <path d='M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.09-.202-.36-1.015.07-2.117 0 0 .67-.215 2.2.82.64-.178 1.32-.266 2-.27.68.004 1.36.092 2 .27 1.52-1.035 2.19-.82 2.19-.82.43 1.102.16 1.915.08 2.117.51.56.82 1.274.82 2.147 0 3.073-1.87 3.75-3.65 3.947.28.24.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.14.46.55.38C13.71 14.53 16 11.53 16 8c0-4.418-3.582-8-8-8'>
                    </path>
                </svg>
                <p class='text-xs'>pepegc/memento-mori</p>
            </div>
        </a>
    </div>
    <div class='md:flex'>
        <div class='px-2 md:py-8 mx-auto'>
            <img
                class='mx-auto'
                title='Memento mori still life with musical instruments by Carstian Luyckx'
                src='/memento-mori-still-life-with-musical-instruments-carstian-luyckx.jpg'
                alt='art by carstian luyckx'
                />
            <form method='get' action='#'>
                <span>
                    <label class="block text-gray-700 text-sm font-bold mb-2 mt-3" for="birthdate">Birthdate</label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 mb-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="birthdate"
                        name='birthdate'
                        type="date"
                        min="1900-01-01"
                        max='{(new Date()).toISOString().substr(0, 10)}'
                        value='{birthdate.toISOString().substr(0, 10)}'
                    >
                </span>
                <span>
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="lifespan">Lifespan</label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 mb-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="lifespan"
                        name='lifespan'
                        type="number"
                        min="10"
                        max="130"
                        placeholder="lifespan"
                        value={lifespan}
                        >
                </span>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline cursor-pointer" id="submit" type="submit" value="Memento mori">
            </form>
        </div>

        <div class='flex flex-col p-2 mx-auto md:w-4/5'>
            <div class=''>
                <p class='text-xs text-center mb-2'>52 weeks per year</p>
            </div>
            {#each Array(Math.ceil(lifespan/5)) as _, i}
                <div class='flex gap-2 items-end mb-2 mr-2'>
                    <div class=''>
                        {#each Array(Math.min(5, lifespan-5*i )) as _, q}
                            <div class='flex gap-0.5 mb-0.5'>
                                {#each Array(52) as _, j}
                                <Rectangle is_filled={(birthdate.getTime() + (i*5*52 + q*52 + j + 1)*a_week) > now}/>
                                {/each}
                            </div>
                        {/each}
                    </div>
                    {#if lifespan >= 5*(i+1)}
                        <p class='shrink-0 w-4 text-xs'>{(i+1)*5}</p>
                    {/if}
                </div>
            {/each}
        </div>
    </div>
</div>





