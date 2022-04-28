import {
  FcEngineering,
  FcBullish,
  FcInTransit,
  FcCurrencyExchange,
  FcRefresh,
  FcSupport,
  FcBusinessContact,
  FcCalendar,
  FcBookmark,
  FcOnlineSupport,
  FcSettings
} from 'react-icons/fc'

import { BsFillBellFill } from 'react-icons/bs'

import { ListType } from 'types/forms'

interface ListTal extends ListType {
  href: string
  alert?: boolean
}

export const NavigationList: ListType[] = [
  {
    href: '/operation',
    title: 'Operações',
    icon: <FcInTransit />
  },
  {
    href: '/management',
    title: 'Gestão',
    icon: <FcBullish />
  },
  {
    href: '/finance',
    title: 'Financeiro',
    icon: <FcCurrencyExchange />
  },
  {
    href: '/tool',
    title: 'Ferramentas',
    icon: <FcSupport />
  },
  {
    href: '/interaction',
    title: 'Interações',
    icon: <FcRefresh />
  },
  {
    href: '/setting',
    title: 'Configurações',
    icon: <FcEngineering />
  }
]

export const ListProfile: ListTal[] = [
  {
    href: '/profile',
    title: 'Perfil',
    icon: <FcBusinessContact />
  },
  {
    href: '/profile/settings',
    title: 'Configurações',
    icon: <FcSettings />
  }
]

export const TopBarListProfile: ListTal[] = [
  {
    title: 'Calendário',
    alert: false,
    href: '/calendar',
    icon: <FcCalendar />
  },
  {
    title: 'Anotações',
    alert: false,
    href: '/note',
    icon: <FcBookmark />
  },
  {
    title: 'Notificações',
    alert: true,
    href: '/notification',
    icon: <BsFillBellFill />
  },
  {
    title: 'Suporte',
    alert: false,
    href: '/support',
    icon: <FcOnlineSupport />
  }
]
