type WordList = {
  word: string
  definition: string
  example: string
}

const WORDLIST: WordList[] = [
  {
    word: 'nance',
    definition: 'Fruto color amarillo, pequeño, de forma esférica.',
    example: '"Queres nance?" "Nel perro, me da asco esa onda"',
  },
  {
    word: 'niste',
    definition: 'Del nahualt nextli: ceniza. De color ceniza.',
    example: '"Aquel mae tiene la piel color niste"',
  },
  {
    word: 'siete',
    definition: 'Sinónimo de ano.',
    example: '"Esta tuani esa pelicula" "Te pica el siete a vos"',
  },
  {
    word: 'zocar',
    definition: 'Forma alternativa de escribir "socar"',
    example: '"Pudiste zocar la bolsa?" "Si perro, no te chivies"',
  },
  {
    word: 'guate',
    definition:
      'Maíz destinado a forraje, que se siembra muy tupido y por ello no da fruto. ',
    example: '"Sembramos bastante guate esta temporada"',
  },
  {
    word: 'carro',
    definition: 'Sinónimo de automóvil',
    example: '"Ese carro iba a toda verga" ',
  },
  {
    word: 'pamba',
    definition: 'Sinónimo de mentira, engaño.',
    example: '"Ayer gane en el casino perro" "Eso es pura pamba dog"',
  },
  {
    word: 'salar',
    definition:
      'Llevar mala suerte a algún lugar o contagiar de ella a otra persona.',
    example: '"Vas a ganar mae" "No me intentes salar loco"',
  },
  {
    word: 'reata',
    definition: 'Forma alternativa de escribir "riata"',
    example:
      '"Vos te pones hasta la reata cuando tapineas?" "Nel, yo tengo aguante"',
  },
  {
    word: 'manco',
    definition: 'Que le hace falta un brazo o una mano.',
    example: '"Mi tio quedo manco despues de un accidente"',
  },
  {
    word: 'guero',
    definition: 'Huero, podrido. Rubio, de color amarillo.',
    example: '"Holes a guero loco"',
  },
  {
    word: 'turca',
    definition: 'Sinónimo de pene.',
    example: '"Yyyyy, no sabes jugar " "Mamame la turca mierda"',
  },
  {
    word: 'volar',
    definition: 'Sinónimo de matar.',
    example: '"Se lo van a volar por delincuente"',
  },
  {
    word: 'hueco',
    definition: 'Sinónimo de agujero, hoyo.',
    example: '"Casi me caigo en el hueco no jodas"',
  },
  {
    word: 'galgo',
    definition: 'Desaforadamente codicioso. Glotón.',
    example: '"Vos solo comer sos, que galgo"',
  },
  {
    word: 'chuzo',
    definition: 'Sinónimo de cuchillo o punzón ',
    example: '"Tene cuidado dog, ese mae camina chuzo"',
  },
  {
    word: 'zanja',
    definition: 'Que se le ve la division de las nalgas',
    example: '"Ya viste a esa mae?" "Simon, se le mira la zanja no jodas"',
  },
  {
    word: 'plata',
    definition: 'Sinónimo de dinero.',
    example: '"Andas plata dog?" "Mierda, se me olvido en la casa"',
  },
  {
    word: 'omiso',
    definition: 'Culpable de omisión',
    example: '"Ese hijueputa hizo caso omiso durante el asesinato"',
  },
  {
    word: 'chiva',
    definition:
      'Cuando algo está peligroso o complicado, cuando a uno le da miedo.',
    example: '"Ese barrio es chiva de noche loco"',
  },
  {
    word: 'necio',
    definition: 'Persona que molesta.',
    example: '"Que chavalo mas necio este"',
  },
  {
    word: 'tamal',
    definition: 'Sinónimo de ladrón. Alimento hecho de maíz.',
    example: '"Voy a ir a la casa de Carlos" "Ponete buzo, ese mae es tamal"',
  },
  {
    word: 'ñervo',
    definition: 'Término usado para referirse al talon de aquiles',
    example: '"Me jodi el ñervo jugando futbol"',
  },
  {
    word: 'merol',
    definition: 'Sinónimo de alimento, comida.',
    example: '"Mi mama hizo bastante merol en el almuerzo"',
  },
  {
    word: 'guape',
    definition: 'Sinónimo de mellizo, gemelo.',
    example: '"Maria es la guape de Fernanda"',
  },
  {
    word: 'canoa',
    definition: 'Cajon alargado',
    example: '"Esa canoa es muy grande"',
  },
  {
    word: 'bemba',
    definition: 'Sinónimo de boca',
    example: '"Te voy a reventar la bemba hijueputa"',
  },
  {
    word: 'riata',
    definition: 'Estado de borrachera.',
    example: '"Hoy nos ponemos hasta la riata dog" "Anoooon"',
  },
  {
    word: 'cuete',
    definition: 'Cohete (pirotecnia). Entre gente del pueblo, pistola. ',
    example: '"En diciembre siempre tiran cuetes"',
  },
  {
    word: 'upear',
    definition: 'Ayudarle a uno a subir. (Viene de upa).',
    example: '"Anda a upear a tu papa para que revise el techo"',
  },
  {
    word: 'bicho',
    definition: 'Organo sexual femenino (vagina)',
    example: '"Esa mae esta con las piernas abierta y se le mira el bicho"',
  },
  {
    word: 'pozol',
    definition: 'Del nahualt pozolli. Bebida densa, a base de cacao y maíz. ',
    example:
      '"Que rico esta el pozol mama" "Verdad hijo? El pozol es mi especialidad"',
  },
  {
    word: 'compa',
    definition: 'Abreviatura de compadre o de compañero.',
    example: '"Como me le va a mi compa?" "Tuani y vos loco?"',
  },
  {
    word: 'carpa',
    definition: 'Voz del idioma quichua: significa toldo, enramada, cobertizo.',
    example: '"Se nos va a caer la carpa con esta lluvia mae"',
  },
  {
    word: 'bicha',
    definition: 'Sinónimo de cerveza',
    example: '"Oe mae, bebamonos una bicha" "Sobre perro"',
  },
  {
    word: 'chela',
    definition: 'Mujer rubia o blanca',
    example: '"Mira que bonita esa chela perro" "uhhhh simon loco"',
  },
  {
    word: 'bache',
    definition: 'Sinónimo de fiesta',
    example: '"Me dijeron que habra un bache hoy" ',
  },
  {
    word: 'zepol',
    definition: 'Guardia de seguridad, cuidador',
    example: '"El zepol me dijo que no puedo pasar"',
  },
  {
    word: 'vuelo',
    definition: 'Sinónimo de mandado, favor.',
    example: '"Oe prix, me haces un favor?" "Decimelo dog"',
  },
  {
    word: 'miona',
    definition: 'Alguien que orina con frecuencia.',
    example: '"Esa niña salio bien miona"',
  },
  {
    word: 'verga',
    definition: 'Sinónimo de pene.',
    example: '"Esa mae solo es mamar verga" "Asi dicen no jodas"',
  },
  {
    word: 'techo',
    definition: 'Sinónimo de gorra',
    example: '"Oele loco, se te olvido el techo" "Gracias prix"',
  },
  {
    word: 'cajon',
    definition:
      'Caja mortuoria. Medida de capacidad para cereales. Ser de cajon, es ser cosa acostumbrada.',
    example: '"Eso es de cajon broder"',
  },
  {
    word: 'bolas',
    definition: 'Sinónimo de testículos',
    example: '"Esa mae me dio una patada en las bolas"',
  },
  {
    word: 'paila',
    definition:
      'Machete de hoja ancha para cortar la caña de azúcar. Perol grande de hierro semiesférico.',
    example: '"Esa paila de comida se mira enorme"',
  },
  {
    word: 'tapas',
    definition: 'Sinónimo de mentira, boca.',
    example: '"Mañana te pago loco" "Mmm, solo tapas sos"',
  },
  {
    word: 'comal',
    definition:
      'Del azteca comalli. Disco delgado de barro, cóncavo en el cual se hacen tortillas y se tuestan cereales, cacao, café, maíz y otros granos.',
    example: '"Hijo, traeme el comal que voy a hacer tortillas" "Ya voy ma"',
  },
  {
    word: 'cuero',
    definition: 'Mujer virgen',
    example: '"La Ana nunca ha estado con un hombre, esta cuero"',
  },
  {
    word: 'chemi',
    definition: 'Sinómimo de camisa',
    example: '"Te cuadro la chemi que te regale amor?" "Si mi cielo"',
  },
  {
    word: 'luyir',
    definition: 'Ludir, frotar, restregar. ',
    example: '"Voy a tener que luyir la ropa bastante para que quede limpia"',
  },
  {
    word: 'pisar',
    definition: 'Tener relaciones sexuales.',
    example: '"Yo creo que ese mae te quiere pisar" "Crees vos?"',
  },
  {
    word: 'tombo',
    definition: 'Agente policial.',
    example: '"Y que le paso a Juan?" "Lo mato un tombo por andar de tamal"',
  },
  {
    word: 'paste',
    definition: 'Esponja vegetal alargada, cilíndrica y fibrosa para baño.',
    example: '"Hijo, anda compra un paste al mercado" "Bueno mama"',
  },
  {
    word: 'puyar',
    definition: 'Pinchar, estimular, incitar. Herir con arma blanca.',
    example: '"Deja de andar puyando al mae a que estar saliendo"',
  },
  {
    word: 'rejon',
    definition:
      'Poste grueso de dos metros, que sirve con otros muchos para cercar los corrales y patos de las fincas rústicas.',
    example: '"Hay que buscar un buen rejon para la finca"',
  },
  {
    word: 'zambo',
    definition: 'Individuo descendiente de india y negro o viceversa.',
    example: '"Ese mae es zambo por descendencia familiar"',
  },
  {
    word: 'pasmo',
    definition: 'Dolor de estómago',
    example: '"Ese nacatamal me dio un gran pasmo no jodas"',
  },
  {
    word: 'simon',
    definition: 'Sinónimo de si, afirmacion.',
    example: '"Oe, has ido al Tisey?" "Simon"',
  },
  {
    word: 'vicho',
    definition: 'Forma alternativa de decir "bicho".',
    example: '"Y le mamaste el vicho?" "Se freseo la mae"',
  },
  {
    word: 'echar',
    definition:
      'Acostarse en cualquier lugar (animales). Sinónimo de meter en ciertas situaciones. ',
    example: '"Echame bastante azucar al café querido" "Si mi amor"',
  },
  {
    word: 'jaiba',
    definition: 'Sinónimo de cabeza',
    example: '"Te voy a dar en la jaiba si no me haces caso"',
  },
  {
    word: 'chico',
    definition: 'Diminutivo vulgar de Francisco.',
    example: '"Chico dijo que vendria al bacanal"',
  },
  {
    word: 'putal',
    definition: 'Sinónimo de prostíbulo.',
    example: '"Vamos al putal perro" "Sobreeee"',
  },
  {
    word: 'careo',
    definition: 'Prueba de la capacidad de combate de dos gallos de pelea',
    example: '"Va a ser un desturque el careo de hoy"',
  },
  {
    word: 'mocho',
    definition: 'Amputado. Que le falta varias o una de sus partes.',
    example: '"Durante la revolucion, mi papa quedo mocho"',
  },
  {
    word: 'tambo',
    definition: 'Vocablo quichua: tambu. Piso de tablas.',
    example: '"A esta casa le hace falta un tambo"',
  },
  {
    word: 'cuate',
    definition: 'Sinónimo de amigo',
    example: '"A ese mae lo considero mi cuate"',
  },
  {
    word: 'pacho',
    definition: 'Sinónimo de flaco, aplastado',
    example: '"Yo toda la vida he sido pacho"',
  },
  {
    word: 'tecle',
    definition: 'Anglicismo, tackie, polea.',
    example: '"Agarrate bien del tecle loco que te podes caer"',
  },
  {
    word: 'idiay',
    definition: 'Forma alternativa de decir ideay.',
    example: '"Que notas cara de turca" "Idiey cerote, que te pasa?"',
  },
  {
    word: 'cheto',
    definition: 'Término para referirse al trasero de una mujer',
    example: '"Clase cheto tiene esa jaña" "Caele pues prix"',
  },
  {
    word: 'titil',
    definition: 'Molleja de las aves.',
    example: '"A cuento el titil doña?" "50 cordobas hijo"',
  },
  {
    word: 'vaina',
    definition: 'Molestia, chasco, pérdida, contratiempo.',
    example: '"Yo no quiero hacer esa vaina"',
  },
  {
    word: 'mosca',
    definition:
      'Persona de carácter inocente o débil que no hace daño a nadie.',
    example:
      '"Le tengo miedo a Jose" "Ese mae es mosca, no te va a hacer nada"',
  },
  {
    word: 'barra',
    definition: 'Término para referirse a un grupo de aficionados.',
    example: '"La barra del partido de hoy es un desturque"',
  },
  {
    word: 'yucal',
    definition: 'Plantación de yuca.',
    example: '"Ojala mi yucal de bastante cosecha esta temporada"',
  },
  {
    word: 'gomas',
    definition: 'Resaca fuerte',
    example: '"Ese mae quedo de gomas despues del bacanal de ayer"',
  },
  {
    word: 'pinta',
    definition: 'Sinónimo de pandillero',
    example: '"No confies en ese mae, es pinta"',
  },
  {
    word: 'ronda',
    definition:
      'Espacio limpio de maleza en la longitud de las cercas para protegerlas del fuego.',
    example: '"Hay que hacer una ronda para evitar un incendio"',
  },
  {
    word: 'pepas',
    definition: 'Sinónimo de ojos',
    example: '"Ese mae tiene las pepas grandes"',
  },
  {
    word: 'cumba',
    definition: 'Taza. Jícara grande o calabaza de boca ancha.',
    example: '"Esa es una cumba llena de pinolillo"',
  },
  {
    word: 'meada',
    definition: 'Sinónimo de orinada',
    example: '"La cama amanecio meada porque el niño se orino"',
  },
  {
    word: 'solar',
    definition: 'Patio trasero de la casa.',
    example: '"El perro se fue a cagar al solar"',
  },
  {
    word: 'perro',
    definition: 'Termino dado a un amigo cercano',
    example: '"Feliz cumpleaños perro!" "Gracias mi broder"',
  },
  {
    word: 'zafar',
    definition: 'Excluir, poner a salvo.',
    example: '"Hay que zafar a ese animal antes de que lo maten"',
  },
  {
    word: 'sonto',
    definition: 'Dícese de la persona a la que le falta una oreja',
    example: '"Vamos a la finca del sonto Julian"',
  },
  {
    word: 'suche',
    definition: 'Empleado de última categoría, subalterno.',
    example: '"Ese mae es el administrador" "Que va, apenas es un suche"',
  },
  {
    word: 'golpe',
    definition: 'Cada una de las tres comidas principales del día.',
    example: '"Es hora del golpe, creo que ire a comer"',
  },
  {
    word: 'sobre',
    definition:
      'Término para expresar concordancia. Tambien se usa de forma ironica',
    example: '"Yo compro el pase y vos el guaro" "Sobre"',
  },
  {
    word: 'cacho',
    definition: 'Voz quichua que significa cuerno.',
    example: '"Ese toro tiene un cacho mas grande que el otro"',
  },
  {
    word: 'cholo',
    definition: 'Sinónimo de flojo',
    example: '"Ese pantalon te queda cholo perro" "A vos te vale verga"',
  },
  {
    word: 'polla',
    definition:
      'Cantidad de dinero que se apuesta en un juego de cartas. Organo reproductor masculino.',
    example: '"Ahi va mi polla" "Lo vas a perder todo no jodas"',
  },
  {
    word: 'guelo',
    definition: 'Forma alternativa de decir huelo',
    example: '"La gente dice que guelo bien"',
  },
  {
    word: 'lleca',
    definition: 'Inversión silábica de calle',
    example: '"La lleca esta muy angosta para pasar"',
  },
  {
    word: 'chivo',
    definition: 'El querido o amante de la mujer casada. ',
    example: '"Dicen que esa mae tiene un chivo"',
  },
  {
    word: 'saino',
    definition: 'Mal olor del sobaco.',
    example: '"A la puta, clase olor a saino tenes"',
  },
  {
    word: 'congo',
    definition: 'Mono aullador.',
    example: '"Ya viste el congo que esta en ese palo?" "Simon loco"',
  },
  {
    word: 'monte',
    definition: 'Maleza; mala hierba',
    example: '"Que turcazo de monte hay en la montaña"',
  },
  {
    word: 'cegua',
    definition:
      'Del náhualt cihuatl: mujer; nahualli: bruja. Creencia popular de una bruja transformada en espanto.',
    example: '"Si te dormis tarde te va a salir la cegua"',
  },
  {
    word: 'pijul',
    definition: 'Pájaro de color negro que también le llamamos Tinco.',
    example: '"Ese pijul siempre se aparece por las mañanas"',
  },
  {
    word: 'cagar',
    definition: 'Sinónimo de defecar. Cometer un error',
    example: '"Dejame hacerlo a mi que vos la vas a cagar"',
  },
  {
    word: 'paisa',
    definition: 'Paisano, compatriota, coterráneo.',
    example: '"Que notas paisa! que sorpresa encontrarte" "Que onda paisa"',
  },
  {
    word: 'caite',
    definition:
      'Del náhualt cactli: zapato. Especie de sandalia de cuero curtido',
    example: '"Se me perdio un caite no jds!"',
  },
  {
    word: 'cuita',
    definition: 'Excremento de las aves.',
    example: '"El techo siempre esta lleno de cuita"',
  },
  {
    word: 'medio',
    definition: 'Medida para granos; recipiente de esta medida.',
    example: '"Me da un medio de frijoles por favor"',
  },
  {
    word: 'lacra',
    definition:
      'Persona que es un ladrón, un delincuente común, también se les llama tamal',
    example: '"Ese mae es un lacra, me cobro muy caro"',
  },
  {
    word: 'bruto',
    definition: 'Adjetivo para referirse a una persona considerada estupida',
    example: '"Loco, vos si que sos bruto"',
  },
  {
    word: 'raton',
    definition:
      'Músculo, especialmente el de los brazos, muslos y pantorrillas. ',
    example: '"Oe dog, tenes bastante raton" "Simon, es que voy al gym"',
  },
  {
    word: 'chaya',
    definition: 'Especie de quelite espinoso. ',
    example: '"Hoy vamos a comer chaya hijo" "Aaaay no"',
  },
  {
    word: 'cuape',
    definition: 'Sinónimo de gemelo o mellizo',
    example: '"Dicen que Martha tuvo cuape" "Asi es, son bien lindos"',
  },
  {
    word: 'china',
    definition:
      'Voz quichua: aya, niñera, sirvienta encargada de cuidar a los niños.',
    example: '"La china esta cuidando a los niños"',
  },
  {
    word: 'jaral',
    definition: 'Lugar de matorrales espinosos.',
    example: '"No te vayas a meter al jaral que te vas a espinar"',
  },
  {
    word: 'ganso',
    definition: 'Sinónimo de pene',
    example: '"Deja de jalarte el ganso loco" ',
  },
  {
    word: 'perol',
    definition: 'Sinónimo de oya',
    example: '"Pasame el perol para cocer los frijoles"',
  },
  {
    word: 'valer',
    definition: 'No darle importancia a algo. ',
    example: '"Ese mae va a perder plata" "Mmm, a el le va a valer"',
  },
  {
    word: 'guaca',
    definition: 'Conjunto de objetos escondidos o guardados.',
    example: '"Dicen que hay una guaca cerca del palo "',
  },
  {
    word: 'dundo',
    definition: 'Alguien distraído, torpe, tonto.',
    example: '"Que dundo sos, tiraste la comida"',
  },
  {
    word: 'rumbo',
    definition: 'Término para referirse al trabajo diario. ',
    example: '"Y para donde vas vos?" "Ha hacer el rumbo"',
  },
  {
    word: 'pacon',
    definition: 'Árbol sapindáceo',
    example: '"El pacon crecio desde el año pasado"',
  },
  {
    word: 'ijole',
    definition: 'Expresion de asombro, pena.',
    example: '"Ayer casi matan a mi mama no jodas" "Ijole, y esta bien?"',
  },
  {
    word: 'chele',
    definition: 'Hombre rubio o blanco',
    example: '"Oe chele, a cuanto tenes el guaro?" "50 la botella prix"',
  },
  {
    word: 'flota',
    definition: 'Sinónimo de abundancia; gran cantidad de algo',
    example: '"Iremos en flota a la fiesta"',
  },
  {
    word: 'cleta',
    definition: 'Abreviatura de bicicleta',
    example: '"Esta salvaje tu cleta chatel" "Gracias perro"',
  },
  {
    word: 'legal',
    definition: 'Se dice de la persona honrada, íntegra.',
    example: '"Ese prix es muy legal"',
  },
  {
    word: 'pacha',
    definition: 'Biberón. Por extensión, pechos de la mujer.',
    example: '"Esa mae tiene buenas pachas verdad?" "Anooon loco"',
  },
  {
    word: 'choco',
    definition: 'Del nahualt xoco, que significa agrio',
    example: '"Ese fresco que hizo mi mama esta bien choco"',
  },
  {
    word: 'carga',
    definition: 'Vulgarmente es unidad de peso.',
    example: '"Ese saco pesa una carga"',
  },
  {
    word: 'ayote',
    definition:
      'Vegetal parecido a la calabaza producido por una planta de la familia cucurbitáceas',
    example: '"Estaba muy rico el ayote"',
  },
  {
    word: 'playo',
    definition:
      'Homosexual, si se refiere a un hombre, y prostituta si se trata de una mujer.',
    example: '"Me parece guapo ese mae" "Ideay dog, sos playo?"',
  },
  {
    word: 'ñeque',
    definition: 'Sinónimo de fuerte, vigorozo',
    example: '"Ese mae esta bien ñeque"',
  },
  {
    word: 'abajo',
    definition:
      '(referencia cardinal) Lado sur de un lugar; al rumbo opuesto le llamamos arriba, o sea el norte.',
    example: '"Donde queda la pulperia?" "Del palo de tamarindo 3c abajo"',
  },
  {
    word: 'coton',
    definition: 'Camisón de dormir.',
    example: '"Anda ponete el coton y te dormis" "Si mama"',
  },
  {
    word: 'pisto',
    definition: 'Sinónimo de dinero.',
    example: '"No tengo pisto desde aquel bacanal"',
  },
  {
    word: 'elote',
    definition: 'Del nahualt elotl: mazorca de maíz.',
    example: '"A cuanto vende el elote doña?" "10 pesos corazon"',
  },
  {
    word: 'piche',
    definition: 'Ave palmípeda acuática.',
    example: '"Ese piche vuela bien alto"',
  },
  {
    word: 'furby',
    definition: 'Sinónimo de orejón',
    example: '"Ese mae es bien furby" "Simon, parece Dumbo"',
  },
  {
    word: 'chepe',
    definition: 'Diminutivo de José.',
    example: '"Oe chepe, vamos a tapinear" "Rifooooo"',
  },
  {
    word: 'balin',
    definition: 'Sinónimo de loco',
    example: '"Ese mae es balin"',
  },
  {
    word: 'moler',
    definition: 'Tener relaciones sexuales.',
    example: '"Hoy voy a moler con mi jaña" "No me des envidia hijueputa"',
  },
  {
    word: 'vareo',
    definition: 'Acción de varear el fríjol para separar el grano.',
    example: '"Mi mama es muy buena haciendo el vareo"',
  },
  {
    word: 'guaro',
    definition: 'Bebida alcohólica, en especial aguardiente.',
    example: '"Trajiste el guaro?" "Simon, hoy nos ponemos hasta el culoooo"',
  },
  {
    word: 'mamon',
    definition: 'Árbol y fruto del mismo; El que mucho mama (Homosexual).',
    example: '"Ese palo de mamon tiene bastante fruto"',
  },
  {
    word: 'socar',
    definition: 'Atar, apretar, agarrar.',
    example: '"Tenes que socar el saco bien"',
  },
  {
    word: 'penca',
    definition: 'Racimo de plátanos.',
    example: '"Esta cara la penca"',
  },
  {
    word: 'chepa',
    definition: 'Diminutivo familiar de Josefa, es más usual decir Chepita.',
    example: '"A mi prima Josefa le dicen chepa"',
  },
  {
    word: 'tomar',
    definition: 'Beber licor, emborracharse.',
    example: '"Para tu cumpleaños vamos a tomar" "Simooon"',
  },
  {
    word: 'farra',
    definition: 'Sinónimo de borrachera',
    example: '"La farra se pone buena en semana santa"',
  },
  {
    word: 'pique',
    definition: 'Camino angosto, hecho rápidamente en el monte.',
    example: '"Tuvimos que hacer este pique para poder llegar al cafetal"',
  },
  {
    word: 'armar',
    definition: 'Acordar un noviazgo',
    example: '"¿Te quieres armar conmigo?"',
  },
  {
    word: 'chapa',
    definition:
      'Sinónimo de arete. También a las cerraduras de las puertas. Dentadura postiza.',
    example:
      '"Se me perdió una chapa (aretes). Se atascó la chapa de la puerta. Se le cayó la chapa (dentadura)"',
  },
  {
    word: 'sable',
    definition: 'Término para referirse al pene',
    example: '"Vos solo cuentos sos" "Mamame el sable hijueputa"',
  },
  {
    word: 'gofio',
    definition:
      'Dulce típico hecho a base de pasta de pinol con miel de raspadura',
    example: '"Ojala den bastante gofio en la purisima"',
  },
  {
    word: 'coger',
    definition: 'Tener sexo.',
    example: '"Me quiero coger a esa jaña" "Ufff, la tenes dificil dog"',
  },
  {
    word: 'tiste',
    definition: 'Bebida hecha de maíz y cacao. Persona muerta.',
    example: '"Ese mae quedo tiste despues de la turqueada que le cayo"',
  },
  {
    word: 'chopo',
    definition: 'Un arma de fuego, especificamente una escopeta',
    example: '"La pesca camina con puro chopo ultimamente"',
  },
  {
    word: 'ideay',
    definition:
      '(y de ahí): ¡y eso! Se utiliza comúnmente en expresiones de extrañez, protesta o reclamo. ',
    example: '"Ideay? no me invitaron al bacanal cerotes"',
  },
  {
    word: 'ocote',
    definition: 'Del azteca teocotl. Pino.',
    example: '"Bajo el ocote dejo el serote"',
  },
  {
    word: 'rigio',
    definition: 'Deseo urgente de hacer algo o de practicar alguna actividad.',
    example: '"Tengo rigio, juguemos futbol" "Dale pues"',
  },
  {
    word: 'cañon',
    definition: 'Sinónimo de erecto',
    example: '"Ese mae siempre anda cañon"',
  },
  {
    word: 'taspo',
    definition: 'Lugar u objeto con poca profundidad.',
    example: '"Esa parte del lago es taspo"',
  },
  {
    word: 'deaca',
    definition: 'Diminutivo de deacachimba; genial, buenisimo',
    example: '"El nuevo FIFA esta deaca dog" "Simon loco"',
  },
  {
    word: 'trago',
    definition: 'Porción de licor.',
    example: '"Oe hijueputa, dame un trago"',
  },
  {
    word: 'penco',
    definition: 'Referido a caballería, con poco brío, lenta.',
    example: '"Ese caballo es bien penco"',
  },
  {
    word: 'choña',
    definition: 'Significa de balde, a costa ajena, de gorra, regalado/gratis.',
    example: '"Ese acuerdo te salio de choña no jds"',
  },
  {
    word: 'ficha',
    definition: 'Persona que vive engañando y timando a los demás.',
    example: '"Tene cuidado que ese mae es ficha"',
  },
  {
    word: 'picha',
    definition: 'Órgano sexual del hombre.',
    example: '"Esa mae hizo que se me parara la picha"',
  },
  {
    word: 'jalar',
    definition: 'Estar de novios.',
    example: '"Oe, vas a jalar con esa jaña?" "Ojala dog"',
  },
  {
    word: 'chile',
    definition: 'Anécdota picaresca. Chiste.',
    example:
      '"Como se despiden los quimicos? Acido un placer" "Que chile mas malo dog"',
  },
  {
    word: 'pegar',
    definition:
      'Ponerle los cuernos a alguien. Tener sexo con una persona que no es o tu novio/a.',
    example: '"Tu jaña te la va a pegar si no le pones mente"',
  },
  {
    word: 'olote',
    definition: 'Del nahualt ololtic. Corazón de la mazorca.',
    example: '"Esta mazorca esta podrida hasta el olote"',
  },
  {
    word: 'chote',
    definition: 'Flor en botón.',
    example: '"Aquel chote ha crecido bastante"',
  },
  {
    word: 'lempo',
    definition: 'Referido a persona, pálida.',
    example: '"Ese mae se mira bien lempo"',
  },
  {
    word: 'usina',
    definition: 'Planta industrial importante. Central eléctrica.',
    example: '"Estamos sin luz no jodas" "Si, se fue la energia en la usina"',
  },
  {
    word: 'chema',
    definition: 'Diminutivo familiar de José María.',
    example: '"A mi papa le dicen chema"',
  },
  {
    word: 'chafa',
    definition: 'Algo de mala calidad. Mal hecho.',
    example: '"Ese celular que compre esta chafa no fregues"',
  },
  {
    word: 'bizco',
    definition: 'Adjetivo para referirse a una persona con estrabismo',
    example: '"Oe dog, ese mae esta bizco" "Simon no jodas"',
  },
  {
    word: 'tibio',
    definition: 'Sinónimo de colérico, enojado.',
    example: '"Ideay, andas tibio?" "Dejame hijueputa"',
  },
  {
    word: 'panga',
    definition: 'Pequeña embarcación con uno o dos motores.',
    example: '"Oe dog, nos fuimos en panga?" "Fuimonos pues"',
  },
  {
    word: 'pinga',
    definition: 'El miembro viril masculino',
    example: '"Deja de comer pinga perro" "Callate malparido"',
  },
  {
    word: 'pegue',
    definition: 'Sinónimo de trabajo.',
    example: '"Oe perro, conseguiste pegue?" "Nel mae, estoy desesperado"',
  },
  {
    word: 'sardo',
    definition: 'Dicho del ganado vacuno de color aplomado oscuro.',
    example: '"El tiene un sardo entre su ganado"',
  },
  {
    word: 'misio',
    definition: 'Persona que no tiene dinero o se ha quedado sin el.',
    example:
      '"Este maje anda misio, no tiene ni para un jocote partido por la mitad"',
  },
  {
    word: 'pucho',
    definition: 'Resto, residuo, pequeña cantidad sobrante de alguna cosa.',
    example: '"Todavia queda un pucho de frijoles mae" "Damelo pues"',
  },
  {
    word: 'manta',
    definition: 'Tela larga y ordinaria de algodón.',
    example:
      '"Cuanto valdra una manta en el oriental?" "No creo que esten caras"',
  },
  {
    word: 'guaba',
    definition:
      'Árbol que produce vainas con semillas cubiertas de una pulpa blanca y dulce comestible.',
    example: '"Ese arbol de guaba ha crecido bastante"',
  },
  {
    word: 'tuani',
    definition: 'Bonito, bueno, cool. Se dice que viene del inglés "too nice" ',
    example: '"Que tuani la casa que te conseguiste loco"',
  },
  {
    word: 'hueva',
    definition: 'Sinónimo de pereza',
    example: '"Vamos a hacer ejercicio loco?" "Nel, me da hueva ir"',
  },
  {
    word: 'choto',
    definition: 'Algo de color naranja intenso',
    example: '"Ese zorro se mira bien choto"',
  },
  {
    word: 'tunco',
    definition: 'Manco, cojo, lisiado.',
    example: '"A ese mae un loco lo dejo tunco"',
  },
  {
    word: 'halar',
    definition: 'Tirar hacia sí de una cosa.',
    example: '"Tenemos que halar el carro para sacarlo del fango"',
  },
  {
    word: 'venta',
    definition: 'Tienda pequeña de productos de primera necesidad.',
    example: '"Mijo, anda compra cajetas a la venta" "Bueno mama"',
  },
  {
    word: 'chata',
    definition: 'Cierta clase de garrapata. Persona de rostro aplanado.',
    example: '"Que onda cara chata" "Ideay cerote? que te pasa?"',
  },
  {
    word: 'leche',
    definition: 'Tener buena suerte.',
    example: '"Perro, me gane la loteria!" "No te creo, clase leche loco"',
  },
  {
    word: 'largo',
    definition: 'Sinónimo de lejos. ',
    example: '"Vamos a San Juan?" "Queda muy largo no jodas, que hueva"',
  },
  {
    word: 'negra',
    definition: 'Sinónimo de no. Negación.',
    example: '"Vas a ir al paseo de la hacienda?" "Negra, no me gusta"',
  },
  {
    word: 'jayan',
    definition: 'Persona grosera, brusca en sus dichos o hechos.',
    example: '"Queres que te desturque?" "No seas jayan hijo"',
  },
  {
    word: 'timba',
    definition: 'Barriga grande, abultada.',
    example: '"Clase timba tenes mae, anda al gym" "Me da hueva no jodas"',
  },
  {
    word: 'sazon',
    definition: 'Fruta que está próxima a madurar.',
    example: '"Esas guayabas estan sazon"',
  },
  {
    word: 'zorra',
    definition: 'Mujer que se acuesta con uno y otro.',
    example: '"Y por que cortaste con tu jaña" "Porque me la pego esa zorra"',
  },
  {
    word: 'fiera',
    definition: 'Persona inteligente, astuto.',
    example: '"Sos fiera a las matématicas"',
  },
  {
    word: 'joder',
    definition: 'Verbo vulgar. Fregar, molestar y muchas acepciones más.',
    example: '"A mi hermano solo le gusta joder"',
  },
  {
    word: 'ejote',
    definition: 'Vaina tierna del frijol.',
    example: '"El ejote esta bien grande esta temporada"',
  },
  {
    word: 'bujar',
    definition: 'Sinónimo de resoplar',
    example: '"Ese animal solo es bujar"',
  },
  {
    word: 'pinol',
    definition: 'Harina de maíz tostado y finamente molido.',
    example: '"Necesito comprar pinol para hacer pinolillo"',
  },
  {
    word: 'turco',
    definition:
      ' Sirios, palestinos, libaneses, turcos, árabes y hasta griegos.',
    example: '"Oe sabes de donde es aquel mae?" "Nel, solo se que es turco"',
  },
  {
    word: 'milpa',
    definition: 'Del azteca. milli. Huerta cultivada con maíz.',
    example: '"Espero que mi milpa de bastante esta temporada"',
  },
  {
    word: 'tijul',
    definition: 'Tordo de Honduras, pájaro conirrostro',
    example: '"Mira que grande ese tijul vos"',
  },
  {
    word: 'danto',
    definition: 'Sinónimo de Tapir; Látigo de cuero.',
    example: '"En la costa caribe podes encontrar un danto"',
  },
  {
    word: 'rajon',
    definition:
      'Referido a persona, cobarde, que desiste de algo en el último momento.',
    example: '"Ese sólo es tapas y es un gran rajon"',
  },
]

let WORDS: string[] = []
let DEFINITIONS: string[] = []
let EXAMPLES: string[] = []

WORDLIST.forEach((item) => {
  WORDS.push(item.word)
  DEFINITIONS.push(item.definition)
  EXAMPLES.push(item.example)
})

export { WORDS, DEFINITIONS, EXAMPLES }
