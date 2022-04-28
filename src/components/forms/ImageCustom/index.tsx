import { useState } from 'react'
import Image from 'next/image'

import { ImageType } from 'types/forms'

import * as S from './styles'

export interface ImageProps extends ImageType {
  width?: number
  height?: number
  layout?: 'fill' | 'fixed' | 'intrinsic' | 'responsive'
  className?: string
  title?: string
  unoptimized?: boolean
  objectFit?:
    | 'cover'
    | 'contain'
    | 'fill'
    | 'inherit'
    | 'none'
    | 'revert'
    | 'scale-down'
    | 'unset'
}

const ImageCustom = ({ className, src, alt, ...image }: ImageProps) => {
  const [skeleton, setSkeleton] = useState(true)

  function handleLoad() {
    setSkeleton(false)
  }

  return (
    <S.Container className={`${className}`}>
      {skeleton && <S.Skeleton />}

      <Image
        src={src}
        alt={alt}
        onLoadingComplete={handleLoad}
        className={`image`}
        {...image}
      />
    </S.Container>
  )
}

export default ImageCustom
