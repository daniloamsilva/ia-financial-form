# IA Financial Form

Prova de Conceito (POC) de um sistema inteligente para preenchimento automático de formulários financeiros usando inteligência artificial.

## 🎯 Sobre a POC

Este projeto é uma demonstração de como a IA pode simplificar o processo de lançamento de despesas pessoais. O usuário pode descrever uma despesa em linguagem natural (português) e o sistema automaticamente extrai e estrutura as informações necessárias:

- **Descrição da despesa**
- **Valor** (convertido para centavos)
- **Data** (formato ISO 8601)
- **Categoria** (baseada em categorias pré-definidas)

### Tecnologias Utilizadas

**Frontend:**

- React 19 + TypeScript
- Vite como bundler
- TailwindCSS para estilização
- ShadcnUI para componentes
- React Hook Form para formulários

**Backend:**

- Node.js + Express
- OpenAI API para processamento de linguagem natural

## 🔑 Requisitos

### Chave da OpenAI

Este projeto **requer uma chave de API da OpenAI** para funcionar. Você precisa:

1. Criar uma conta na [OpenAI](https://platform.openai.com/)
2. Gerar uma API key no painel de controle
3. Ter créditos disponíveis na sua conta OpenAI

## 🚀 Como Executar o Projeto

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn
- Chave de API da OpenAI

### Passo a Passo

#### 1. Clone o repositório

```bash
git clone https://github.com/daniloamsilva/ia-financial-form.git
```

```bash
cd ia-financial-form
```

#### 2. Configuração do Backend

```bash
cd server
```

```bash
npm install
```

Crie o arquivo de variáveis de ambiente:

```bash
cp .env.example .env
```

OU crie manualmente:

```bash
echo "OPENAI_API_KEY=sua_chave_aqui" > .env
```

```bash
echo "OPENAI_API_MODEL=gpt-3.5-turbo" >> .env
```

```bash
echo "PORT=8000" >> .env
```

**Configure suas variáveis de ambiente no arquivo `.env`:**

```env
OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
OPENAI_API_MODEL=gpt-3.5-turbo
PORT=8000
```

#### 3. Configuração do Frontend

Em um novo terminal, navegue para o diretório do cliente:

```bash
cd client
```

```bash
npm install
```

Crie o arquivo de configuração (opcional):

```bash
echo "VITE_API_URL=http://localhost:8000" > .env
```

#### 4. Executar os Serviços

**Terminal 1 - Backend:**

```bash
cd server
```

```bash
npm run dev
```

**Terminal 2 - Frontend:**

```bash
cd client
```

```bash
npm run dev
```

#### 5. Acesse a aplicação

Abra seu navegador e acesse: `http://localhost:5173`

## 📝 Como Usar

1. **Clique no botão com ícone de varinha mágica** para abrir o diálogo de nova despesa
2. **Digite sua despesa em linguagem natural**, por exemplo:
   - "Paguei 45 reais no supermercado hoje"
   - "Uber para o trabalho custou 28 reais ontem"
   - "Conta de luz de 185 reais venceu anteontem"
3. **Clique em "Processar com IA"**
4. **Revise os dados extraídos** e faça ajustes se necessário
5. **Salve a despesa**

## ⚠️ Observações Importantes

- Esta é uma **Prova de Conceito** para fins educacionais e de demonstração
- O sistema processa valores em **centavos** internamente para evitar problemas de ponto flutuante
- As datas são convertidas para o **fuso horário do Brasil** (UTC-3)
- **Custos da OpenAI** se aplicam baseados no uso da API

## 🤝 Contribuição

Este é um projeto de demonstração. Sinta-se livre para fazer fork e experimentar melhorias!
