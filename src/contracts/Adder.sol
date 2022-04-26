pragma solidity ^0.8.12;

contract Adder {
    uint256 value;
    uint256 price = 1.5 ether;

    function addNumber(uint256 _numberToAdd) public payable {
        require(msg.value >= price, "You need to send more ETH");
        value = value + _numberToAdd;
    }
}
