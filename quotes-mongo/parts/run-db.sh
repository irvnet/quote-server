#!/bin/bash

sudo docker run -it --rm mysql sh -c 'exec mysql -h"127.0.0.1" -P"3306" -uroot -p'

