const speeches = [
    {
        title: 'Sua Jornada para o Futuro da Tecnologia Java',
        speakers: [
            {
                name: 'Gabriel Silva Andrade',
                image: './imgs/people/gabriel-silva-andrade.jpeg',
            }
        ],
        time: '',
        description: 'Nessa palestra prática você aprenderá as novidades do Java 21, aplicar os recursos mais avançados, e descobrir como utilizá-lo nos seus projetos hoje, mesmo que sua empresa (ou seu professor) não estejam utilizando a nova versão ainda. Venha junto em uma jornada no mundo Java, e leve a sua carreira para a próxima galaxia!',
        year: 2023
    },
    {
        title: 'Microsserviços com Java na Prática com Spring Boot e Spring Cloud',
        speakers: [
            {
                name: 'Dorival Querino da Silva',
                image: './imgs/people/dorival-querino-silva.jpg',
            }
        ],
        time: '',
        description: 'Nesta apresentação serão abordados os conceitos de Microsserviços, bem como suas vantagens e desvantagem. A seguir será mostrado uma implementação do zero utilizando Spring, mostrando na prática a aplicação dos conceitos apresentados. ',
        year: 2023
    },
    {
        title: '4 conceitos de arquitetura que todo desenvolvedor precisa conhecer',
        speakers: [
            {
                name: 'Yugo Sakamoto',
                image: './imgs/people/yugo-sakamoto.jpeg',
            }
        ],
        time: '',
        description: 'A arquitetura de software existe para ajudar no design e construção de uma solução, e conhecer as práticas dessa disciplina podem te tornar um melhor desenvolvedor. Nessa apresentação passarei pelos princípios essenciais para te guiar numa carreira de sucesso!',
        year: 2023
    },
    {
        title: 'Domine a complexidade e os desafios da integração NoSQL em aplicações Java cloud-native',
        speakers: [
            {
                name: 'Maximillian Arruda',
                image: './imgs/people/maximillian-arruda.jpeg',
            }
        ],
        time: '',
        description: 'Nesta palestra, através de uma sessão live-coding vamos abordar como utilizar a Jakarta NoSQL para dominar a integração com banco de dados NoSQL em suas aplicações java cloud-native.',
        year: 2023
    },
    {
        title: 'Arquitetura Hexagonal e o ármario bagunçado!',
        speakers: [
            {
                name: 'Danilo Pereira De Luca',
                image: './imgs/people/danilo-pereira-luca.jpg',
            }
        ],
        time: '',
        description: 'Nesta apresentação, mostrarei a importância de ter um código/projeto bem organizado usando uma situação comum a todos: a organização do ármario de roupas. Abordarei como a arquitetura Hexagonal pode ser aplicada para resolver esse problema, destacando suas principais características e como ela pode tornar você um(a) desenvolvedor(a) melhor!',
        year: 2023
    },
    {
        title: 'Introdução a Virtual Threads',
        speakers: [
            {
                name: 'Carlos Fernando Gonçalves',
                image: './imgs/people/carlos-fernando-goncalves.jpeg',
            }
        ],
        time: '',
        description: 'Nesta apresentação, vamos explorar o novo modelo de concorrência do Java, os Virtual Threads, que prometem revolucionar a forma como lidamos com concorrência em Java. Vamos entender o que são, como funcionam e como podemos utilizá-los em nossas aplicações.',
        year: 2023
    }
]

const workshops = [
    {
        title: 'REST com Quarkus e Active Record com Panache',
        speakers: [
            {
                name: 'Higor Granzoto',
                image: './imgs/people/higor-granzoto.jpeg'
            }
        ],
        time: '',
        description: 'Nesta palestra, vamos abordar como criar uma API REST com Quarkus e Active Record com Panache. Vamos ver como é fácil criar uma API REST com Quarkus e como o Panache facilita a persistência de dados.',
        year: 2023
    },
    {
        title: 'GitHub - Funcionalidades Essenciais para Colaboração em Projetos de Software',
        speakers: [
            {
                name: 'João Carlos Barsanelli',
                image: './imgs/people/joao-carlos-barsanelli.jpg',
            }
        ],
        time: '',
        description: 'Neste minicurso prático, explore as principais ferramentas do GitHub, controle de versões, pull requests e muito mais.',
        year: 2023
    }
]

const schedule = [
    ...speeches,
    ...workshops
]

export default schedule;
export { speeches, workshops }