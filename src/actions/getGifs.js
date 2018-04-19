export function getGifs() {
    return async (dispatch, getState) => {
        try {
            const numb = 50;
            let offset =  getState().fetchGifs[0] ?  getState().fetchGifs[0].offset : getState().fetchGifs.length ;

            let gifs = await fetch('https://api.giphy.com/v1/gifs/search?q=trending&offset=' + offset + '&api_key=WOpTuEdtuRcJiVkhbSPZLybQCucy3Wzf&limit=' + numb + '' , {
                method: "GET",
                credentials: 'same-origin',
            })
            getState().fetchGifs[0] = {
                offset: offset + numb,
            }

            let Urls = [];
            let {  data: obj, pagination } = await gifs.json();

            obj.forEach(element => {
                Urls.push({
                    url: element.images['480w_still'].url && element.images['480w_still'].url,
                    height: element.images['480w_still'].height,
                    offset: pagination.offset
                })
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
