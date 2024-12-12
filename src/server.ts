import fastify from "fastify";

const server = fastify({logger: true});

const teams = [
    {id: 1, name: "McLaren", base: "woking, United Kingdom"},
    {id: 2, name: "Mercedes", base: "Brackley, United Kingdom"},
    {id: 3, name: "Red Bull Racing", base: "Milton Keynes, United Kingdom"},
]

const drivers = [
    {id: 1, name: "Max Verstappen", team: "Red Bull Racing"},
    {id: 2, name: "Airton Senna", team: "McLaren"},
    {id: 3, name: "Lewis Hamilton", team: "Mercedes"}
]

server.get("/teams", async (request, response) => {
    response.type("application/json").code(200)
    return {teams}
})

server.get("/drivers", async(request, response)=>{
    response.type("applicaiton/json").code(200);
    return {drivers}
})

server.listen({port: 3333}, ()=>{
    console.log("Server is running on port 3333");
})