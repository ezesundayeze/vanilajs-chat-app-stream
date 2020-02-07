
const client = new StreamChat("fjbqmu95nurq");
console.log(client)
await client.setUser(
    {
        id: 'jlahey',
        name: 'Jim Lahey',
        image: 'https://i.imgur.com/fR9Jz14.png',
    },
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiamxhaGV5In0.bquRcUTnDRSLPRIcvleDZQ9bBOwPnhxtMIEuPHFbhN0",
);