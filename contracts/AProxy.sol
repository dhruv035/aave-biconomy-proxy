//SPDX-License-Identifier: Unlicense

pragma solidity 0.8.10;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/metatx/ERC2771Context.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./Aave_Contracts/protocol/pool/Pool.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract AProxy is Ownable, ERC2771Context{
    using SafeMath for uint256;
    using SafeERC20 for IERC20;

    address public AAVE_LENDING_POOL_ADDRESS = 0x6C9fB0D5bD9429eb9Cd96B85B81d872281771E6B;
    Pool public lendingPool = Pool(AAVE_LENDING_POOL_ADDRESS);

    constructor(address _trustedForwarder) ERC2771Context(_trustedForwarder){}

    function _msgSender() internal view override(Context, ERC2771Context) returns (address){

            return ERC2771Context._msgSender();
        }

    function _msgData() internal view override(Context, ERC2771Context) returns (bytes calldata){

            return ERC2771Context._msgData();
        }

    function setTrustedForwarder(address forwarder) external onlyOwner {
        _trustedForwarder=forwarder;
    }
    function depositToAave(address asset, uint256 amount,uint16 referralCode) external {
            
            address[] memory tokenList = lendingPool.getReservesList();
            bool flag = false;
            for(uint16 i = 0; i<tokenList.length-1;i=i+1)
            {
                if(tokenList[i]==asset)
                    flag=true;
            }
            require(flag==true);
            IERC20 underlying = IERC20(asset);
            underlying.transferFrom(_msgSender(), address(this), amount);
            underlying.approve(AAVE_LENDING_POOL_ADDRESS, amount);
            lendingPool.supply(asset, amount,_msgSender(), referralCode);
        }
    function withdrawFromAave(address asset, uint256 amount) external {
            
            address[] memory tokenList = lendingPool.getReservesList();
            bool flag = false;
            for(uint16 i = 0; i<tokenList.length-1;i=i+1)
            {
                if(tokenList[i]==asset)
                    flag=true;
            }
            require(flag==true);
            IERC20 underlying = IERC20(asset);
            underlying.transferFrom(_msgSender(), address(this), amount);
            underlying.approve(AAVE_LENDING_POOL_ADDRESS, amount);
            lendingPool.withdraw(asset, amount,_msgSender());
        }
    }