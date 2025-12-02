# Arcade – Jogo de Estratégia Online (Adaptação de War)

O **Arcade** é um projeto de jogo online desenvolvido utilizando **Kaboom.js**, inspirado no clássico jogo de tabuleiro *War*. O objetivo é entregar uma experiência estratégica moderna, visual e fluida em ambiente web, mantendo as regras essenciais do original, porém com adaptações para jogabilidade digital.

---

## 🎮 Visão Geral do Projeto

O Arcade é um jogo de **conquista territorial**, onde jogadores competem entre si para cumprir objetivos secretos, dominar continentes e expandir seus exércitos.  
O tabuleiro é representado como um **grafo de territórios conectados**, cada um podendo ser ocupado, atacado e defendido conforme as regras do turno.

---

## 📌 Funcionalidades Principais

- Sistema completo de turnos: **Mobilizar → Batalhar → Mover**  
- Batalhas baseadas em **rolagem de dados** (até 3 dados para ataque e defesa)  
- Bônus por dominação de continentes  
- Objetivos secretos personalizados  
- Grafo de territórios com adjacências definidas  
- Interface animada utilizando **Kaboom.js**  
- Suporte para múltiplos jogadores  
- Conquista de territórios e expansão de tropas  
- Fase especial de primeiro turno  
- Movimento entre territórios conectados

---

## 🧠 Regras do Jogo

### 🔵 Primeiro Turno  
Cada jogador apenas **mobiliza tropas**, sem atacar ou mover.

### 🔴 Turnos Normais  
Cada jogador segue 3 fases:

1. **Mobilizar**  
   - Recebe tropas = `floor(territórios / 2)`  
   - Recebe bônus por continentes dominados  
   - Distribui tropas nos territórios

2. **Batalhar**  
   - Ataca territórios adjacentes  
   - Usa entre 1 e 3 tropas para atacar  
   - Rolagem de dados d6  
   - Empates favorecem o defensor  
   - Ao conquistar um território, deve mover ao menos as tropas usadas no último ataque

3. **Mover**  
   - Move tropas entre territórios conectados que controla  
   - Deve sempre deixar pelo menos 1 tropa no território  
   - Pode mover quantas vezes quiser (regra do Arcade)

---

## 🗺 Estruturas Principais

### Player
- id, nome, cor  
- territórios  
- objetivo secreto  
- tropas em reserva  

### Territory
- id, nome  
- dono  
- tropas  
- adjacentes  
- continente  

### Continente
- id, nome  
- territórios pertencentes  
- bônus de tropas  

---

## 🏆 Objetivos
Cada jogador recebe um objetivo secreto, podendo ser:
- Dominar continentes específicos  
- Controlar X territórios com pelo menos N tropas  
- Eliminar um jogador específico  
- Ou simplesmente dominar o mapa inteiro  

---

## 🏁 Condições de Vitória
O jogo termina quando:
- Um jogador cumpre seu objetivo secreto **ou**
- Domina todos os territórios do mapa

---

## 🛠️ Tecnologias Utilizadas

- **Kaboom.js** – motor 2D para o front-end  
- **JavaScript/TypeScript**  
- Estrutura baseada em cenas e estado global  
- Grafo de territórios configurado em JSON  

---

## 📂 Estrutura Sugerida do Projeto

```
arcade/
 ├── src/
 │   ├── scenes/
 │   │   ├── menu.js
 │   │   ├── game.js
 │   │   └── victory.js
 │   ├── core/
 │   │   ├── gameState.js
 │   │   ├── battleSystem.js
 │   │   ├── moveSystem.js
 │   │   └── mobilizeSystem.js
 │   ├── data/
 │   │   ├── map.json
 │   │   └── objectives.json
 │   └── utils/
 │       └── dice.js
 ├── index.html
 ├── README.md
 └── package.json
```

---

## 🚀 Como Rodar o Projeto

1. Instale dependências  
```
npm install
```

2. Execute o servidor local  
```
npm run dev
```

3. Abra no navegador:  
```
http://localhost:3000
```

---

## 📌 Status do Projeto  
Em desenvolvimento — primeiras mecânicas e sistemas estão sendo estruturados.

---

## 🤝 Contribuição  
Contribuições são bem-vindas!  
Abra issues ou envie PRs conforme as guidelines do repositório.

---

## 📜 Licença  
Licença livre para uso e estudo durante o desenvolvimento.

---

Projeto criado como parte do universo **Arcade**, visando criar experiências web estratégicas e divertidas.
