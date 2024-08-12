const speeches = [
    {
        title: 'Abertura',
        speakers: [],
        time: '8:10',
        description: '',
        year: 2024
    },
    {
        title: 'System design :101 - o que você deve pensar ao definir suas primeiras arquiteturas',
        speakers: [
            {
                name: 'Kamila Kode',
                image: './imgs/people/kamila-santos-oliveira.webp',
            }
        ],
        time: '8:30',
        description: `Nessa palestra vamos passar pelos princípios da arquitetura de software, 
        pelos principais componentes de arquitetura de microsserviços, padrões de microsserviços e 
        algumas boas práticas que você DEV JAVA deve se preocupar.`,
        year: 2024
    },
    {
        title: 'Intervalo',
        speakers: [],
        time: '9:20',
        description: '',
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
        time: '10:10',
        description: ` Esta palestra convida indivíduos a se tornarem contribuidores do Apache TomEE, 
        uma versão certificada para Jakarta EE do Apache Tomcat. 
        Ela explica o que é o Apache TomEE e detalha os papéis em projetos de código aberto, como usuários, 
        contribuidores, committers e membros do comitê de gerenciamento de projetos. Além disso, 
        descreve os diferentes tipos de contribuições possíveis, incluindo documentação, testes e desenvolvimento de novos recursos.
        `,
        year: 2024
    },
    {
        title: 'Indo além da era do Java EE com o Jakarta EE 11',
        speakers: [
            {
                name: 'Maximillian Arruda',
                image: './imgs/people/maximillian-arruda.webp',
            }
        ],
        time: '11:10',
        description: `Nesta palestra, vamos explorar o fascinante mundo do Jakarta EE 11, 
        mergulhando em um breve histórico que traça a evolução desde os tempos do Java EE até as inovações atuais. 
        Acompanhando essa jornada, você entenderá os motivos e a importância da transição para o Jakarta EE, 
        além de conhecer as melhorias e novas especificações introduzidas na versão 11.`,
        year: 2024
    },
    {
        title: 'Almoço',
        speakers: [],
        time: '12:00',
        description: '',
        year: 2024
    },
    {
        title: 'Apache Camel para orquestração de Microservices',
        speakers: [
            {
                name: 'Nataniel Paiva',
                image: './imgs/people/nataniel-paiva.webp',
            }
        ],
        time: '14:10',
        description: `Nesta palestra, vamos explorar como o Apache Camel pode ser utilizado para orquestrar microservices 
        de maneira eficiente e flexível. O Apache Camel é um framework robusto de integração que permite a implementação 
        de padrões de integração empresarial de forma simples e intuitiva.`,
        year: 2024
    },
    {
        title: 'Aguardando Definição',
        speakers: [
            {
                name: 'Jessica Felix',
                image: './imgs/people/jessica-felix.webp',
            }
        ],
        time: '15:10',
        description: ``,
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
        time: '17:00',
        description: `Como utilizar as capacidades multi-modais das LLMs como GPT 4+ da OpenAI e Google Gemini para moderar vídeos?
        Quais as restrições arquiteturais devem ser levadas em conta ao utilizar LLMs para lidar com classificação de imagens e vídeos? 
        Como lidar com custo, resiliência, UX, testabilidade e portabilidade entre diferentes APIs? Qual o melhor estilo arquitetural a ser adotado?
        E como usar Java para implementar essa solução? Essas e outras questões serão discutidas nessa apresentação!`,
        year: 2024
    },

]

