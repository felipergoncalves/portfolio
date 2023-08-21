import React from 'react'

type Props = {
    children: React.ReactNode;
}

function HText({children}: Props) {
  return (
    <h1 className="basis-3/5 text-blue-100 font-montserrat text-3xl font-bold">
        {children}
    </h1>
  )
}

export default HText