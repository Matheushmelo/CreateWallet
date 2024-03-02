# Create Wallet 
### (PT/BR)
## Sobre
O projeto CreateWallet têm como objetivo a demonstração/simulação de uma carteira de criptomoedas. Ese projeta gera a chave privadam endereço e a seed da carteira, tudo isso na rede de teste do Bitcoin. Também veremos como testar a carteira gerada e fazer transferência de Bitcoin faucet para a mesma.
## Ferramentas Usadas
- [Visual Studio Code](https://code.visualstudio.com/download)
- [Node](https://nodejs.org/en/download/current)
- [Electrum Wallet](https://electrum.org/#download)
## Vamos começar!
Após a instalação das ferramentas mencionadas acima, você deverá seguir os seguintes passos.
### Passo 1: Inciando projeto e instalando libs
Primeiramente você deverá iniciar o projeto. Para isso, ecexute o seguinte comando no seu terminal.
```
npm init -y
```
Após finalizar a inicialização do projeto, você deverá instalar as libs necessárias. Para isso, ecexute os seguintes comandos no seu terminal.
```
npm i bip39 bip32@2.0.6 bitcoinjs-lib --save
```
### Passo 2: Organizando o projeto 
Concluindo o Passo 1, iremos criar a pasta 'src' na raiz do projeto para armazenarmos o arquivo com o código principal do projeto.

![Criando pasta src na raiz do projeto](/images/criandoPastaSrc.png)

### Passo 3: Clonando o código 
Finalizando a criação da pasta src, crie um arquivo .js na pasta criada e copie o código do arquivo 'createWallet.js'.

