#! /bin/sh

set -ex

APPLICATION=${APPLICATION}

case "$APPLICATION" in
    web) exec yarn serve -p 80 ;;
    test) exec yarn test ;;
    *) echo "The environment variable APPLICATION must be provided." && exit 1 ;;
esac
