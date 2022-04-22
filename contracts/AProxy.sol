//SPDX-License-Identifier: Unlicense

pragma solidity ^ 0.8.10;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/metatx/ERC2771Context.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./Aave_Contracts/protocol/pool/Pool.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract AProxy is Ownable, ERC2771Context{
  using SafeMath for uint256;
  using SafeERC20 for IERC20;

  constructor(address _trustedForwarder) ERC2771Context(_trustedForwarder){}

function _msgSender() internal view override(Context, ERC2771Context) returns (address){
        return ERC2771Context._msgSender();
    }
function _msgData() internal view override(Context, ERC2771Context) returns (bytes calldata){

        return ERC2771Context._msgData();

    }
address public AAVE_LENDING_POOL_ADDRESS = 0xE039BdF1d874d27338e09B55CB09879Dedca52D8;
Pool public lendingPool = Pool(AAVE_LENDING_POOL_ADDRESS);

function depositToAave(address asset, uint256 amount,uint16 referralCode) public  {

        IERC20 underlying = IERC20(asset);

        underlying.transferFrom(_msgSender(), address(this), amount);
        underlying.approve(AAVE_LENDING_POOL_ADDRESS, amount);
        lendingPool.supply(asset, amount,_msgSender(), referralCode);
    }
}