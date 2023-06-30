import { CalendarIcon, ChartBarIcon, CogIcon, InformationCircleIcon } from '@heroicons/react/outline'

import { ENABLE_ARCHIVED_GAMES } from '../../constants/settings'
import { GAME_TITLE } from '../../constants/strings'

type Props = {
  setIsInfoModalOpen: (value: boolean) => void
  setIsStatsModalOpen: (value: boolean) => void
  setIsDatePickerModalOpen: (value: boolean) => void
  setIsSettingsModalOpen: (value: boolean) => void
}

export const Navbar = ({
  setIsInfoModalOpen,
  setIsStatsModalOpen,
  setIsDatePickerModalOpen,
  setIsSettingsModalOpen,
}: Props) => {
  return (
    <div className="navbar bg-nica-blue">
      <div className="navbar-content px-3 h-40 max-w-lg mx-auto">
        <div className="flex w-[3.5rem] sm:w-[4rem]">
          <InformationCircleIcon
            className="h-7 w-7 sm:h-8 sm:w-8 cursor-pointer dark:stroke-white"
            onClick={() => setIsInfoModalOpen(true)}
          />
          {ENABLE_ARCHIVED_GAMES && (
            <CalendarIcon
              className="ml-3 h-6 w-6 cursor-pointer dark:stroke-white"
              onClick={() => setIsDatePickerModalOpen(true)}
            />
          )}
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold dark:text-white">{GAME_TITLE}</h1>
        <div className="right-icons">
          <ChartBarIcon
            className="mr-1 sm:mr-3 h-7 w-7 sm:h-8 sm:w-8 cursor-pointer dark:stroke-white"
            onClick={() => setIsStatsModalOpen(true)}
          />
          <CogIcon
            className="h-7 w-7 sm:h-8 sm:w-8 cursor-pointer dark:stroke-white"
            onClick={() => setIsSettingsModalOpen(true)}
          />
        </div>
      </div>
      <hr></hr>
    </div>
  )
}
