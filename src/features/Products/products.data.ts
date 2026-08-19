import type { Product } from '../../types'

export const PRODUCTS: Product[] = [
  {
    id:          'p',
    size:        'P',
    label:       'Pequeño',
    weightRange: 'Hasta 5 kg',
    description: 'Perfecto para los primeros meses. Ajuste seguro que acompaña cada movimiento con total libertad.',
    features:    ['Alta absorción', ' Suavidad al contacto con la piel', 'Calce amplio y cómodo', 'Cintas ajustables resistentes'],
    color:       '#FFD700',
    units:       62,
  },
  {
    id:          'm',
    size:        'M',
    label:       'Mediano',
    weightRange: '5 a 10 kg',
    description: 'Acompaña la etapa de mayor exploración. Mayor cobertura y absorción para bebés activos.',
    features:    ['Alta absorción', ' Suavidad al contacto con la piel', 'Calce amplio y cómodo', 'Cintas ajustables resistentes'],
    color:       '#1E6FBF',
    units:       58,
  },
  {
    id:          'g',
    size:        'G',
    label:       'Grande',
    weightRange: '9.5 a 13 kg',
    description: 'Para bebés que ya empiezan a moverse más. Diseño activo que no limita el juego ni la diversión.',
    features:    ['Alta absorción', ' Suavidad al contacto con la piel', 'Calce amplio y cómodo', 'Cintas ajustables resistentes'],
    color:       '#7DD9E8',
    units:       50,
  },
  {
    id:          'xg',
    size:        'XG',
    label:       'Extra Grande',
    weightRange: '12.5 a 15 kg',
    description: 'Pensado para niños más activos. Ajuste amplio y cómodo con la protección que ya conocen.',
    features:    ['Alta absorción', ' Suavidad al contacto con la piel', 'Calce amplio y cómodo', 'Cintas ajustables resistentes'],
    color:       '#1E6FBF',
    units:       44,
  },
    {
    id:          'xxg',
    size:        'XXG',
    label:       'Extra Extra Grande',
    weightRange: 'Más de 15 kg',
    description: 'Para niños grandes y activos. Ajuste amplio y cómodo con la protección que ya conocen.',
    features:    ['Alta absorción', ' Suavidad al contacto con la piel', 'Calce amplio y cómodo', 'Cintas ajustables resistentes'],
    color:       '#E8445A',
    units:       40,
  }
]
