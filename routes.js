const http = require("http");

const host = 'localhost';
const port = 8000;

const startrek= JSON.stringify([
    {PERSONAGEM: "DATA", PATENTES: "TENENTE COMANDANTE"},
    {PERSONAGEM: "WORK", PATENTES: "TENENTE SEGURANÇA"},
    {PERSONAGEM: "DIANA", PATENTES: "CONSELHEIRA"},
    {PERSONAGEM: "WESLEY", PATENTES: "ALFERES"},
    {PERSONAGEM: "PIKAR", PATENTES: "CAPITÃO"}
    
]);

const requestListener = function (req, res) {
    res.setHeader("Content-Type", "application/json");
    switch (req.url) {
        case "/startrek":
            res.writeHead(200);
            res.end(startrek);
            break
        default:
            res.writeHead(404);
            res.end(JSON.stringify({error:"recurso não encontrada"}));
    }
}

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`este servidor esta rodando em http://${host}:${port}`);
});

