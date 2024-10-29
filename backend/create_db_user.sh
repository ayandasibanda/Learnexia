#!/bin/bash

DB_NAME=""
DB_USER=""
DB_PASS=""
DB_HOST="localhost"

# Run MySQL commands to create the user, assign password, and set privileges
sudo mysql -u root -p <<EOF

SET GLOBAL validate_password.policy=LOW;
SET GLOBAL validate_password.length=4;

CREATE DATABASE IF NOT EXISTS ${DB_NAME};
CREATE USER IF NOT EXISTS '${DB_USER}'@'${DB_HOST}' IDENTIFIED BY '${DB_PASS}';
ALTER USER '${DB_USER}'@'${DB_HOST}' IDENTIFIED WITH mysql_native_password BY '${DB_PASS}';
GRANT ALL PRIVILEGES ON ${DB_NAME}.* TO '${DB_USER}'@'${DB_HOST}';
FLUSH PRIVILEGES;

-- Restore password policy to default settings
SET GLOBAL validate_password.policy=MEDIUM;
SET GLOBAL validate_password.length=8;
EOF

echo "User ${DB_USER} created with access to ${DB_NAME} on ${DB_HOST}."
