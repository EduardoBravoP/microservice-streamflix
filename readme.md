## Streamflix
Para a plataforma da Streamflix, é utilizado 2 microsserviços principais que se comunicam entre si:
- Streaming
- Analytics

### Eventos:
- `stream.started`
    - Atualiza analytics do filme
    - Atualiza recomendações para o usuário

```json
"stream.started": {
	"userId": "usuario-01",
	"contentId": "conteudo-01",
	"device": "phone",
	"quality": "4K",
	"timestamp": "02-06-2025T21:30:00"
}
```

- `stream.paused`
    - Gera dados de recomendação para o usuário
    
    ```json
    
    "stream.paused": {
    	"userId": "usuario-01",
    	"contentId": "conteudo-01",
    	"device": "phone",
    	"quality": "4K",
    	"videoPosition": "600" // 10 minutes
    	"timestamp": "02-06-2025T21:30:00",
    }
    ```
    
- `stream.resumed`
    - Gera dados de recomendação para o usuário
    
    ```json
    
    "stream.resumed": {
    	"userId": "usuario-01",
    	"contentId": "conteudo-01",
    	"device": "phone",
    	"quality": "4K",
    	"videoPosition": "600" // 10 minutes
    	"timestamp": "02-06-2025T21:30:00",
    }
    ```
    
- `stream.finished`
    - Atualiza analytics do filme
    - Atualiza recomendações para o usuário

### Setup do projeto:
1. Instale as dependencias de ambos os serviços;
2. Rode o comando `docker-compose up -d` na pasta raiz para subir os serviços;
3. Rode o comando `docker-compose up -d` na pasta de ambos os serviços para subir os bancos de dados;
4. Para rodar a aplicação, bastar rodar `yarn dev`.