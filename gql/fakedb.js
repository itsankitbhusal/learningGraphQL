const userList = [
    {
        id: 1,
        name: "John Doe",
        age: 22,
        nationality: "American",
        username: "johndoe",
        friends: [
            {
                id: 2,
                name: "Jane Doe",
                username: "janedoe",
                age: 21,
                nationality: "American"
            },
            {
                id: 3,
                name: "Peter Smith",
                username: "peter",

                age: 23,
                nationality: "British"
            },
            {
                id: 4,
                name: "Sarah Jones",
                username: "sarah",

                age: 20,
                nationality: "Canadian"
            },
        ]
    },

    {
        id: 5,
        name: "David Brown",
        username: "janedoe",

        age: 24,
        nationality: "Australian",
        friends: [
            {
                id: 7,
                name: "Michael White",
                username: "white",

                age: 25,
                nationality: "SouthAfrican"
            },
            {
                id: 8,
                name: "Katie Black",
                username: "black",

                age: 22,
                nationality: "Chinese"
            },
        ]
    },
    {
        id: 12,
        name: "Ayush",
        username: "ayush",

        age: 24,
        nationality: "Nepalese"
    },
    {
        id: 13,
        name: "Bishal",
        username: "bisal",
        age: 19,
        nationality: "Nepalese"
    },

    {
        id: 20,
        name: "Ankit",
        username: "ankitbh",
        age: 19,
        nationality: "Nepalese",
        friends: [
            {
                id: 7,
                name: "Michael White",
                username: "white",

                age: 25,
                nationality: "SouthAfrican"
            },
            {
                id: 8,
                name: "Katie Black",
                username: "black",

                age: 22,
                nationality: "Chinese"
            },
            {
                id: 5,
                name: "David Brown",
                username: "brown",

                age: 24,
                nationality: "Australian",
                friends: [
                    {
                        id: 7,
                        name: "Michael White",
                        username: "white",

                        age: 25,
                        nationality: "SouthAfrican"
                    },
                    {
                        id: 8,
                        name: "Katie Black",
                        username: "black",

                        age: 22,
                        nationality: "Chinese"
                    },
                ]
            },
        ]
    }

];
const movieList = [
    {
        id: 1,
        name: "Avengers Endgame",
        yearOfPublication: 2019,
        isInTheaters: true
    },
    {
        id: 2,
        name: "The Godfather",
        yearOfPublication: 1972,
        isInTheaters: false
    },
    {
        id: 3,
        name: "The Shawshank Redemption",
        yearOfPublication: 1994,
        isInTheaters: false
    },
    {
        id: 4,
        name: "The Dark Knight",
        yearOfPublication: 2008,
        isInTheaters: false
    },
    {
        id: 5,
        name: "Pulp Fiction",
        yearOfPublication: 1994,
        isInTheaters: false
    },
    {
        id: 6,
        name: "Forrest Gump",
        yearOfPublication: 1994,
        isInTheaters: false
    },
    {
        id: 7,
        name: "The Lord of the Rings: The Fellowship of the Ring",
        yearOfPublication: 2001,
        isInTheaters: false
    },
    {
        id: 8,
        name: "Star Wars: Episode IV - A New Hope",
        yearOfPublication: 1977,
        isInTheaters: false
    },
    {
        id: 9,
        name: "Titanic",
        yearOfPublication: 1997,
        isInTheaters: false
    },
    {
        id: 10,
        name: "The Lion King",
        yearOfPublication: 1994,
        isInTheaters: false
    },
    {
        id: 11,
        name: "Jurassic Park",
        yearOfPublication: 1993,
        isInTheaters: false
    },
    {
        id: 12,
        name: "The Matrix",
        yearOfPublication: 1999,
        isInTheaters: false
    },
    {
        id: 13,
        name: "The Silence of the Lambs",
        yearOfPublication: 1991,
        isInTheaters: false
    },
    {
        id: 14,
        name: "Fight Club",
        yearOfPublication: 1999,
        isInTheaters: false
    },
    {
        id: 15,
        name: "The Terminator",
        yearOfPublication: 1984,
        isInTheaters: false
    },
    {
        id: 16,
        name: "Jaws",
        yearOfPublication: 1975,
        isInTheaters: false
    },
    {
        id: 17,
        name: "The Exorcist",
        yearOfPublication: 1973,
        isInTheaters: false
    },
    {
        id: 18,
        name: "E.T. the Extra-Terrestrial",
        yearOfPublication: 1982,
        isInTheaters: false
    },
    {
        id: 19,
        name: "The Sound of Music",
        yearOfPublication: 1965,
        isInTheaters: false
    },
    {
        id: 20,
        name: "Gone with the Wind",
        yearOfPublication: 1939,
        isInTheaters: false
    }
];

export { userList, movieList }