// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract FeedAggregator {
    uint256 public latestFeedData;

    function updateFeed(uint256 data) public {
        latestFeedData = data;
    }
}
