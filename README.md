## Introduction

Reproduction for https://github.com/prisma/prisma/issues/3425

## Steps

1. Clone this repository and run `yarn` or `npm i`
2. Replace the credentials in `prisma/.env` with your own database
3. Run `npx prisma migrate save --experimental` and `npx prisma migrate up --experimental`
4. Insert two rows in the database as a sample data
5. Run the script using `yarn start`


## Version information

```
@prisma/cli          : 2.6.0-dev.44
Current platform     : darwin
Query Engine         : query-engine 686b1f56ade7661ab2f1e60a6b3346abe2746175 (at node_modules/@prisma/cli/query-engine-darwin)
Migration Engine     : migration-engine-cli 686b1f56ade7661ab2f1e60a6b3346abe2746175 (at node_modules/@prisma/cli/migration-engine-darwin)
Introspection Engine : introspection-core 686b1f56ade7661ab2f1e60a6b3346abe2746175 (at node_modules/@prisma/cli/introspection-engine-darwin)
Format Binary        : prisma-fmt 686b1f56ade7661ab2f1e60a6b3346abe2746175 (at node_modules/@prisma/cli/prisma-fmt-darwin)
Studio               : 0.268.0

```
