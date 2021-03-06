import React from 'react'
import MemeColumn from './MemeColumn'

export default function ColumnContainer({chunkMemes}) {
  
  return (
    <>

      {chunkMemes && chunkMemes.length > 0
              ? chunkMemes.map((cm, idx) => (
                  <MemeColumn idx={idx} key={idx} memes={cm} />
                ))
              : null}
    </>
  )
}
