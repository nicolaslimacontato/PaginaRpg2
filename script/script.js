//menu
const navEl = document.querySelector('.navbar');

window.addEventListener('scroll', function () {
    if (window.scrollY > 200) {
        navEl.classList.add('navbar-scrolled');
    } else {
        navEl.classList.remove('navbar-scrolled');
    }
});

const navLinkEls = document.querySelectorAll('.nav-link');

navLinkEls.forEach(navLinkEl => {
    navLinkEl.addEventListener('click', () => {
        document.querySelector('.active').classList.remove('active');
        navLinkEl.classList.add('active');
    });
});

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector('header nav a[href="#' + id + '"]').classList.add('active');
        }
    });
};

const habilidades = {
    alquimista: [
        'Filósofo Natural <br><br> Você aprendeu muitas coisas sobre alquimia durante seus estudos. A partir do 1º nível, você pode adicionar metade do seu bônus de proficiência, arredondado para cima, a qualquer teste de habilidade que você fizer para identificar ervas, poções, venenos ou outras substâncias alquímicas. Se o teste de habilidade já incluir seu bônus de proficiência, você poderá adicionar esse bônus além do seu bônus de proficiência normal.',
        'Bombas <br><br> No 1º nível, você pode criar bombas alquímicas voláteis usando os suprimentos do seu alquimista. Sempre que terminar um descanso curto ou longo, você poderá criar um número de bombas igual a 10 + o dobro do seu nível de alquimista. Para você, o custo dos materiais necessários para criar essas bombas é insignificante. Após 24 horas, uma bomba não utilizada torna-se inerte. As estatísticas de uma bomba são mostradas abaixo.'
    ],
    artesao: [
        'Perícias Exóticas.<br><br>A partir do 1º nível, você ganha proficiência com armas e armaduras exóticas, que são itens não convencionais, mas eficazes, com os quais nenhuma outra classe é proficiente. Se uma característica ou efeito concede proficiência com uma arma ou armadura, ela não concede proficiência com armas exóticas ou armaduras exóticas, a menos que indicado de outra forma.',
        'Fabricação Ativa<br><br>Também no 1º nível, você pode fabricar um item por dia quando fizer um descanso longo, sem perder os benefícios de um descanso longo. Você paga metade docusto da peça de ouro do item em materiais, até 25 po.<br> Se um item custar mais de 25 PO em materiais, você pode terminá-lo trabalhando nele por vários dias, gastando 25 PO pordia até que o item seja concluído.<br> À medida que você ganha níveis nesta classe, sua velocidade de fabricação aumenta, permitindo que você gaste mais em materiais para cada dia de fabricação, conforme mostrado na coluna Criação Ativa da tabela do Artesão.<br>Os itens que você fabrica usando esse recurso valem metade do custo em peças de ouro quando vendidos.<br> Isso significa que você pode vender um item para reembolsar seu custo em materiais, mas não para obter lucro.'
    ],
    barbaro: [
        'Raiva. <br> <br> Na batalha, você luta com ferocidade primitiva, No seu turno, você pode entrar em fúria como uma ação bônus, Você tem vantagem em testes de Força e testes de resistência de Força.<br><br>Quando você faz um ataque com arma corpo a corpo usando Força, você ganha um bônus na jogada de dano que aumenta à medida que você ganha níveis como um bárbaro, como mostrado na coluna Dano de Fúria da tabela Bárbaro.<br><br>Você tem resistência a danos de concussão, perfurantes e cortantes. <br>Se você for capaz de lançar feitiços, não poderá lançá-los ou se concentrar neles enquanto estiver em fúria, Sua raiva dura 1 minuto. Termina mais cedo se você ficar inconsciente ou se seu turno terminar e você não tiver atacado uma criatura hostil desde seu último turno ou sofrido danos desde então. Você também pode acabar com sua fúria no seu turno com uma ação bônus.<br><br>Depois de ter enfurecido o número de vezes mostrado para o seu nível de bárbaro na coluna Fúria da tabela Bárbaro, você deve terminar um descanso longo antes de poder entrar em fúria novamente.',
        'Defesa. <br> <br> Não Blindada Enquanto você não estiver usando nenhuma armadura, sua classe de armadura é igual a 10 + seu modificador de Destreza + seu modificador de Constituição. Você pode usar um escudo e ainda ganhar esse benefício.'
    ]
};

const classSelect = document.getElementById('classSelect');
const habilidadeContainer = document.querySelector('.habilidadeContainer');
const classInfo = document.getElementById('classInfo');
const vidaSpan = document.getElementById('vida');
const proficienciasSpan = document.getElementById('proficiencias');
const equipamentoTexto = document.getElementById('equipamentoTexto');

classSelect.addEventListener('change', function () {
    const selectedClass = classSelect.value;
    classInfo.classList.remove('hidden'); // Remove a classe que oculta os elementos
    habilidadeContainer.classList.remove('hidden'); // Remove a classe que oculta os elementos
    classInfo.classList.add('shown'); // Adiciona a classe para mostrar com transição suave
    habilidadeContainer.classList.add('shown'); // Adiciona a classe para mostrar com transição suave
    habilidadeContainer.innerHTML = ''; // Limpa as habilidades anteriores
    habilidades[selectedClass].forEach((habilidade, index) => {
        const habilidadeElement = document.createElement('p');
        habilidadeElement.innerHTML = `Habilidade ${index + 1}: ${habilidade}`;
        habilidadeContainer.appendChild(habilidadeElement);
    });
        // Atualiza o dado de vida e as proficiências
        if (selectedClass === 'alquimista') {
            vidaSpan.innerHTML = '1d6 <br> Testes de Resistência : Destreza, Inteligência';
            proficienciasSpan.innerHTML = 'Armadura: leve <br>Arma: simples e bombas';
            equipamentoTexto.innerHTML = '(a) uma besta leve e 20 virotes ou (b) qualquer arma simples<br>(a) um pacote de explorador ou (b) um pacote de estudioso<br>Suprimentos do Alquimista e (a) um frasco de ácido, (b) um frasco de fogo do alquimista, ou um frasco de veneno básico<br>Armadura de couro e uma adaga';
        } else if (selectedClass === 'artesao') {
            vidaSpan.innerHTML = '1d10 <br> Testes de Resistência : Constituição, Inteligência';
            proficienciasSpan.innerHTML = 'Armadura: Todas e escudos <br>Arma: simples, armas marciais';
            equipamentoTexto.innerHTML = '• Um conjunto de ferramentas de artesão<br>• Um escudo e (a) cota de malha, (b) armadura de couro ou cota de malha<br>• Uma adaga e (uma ) um martelo de guerra ou (b) qualquer arma simples<br>• (a) uma besta leve e 20 virotes ou (b) um arco curto e 20 flechas<br>• Um pacote de masmorra';
        } else if (selectedClass === 'barbaro') {
            vidaSpan.innerHTML = '1d12 <br> Testes de Resistência: Força, Constituição';
            proficienciasSpan.innerHTML = ' Armadura leve, média e escudos <br> Armas: simples e marciais';
            equipamentoTexto.innerHTML = '(a) um machado grande ou (b) qualquer arma marcial corpo a corpo <br>(a) dois machados de mão ou (b) qualquer arma simples <br>Uma mochila de explorador e quatro dardos';
        }
});



// aos
AOS.init();
