const perguntas = [
    {
        pergunta:"A função referencial tem como principal objetivo:",
        opcoes:["Expressar sentimentos","Informar e transmitir dados objetivos","Convencer o leitor","Embelezar a linguagem"],
        correta:1
    },
    {
        pergunta:"A linguagem utilizada na função referencial é",
        opcoes:["Subjetiva","Emocional","Objetiva","Poética"],
        correta:2
    },
    {
        pergunta:"Em qual tipo de texto a função referencial é mais comum?",
        opcoes:["Poemas","Notícias e textos científicos","Cartas pessoais","Músicas"],
        correta:1
    },
    {
        pergunta:"A função referencial está focada em:",
        opcoes:["Quem fala","Quem ouve","A mensagem estética","O assunto (referente)"],
        correta:3
    },
    {
        pergunta:"A função referencial permite opiniões pessoais?",
        opcoes:["Sim, sempre","Não, pois busca objetividade","Apenas em textos longos","Apenas em diálogos"],
        correta:1
    },
];

let atual = 0;
let pontos = 0;

function mostrarPergunta(){
    let q = perguntas[atual];

    let html = `<h3>${q.pergunta}</h3>`;

    q.opcoes.forEach((op, i) => {
        html += `
        <label>
            <input type="radio" name="resposta" value="${i}">
            ${op}
        </label><br>
        `;
    });

    document.getElementById("quiz").innerHTML = html;
}

function responder() {
    let resposta = document.querySelector('input[name="resposta"]:checked');

    if (!resposta) {
        alert("Escolha uma opção!");
        return;
    }

    if (parseInt(resposta.value) === perguntas[atual].correta) {
        pontos++;
    }

    atual++;

    if (atual < perguntas.length) {
        mostrarPergunta();
    } else {
        document.getElementById("quiz").innerHTML = "<h2>Fim do quiz!</h2>";
        document.getElementById("resultado").innerText = 
        "Você acertou " + pontos + " de " + perguntas.length;
    }
}

mostrarPergunta();