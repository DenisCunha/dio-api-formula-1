import fastify from "fastify";

const server = fastify({logger: true});

const teams = [
{id: 1, name: "MacLaren", base: "United Kingdom"},
{id: 2, name: "Mercedes", base: "United Kingdom"},
{id: 3, name: "Red Bull Racing", base: "United Kingdom"},
];

const drivers = [
    {id: 1, name: "Max Vertappen", team: "Red Bull Racing"},
    {id: 2, name: "Lewis Hamilton", team: "Ferrari"},
    {id: 3, name: "Lando Norris", team: "MacLaren"},
    ];
    

server.get("/teams", async (request, response) => {
response.type("application/json").code(200);
return {teams};
});

server.listen({port: 3333}, () => {
console.log("Server Init");
});

server.get("/drivers", async(request, response) =>  {
response.type("application/json").code(200);
return {drivers};
});