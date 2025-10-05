# Check time

## Sobre o app

O Check time é um aplicativo de acompanhamento de jornada de trabalho. O usuário pode calcular o tempo que foi trabalhado, podendo registrar entradas e saidas em diferentes periodos do dia.

## Funcionalidades principais

- Cálculo da jornada de trabalho
- O usuário pode adicionar ou remover quantas entradas e saidas quiser, nao sendo necessário inserir intervalo
- Tabela de registros com todos os dias adicionados

## Possíveis funcionalidades futuras

- Dois modos, um que o usuário pode registrar entradas e saidas e outro que pode calcular horas de maneira mais direta, inserindo valores brutos
- Calculo de horas por período, ou seja, uma soma total das horas de todos os dias adicionados
- Notificações para lembrar de bater o ponto

## Link para a pagina do figma

[Protótipo da aplicação](https://www.figma.com/design/7FV376NN5pPtOk4clyFEu2/Check-time?node-id=0-1&t=UvAwh6PTfdxbscoC-1)

## Banco de dados

[Modelo de banco de dados](https://dbdiagram.io/d/check-time-68bcdf6561a46d388ecaab75)


## Planejamento de Sprints

### Sprint 1 (Semana 1) – Configuração inicial
- [x] Criar projeto com Expo
- [ ] Configurar navegação básica (React Navigation)
- [ ] Implementar tela de **Login** (mock simples, sem backend)
- [ ] Criar modelo de dados (User e Registers)
- **Previsão:** 1 semana

---

### Sprint 2 (Semana 2) – Funcionalidades principais
- [ ] Tela **Home** com botão “Bater Ponto”
- [ ] Registro de entrada/saída
- [ ] Persistência local com SQLite/AsyncStorage
- [ ] Diferenciar **entrada e saída** automaticamente
- **Previsão:** 1 semana

---

### Sprint 3 (Semana 3) – Histórico e cálculos
- [ ] Tela de **Histórico** com lista de registros
- [ ] Cálculo de **horas trabalhadas por dia**
- [ ] Soma de horas em período selecionado
- **Previsão:** 1 semana

---

### Sprint 4 (Semana 4) – Refinamento e extras
- [ ] Editar/remover registros
- [ ] Ajustes de layout e usabilidade
- [ ] Testes e melhorias finais
- **Previsão:** 1 semana

