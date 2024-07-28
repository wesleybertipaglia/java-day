const speeches = [
    {
        title: 'System design :101 - o que você deve pensar ao definir suas primeiras arquiteturas',
        speakers: [
            {
                name: 'Kamila Kode',
                image: './imgs/people/kamila-santos-oliveira.webp',
            }
        ],
        time: '',
        description: 'Nessa palestra vamos passar pelos princípios da arquitetura de software, pelos principais componentes de arquitetura de microsserviços, padrões de microsserviços e algumas boas práticas que você DEV JAVA deve se preocupar.',
        year: 2024
    },
]

const workshops = [
    {
        title: 'Explorando o Ecossistema Java: Aprofundando em Programação Funcional',
        speakers: [
            {
                name: 'João Augusto',
                image: './imgs/people/joao-augusto.webp'
            }
        ],
        time: '',
        description: '',
        year: 2024
    },
    {
        title: 'Introdução a Kotlin',
        speakers: [
            {
                name: 'Taylson Martinez',
                image: './imgs/people/taylson-martinez.webp'
            }
        ],
        time: '',
        description: '',
        year: 2024
    },
    {
        title: 'GitHub - Funcionalidades Essenciais para Colaboração em Projetos de Software',
        speakers: [
            {
                name: 'João Carlos Barsanelli',
                image: './imgs/people/joao-carlos-barsanelli.webp',
            }
        ],
        time: '',
        description: 'Neste minicurso prático, explore as principais ferramentas do GitHub, controle de versões, pull requests e muito mais.',
        year: 2024
    },
    {
        title: 'React - Desenvolvimento de Aplicações Web Modernas',
        speakers: [
            {
                name: 'Wesley Bertipaglia',
                image: './imgs/people/wesley-bertipaglia.webp'
            }
        ],
        time: '',
        description: 'Neste minicurso prático, aprenda os conceitos básicos de React, como criar componentes, manipular estados e muito mais.',
        year: 2024
    },
]

const schedule = [
    ...speeches,
    ...workshops
]

export default schedule;
export { speeches, workshops }