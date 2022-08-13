export const getGifs = async(category) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${category}}&limit=12&api_key=dwCArHeXbs1oSff25YLFTlbCgr49R4GE`;
    const resp = await fetch(url);
    const {data} = await resp.json();
  
    const gifs = data.map( img => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    }))  
    
    return gifs;  
  
  }
  