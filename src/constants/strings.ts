export const GAME_TITLE = process.env.REACT_APP_GAME_NAME!

export const WIN_MESSAGES = ['Barbarooooo!', 'Eso pinolero!', 'Le haces huevo prix!']
export const GAME_COPIED_MESSAGE = 'Juego copiado al portapapeles'
export const NOT_ENOUGH_LETTERS_MESSAGE = 'Te hacen falta letras mae'
export const WORD_NOT_FOUND_MESSAGE = 'La palabra no existe prix'
export const HARD_MODE_ALERT_MESSAGE =
  'El Modo Dificil solo puede ser activado al inicio!'
export const HARD_MODE_DESCRIPTION =
  'Cualquier pista revelada debe de ser usada en intentos subsequentes'
export const HIGH_CONTRAST_MODE_DESCRIPTION = 'Para una visión del color mejorada'
export const CORRECT_WORD_MESSAGE = (solution: string) =>
  `La palabra era ${solution}, prix`
export const WRONG_SPOT_MESSAGE = (guess: string, position: number) =>
  `Tenés que usar ${guess} en la posición ${position}`
export const NOT_CONTAINED_MESSAGE = (letter: string) =>
  `La palabra debe contener ${letter}`
export const ENTER_TEXT = 'Enter'
export const DELETE_TEXT = ''
export const STATISTICS_TITLE = 'Estadisticas'
export const GUESS_DISTRIBUTION_TEXT = 'Distribución de aciertos'
export const NEW_WORD_TEXT = 'Próximo pinoledle en'
export const SHARE_TEXT = 'Compartir'
export const SHARE_FAILURE_TEXT =
  'No se pudo compartir los resultados. Está función solo esta disponible en contextos seguros (HTTPS), en algunos o en todos los navegadores compatibles.'
export const MIGRATE_BUTTON_TEXT = 'Transferir'
export const MIGRATE_DESCRIPTION_TEXT =
  'Click aqui para transferir tus estadisticas a otro dispositivo.'
export const TOTAL_TRIES_TEXT = 'Intentos totales'
export const SUCCESS_RATE_TEXT = 'Tasa de aciertos'
export const CURRENT_STREAK_TEXT = 'Racha actual'
export const BEST_STREAK_TEXT = 'Mejor racha'
export const DISCOURAGE_INAPP_BROWSER_TEXT =
  "Estás usando un navegador integrado y podes experimentar problemas compartiendo o guardando tus resultados. Te animamos a usar el navegador predeterminado de tu dispositivo."

export const DATEPICKER_TITLE = 'Elegí una fecha anterior'
export const DATEPICKER_CHOOSE_TEXT = 'Elegí'
export const DATEPICKER_TODAY_TEXT = 'hoy'
export const ARCHIVE_GAMEDATE_TEXT = 'Fecha de juego'
