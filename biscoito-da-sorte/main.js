const openCookie = document.querySelector("#biscoito1");
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const phrases = document.querySelector(".phrasesOfCookie");
const btnReset = document.querySelector("#btnReset");
const phrasesOfCookie = [
  "A sua vida e o seu mundo mudam quando você muda.",
  "Seja a mudança que quer ver no mundo.",
  "A primeira e melhor vitória é conquistar-se a si mesmo.",
  "Não são os grandes planos que dão certo. São os pequenos detalhes.",
  "Nós somos o que fazemos repetidamente, a excelência não é um feito, é sim um hábito.",
  "Só existem dois dias no ano em que você não pode fazer nada para ser mais feliz, Ontem e Amanhã.",
  "Aquilo que pedimos aos céus na maioria das vezes encontra-se nas nossas mãos.",
  "Aprenda como se você fosse viver para sempre. Viva como se você fosse morrer amanhã.",
  "Se hoje fosse o último dia da minha vida, queria fazer o que vou fazer hoje? E se a resposta fosse não muitos dias seguidos, sabia que precisava de mudar algo.",
  "Não existe caminho para a felicidade. A felicidade é o caminho.",
];

const toggleScreen = () => {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
  phrases.innerText = phrasesOfCookie[Math.round(Math.random() * 10)];
};

biscoito1.addEventListener("click", toggleScreen);
btnReset.addEventListener("click", toggleScreen);
