const url = 'https://api.imgflip.com/get_memes'

export default async function fetchMemes (setState)  {
  
  try {
    
    const req = await fetch(url)

    const res = await req.json()

    const data = await res.data

    setState(data.memes)

  } catch (error) {

    console.log('something went wrong')
    
  }

}