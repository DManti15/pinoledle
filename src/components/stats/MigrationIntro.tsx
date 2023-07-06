import { LogoutIcon } from '@heroicons/react/outline'

import { MIGRATE_BUTTON_TEXT, MIGRATE_DESCRIPTION_TEXT } from '../../constants/strings'

type Props = {
  handleMigrateStatsButton: () => void
}

export const MigrationIntro = ({ handleMigrateStatsButton }: Props) => {
  return (
    <div className="mt-5 columns-2 flex gap-5 items-center justify-center text-center dark:text-white sm:mt-6">
      <div className="mt-3 text-xs short:overflow-hidden w-1/2">
        {MIGRATE_DESCRIPTION_TEXT}
      </div>
      <div className='w-1/2'>
        <button
          type="button"
          className="mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-blue-800 px-4 py-2 short:px-2 text-center text-base font-medium text-white shadow-sm hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2 sm:text-sm short:text-[0.85rem]"
          onClick={handleMigrateStatsButton}
        >
          <LogoutIcon className="mr-2 h-6 w-6 cursor-pointer dark:stroke-white" />
          {MIGRATE_BUTTON_TEXT}
        </button>
      </div>
    </div>
  )
}
