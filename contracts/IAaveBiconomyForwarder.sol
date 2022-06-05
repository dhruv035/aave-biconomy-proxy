//SPDX-License-Identifier: Unlicense

pragma solidity ^0.8.10;

interface IAaveBiconomyForwarder {
    function depositToAave(
        address asset,
        uint256 amount,
        uint16 referralCode
    ) external;
    
    function withdrawFromAave(
        address asset,
        uint256 amount
    ) external;

    function setTrustedForwarder(address forwarder) external;

    function setLendingPoolAddress(address lPAddress) external;
}