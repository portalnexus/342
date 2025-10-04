document.addEventListener('DOMContentLoaded', () => {
    // --- Theme Switcher Logic ---
    const themeToggle = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
        if (currentTheme === 'light') {
            themeToggle.checked = true;
        }
    }

    themeToggle.addEventListener('change', function() {
        if (this.checked) {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
    });

    // --- Quiz Logic ---
    const quizData = [
        {
            pergunta: "Para uma lâmpada acender, o circuito elétrico precisa estar...",
            opcoes: ["Aberto", "Fechado", "Molhado", "Incompleto"],
            resposta: "Fechado"
        },
        {
            pergunta: "Qual componente de um circuito funciona como a 'fonte de energia'?",
            opcoes: ["O fio", "A lâmpada", "A pilha ou bateria", "O interruptor"],
            resposta: "A pilha ou bateria"
        },
        {
            pergunta: "Na analogia da água, a 'pressão da água' que empurra tudo, corresponde a qual grandeza elétrica?",
            opcoes: ["Corrente Elétrica", "Resistência", "Tensão (Voltagem)", "Potência"],
            resposta: "Tensão (Voltagem)"
        },
        {
            pergunta: "Se em um pisca-pisca de Natal, uma lâmpada queima e todas as outras apagam, o circuito provavelmente está em...",
            opcoes: ["Série", "Paralelo", "Curto-circuito", "Aberto"],
            resposta: "Série"
        },
        {
            pergunta: "Qual das seguintes ações é MAIS SEGURA para evitar um choque elétrico?",
            opcoes: ["Mexer em uma tomada com um garfo de metal", "Usar o secador de cabelo com os pés descalços no banheiro molhado", "Manter fios elétricos longe da água", "Tentar consertar um fio desencapado sem desligar a energia"],
            resposta: "Manter fios elétricos longe da água"
        },
        {
            pergunta: "Na sua casa, as lâmpadas e tomadas são ligadas em...",
            opcoes: ["Série, pois é mais simples", "Paralelo, para que tudo funcione de forma independente", "Série e Paralelo misturados", "Nenhuma das anteriores"],
            resposta: "Paralelo, para que tudo funcione de forma independente"
        }
    ];

    const perguntaElement = document.getElementById('pergunta');
    const opcoesContainer = document.getElementById('opcoes');
    const feedbackElement = document.getElementById('feedback');
    const nextButton = document.getElementById('next-button');
    const resultadoFinalElement = document.getElementById('resultado-final');
    const quizContainer = document.getElementById('quiz-container');

    let perguntaAtualIndex = 0;
    let pontuacao = 0;

    function carregarQuiz() {
        if (!perguntaElement) return; // Stop if quiz elements are not on the page
        feedbackElement.textContent = '';
        nextButton.style.display = 'none';

        if (perguntaAtualIndex < quizData.length) {
            const perguntaAtual = quizData[perguntaAtualIndex];
            perguntaElement.textContent = `${perguntaAtualIndex + 1}. ${perguntaAtual.pergunta}`;
            opcoesContainer.innerHTML = '';

            perguntaAtual.opcoes.forEach(opcao => {
                const button = document.createElement('button');
                button.textContent = opcao;
                button.addEventListener('click', () => selecionarResposta(button, opcao, perguntaAtual.resposta));
                opcoesContainer.appendChild(button);
            });
        } else {
            mostrarResultado();
        }
    }

    function selecionarResposta(button, opcaoSelecionada, respostaCorreta) {
        const botoes = opcoesContainer.querySelectorAll('button');
        botoes.forEach(btn => {
            btn.disabled = true;
            if (btn.textContent === respostaCorreta) {
                btn.classList.add('correct');
            }
        });

        if (opcaoSelecionada === respostaCorreta) {
            feedbackElement.textContent = 'Resposta Correta! Parabéns! 🎉';
            feedbackElement.style.color = 'var(--success-color)';
            pontuacao++;
        } else {
            button.classList.add('incorrect');
            feedbackElement.textContent = `Ops! A resposta correta é "${respostaCorreta}".`;
            feedbackElement.style.color = 'var(--error-color)';
        }

        nextButton.style.display = 'block';
    }

    function mostrarResultado() {
        quizContainer.innerHTML = ''; // Limpa o conteúdo do quiz
        resultadoFinalElement.style.display = 'block';
        let mensagemFinal = `Fim do Quiz! Você acertou ${pontuacao} de ${quizData.length} perguntas.`;
        
        if (pontuacao === quizData.length) {
            mensagemFinal += " 🚀 Incrível! Você é um mestre dos circuitos!";
        } else if (pontuacao >= quizData.length / 2) {
            mensagemFinal += " 👍 Muito bem! Continue estudando!";
        } else {
            mensagemFinal += " 💡 Não desanime! Revise o material e tente novamente.";
        }
        
        resultadoFinalElement.textContent = mensagemFinal;
        quizContainer.appendChild(resultadoFinalElement);
    }

    nextButton.addEventListener('click', () => {
        perguntaAtualIndex++;
        carregarQuiz();
    });

    carregarQuiz();
});

function toggleDefinition(element) {
    element.classList.toggle('active');
}