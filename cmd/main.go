package main

import (
	"data-feeds-smart-contract/pkg/feed"
	"fmt"
)

func main() {
	fmt.Println("Starting Go Data Feed Smart Contract Aggregator...")
	feed.StartAggregator()
}
