import { SaveIcon } from '@heroicons/react/outline'
import { useState } from 'react'

import { decrypt } from '../../lib/encryption'
import { saveGameStateToLocalStorage, saveStatsToLocalStorage } from '../../lib/localStorage'
import { MigrationStats } from '../modals/MigrateStatsModal'

export const ImmigratePanel = () => {
  const [isSaveButtonEnabled, setIsSaveButtonEnabled] = useState(false)
  const [codeError, setCodeError] = useState(false)

  const textareaClassNames = {
    valid: [ 'border-gray-500', 'dark:border-gray-300'],
    invalid: ['border-red-400', 'dark:border-red-500'],
  }
  const allClassNames = [
    ...textareaClassNames.valid,
    ...textareaClassNames.invalid,
  ]

  const handleImmigrationCodeChange = (event: any) => {
    if (event.target instanceof Element) {
      const textarea = event.target

      allClassNames.forEach((cn) => textarea.classList.remove(cn))

      setIsSaveButtonEnabled(false)

      const text = textarea.value

      try {
        const migrationStats = JSON.parse(decrypt(text) ?? '') as MigrationStats
        if (
          !migrationStats ||
          (!migrationStats.gameState && !migrationStats.statistics)
        ) {
          textareaClassNames.invalid.forEach((cn) => textarea.classList.add(cn))
          return
        }
        textareaClassNames.valid.forEach((cn) => textarea.classList.add(cn))
        setIsSaveButtonEnabled(true)
        setCodeError(false)
      } catch (error) {
        if (text === '') {
          setCodeError(false)
          
        } else {
          textareaClassNames.invalid.forEach((cn) => textarea.classList.add(cn))
          setCodeError(true)
        }
      }
    }
  }

  const handleSaveButton = () => {
    const textarea = document.getElementById(
      'immigration-code'
    ) as HTMLInputElement
    if (
      textarea &&
      window.confirm(
        'Estás seguro que querés sobreescribir tus estadisticas en este dispositivo? Está acción no se puede revertir.'
      )
    ) {
      var migrationStats = JSON.parse(
        decrypt(textarea.value) ?? ''
      ) as MigrationStats
      if (!migrationStats) return

      if (migrationStats.gameState) {
        saveGameStateToLocalStorage(true, migrationStats.gameState)
      }

      if (migrationStats.statistics) {
        saveStatsToLocalStorage(migrationStats.statistics)
      }

      alert('La página se volverá a cargar.')

      window.location.reload()
    }
  }

  return (
    <div className="text-sm text-gray-500 dark:text-gray-300">
      <label
        htmlFor="message"
        className="mb-2 block text-left text-sm font-medium text-gray-900 dark:text-gray-400"
      >
        Pegá tu código de transferencia:
      </label>
      <textarea
        onChange={(e) => handleImmigrationCodeChange(e)}
        id="immigration-code"
        rows={8}
        className="block w-full rounded-lg border border-gray-300 bg-gray-100 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
      ></textarea>
      {codeError && <span className="block text-red-500 dark:text-red-400 mt-2">Código de transferencia incorrecto prix</span>}
      <button
        disabled={!isSaveButtonEnabled}
        onClick={handleSaveButton}
        type="button"
        className="mt-2 inline-flex items-center justify-center rounded-md border border-transparent bg-blue-800 px-4 py-2 text-left text-base font-medium text-white shadow-sm hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2 disabled:border-gray-200 
          disabled:bg-white disabled:text-gray-900 disabled:focus:outline-none disabled:dark:border-gray-600 disabled:dark:bg-gray-800 disabled:dark:text-gray-400 sm:text-sm"
      >
        {isSaveButtonEnabled && (
          <SaveIcon className="mr-2 h-6 w-6 cursor-pointer dark:stroke-white" />
        )}
        Guardar
      </button>
    </div>
  )
}
