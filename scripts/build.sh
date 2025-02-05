# build.sh - A simple script to build the Go service
#!/bin/bash

go build -o datafeed-aggregator cmd/main.go
