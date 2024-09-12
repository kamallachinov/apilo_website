'use client'

import { localeNames, locales, usePathname, useRouter } from '@/i18n.config'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'

const localeIcons = {
  en: '/images/en-flag.svg',
  az: '/images/az-flag.svg',
}

export default function LocaleSwitcher({ locale }) {
  const pathname = usePathname()
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  const changeLocale = (newLocale) => {
    router.replace(pathname, { locale: newLocale })
    setIsOpen(false)
  }

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className="relative" ref={dropdownRef}>
      <button onClick={() => setIsOpen(!isOpen)} className="flex items-center space-x-2 rounded px-3 py-1">
        <Image src={localeIcons[locale]} alt={`${localeNames[locale]} flag`} width={20} height={15} />
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-2 rounded bg-white shadow-lg">
          {locales?.map((loc) => (
            <div
              key={loc}
              onClick={() => changeLocale(loc)}
              className="flex cursor-pointer items-center space-x-2 px-3 py-2 ">
              <Image src={localeIcons[loc]} alt={`${localeNames[loc]} flag`} width={20} height={15} />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
