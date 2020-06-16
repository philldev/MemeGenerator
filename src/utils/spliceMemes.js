export default function (memes) {
  //chunk the array
  const data = memes;
  const temp = [];
  const chunkSize = Math.ceil(memes.length / 4) ;
  if (data.length > 0) {
    for (let i = 0; i < data.length; i += chunkSize) {
      temp.push(data.slice(i, i + chunkSize));
    }

    return temp;
  } 
  
}
