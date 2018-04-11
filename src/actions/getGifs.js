
export function getGifs() {
    return async (dispatch, getState) => {
        // try {
            // console.log('non')

            let gifs = await fetch('http://api.giphy.com/v1/gifs/search?q=trending&offset=0' + getState().fetchGifs.length + '&api_key=WOpTuEdtuRcJiVkhbSPZLybQCucy3Wzf&limit=50', {
                method: "GET",
                credentials: 'same-origin',
            })
            let Urls = [];
            let {  data,data: obj, pagination } = await gifs.json();

            obj.forEach(element => {
                Urls.push({
                    url: element.images['480w_still'].url,
                    height: element.images['480w_still'].height
                })
            });
            // Urls = obj.map((element, index) => {
            //     return (
            //         {
            //             url: element.images['480w_still'].url,
            //             height: element.images['480w_still'].height
            //         }
            //     );
            // })

            // console.log('obj', Urls)
            dispatch({
                type: 'LOAD_GIFS',
                payload: Urls
            });
            
    //     } catch(error) {
    //         dispatch({
    //             type: 'LOAD_GIFS_ERROR',
    //             error
    //         })
    //     }
    }

}

export function getMoreGifs() {
    return async (dispatch) => {
        try {
            console.log('lox')

            let gifs = await fetch('http://api.giphy.com/v1/gifs/search?q=trending&offset=0&api_key=WOpTuEdtuRcJiVkhbSPZLybQCucy3Wzf&limit=50', {
                method: "GET",
                credentials: 'same-origin',
            })
            let Urls = [];
            let { data: obj, pagination } = await gifs.json();
            while(true) {
                let { data: obj, nextPagination } = await gifs.json();
            }

            console.log(pagination.offset)

            // console.log('data',data)

            obj.forEach(element => {
                Urls.push(element.images['480w_still'].url)
            });
            dispatch({
                type: 'LOAD_GIFS',
                payload: Urls
            });
            
        } catch(error) {
            dispatch({
                type: 'LOAD_GIFS_ERROR',
                error
            })
        }
    }

}