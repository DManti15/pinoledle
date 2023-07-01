import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Cómo se juega" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Tenés que adivinar la palabra del día. Después de cada intento, el color de las teclas
        cambiará para mostrarte que tan cerca estás de acertar la palabra.
      </p>

      <div className="mb-1 mt-4 flex justify-center">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="B"
          status="correct"
        />
        <Cell value="I" isCompleted={true} />
        <Cell value="C" isCompleted={true} />
        <Cell value="H" isCompleted={true} />
        <Cell value="A" isCompleted={true} />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        La palabra contiene la letra B y esta en el lugar correcto.
      </p>

      <div className="mb-1 mt-4 flex justify-center">
        <Cell value="T" isCompleted={true} />
        <Cell value="U" isCompleted={true} />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="A"
          status="present"
        />
        <Cell value="N" isCompleted={true} />
        <Cell value="I" isCompleted={true} />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        La palabra contiene la letra A pero esta en el lugar incorrecto.
      </p>

      <div className="mb-1 mt-4 flex justify-center">
        <Cell value="D" isCompleted={true} />
        <Cell value="E" isCompleted={true} />
        <Cell value="A" isCompleted={true} />
        <Cell isRevealing={true} isCompleted={true} value="C" status="absent" />
        <Cell value="A" isCompleted={true} />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        La palabra no contiene la letra C.
      </p>
      <p className="mt-5 text-sm text-gray-500 dark:text-gray-300">
        En Pinoledle, la palabra del día es una que proviene de la jerga de Nicaragua.
        Puede ser una palabra utilizada en distintas generaciones y/o lugares del país,
        incluyendo expresiones y apodos.
      </p>
      <p className="mt-5 text-sm italic text-gray-500 dark:text-gray-300">
        Esta es la version nica del famoso juego Wordle -{' '}
        <a
          href="https://github.com/DManti15/pinoledle"
          className="font-bold underline"
          target='_blank'
        >
          aquí tenés el código nica 
        </a>{' '}- y
        -{' '}
        <a
          href="https://github.com/cwackerfuss/react-wordle"
          className="font-bold underline"
          target='_blank'
        >
          aquí tenés el código original 
        </a>{' '}
      </p>
    </BaseModal>
  )
}
