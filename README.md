# 🛡️ Hero Level Classifier | Classificador de Nível de Herói

A beginner-friendly JavaScript project built for a **Santander / DIO programming logic challenge**.  
A small script that classifies heroes by **XP (experience points)** using conditionals, loops, and functions.

Um projeto em JavaScript feito para um **desafio de lógica de programação da Santander / DIO**.  
Um script simples que classifica heróis por **XP (pontos de experiência)** usando condicionais, laços e funções.

---

## Overview | Visão Geral

The program stores heroes (name + XP), classifies each one into a level, and prints a short report in the terminal.  
O programa armazena heróis (nome + XP), classifica cada um em um nível e imprime um relatório no terminal.

### XP → Level rules | Regras de XP → Nível

- **XP ≤ 1000** → Ferro  
- **1001–2000** → Bronze  
- **2001–5000** → Prata  
- **5001–7000** → Ouro  
- **7001–8000** → Platina  
- **8001–9000** → Ascendente  
- **9001–10000** → Imortal  
- **XP ≥ 10001** → Radiante  

---

## What this demonstrates | O que este projeto demonstra

- Variables & constants / Variáveis e constantes  
- Decision structures (`if`) / Estruturas condicionais (`if`)  
- Loops (`for`) / Laços de repetição (`for`)  
- Functions / Funções  
- Arrays + `.push()` + `.join()` / Arrays + `.push()` + `.join()`  
- Separation of logic and output / Separação entre lógica e saída  

---

## How to run | Como executar

Make sure Node.js is installed.  
Certifique-se de ter o Node.js instalado.

Run in the project folder / Execute na pasta do projeto:

```bash
node index.js

Example output | Exemplo de saída

=== HERO LEVEL CLASSIFIER ===
O Herói de nome Emily está no nível de Platina.
O Herói de nome Mathis está no nível de Bronze.
O Herói de nome Mabel está no nível de Imortal.
=== END ===


⸻

Notes | Notas
	•	Heroes are currently defined directly in the code (beginner-friendly).
    Os heróis estão definidos diretamente no código (didático e simples).
	•	The loop exists to process multiple heroes, matching the challenge requirement.
    O laço existe para processar vários heróis, como pede o desafio.

    - Includes a small edge-case example (invalid XP) to demonstrate basic input validation.
    - Inclui um pequeno exemplo de caso limite (XP inválido) para demonstrar validação básica.

⸻

Challenge source | Fonte do desafio

Based on the “Hero Level Classifier” challenge by Digital Innovation One (DIO) in the Santander bootcamp.
Baseado no desafio “Classificador de Nível de Herói” da Digital Innovation One (DIO) no bootcamp Santander.

⸻
