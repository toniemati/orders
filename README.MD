## Setup

1. `git clone https://github.com/toniemati/orders.git`
2. `npm install`
3. `npm run start` for run
4. `npm run test` for tests

## Tabele

### Order

| Pole           | Typ                                  |
|----------------|--------------------------------------|
| `id`           | `BIGSERIAL PRIMARY KEY`              |
| `net_total`    | `NUMERIC(12,2) NOT NULL DEFAULT 0.00`|
| `tax`          | `NUMERIC(12,2) NOT NULL DEFAULT 0.00`|
| `total`        | `NUMERIC(12,2) NOT NULL DEFAULT 0.00`|
| `created_at`   | `TIMESTAMP NOT NULL DEFAULT NOW()`   |
| `updated_at`   | `TIMESTAMP NOT NULL DEFAULT NOW()`   |

## OrderItem

| Pole           | Typ                                                     |
|----------------|---------------------------------------------------------|
| `id`           | `BIGSERIAL PRIMARY KEY`                                 |
| `order_id`     | `BIGINT NOT NULL REFERENCES order(id) ON DELETE CASCADE`|
| `net_price`    | `NUMERIC(12,2) NOT NULL`                                |
| `quantity`     | `INT NOT NULL DEFAULT 1`                                |
| `net_total`    | `NUMERIC(12,2) NOT NULL DEFAULT 0.00`                   |
| `total`        | `NUMERIC(12,2) NOT NULL DEFAULT 0.00`                   |
| `created_at`   | `TIMESTAMP NOT NULL DEFAULT NOW()`                      |
| `updated_at`   | `TIMESTAMP NOT NULL DEFAULT NOW()`                      |