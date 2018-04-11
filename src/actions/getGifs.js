
export function getGifs() {
    return async function(dispatch, getState){
        try {
            let gifs = await fetch('http://api.giphy.com/v1/gifs/search?q=trending&api_key=WOpTuEdtuRcJiVkhbSPZLybQCucy3Wzf&limit=30', {
                method: "GET",
                credentials: 'same-origin',
            })
            let data = await gifs.json();
            console.log('data',data)
            let obj = data.data;
            let Urls = [];

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