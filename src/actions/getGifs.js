export function getGifs() {
    return async (dispatch, getState) => {
        try {
            let offset =  getState().fetchGifs[0] ?  getState().fetchGifs[0].offset : getState().fetchGifs.length ;
            
            getState().fetchGifs[0] = {
                offset: offset + 50
            }

            let gifs = await fetch('http://api.giphy.com/v1/gifs/search?q=trending&offset=' + offset + '&api_key=WOpTuEdtuRcJiVkhbSPZLybQCucy3Wzf&limit=50', {
                method: "GET",
                credentials: 'same-origin',
            })

            let Urls = [];
            let {  data, data: obj, pagination } = await gifs.json();

            obj.forEach(element => {
                Urls.push({
                    url: element.images['480w_still'].url && element.images['480w_still'].url,
                    height: element.images['480w_still'].height,
                    offset: offset
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