const url = "https://api.imgflip.com/caption_image";
const username = "phill1976";
const password = "Xi0ZYp4hBDx4906EdZdc";

export default async function postMemes(
  data,
  text,
  setOutput,
  setLoading,
  setError
) {
  const textArr = Object.values(text);

  const combineText = textArr
    .map((e, idx) => `boxes[${idx}][text]=${e}`)
    .join("&");

  try {
    const req = await fetch(
      `${url}?template_id=${data.id}&username=${username}&password=${password}&${combineText}`
    );

    const res = await req.json();

    setOutput(res.data.url);

    setLoading(false);
  } catch (error) {
    setLoading(false);
    setError(error.message);
    console.log("something went wrong");
  }
}
