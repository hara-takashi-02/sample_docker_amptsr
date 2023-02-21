# sample_docker_amptsr  

### 【Apache+mysql+phpmyadmimn+typescript+sass+react】バリューセット+react  

indexページ  
localhost:8080  
DBテーブル  
localhost:3000  

cd /Users/takashi/Documents/docker/sample_docker  
docker-compose up --build -d  
docker exec -it app bash  
npm run build  
npm run watch  
docker compose down --rmi all --volumes --remove-orphans  

node_modulesを再インストール  
npm install  

webpackでTypeScript × Sassの開発環境を構築しよう  
https://posipan.com/webpack-ts-sass/  