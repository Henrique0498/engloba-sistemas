import Link from 'next/link'
import { FcCopyright } from 'react-icons/fc'
import { memo } from 'react'

import * as S from './styles'

interface TitleSiteProps {
  size?: string
  href?: string
}

function TitleSiteComponent({ href, size = 'text-4xl' }: TitleSiteProps) {
  function renderText() {
    if (href) {
      return (
        <Link href={href}>
          <a className="title">
            <FcCopyright />
            <div>
              engloba
              <span>SISTEMAS</span>
            </div>
          </a>
        </Link>
      )
    } else {
      return (
        <div className="title">
          <FcCopyright />
          engloba
          <span>SISTEMAS</span>
        </div>
      )
    }
  }

  return <S.Container className={size}>{renderText()}</S.Container>
}

const TitleSite = memo(TitleSiteComponent)

export default TitleSite
