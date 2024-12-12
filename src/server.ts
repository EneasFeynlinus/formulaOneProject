import fastify from "fastify";
import cors from "@fastify/cors";


const server = fastify({logger: true});

server.register(cors, {
    origin: "*",
});

const teams = [
    { id: 1, name: "McLaren", base: "Woking, United Kingdom" },
    { id: 2, name: "Mercedes", base: "Brackley, United Kingdom" },
    { id: 3, name: "Red Bull Racing", base: "Milton Keynes, United Kingdom" },
    { id: 4, name: "Ferrari", base: "Maranello, Italy" },
    { id: 5, name: "Alpine F1 Team", base: "Enstone, United Kingdom" },
    { id: 6, name: "Alfa Romeo F1 Team ORLEN", base: "Hinwil, Switzerland" },
    { id: 7, name: "Haas F1 Team", base: "Kannapolis, United States" },
    { id: 8, name: "AlphaTauri", base: "Faenza, Italy" },
    { id: 9, name: "Aston Martin Aramco Cognizant F1 Team", base: "Silverstone, United Kingdom" }
  ];

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

interface DriverParams {
    id: string;
}

server.get<{Params: DriverParams}>("/drivers/:id", async (request, response) => {
    const id = parseInt(request.params.id);
    const driver = drivers.find((driver) => driver.id === id);

    if(!driver){
        response.type("application/json").code(404)
        return {message: "Driver not found"};
    } else {
        response.type("application/json").code(200)
        return {driver};
    }
})

server.listen({port: 3333}, ()=>{
    console.log("Server is running on port 3333");
})