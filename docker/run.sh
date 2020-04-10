#! /bin/sh

set -ex

APPLICATION=${APPLICATION:-web}
PORT=${PORT:-8080}

case "$APPLICATION" in
    web) exec yarn serve -p ${PORT} ;;
    test) exec yarn test ;;
    *) echo "The environment variable APPLICATION must be provided." && exit 1 ;;
esac
