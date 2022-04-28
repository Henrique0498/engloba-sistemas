import Head from 'next/head'
import { useRouter } from 'next/router'
import PageTemplate from 'templates/PageTemplate'

type titlesType = {
  [key: string]: string
}

const Slug = () => {
  const router = useRouter()
  const { slug } = router.query

  const title: titlesType = {
    operation: 'Operações',
    management: 'Gestão',
    finance: 'Financeiro',
    tool: 'Ferramentas',
    interaction: 'Interações',
    setting: 'Configurações'
  }

  if (typeof slug === 'string' && slug !== undefined) {
    return (
      <>
        <Head>
          <title>
            Engloba Sistemas - {title[slug] ?? 'Pagina não encontrada'}
          </title>
        </Head>
        <PageTemplate />
      </>
    )
  }

  return null
}

export default Slug
