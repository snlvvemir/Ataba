import Brand from '@/modules/Articeles/ui/Brand'
import CategoryNav from '@/modules/Articeles/ui/CategoryNav'
import Compound from '@/modules/Articeles/ui/Compound'
import Dimensions from '@/modules/Articeles/ui/dimensions'
import GenderBlock from '@/modules/Articeles/ui/Gender'
import ModelBlock from '@/modules/Articeles/ui/ModelBlock'
import Price from '@/modules/Articeles/ui/Price'
import React from 'react'

function BrandFilter() {
  return (
    <div>
      <CategoryNav />
      <Brand />
      <Price />
      <Dimensions />
      <ModelBlock />
      <Compound />
      <GenderBlock />
    </div>
  )
}

export default BrandFilter
