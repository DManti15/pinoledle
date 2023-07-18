import { MAX_CHALLENGES } from '../../constants/settings'
import { CompletedRow } from './CompletedRow'
import { CurrentRow } from './CurrentRow'
import { EmptyRow } from './EmptyRow'

type Props = {
  solution: string
  guesses: string[]
  currentGuess: string
  isRevealing?: boolean
  isGameWon: boolean
  currentRowClassName: string
}

export const Grid = ({
  solution,
  guesses,
  currentGuess,
  isRevealing,
  isGameWon,
  currentRowClassName,
}: Props) => {
  const empties =
    guesses.length < MAX_CHALLENGES - 1
      ? Array.from(Array(MAX_CHALLENGES - 1 - guesses.length))
      : []

  return (
    <div className="animate-fade-up animate-ease-in-out">
      {guesses.map((guess, i) => (
        <CompletedRow
          key={i}
          solution={solution}
          guess={guess}
          isRevealing={isRevealing && guesses.length - 1 === i}
          isGameWon={isGameWon}
        />
      ))}
      {guesses.length < MAX_CHALLENGES && (
        <CurrentRow guess={currentGuess} className={currentRowClassName} />
      )}
      {empties.map((_, i) => (
        <EmptyRow key={i} />
      ))}
    </div>
  )
}
