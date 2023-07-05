import { CalendarIcon, ChartBarIcon, CogIcon, InformationCircleIcon } from '@heroicons/react/outline'

import { ENABLE_ARCHIVED_GAMES } from '../../constants/settings'
import { Logo } from '../logo/Logo'

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
    <div className="navbar bg-nica-blue dark:bg-inherit">
      <div className="navbar-content mx-auto h-40 max-w-lg px-3">
        <div className="sm:w-[4rem] flex w-[3.5rem]">
          <InformationCircleIcon
            className="h-7 w-7 cursor-pointer dark:stroke-white sm:h-8 sm:w-8"
            onClick={() => setIsInfoModalOpen(true)}
          />
          {ENABLE_ARCHIVED_GAMES && (
            <CalendarIcon
              className="ml-3 h-6 w-6 cursor-pointer dark:stroke-white"
              onClick={() => setIsDatePickerModalOpen(true)}
            />
          )}
        </div>
        <div className="">
          <h1 className="text-2xl font-bold dark:text-white sm:text-3xl">
            <span className="flex items-center">
              PIN
              <Logo className="h-[1.55rem] w-[1.55rem]" />
              LEDLE
            </span>
          </h1>
        </div>
        <div className="right-icons">
          <ChartBarIcon
            className="mr-1 h-7 w-7 cursor-pointer dark:stroke-white sm:mr-3 sm:h-8 sm:w-8"
            onClick={() => setIsStatsModalOpen(true)}
          />
          <CogIcon
            className="h-7 w-7 cursor-pointer dark:stroke-white sm:h-8 sm:w-8"
            onClick={() => setIsSettingsModalOpen(true)}
          />
        </div>
      </div>
      <hr></hr>
    </div>
  )
}
