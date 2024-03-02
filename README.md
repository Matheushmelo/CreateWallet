# Create Wallet 
### (PT/BR)
## Sobre
O projeto CreateWallet têm como objetivo a demonstração/simulação de uma carteira de criptomoedas. Esse projeto gera a chave privadam endereço e a seed da carteira, tudo isso na rede de teste do Bitcoin. Também veremos como importar a carteira gerada .
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

### Passo 4: Execute o código
Agora vá no seu terminal e execute o comando para gerar a Wallet. Para isso, execute o comando conforme exemplo abaixo.
```
node .\nomeDoArquivo.js
```
Feito isso, irá aparecer no seu terminal os dados da carteira gerada. Agora iremos importar ela no Electrum Wallet.

## Importando carteira gerada no Electrum
### Passo 1: Alterando propriedades do Electrum
Para que o Electrum inicie em uma rede de teste, devemos alterar uma propiedade do executável. Para isso, vá no ícone do seu aplicativo e clique com o botão direito, vá em propriedades, e altere o destino inserindo no final o seguinte, "--testnet".

![Alterando propriedades do Electrum](/images/propertiesElectrum.png)

### Passo 2: Importando via chave privada
Abra o Electrum e na primeira tela, insira o nome da sua carteira.

![Inserindo o nome da carteira](/images/nameWallet.png)

Após nomear a carteira, clique em próximo e selecione a opção "Importar endereços Bitcoin ou chaves privadas", e clique em próximo.

![Importando carteira gerada](/images/importingWallet.png)

Feito isso, copie a chave privada gerada no seu terminal, cole e clique em próximo.
Agora crie a senha da carteira e novamente clique em próximo.

![Criando senha da carteira](/images/createPassword.png)

Pronto! Caso tenha seguido corretamente os passos conforme descrito, sua carteira estará criada e importada no Electrum.
Você poderá fazer transações para a mesma utilizando Bitcoins Faucet, a fim de verificar se a mesma foi gerada e importada corretamente.

### (EN)
## About
The CreateWallet project aims to demonstrate/simulate a cryptocurrency wallet. This project generates the private key, address, and seed of the wallet, all on the Bitcoin test network. We will also see how to import the generated wallet into Electrum.
## Tools Used
- [Visual Studio Code](https://code.visualstudio.com/download)
- [Node](https://nodejs.org/en/download/current)
- [Electrum Wallet](https://electrum.org/#download)
## Let's Get Started!
After installing the mentioned tools above, you should follow the steps below.
### Step 1: Initializing the Project and Installing Libraries
First, you should initiate the project. To do this, execute the following command in your terminal.
```
npm init -y
```
After completing the project initialization, you should install the necessary libraries. To do this, execute the following commands in your terminal.
```
npm i bip39 bip32@2.0.6 bitcoinjs-lib --save
```
### Step 2: Organizing the Project
Completing Step 1, we will create the 'src' folder at the root of the project to store the file with the main code of the project.

![Creating src folder in project root](/images/criandoPastaSrc.png)

### Step 3: Cloning the Code
After creating the src folder, create a .js file in the created folder and copy the code from the 'createWallet.js' file.

### Step 4: Execute the Code
Now, go to your terminal and execute the command to generate the wallet. To do this, run the command as shown below.
```
node .\nomeDoArquivo.js
```
Once done, the generated wallet data will appear in your terminal. Now, let's import it into the Electrum Wallet.

## Importing the Generated Wallet into Electrum
### Step 1: Changing Electrum Properties
To make Electrum start on a test network, we need to change an executable property. To do this, go to the icon of your application, right-click, go to properties, and change the target by adding the following at the end, "--testnet".

![Changing Electrum properties](/images/propertiesElectrum.png)

### Step 2: Importing via Private Key
Open Electrum and on the first screen, enter the name of your wallet.

![Entering the wallet name](/images/nameWallet.png)

After naming the wallet, click next and select the option "Import Bitcoin addresses or private keys," and click next.

![Importing generated wallet](/images/importingWallet.png)

Once done, copy the private key generated in your terminal, paste it, and click next. Now, create the wallet password and click next again.

![Creating wallet password](/images/createPassword.png)

Ready! If you have followed the steps correctly as described, your wallet is now created and imported into Electrum.
You can make transactions to it using Bitcoin Faucet to verify if it was generated and imported correctly.
