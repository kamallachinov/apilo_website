import { createSharedPathnamesNavigation } from 'next-intl/navigation'

export const locales = ['en', 'az']

export const localeNames = {
  en: 'English',
  az: 'Azerbaijani',
}

export const { Link, usePathname, useRouter } = createSharedPathnamesNavigation({ locales })
