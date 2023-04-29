// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
import "hardhat/console.sol";

contract Demo {
    uint public a = 10;

    constructor(uint b) {
        console.log("This is the value of b:", b);
        b=a;
    }

    function setter(uint _a) public {
        a = _a;
    }

    function getter() public view returns(uint) {
        return a;
    }
}
