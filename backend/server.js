require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Testando a API
app.get("/", (req, res) => {
    res.json({ message: "API funcionando!" });
});

// Configuração para rodar no Vercel
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

module.exports = app;


app.post("/send-email", async (req, res) => {
    try {
        const { nome, conteudo, espectadores, periodo, frequencia, plataforma } = req.body;

        const templateParams = {
            objetivo: "VTUBER ENCONTRADO!",
            fazer: "Adicione ao site ->",
            from_name: nome,
            conteudo: "Conteúdo de suas lives: " + conteudo,
            espectadores: "Média de Espectadores: " + espectadores,
            periodo: "Período das Lives: " + periodo,
            frequencia: "Frequência das Lives: " + frequencia,
            plataforma: "Plataforma Preferida: " + plataforma
        };

        const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                service_id: process.env.EMAILJS_SERVICE_ID,
                template_id: process.env.EMAILJS_TEMPLATE_ID,
                user_id: process.env.EMAILJS_PUBLIC_KEY,
                template_params: templateParams,
            }),
        });

        if (response.ok) {
            return res.json({ success: true, message: "E-mail enviado com sucesso!" });
        } else {
            throw new Error("Erro ao enviar e-mail.");
        }
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
});

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
