const Quotes = [
    "Claro que é possível amar um ser humano, desde que você não o conheça muito bem - Charles Bukowski.",

    "Antes, a questão era descobrir se a vida precisava de ter algum significado para ser vivida. Agora, ao contrário, ficou evidente que ela será vivida melhor se não tiver significado. - Albert Camus.",

    "O homem não é nada em si mesmo. Não passa de uma probabilidade infinita. Mas ele é o responsável infinito dessa probabilidade. - Albert Camus.",

" Não ser amado é falta de sorte, mas não amar é a própria infelicidade. - Albert Camus",

"O amor é uma espécie de preconceito. A gente ama o que precisa, ama o que faz sentir bem, ama o que é conveniente. Como pode dizer que ama uma pessoa quando há dez mil outras no mundo que você amaria mais se conhecesse? Mas a gente nunca conhece. - Charles Bukowski",

"Existem coisas piores que estar sozinho mas geralmente leva décadas para entender isso e quase sempre quando você entende é tarde demais. E não há nada pior que tarde demais. - Charles Bukowski",

"Gostava mais quando conseguia imaginar grandeza nos outros, mesmo que nem sempre houvesse. - Charles Bukowski",

"Nunca espere demais, da sorte ou dos outros, no fim não há quem não decepcione você. - Charles Bukowski",

"Entre muitas outras coisas, tu eras para mim uma janela através da qual podia ver as ruas. Sozinho não o podia fazer. - Franz Kafka",

" Crer-se no progresso não significa que já tenha tido lugar qualquer progresso. - Franz Kafka",

" As sereias, porém, possuem uma arma ainda mais terrível do que seu canto: seu silêncio. - Franz Kafka",

" O que é a riqueza? Para um, uma velha camisa já é riqueza. Outro é pobre com dez milhões. A riqueza é algo completamente relativo e insatisfatório. No fundo, não passa de uma situação peculiar. - Franz Kafka",

" Um livro deve ser o machado que partirá os mares congelados dentro de nossa alma. - Franz Kafka",

" O significado da vida é que algum dia ela acaba. - Franz Kafka",

" Compara-se muitas vezes a crueldade do homem à das feras, mas isso é injuriar estas últimas. - Fiodor Dostoievski",

" Decididamente não compreendo por que é mais glorioso bombardear de projéteis uma cidade do que assassinar alguém a machadadas. - Fiodor Dostoievski",

" Todos somos responsáveis de tudo, perante todos. - Fiodor Dostoievski",

" O sofrimento acompanha sempre uma inteligência elevada e um coração profundo. Os homens verdadeiramente grandes devem, parece-me, experimentar uma grande tristeza. - Fiodor Dostoievski", 

"Eu costumava achar que eu era a pessoa mais estranha do mundo, mas aí eu pensei: tem que ter alguém como eu, que se sinta bizarra e imperfeita, da mesma maneira como eu me sinto. - Frida Kahlo",

"Sou um homem livre – e preciso da minha liberdade. Preciso estar sozinho. Preciso meditar na minha vergonha e no desespero em retiro; preciso da luz do sol e das pedras do calçamento das ruas sem companheiros, sem conversação, frente a frente comigo, apenas com a música do meu coração como companhia. Que querem vocês de mim? Quando tenho algo a dizer, ponho-o em letra de forma. Quando tenho algo a dar, dou-o. Sua curiosidade indiscreta faz virar meu estômago! Seus cumprimentos humilham-me! Seu chá envenena-me! Nada devo a ninguém. Seria responsável somente perante Deus – se Ele existisse! - Henry Miller",

"Eu sequer sabia o que desejava. Sim, eu sabia. Queria algum lugar para me esconder, um lugar em que ninguém tivesse que fazer nada. - Charles Bukowski", 


    

];

function generateQuote() {
    const index = Math.floor(Math.random() * Quotes.length);
    const quote = Quotes[index];
    document.getElementById("texto").innerHTML = quote;
}

document.getElementById("botao").addEventListener("click", generateQuote);