import { useRef } from 'react'
import { InputType } from 'types/forms'
import { ColorsType } from 'types/tailwindcss'
import * as S from './styles'

export interface InputProps extends InputType {
  className?: string
  icon?: React.ReactNode
  color?: ColorsType
  outline?: boolean
  error: string
  typeButton?: 'submit' | 'button'
  orderReverse?: boolean
  onClick?: () => void
  onFocus?: () => void
  onBlur: () => void
}

const Input = ({
  icon,
  className,
  error,
  onClick,
  typeButton = 'button',
  type = 'text',
  ...input
}: InputProps) => {
  const ref = useRef<HTMLInputElement>(null)

  function renderIcon() {
    if (icon) {
      return (
        <button type={typeButton} onClick={() => handleClick()}>
          {icon}
        </button>
      )
    }

    return null
  }

  function handleClick() {
    if (onClick) {
      onClick()
    } else {
      ref.current?.focus()
    }
  }

  return (
    <S.Container className={`${input.value ? 'active' : ''} ${className}`}>
      <S.Label
        onClick={() => ref.current?.focus()}
        className={`${error ? 'error' : ''} ${input.value ? 'active' : ''}`}
      >
        <input
          ref={ref}
          id={input.id}
          type={type ?? 'text'}
          value={input.value}
          onBlur={input.onBlur}
          onFocus={input.onFocus}
          autoComplete={input.autoComplete ?? 'off'}
          placeholder={input.placeholder}
          onChange={(e) => input.onChange(e)}
        />
        {renderIcon()}
      </S.Label>
      {error && (
        <S.Error>
          <p>{error}</p>
        </S.Error>
      )}
    </S.Container>
  )
}

export default Input
