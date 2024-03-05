serviceName=vue3

build: # docker-composeをビルド
	docker-compose build
run: # create-vueを通じてvueをインストール
	docker-compose run $(serviceName) npm init vue@latest

yarn: # install yarn
	docker-compose run $(serviceName) yarn install

ps: # コンテナーの起動状況確認
	docker-compose ps

up: # コンテナーを起動
	docker-compose up -d
down: # コンテナーを停止
	docker-compose down
downv: # コンテナーを停止した上でvolumeも削除
	docker-compose down -v


