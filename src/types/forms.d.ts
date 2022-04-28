export type InputType = {
  id: string
  onChange: (value: React.FormEvent<HTMLInputElement>) => void
  value: string
  placeholder: string
  type?: 'text' | 'number' | 'email' | 'password' | 'search'
  autoComplete?: 'on' | 'off'
}

export type ListType = {
  href?: string
  setValue?: (value: string) => void
  title: string
  icon?: React.ReactNode
  id?: string
}

export type ImageType = {
  alt: string
  src: string
}
