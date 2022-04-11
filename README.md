# hello-prisma

PrismaのPostgreSQL設定を試すためのレポジトリ。<br>
https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-postgres

- モジュールインストール

```sh
npm install
```

- PostgreSQL起動

```sh
docker-compose up -d
```

- PostgreSQL接続

```sh
psql -h localhost -p 15432 -U admin -d prisma
```

- schemaから型ファイル生成

```sh
npx prisma generate
```

- Prismaからクエリ発行

```sh
npx ts-node index.ts
```