const workshops = [
    {
        title: 'Spring Boot: crie um CRUD de modo rápido e fácil',
        speakers: [
            {
                name: 'Luciene Cavalcanti',
                image: './imgs/people/luciene-cavalcanti.webp'
            }
        ],
        date: '30/08',
        time: '19:00 - 22:00',
        local: 'FATEC',
        description: '',
        year: 2024,
        link: {
            title: 'Inscreva-se',
            url: 'https://www.sympla.com.br/workshop---spring-boot-crie-um-crud-de-modo-rapido-e-facil__2579385'
        }
    },
    {
        title: 'Desenvolvimento de Aplicações Web Modernas com React',
        speakers: [
            {
                name: 'Wesley Bertipaglia',
                image: './imgs/people/wesley-bertipaglia.webp'
            }
        ],
        date: '30/08',
        time: '19:00 - 22:00',
        local: 'FATEC',
        description: 'Neste minicurso prático, aprenda os conceitos básicos de React, como criar componentes, manipular estados e muito mais.',
        year: 2024,
        link: {
            title: 'Inscreva-se',
            url: 'https://www.sympla.com.br/evento/workshop-desenvolvimento-de-aplicacoes-web-modernas/2571863'
        }
    },
    {
        title: 'GitHub - Funcionalidades Essenciais para Colaboração em Projetos de Software',
        speakers: [
            {
                name: 'João Carlos Barsanelli',
                image: './imgs/people/joao-carlos-barsanelli.webp',
            }
        ],
        date: '31/08',
        time: '14:00 - 17:00',
        local: 'IFSP',
        description: 'Neste minicurso prático, explore as principais ferramentas do GitHub, controle de versões, pull requests e muito mais. Ideal para iniciantes e entusiastas em busca de habilidades essenciais para o desenvolvimento colaborativo.',
        year: 2024,
        link: {
            title: 'Inscreva-se',
            url: 'https://www.sympla.com.br/evento/workshop-github-funcionalidades-essenciais-para-colaboracao-em-projetos-de-software/2571285'
        }
    },
    {
        title: 'Explorando o Ecossistema Java: Aprofundando em Programação Funcional',
        speakers: [
            {
                name: 'João Augusto',
                image: './imgs/people/joao-augusto.webp'
            }
        ],
        date: '31/08',
        time: '14:00 - 17:00',
        local: 'IFSP',
        description: 'Neste minicurso teórico e prático você vai explorar os principais conceitos sobre programação funcional, apresentada de uma visão para desenvolvimento primário ao lado da máquina virtual Java, com Clojure, um dialeto de Lisp com foco na produtividade de desenvolvimento e uma abordagem extremamente produtiva!',
        year: 2024,
        link: {
            title: 'Inscreva-se',
            url: 'https://www.sympla.com.br/workshop---explorando-o-ecossistema-java-aprofundando-em-programacao-funcional__2570856'
        }
    },
    {
        title: 'Introdução a Kotlin',
        speakers: [
            {
                name: 'Taylson Martinez',
                image: './imgs/people/taylson-martinez.webp'
            }
        ],
        date: '31/08',
        time: '14:00 - 17:00',
        local: 'IFSP',
        description: 'Neste mini curso, você aprenderá a desenvolver uma API Web usando Kotlin e Spring Boot, utilizando as com requisições GET, POST, PUT e DELETE, a utilização de DTOs para representar informações de input e output. Você também aprenderá a realizar validações utilizando Bean Validation, seguir corretamente os princípios do modelo REST e tratar exceções na API de forma eficaz. Vamos juntos desenvolver uma API robustas e bem estruturadas com Kotlin, aproveitando suas vantagens em comparação ao Java.',
        year: 2024,
        link: {
            title: 'Inscreva-se',
            url: 'https://www.sympla.com.br/workshop---kotlin-spring-boot---uma-alternativa-a-linguagem-java__2574687'
        }
    },
    {
        title: 'Indo além da era do Java EE com o Jakarta EE na prática',
        speakers: [
            {
                name: 'Maximillian Arruda',
                image: './imgs/people/maximillian-arruda.webp'
            }
        ],
        date: '31/08',
        time: '14:00 - 17:00',
        local: 'IFSP',
        description: 'Neste mini curso, você aprenderá a desenvolver uma API Web usando Kotlin e Spring Boot, utilizando as com requisições GET, POST, PUT e DELETE, a utilização de DTOs para representar informações de input e output. Você também aprenderá a realizar validações utilizando Bean Validation, seguir corretamente os princípios do modelo REST e tratar exceções na API de forma eficaz. Vamos juntos desenvolver uma API robustas e bem estruturadas com Kotlin, aproveitando suas vantagens em comparação ao Java.',
        year: 2024,
        link: {
            title: 'Inscreva-se',
            url: 'https://www.sympla.com.br/workshop---indo-alem-da-era-do-java-ee-com-o-jakarta-ee-na-pratica__2591407'
        }
    },
]

const schedule = [
    ...speeches,
    ...workshops
]

export default schedule;
export { speeches, workshops }