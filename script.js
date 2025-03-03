document.addEventListener("DOMContentLoaded", function () {
    const formIndicacao = document.querySelector(".submit_indicacao");
    const formRemocao = document.querySelector(".submit_remocao");
    const formAlteracao = document.querySelector(".submit_alteracao");
    const API_URL = "https://seu-backend.vercel.app/send-email"; // 🔹 Substitua pelo seu link real do Vercel

    async function enviarFormulario(form, dados, mensagemSucesso, mensagemErro) {
        const statusMsg = document.getElementById("status-msg");

        try {
            const response = await fetch(API_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(dados),
            });

            const result = await response.json();

            if (result.success) {
                statusMsg.textContent = mensagemSucesso;
                statusMsg.style.color = "green";
                form.reset();
            } else {
                throw new Error(result.message);
            }
        } catch (error) {
            statusMsg.textContent = mensagemErro;
            statusMsg.style.color = "red";
            console.error("Erro:", error);
        }

        statusMsg.style.display = "block";
    }

    if (formIndicacao) {
        formIndicacao.addEventListener("submit", function (event) {
            event.preventDefault();

            const dados = {
                nome: document.getElementById("nome-vtuber").value,
                conteudo: document.getElementById("conteudos").value,
                espectadores: document.getElementById("media-espectadores").value,
                periodo: document.getElementById("periodo-lives").value,
                frequencia: document.getElementById("frequencia-lives").value,
                plataforma: document.getElementById("plataformas").value,
                objetivo: "VTUBER ENCONTRADO!",
                fazer: "Adicione ao site ->",
            };

            enviarFormulario(
                formIndicacao,
                dados,
                "Mensagem enviada com sucesso!",
                "Erro ao enviar mensagem. Tente novamente."
            );
        });
    }

    if (formRemocao) {
        formRemocao.addEventListener("submit", function (event) {
            event.preventDefault();

            const dados = {
                nome: document.getElementById("nome-vtuber").value,
                contato: document.getElementById("contato").value,
                email: document.getElementById("email").value,
                objetivo: "REMOÇÃO DE VTUBER",
                fazer: "Remova Vtuber ->",
            };

            enviarFormulario(
                formRemocao,
                dados,
                "Mensagem enviada! Até 3 dias para responder você!",
                "Erro ao enviar mensagem. Tente novamente."
            );
        });
    }

    if (formAlteracao) {
        formAlteracao.addEventListener("submit", function (event) {
            event.preventDefault();

            const dados = {
                nome: document.getElementById("nome-vtuber").value,
                contato: document.getElementById("contato").value,
                alteracao: document.getElementById("tipo-alteracao").value,
                descricao: document.getElementById("descricao").value,
                objetivo: "ALTERAÇÃO DE VTUBER",
                fazer: "Altere Vtuber ->",
            };

            enviarFormulario(
                formAlteracao,
                dados,
                "Mensagem enviada! Até 5 dias para atualizar a página!",
                "Erro ao enviar mensagem. Tente novamente."
            );
        });
    }
});
