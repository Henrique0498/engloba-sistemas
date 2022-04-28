import { useState } from 'react'

const types = {
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Preencha um email válido.'
  },
  password: {
    regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
    message: 'Informe uma senha mais forte.'
  },
  number: {
    regex: /^\d+$/,
    message: 'Utilize apenas números.'
  },
  text: {
    regex: /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/,
    message: 'Utilize apenas caracteres válidos.'
  }
}

type InputType = 'text' | 'number' | 'email' | 'password' | 'search'

const useForm = (type: InputType, isRequired = true) => {
  const [value, setValue] = useState<string>('')
  const [error, setError] = useState<string>('')
  const [valid, setValid] = useState(true)

  function validate(value: string) {
    if (type === 'search') {
      return true
    } else if (value.length === 0 && isRequired) {
      setError('Preencha um valor.')
      return false
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message)
      return false
    }

    setError('')
    setValid(true)
    return true
  }

  function onChange({ currentTarget }: React.FormEvent<HTMLInputElement>) {
    if (error) {
      validate(currentTarget.value)
    }

    setValue(currentTarget.value)
  }

  return {
    value,
    setValue,
    onChange,
    error,
    setError,
    valid,
    setValid,
    validate: () => validate(value),
    onBlur: () => validate(value)
  }
}

export default useForm
