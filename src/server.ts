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

const contenttype = "application/json";
const statuscode_ok = 200;
const statuscode_notfound = 404;

interface DriverParams {
   id: string;
}

server.get("/teams", async (request, response) => {
response.type(contenttype ).code(statuscode_ok);
return {teams};
});

server.get("/drivers", async(request, response) =>  {
response.type(contenttype).code(statuscode_ok);
return {drivers};
});

server.get<{Params : DriverParams}>("/drivers/:id", async(request, response) =>  {
    const id = parseInt(request.params.id);
    const driver = drivers.find(d => d.id === id);

    if(!driver) {
        response.type(contenttype).code(statuscode_notfound);
        return {message: "Driver Not Found"};
    } else {
        response.type(contenttype).code(statuscode_ok);
        return {driver};
    }
});

server.listen({port: 3333}, () => {
    console.log("Server Init");
});