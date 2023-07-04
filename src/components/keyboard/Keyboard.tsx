import { BackspaceIcon } from '@heroicons/react/outline'
import { useEffect } from 'react'

import { ENTER_TEXT } from '../../constants/strings'
import { getStatuses } from '../../lib/statuses'
import { localeAwareUpperCase } from '../../lib/words'
import { Key } from './Key'

type Props = {
  onChar: (value: string) => void
  onDelete: () => void
  onEnter: () => void
  solution: string
  guesses: string[]
  isRevealing?: boolean
}

export const Keyboard = ({
  onChar,
  onDelete,
  onEnter,
  solution,
  guesses,
  isRevealing,
}: Props) => {
  const charStatuses = getStatuses(solution, guesses)

  const onClick = (value: string) => {
    if (value === 'ENTER') {
      onEnter()
    } else if (value === 'DELETE') {
      onDelete()
    } else {
      onChar(value)
    }
  }

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.code === 'Enter') {
        onEnter()
      } else if (e.code === 'Backspace') {
        onDelete()
      } else {
        const key = localeAwareUpperCase(e.key)
        // TODO: check this test if the range works with non-english letters
        if ((key.length === 1 && key >= 'A' && key <= 'Z') || (key.length === 1 && key === 'Ñ')) {
          onChar(key)
        }
      }
    }
    window.addEventListener('keyup', listener)
    return () => {
      window.removeEventListener('keyup', listener)
    }
  }, [onEnter, onDelete, onChar])

  return (
    <div className="bg-nica-blue dark:bg-inherit">
      <div className="mx-auto px-2 pt-6 pb-6 sm:px-6 md:max-w-7xl lg:px-8 short:pb-2 short:pt-2">
        <div className="mb-1 flex justify-center">
          {['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'].map((key) => (
            <Key
              value={key}
              key={key}
              onClick={onClick}
              status={charStatuses[key]}
              isRevealing={isRevealing}
            />
          ))}
        </div>
        <div className="mb-1 flex justify-center">
          {['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ñ'].map((key) => (
            <Key
              value={key}
              key={key}
              onClick={onClick}
              status={charStatuses[key]}
              isRevealing={isRevealing}
            />
          ))}
        </div>
        <div className="flex justify-center">
          <Key width={65.4} value="ENTER" onClick={onClick}>
            {ENTER_TEXT}
          </Key>
          {['Z', 'X', 'C', 'V', 'B', 'N', 'M'].map((key) => (
            <Key
              value={key}
              key={key}
              onClick={onClick}
              status={charStatuses[key]}
              isRevealing={isRevealing}
            />
          ))}
          <Key width={65.4} value="DELETE" onClick={onClick}>
            <BackspaceIcon className="h-8 w-8 stroke-[1.5px]"/>
          </Key>
        </div>
      </div>
    </div>
  )
}
