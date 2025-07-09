document.addEventListener("DOMContentLoaded", function () {
    emailjs.init(window.EMAILJS_PUBLIC_KEY); // Usando a chave pública definida no HTML

    const formIndicacao = document.querySelector(".submit_indicacao");
    const formRemocao = document.querySelector(".submit_remocao");
    const formAlteracao = document.querySelector(".submit_alteracao");

    if (formIndicacao) {
        formIndicacao.addEventListener("submit", function (event) {
            event.preventDefault();

            console.log("EmailJS carregado?", emailjs);

            // Captura os valores do formulário
            const nome = document.getElementById("nome-vtuber").value;
            const conteudo = document.getElementById("conteudos").value;
            const espectadores = document.getElementById("media-espectadores").value;
            const periodo = document.getElementById("periodo-lives").value;
            const frequencia = document.getElementById("frequencia-lives").value;
            const plataforma = document.getElementById("plataformas").value;        
            const statusMsg = document.getElementById("status-msg");
            const objetivo = "VTUBER ENCONTRADO!";
            const fazer = "Adicione ao site ->";

            const templateParams = {
                objetivo: objetivo,
                fazer: fazer,
                from_name: nome,
                conteudo: "Conteúdo de suas lives: " + conteudo,
                espectadores: "Média de Espectadores: " + espectadores,
                periodo: "Período das Lives: " + periodo,
                frequencia: "Frequência das Lives: " + frequencia,
                plataforma: "Plataforma Preferida: " + plataforma
            };

            console.log("Enviando com os seguintes parâmetros:", templateParams);

            emailjs.send(window.EMAILJS_SERVICE_ID, window.EMAILJS_TEMPLATE_ID, templateParams)
                .then(response => {
                    statusMsg.textContent = "Mensagem enviada com sucesso!";
                    statusMsg.style.color = "green";
                    statusMsg.style.display = "block";
                    formIndicacao.reset();
                })
                .catch(error => {
                    statusMsg.textContent = "Erro ao enviar mensagem. Tente novamente.";
                    statusMsg.style.color = "red";
                    statusMsg.style.display = "block";
                    console.error("Erro:", error);
                });
        });
    }

    if (formRemocao) {
        formRemocao.addEventListener("submit", function (event) {
            event.preventDefault();
    
            console.log("EmailJS carregado?", emailjs);
    
            // Captura os valores do formulário
            const nome = document.getElementById("nome-vtuber").value;
            const contato = document.getElementById("contato").value;
            const email = document.getElementById("email").value;
            const objetivo = "REMOÇÃO DE VTUBER";
            const fazer = "Remova Vtuber -> ";
            const statusMsg = document.getElementById("status-msg");
    
            const templateParams = {
                objetivo: objetivo,
                fazer: fazer,
                from_name: nome,
                contato: "Meio de contato escolhido: " + contato,
                email: "Email escolhido: " + email,
            };
    
            console.log("Enviando com os seguintes parâmetros:", templateParams);
    
            emailjs.send(window.EMAILJS_SERVICE_ID, window.EMAILJS_TEMPLATE_ID, templateParams)
                .then(response => {
                    statusMsg.textContent = "Mensagem enviada! Até 3 dias para responder você!";
                    statusMsg.style.color = "green";
                    statusMsg.style.display = "block";
                    formRemocao.reset();
                })
                .catch(error => {
                    statusMsg.textContent = "Erro ao enviar mensagem. Tente novamente.";
                    statusMsg.style.color = "red";
                    statusMsg.style.display = "block";
                    console.error("Erro:", error);
                });
        });
    }

    if (formAlteracao) {
        formAlteracao.addEventListener("submit", function (event) {
            event.preventDefault();
    
            console.log("EmailJS carregado?", emailjs);
    
            // Captura os valores do formulário
            const nome = document.getElementById("nome-vtuber").value;
            const contato = document.getElementById("contato").value;
            const alteracao = document.getElementById("tipo-alteracao").value;
            const descricao = document.getElementById("descricao").value;
            const objetivo = "ALTERAÇÃO DE VTUBER";
            const fazer = "Altere Vtuber -> ";
            const statusMsg = document.getElementById("status-msg");
    
            const templateParams = {
                objetivo: objetivo,
                fazer: fazer,
                from_name: nome,
                alteracao: "Alteração escolhida: " + alteracao,
                descricao: "Descrição do problema: " + descricao,
                contato: "Contato para tirar dúvidas: " + contato,
            };
    
            console.log("Enviando com os seguintes parâmetros:", templateParams);
    
            emailjs.send(window.EMAILJS_SERVICE_ID, window.EMAILJS_TEMPLATE_ID, templateParams)
                .then(response => {
                    statusMsg.textContent = "Mensagem enviada! Até 5 dias para atualizar a página!";
                    statusMsg.style.color = "green";
                    statusMsg.style.display = "block";
                    formAlteracao.reset();
                })
                .catch(error => {
                    statusMsg.textContent = "Erro ao enviar mensagem. Tente novamente.";
                    statusMsg.style.color = "red";
                    statusMsg.style.display = "block";
                    console.error("Erro:", error);
                });
        });
    }
});

