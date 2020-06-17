const url = 'https://api.imgflip.com/caption_image'
const username = 'phill1976'
const password = 'Xi0ZYp4hBDx4906EdZdc'

export default async function postMemes (data, text, setOutput)  {
  
  console.log(data)

  const textArr = Object.entries(text)

  const combineText = textArr.map(e => e.join('=')).join('&')

  try {
    
    const req = await fetch(`${url}?template_id=${data.id}&username=${username}&password=${password}&${combineText}`)

    const res = await req.json()

    console.log(res)

    setOutput(res.data.url)

  } catch (error) {
    console.log('something went wrong')
  }

}