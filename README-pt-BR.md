# Adivinhe a Cobertura

## O que é Cobertura?

Cobertura de código é uma medida usada para descrever o grau em que o código-fonte de um programa é testado por um conjunto de testes específico. Ela fornece insights sobre quais partes do código estão sendo executadas durante os testes e quais não estão. Percentuais mais altos de cobertura geralmente indicam que mais partes do código estão sendo testadas, o que pode levar a uma maior qualidade do código e menos bugs.

### Tipos de Cobertura:
- **Cobertura de Declaração (Statement)**: Garante que cada declaração no código tenha sido executada pelo menos uma vez.
- **Cobertura de Ramificação (Branch)**: Garante que cada ramificação (por exemplo, blocos `if` e `else`) tenha sido executada.
- **Cobertura de Função (Function)**: Garante que cada função ou método tenha sido chamada.
- **Cobertura de Linha (Line)**: Garante que cada linha de código tenha sido executada.

## Sonar

SonarQube (ou SonarCloud para a versão baseada em nuvem) é uma ferramenta usada para inspeção contínua da qualidade do código. Ele realiza revisões automáticas com análise estática do código para detectar bugs, "code smells" e vulnerabilidades de segurança. Também fornece relatórios detalhados sobre a cobertura do código e outras métricas.

### Principais Recursos:
- **Análise Estática de Código**: Detecta possíveis problemas no código sem executá-lo.
- **Métricas de Qualidade do Código**: Fornece métricas como complexidade do código, duplicação e cobertura.
- **Integração Contínua**: Integra-se com pipelines de CI/CD para garantir que a qualidade do código seja mantida ao longo do tempo.
- **Suporte Multilíngue**: Suporta uma ampla gama de linguagens de programação.

### Cobertura Sonar

SonarQube/SonarCloud fornece relatórios detalhados de cobertura que ajudam os desenvolvedores a entender a extensão da cobertura dos testes. Ele se integra com vários frameworks de teste e pipelines de CI/CD para fornecer feedback em tempo real sobre a qualidade do código. **Uma das principais características do SonarQube/SonarCloud é sua capacidade de verificar especificamente a cobertura para o novo código**, garantindo que qualquer código recém-adicionado atenda aos padrões de cobertura exigidos. Isso ajuda a manter alta qualidade do código e evita a introdução de código não testado na base de código.

## Jogo "Adivinhe a Cobertura"

O jogo "Adivinhe a Cobertura" é projetado para envolver os participantes na compreensão e melhoria da cobertura do código através de um exercício de codificação colaborativo e interativo. Veja como o jogo funciona:

### Passo 1: Desafio de Codificação
Os participantes criarão cada um um novo branch no repositório. Em seus respectivos branches, eles adicionarão novas funcionalidades, como uma função ou um componente, e escreverão testes para o novo código.

### Passo 2: Jogo de Adivinhação da Cobertura
Após escrever os testes, os participantes farão o upload de seu código para seus respectivos branches. O facilitador então mostrará o código e os testes para todos os participantes. Os outros participantes adivinharão a porcentagem de cobertura para o novo código.