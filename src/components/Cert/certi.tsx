import React from 'react'
import Image from 'next/image'
import Cert from './style.module.css'

const Certi = () => {
  return (
    <>
    <div className={Cert.main}>
    <h1 className={Cert.heading}>Certification</h1>
    <Image
    src='/cer.jpg'
    alt='Certification'
    width={300}
    height={300}
    className={Cert.img}
    />
    </div>

    </>
  )
}

export default Certi
