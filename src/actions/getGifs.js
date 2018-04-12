
export function getGifs() {
    return async (dispatch, getState) => {
        try {

            let gifs = await fetch('http://api.giphy.com/v1/gifs/search?q=trending&offset=0' + getState().fetchGifs.length + '&api_key=WOpTuEdtuRcJiVkhbSPZLybQCucy3Wzf&limit=50', {
                method: "GET",
                credentials: 'same-origin',
            })
            let Urls = [];
            let {  data,data: obj, pagination } = await gifs.json();

            obj.forEach(element => {
                Urls.push({
                    url: element.images['480w_still'].url && element.images['480w_still'].url,
                    height: element.images['480w_still'].height
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