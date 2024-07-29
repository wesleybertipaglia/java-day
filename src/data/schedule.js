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
    {
        title: 'Arquitetando uma Solução com IA Generativa Multi-Modal',
        speakers: [
            {
                name: 'Alexandre Aquiles',
                image: './imgs/people/alexandre-aquiles.webp',
            }
        ],
        time: '',
        description: 'Como utilizar as capacidades multi-modais das LLMs como GPT 4+ da OpenAI e Google Gemini para moderar vídeos? \n Quais as restrições arquiteturais devem ser levadas em conta ao utilizar LLMs para lidar com classificação de imagens e vídeos? Como lidar com custo, resiliência, UX, testabilidade e portabilidade entre diferentes APIs? Qual o melhor estilo arquitetural a ser adotado? \n E como usar Java para implementar essa solução? \n Essas e outras questões serão discutidas nessa apresentação!',
        year: 2024
    },
    {
        title: 'Tornando-se um contribuidor Open source com apache Tomee',
        speakers: [
            {
                name: 'Daniel Dias dos Santos',
                image: './imgs/people/daniel-dias-santos.webp',
            }
        ],
        time: '',
        description: 'Esta palestra convida indivíduos a se tornarem contribuidores do Apache TomEE, uma versão certificada para Jakarta EE do Apache Tomcat. Ela explica o que é o Apache TomEE e detalha os papéis em projetos de código aberto, como usuários, contribuidores, committers e membros do comitê de gerenciamento de projetos. Além disso, descreve os diferentes tipos de contribuições possíveis, incluindo documentação, testes e desenvolvimento de novos recursos.',
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
        description: 'Neste minicurso prático, aprenda os conceitos básicos de programação funcional em Java, como funções de alta ordem, lambdas, streams e muito mais.',
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
        description: 'Neste minicurso prático, aprenda os conceitos básicos de Kotlin, como criar classes, funções, extensões e muito mais.',
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