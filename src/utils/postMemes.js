const url = 'https://api.imgflip.com/caption_image'
const username = 'phill1976'
const password = 'Xi0ZYp4hBDx4906EdZdc'

export default async function postMemes (data, text, setOutput)  {
  
  // console.log(data)

  const textArr = Object.values(text)

  // console.log(textArr)

  const combineText = textArr.map((e, idx) =>`boxes[${idx}][text]=${e}`).join('&')

  // console.log(combineText)

  try {
    
    const req = await fetch(`${url}?template_id=${data.id}&username=${username}&password=${password}&${combineText}`)

    const res = await req.json()

    console.log(res)

    setOutput(res.data.url)
    // setLoading(false)

  } catch (error) {
    console.log('something went wrong')
    // setError(error.message)
  }

}