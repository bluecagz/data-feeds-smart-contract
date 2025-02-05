package feed

import "testing"

func TestAggregator(t *testing.T) {
	// Placeholder test for the aggregator function
	err := StartAggregator()
	if err != nil {
		t.Errorf("Error starting aggregator: %v", err)
	}
}
