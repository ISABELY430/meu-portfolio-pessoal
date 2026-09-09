// ==========================================
// PROJETOS DO PORTFÓLIO
// ==========================================

const projetos = {
    portfolio: {
        titulo: "💻 Meu Portfólio",
        texto: `
            <p>
                Este é o meu portfólio pessoal, desenvolvido para
                apresentar minha evolução na área de tecnologia.
            </p>

            <p>
                O projeto foi desenvolvido utilizando
                <strong>HTML, CSS e JavaScript</strong>,
                colocando em prática conceitos de estrutura,
                estilização, responsividade e interatividade.
            </p>

            <p>
                A proposta é apresentar meus conhecimentos de
                uma forma criativa, organizada e profissional.
            </p>
        `
    },

    financeiro: {
        titulo: "💰 Educação Financeira",
        texto: `
            <p>
                Projeto desenvolvido com foco na importância
                da educação financeira no cotidiano.
            </p>

            <p>
                A proposta aborda temas como organização,
                planejamento financeiro e controle dos gastos.
            </p>

            <p>
                O projeto também está relacionado à minha
                formação em <strong>Gestão Financeira</strong>.
            </p>
        `
    },

    academico: {
        titulo: "🚀 Projetos Acadêmicos",
        texto: `
            <p>
                Reúne projetos desenvolvidos durante minha
                formação acadêmica e profissional.
            </p>

            <p>
                Os trabalhos envolvem temas como
                <strong>gestão, inovação, tecnologia e criatividade</strong>.
            </p>

            <p>
                Cada projeto representa uma etapa do meu
                aprendizado e da minha evolução.
            </p>
        `
    }
};


// ==========================================
// ABRIR PROJETO
// ==========================================

function mostrarProjeto(nomeProjeto) {

    const modal = document.getElementById("modal");
    const conteudo = document.getElementById("modal-conteudo");

    const projeto = projetos[nomeProjeto];

    if (!projeto) {
        return;
    }

    conteudo.innerHTML = `
        <h2>${projeto.titulo}</h2>

        <div class="modal-texto">
            ${projeto.texto}
        </div>
    `;

    modal.classList.add("ativo");
}


// ==========================================
// FECHAR MODAL
// ==========================================

function fecharModal() {

    const modal = document.getElementById("modal");

    modal.classList.remove("ativo");
}


// ==========================================
// FECHAR CLICANDO FORA DA JANELA
// ==========================================

document.getElementById("modal").addEventListener("click", function(event) {

    if (event.target === this) {
        fecharModal();
    }

});


// ==========================================
// FECHAR COM A TECLA ESC
// ==========================================

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        fecharModal();
    }

});