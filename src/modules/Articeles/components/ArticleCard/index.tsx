import Image from 'next/image'
import React from 'react'

const ArticleCard = () => {
  return (
    <div>

        <Image alt='Imag' width={400} height={250} src='/trash/article-image.png' />

        <span>
        14 апреля, 2021
        </span>

        <p>Крутой приз от Samsung Galaxy!
        </p>

        <p>Суперприз или Бонусные рубли</p>
      
    </div>
  )
}

export default ArticleCard
