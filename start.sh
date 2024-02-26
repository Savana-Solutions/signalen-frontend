#!/bin/sh

set -e

# Create the .well-known directory if it doesn't exist
mkdir -p /usr/share/nginx/html/.well-known/

echo "Contact: https://www.mycleancity.nl/index.php#contacttwo" > /usr/share/nginx/html/.well-known/security.txt
echo "Expires: 2025-10-31T23:59:01+00:00" >> /usr/share/nginx/html/.well-known/security.txt
echo "Preferred-Languages: nl,en" >> /usr/share/nginx/html/.well-known/security.txt
echo "Canonical: ${signalenFrontendCanonicalUrl}" >> /usr/share/nginx/html/.well-known/security.txt

node /internals/scripts/validate-config.js
node /internals/scripts/inject-config.js

nginx -g "daemon off;"
