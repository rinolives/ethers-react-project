pragma solidity ^0.8.12;

contract Adder {
    uint256 public value;
    uint256 public price = 1.5 ether;

    function addNumber(uint256 _numberToAdd) public payable {
        require(msg.value >= price, "You need to send more ETH");
        value = value + _numberToAdd;
    }
}
