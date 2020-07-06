#!/bin/bash

command_name=$1
command_args=${@:2}
image_name=picpay

case $command_name in
  setup)
    docker build \
      --tag "$image_name:latest" \
      --build-arg uid=$EUID \
      --build-arg workdir=/picpay-app \
      .
  ;;
  run)
    docker run \
      --rm -it \
      --volume $PWD:/picpay-app \
      --network host \
      $image_name $command_args \
      npm start
  ;;
  bash)
    docker run \
      --rm -it \
      --volume $PWD:/picpay-app \
      --network host \
      $image_name $command_args \
      /bin/sh
  ;;
  help)
    echo "PicPay Challenge CLI"
    echo
    echo "Usage:"
    echo "picpay setup               - Setup docker"
    echo "picpay run                 - Serve the app"
    echo "picpay bash                - Run app's container in bash"
  ;;
  *)
    $0 help
  ;;
esac

