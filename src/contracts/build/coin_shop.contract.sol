// Automatically generated with Reach 0.1.13 (f79282c4)
pragma abicoder v2;
pragma solidity ^0.8.17;

/**
 * @dev Interface of the ERC20 standard as defined in the EIP.
 */
interface IERC20 {
    /**
     * @dev Returns the amount of tokens in existence.
     */
    function totalSupply() external view returns (uint256);

    /**
     * @dev Returns the amount of tokens owned by `account`.
     */
    function balanceOf(address account) external view returns (uint256);

    /**
     * @dev Moves `amount` tokens from the caller's account to `to`.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * Emits a {Transfer} event.
     */
    function transfer(address to, uint256 amount) external returns (bool);

    /**
     * @dev Returns the remaining number of tokens that `spender` will be
     * allowed to spend on behalf of `owner` through {transferFrom}. This is
     * zero by default.
     *
     * This value changes when {approve} or {transferFrom} are called.
     */
    function allowance(address owner, address spender) external view returns (uint256);

    /**
     * @dev Sets `amount` as the allowance of `spender` over the caller's tokens.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * IMPORTANT: Beware that changing an allowance with this method brings the risk
     * that someone may use both the old and the new allowance by unfortunate
     * transaction ordering. One possible solution to mitigate this race
     * condition is to first reduce the spender's allowance to 0 and set the
     * desired value afterwards:
     * https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729
     *
     * Emits an {Approval} event.
     */
    function approve(address spender, uint256 amount) external returns (bool);

    /**
     * @dev Moves `amount` tokens from `from` to `to` using the
     * allowance mechanism. `amount` is then deducted from the caller's
     * allowance.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * Emits a {Transfer} event.
     */
    function transferFrom(
        address from,
        address to,
        uint256 amount
    ) external returns (bool);

    /**
     * @dev Emitted when `value` tokens are moved from one account (`from`) to
     * another (`to`).
     *
     * Note that `value` may be zero.
     */
    event Transfer(address indexed from, address indexed to, uint256 value);

    /**
     * @dev Emitted when the allowance of a `spender` for an `owner` is set by
     * a call to {approve}. `value` is the new allowance.
     */
    event Approval(address indexed owner, address indexed spender, uint256 value);
}

/**
 * @dev Interface for the optional metadata functions from the ERC20 standard.
 *
 * _Available since v4.1._
 */
interface IERC20Metadata is IERC20 {
    /**
     * @dev Returns the name of the token.
     */
    function name() external view returns (string memory);

    /**
     * @dev Returns the symbol of the token.
     */
    function symbol() external view returns (string memory);

    /**
     * @dev Returns the decimals places of the token.
     */
    function decimals() external view returns (uint8);
}

/**
 * @dev Provides information about the current execution context, including the
 * sender of the transaction and its data. While these are generally available
 * via msg.sender and msg.data, they should not be accessed in such a direct
 * manner, since when dealing with meta-transactions the account sending and
 * paying for execution may not be the actual sender (as far as an application
 * is concerned).
 *
 * This contract is only required for intermediate, library-like contracts.
 */
abstract contract Context {
    function _msgSender() internal view virtual returns (address) {
        return msg.sender;
    }

    function _msgData() internal view virtual returns (bytes calldata) {
        return msg.data;
    }
}

/**
 * @dev Implementation of the {IERC20} interface.
 *
 * This implementation is agnostic to the way tokens are created. This means
 * that a supply mechanism has to be added in a derived contract using {_mint}.
 * For a generic mechanism see {ERC20PresetMinterPauser}.
 *
 * TIP: For a detailed writeup see our guide
 * https://forum.zeppelin.solutions/t/how-to-implement-erc20-supply-mechanisms/226[How
 * to implement supply mechanisms].
 *
 * We have followed general OpenZeppelin Contracts guidelines: functions revert
 * instead returning `false` on failure. This behavior is nonetheless
 * conventional and does not conflict with the expectations of ERC20
 * applications.
 *
 * Additionally, an {Approval} event is emitted on calls to {transferFrom}.
 * This allows applications to reconstruct the allowance for all accounts just
 * by listening to said events. Other implementations of the EIP may not emit
 * these events, as it isn't required by the specification.
 *
 * Finally, the non-standard {decreaseAllowance} and {increaseAllowance}
 * functions have been added to mitigate the well-known issues around setting
 * allowances. See {IERC20-approve}.
 */
contract ERC20 is Context, IERC20, IERC20Metadata {
    mapping(address => uint256) private _balances;

    mapping(address => mapping(address => uint256)) private _allowances;

    uint256 private _totalSupply;

    string private _name;
    string private _symbol;

    /**
     * @dev Sets the values for {name} and {symbol}.
     *
     * The default value of {decimals} is 18. To select a different value for
     * {decimals} you should overload it.
     *
     * All two of these values are immutable: they can only be set once during
     * construction.
     */
    constructor(string memory name_, string memory symbol_) {
        _name = name_;
        _symbol = symbol_;
    }

    /**
     * @dev Returns the name of the token.
     */
    function name() public view virtual override returns (string memory) {
        return _name;
    }

    /**
     * @dev Returns the symbol of the token, usually a shorter version of the
     * name.
     */
    function symbol() public view virtual override returns (string memory) {
        return _symbol;
    }

    /**
     * @dev Returns the number of decimals used to get its user representation.
     * For example, if `decimals` equals `2`, a balance of `505` tokens should
     * be displayed to a user as `5.05` (`505 / 10 ** 2`).
     *
     * Tokens usually opt for a value of 18, imitating the relationship between
     * Ether and Wei. This is the value {ERC20} uses, unless this function is
     * overridden;
     *
     * NOTE: This information is only used for _display_ purposes: it in
     * no way affects any of the arithmetic of the contract, including
     * {IERC20-balanceOf} and {IERC20-transfer}.
     */
    function decimals() public view virtual override returns (uint8) {
        return 18;
    }

    /**
     * @dev See {IERC20-totalSupply}.
     */
    function totalSupply() public view virtual override returns (uint256) {
        return _totalSupply;
    }

    /**
     * @dev See {IERC20-balanceOf}.
     */
    function balanceOf(address account) public view virtual override returns (uint256) {
        return _balances[account];
    }

    /**
     * @dev See {IERC20-transfer}.
     *
     * Requirements:
     *
     * - `to` cannot be the zero address.
     * - the caller must have a balance of at least `amount`.
     */
    function transfer(address to, uint256 amount) public virtual override returns (bool) {
        address owner = _msgSender();
        _transfer(owner, to, amount);
        return true;
    }

    /**
     * @dev See {IERC20-allowance}.
     */
    function allowance(address owner, address spender) public view virtual override returns (uint256) {
        return _allowances[owner][spender];
    }

    /**
     * @dev See {IERC20-approve}.
     *
     * NOTE: If `amount` is the maximum `uint256`, the allowance is not updated on
     * `transferFrom`. This is semantically equivalent to an infinite approval.
     *
     * Requirements:
     *
     * - `spender` cannot be the zero address.
     */
    function approve(address spender, uint256 amount) public virtual override returns (bool) {
        address owner = _msgSender();
        _approve(owner, spender, amount);
        return true;
    }

    /**
     * @dev See {IERC20-transferFrom}.
     *
     * Emits an {Approval} event indicating the updated allowance. This is not
     * required by the EIP. See the note at the beginning of {ERC20}.
     *
     * NOTE: Does not update the allowance if the current allowance
     * is the maximum `uint256`.
     *
     * Requirements:
     *
     * - `from` and `to` cannot be the zero address.
     * - `from` must have a balance of at least `amount`.
     * - the caller must have allowance for ``from``'s tokens of at least
     * `amount`.
     */
    function transferFrom(
        address from,
        address to,
        uint256 amount
    ) public virtual override returns (bool) {
        address spender = _msgSender();
        _spendAllowance(from, spender, amount);
        _transfer(from, to, amount);
        return true;
    }

    /**
     * @dev Atomically increases the allowance granted to `spender` by the caller.
     *
     * This is an alternative to {approve} that can be used as a mitigation for
     * problems described in {IERC20-approve}.
     *
     * Emits an {Approval} event indicating the updated allowance.
     *
     * Requirements:
     *
     * - `spender` cannot be the zero address.
     */
    function increaseAllowance(address spender, uint256 addedValue) public virtual returns (bool) {
        address owner = _msgSender();
        _approve(owner, spender, _allowances[owner][spender] + addedValue);
        return true;
    }

    /**
     * @dev Atomically decreases the allowance granted to `spender` by the caller.
     *
     * This is an alternative to {approve} that can be used as a mitigation for
     * problems described in {IERC20-approve}.
     *
     * Emits an {Approval} event indicating the updated allowance.
     *
     * Requirements:
     *
     * - `spender` cannot be the zero address.
     * - `spender` must have allowance for the caller of at least
     * `subtractedValue`.
     */
    function decreaseAllowance(address spender, uint256 subtractedValue) public virtual returns (bool) {
        address owner = _msgSender();
        uint256 currentAllowance = _allowances[owner][spender];
        require(currentAllowance >= subtractedValue, "ERC20: decreased allowance below zero");
        unchecked {
            _approve(owner, spender, currentAllowance - subtractedValue);
        }

        return true;
    }

    /**
     * @dev Moves `amount` of tokens from `sender` to `recipient`.
     *
     * This internal function is equivalent to {transfer}, and can be used to
     * e.g. implement automatic token fees, slashing mechanisms, etc.
     *
     * Emits a {Transfer} event.
     *
     * Requirements:
     *
     * - `from` cannot be the zero address.
     * - `to` cannot be the zero address.
     * - `from` must have a balance of at least `amount`.
     */
    function _transfer(
        address from,
        address to,
        uint256 amount
    ) internal virtual {
        require(from != address(0), "ERC20: transfer from the zero address");
        require(to != address(0), "ERC20: transfer to the zero address");

        _beforeTokenTransfer(from, to, amount);

        uint256 fromBalance = _balances[from];
        require(fromBalance >= amount, "ERC20: transfer amount exceeds balance");
        unchecked {
            _balances[from] = fromBalance - amount;
        }
        _balances[to] += amount;

        emit Transfer(from, to, amount);

        _afterTokenTransfer(from, to, amount);
    }

    /** @dev Creates `amount` tokens and assigns them to `account`, increasing
     * the total supply.
     *
     * Emits a {Transfer} event with `from` set to the zero address.
     *
     * Requirements:
     *
     * - `account` cannot be the zero address.
     */
    function _mint(address account, uint256 amount) internal virtual {
        require(account != address(0), "ERC20: mint to the zero address");

        _beforeTokenTransfer(address(0), account, amount);

        _totalSupply += amount;
        _balances[account] += amount;
        emit Transfer(address(0), account, amount);

        _afterTokenTransfer(address(0), account, amount);
    }

    /**
     * @dev Destroys `amount` tokens from `account`, reducing the
     * total supply.
     *
     * Emits a {Transfer} event with `to` set to the zero address.
     *
     * Requirements:
     *
     * - `account` cannot be the zero address.
     * - `account` must have at least `amount` tokens.
     */
    function _burn(address account, uint256 amount) internal virtual {
        require(account != address(0), "ERC20: burn from the zero address");

        _beforeTokenTransfer(account, address(0), amount);

        uint256 accountBalance = _balances[account];
        require(accountBalance >= amount, "ERC20: burn amount exceeds balance");
        unchecked {
            _balances[account] = accountBalance - amount;
        }
        _totalSupply -= amount;

        emit Transfer(account, address(0), amount);

        _afterTokenTransfer(account, address(0), amount);
    }

    /**
     * @dev Sets `amount` as the allowance of `spender` over the `owner` s tokens.
     *
     * This internal function is equivalent to `approve`, and can be used to
     * e.g. set automatic allowances for certain subsystems, etc.
     *
     * Emits an {Approval} event.
     *
     * Requirements:
     *
     * - `owner` cannot be the zero address.
     * - `spender` cannot be the zero address.
     */
    function _approve(
        address owner,
        address spender,
        uint256 amount
    ) internal virtual {
        require(owner != address(0), "ERC20: approve from the zero address");
        require(spender != address(0), "ERC20: approve to the zero address");

        _allowances[owner][spender] = amount;
        emit Approval(owner, spender, amount);
    }

    /**
     * @dev Spend `amount` form the allowance of `owner` toward `spender`.
     *
     * Does not update the allowance amount in case of infinite allowance.
     * Revert if not enough allowance is available.
     *
     * Might emit an {Approval} event.
     */
    function _spendAllowance(
        address owner,
        address spender,
        uint256 amount
    ) internal virtual {
        uint256 currentAllowance = allowance(owner, spender);
        if (currentAllowance != type(uint256).max) {
            require(currentAllowance >= amount, "ERC20: insufficient allowance");
            unchecked {
                _approve(owner, spender, currentAllowance - amount);
            }
        }
    }

    /**
     * @dev Hook that is called before any transfer of tokens. This includes
     * minting and burning.
     *
     * Calling conditions:
     *
     * - when `from` and `to` are both non-zero, `amount` of ``from``'s tokens
     * will be transferred to `to`.
     * - when `from` is zero, `amount` tokens will be minted for `to`.
     * - when `to` is zero, `amount` of ``from``'s tokens will be burned.
     * - `from` and `to` are never both zero.
     *
     * To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks].
     */
    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal virtual {}

    /**
     * @dev Hook that is called after any transfer of tokens. This includes
     * minting and burning.
     *
     * Calling conditions:
     *
     * - when `from` and `to` are both non-zero, `amount` of ``from``'s tokens
     * has been transferred to `to`.
     * - when `from` is zero, `amount` tokens have been minted for `to`.
     * - when `to` is zero, `amount` of ``from``'s tokens have been burned.
     * - `from` and `to` are never both zero.
     *
     * To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks].
     */
    function _afterTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal virtual {}
}
/*
  ReachToken essentially emulates Algorand Standard Assets on Ethereum, but doesn't include things like clawback or a separation of management and creator.
 */
contract ReachToken is ERC20 {
  address private _creator;
  string private _url;
  string private _metadata;
  uint8 private _decimals;

  constructor (
    string memory name_,
    string memory symbol_,
    string memory url_,
    string memory metadata_,
    uint256 supply_,
    uint256 decimals_
  ) ERC20(name_, symbol_) {
    _creator = _msgSender();
    _mint(_creator, supply_);
    _url = url_;
    _metadata = metadata_;
    _decimals = uint8(decimals_);
  }

  function url() public view returns (string memory) { return _url; }

  function metadata() public view returns (string memory) { return _metadata; }

  function decimals() public view override returns (uint8) { return _decimals; }

  function burn(uint256 amount) public virtual returns (bool) {
    require(_msgSender() == _creator, "must be creator");
    _burn(_creator, amount);
    return true;
  }

  function destroy() public virtual {
    require(_msgSender() == _creator, "must be creator");
    require(totalSupply() == 0, "must be no supply");
    selfdestruct(payable(_creator));
  }
}

// Generated code includes meaning of numbers
error ReachError(uint256 msg);

contract Stdlib {
  function safeAdd(uint256 x, uint256 y) internal pure returns (uint256 z) {
    require((z = x + y) >= x, "add overflow"); }
  function safeSub(uint256 x, uint256 y) internal pure returns (uint256 z) {
    require((z = x - y) <= x, "sub wraparound"); }
  function safeMul(uint256 x, uint256 y) internal pure returns (uint256 z) {
    require(y == 0 || (z = x * y) / y == x, "mul overflow"); }
  function safeDiv(uint256 x, uint256 y) internal pure returns (uint256 z) {
    require(y != 0, "div by zero"); z = x / y; }
  function safeMod(uint256 x, uint256 y) internal pure returns (uint256 z) {
    require(y != 0, "div by zero"); z = x % y; }

  function unsafeAdd(uint256 x, uint256 y) internal pure returns (uint256 z) {
    unchecked { z = x + y; } }
  function unsafeSub(uint256 x, uint256 y) internal pure returns (uint256 z) {
    unchecked { z = x - y; } }
  function unsafeMul(uint256 x, uint256 y) internal pure returns (uint256 z) {
    unchecked { z = x * y; } }
  function unsafeDiv(uint256 x, uint256 y) internal pure returns (uint256 z) {
    unchecked { z = x / y; } }
  function unsafeMod(uint256 x, uint256 y) internal pure returns (uint256 z) {
    unchecked { z = x % y; } }

  function safeSqrt(uint256 y) internal pure returns (uint256 z) {
    if (y > 3) {
      z = y;
      uint256 x = y / 2 + 1;
      while (x < z) {
        z = x;
        x = (y / x + x) / 2;
      }
    } else if (y != 0) {
      z = 1;
    }
  }

  // From OpenZeppelin --- MIT license
  function uintToStringDyn(uint256 value) internal pure returns (string memory) {
        // Inspired by OraclizeAPI's implementation - MIT licence
        // https://github.com/oraclize/ethereum-api/blob/b42146b063c7d6ee1358846c198246239e9360e8/oraclizeAPI_0.4.25.sol

        if (value == 0) {
            return "0";
        }
        uint256 temp = value;
        uint256 digits;
        while (temp != 0) {
            digits++;
            temp /= 10;
        }
        bytes memory buffer = new bytes(digits);
        while (value != 0) {
            digits -= 1;
            buffer[digits] = bytes1(uint8(48 + uint256(value % 10)));
            value /= 10;
        }
        return string(buffer);
    }

  function reachRequire(bool succ, uint256 errMsg) internal pure {
    if ( ! succ ) {
      revert ReachError(errMsg);
    }
  }

  function checkFunReturn(bool succ, bytes memory returnData, uint256 errMsg) internal pure returns (bytes memory) {
    if (succ) {
      return returnData;
    } else {
      if (returnData.length > 0) {
        assembly {
          let returnData_size := mload(returnData)
          revert(add(32, returnData), returnData_size)
        }
      } else {
        revert ReachError(errMsg);
      }
    }
  }

  function tokenAllowance(address payable token, address owner, address spender) internal returns (uint256 amt) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0)}(abi.encodeWithSelector(IERC20.allowance.selector, owner, spender));
    checkFunReturn(ok, ret, 0 /*'token.allowance'*/);
    amt = abi.decode(ret, (uint256));
  }

  function tokenTransferFrom(address payable token, address sender, address recipient, uint256 amt) internal returns (bool res) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0)}(abi.encodeWithSelector(IERC20.transferFrom.selector, sender, recipient, amt));
    checkFunReturn(ok, ret, 1 /*'token.transferFrom'*/);
    res = abi.decode(ret, (bool));
  }

  function tokenTransfer(address payable token, address recipient, uint256 amt) internal returns (bool res) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0)}(abi.encodeWithSelector(IERC20.transfer.selector, recipient, amt));
    checkFunReturn(ok, ret, 2 /*'token.transfer'*/);
    res = abi.decode(ret, (bool));
  }
  function safeTokenTransfer(address payable token, address recipient, uint256 amt) internal {
    require(tokenTransfer(token, recipient, amt));
  }

  function reachTokenBurn(address payable token, uint256 amt) internal returns (bool res) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0)}(abi.encodeWithSelector(ReachToken.burn.selector, amt));
    checkFunReturn(ok, ret, 3 /*'token.burn'*/);
    res = abi.decode(ret, (bool));
  }
  function safeReachTokenBurn(address payable token, uint256 amt) internal {
    require(reachTokenBurn(token, amt));
  }

  function reachTokenDestroy(address payable token) internal returns (bool res) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0)}(abi.encodeWithSelector(ReachToken.destroy.selector));
    checkFunReturn(ok, ret, 4 /*'token.destroy'*/);
    res = true;
  }
  function safeReachTokenDestroy(address payable token) internal {
    require(reachTokenDestroy(token));
  }

  function readPayAmt(address sender, address payable token) internal returns (uint256 amt) {
    amt = tokenAllowance(token, sender, address(this));
    require(checkPayAmt(sender, token, amt));
  }

  function checkPayAmt(address sender, address payable token, uint256 amt) internal returns (bool) {
    return tokenTransferFrom(token, sender, address(this), amt);
  }

  function tokenApprove(address payable token, address spender, uint256 amt) internal returns (bool res) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0)}(abi.encodeWithSelector(IERC20.approve.selector, spender, amt));
    checkFunReturn(ok, ret, 5 /*'token.approve'*/);
    res = abi.decode(ret, (bool));
  }

  function tokenBalanceOf(address payable token, address owner) internal returns (uint256 res) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0) }(abi.encodeWithSelector(IERC20.balanceOf.selector, owner));
    checkFunReturn(ok, ret, 6 /*'token.balanceOf'*/);
    res = abi.decode(ret, (uint256));
  }
}

struct T0 {
  uint256 elem0;
  uint256 elem1;
  uint256 elem2;
  }
struct T2 {
  T0 elem0;
  }
enum _enum_T3 {buyer_api_purchase_bronze0_177, buyer_api_purchase_gold0_177, buyer_api_purchase_silver0_177, controller_api_restock0_177, controller_api_set_prices0_177, controller_api_terminate0_177, controller_api_toggle_pause0_177}
struct T3 {
  _enum_T3 which;
  bool _buyer_api_purchase_bronze0_177;
  bool _buyer_api_purchase_gold0_177;
  bool _buyer_api_purchase_silver0_177;
  T2 _controller_api_restock0_177;
  T2 _controller_api_set_prices0_177;
  bool _controller_api_terminate0_177;
  bool _controller_api_toggle_pause0_177;
  }
struct T4 {
  uint256 elem0;
  T3 elem1;
  }
struct T5 {
  uint256 elem0;
  uint256 elem1;
  bool elem2;
  }
struct T7 {
  address payable v5020;
  address payable v5021;
  address payable v5022;
  address payable v5023;
  T0 v5062;
  bool v5063;
  T5[3] v5071;
  uint256 v5072;
  T5 v9317;
  uint256 v9318;
  uint256 v9320;
  uint256 v9322;
  T0 v9323;
  }
struct T8 {
  address payable v5020;
  address payable v5021;
  address payable v5022;
  address payable v5023;
  T0 v5062;
  bool v5063;
  bool v5064;
  T5[3] v5071;
  uint256 v5072;
  bool v5102;
  bool v5104;
  T5 v5105;
  uint256 v5106;
  T5 v5107;
  uint256 v5108;
  T5 v5109;
  uint256 v5110;
  T0 v5111;
  uint256 v5113;
  uint256 v5114;
  uint256 v5115;
  }
struct T9 {
  uint256 elem0;
  address payable elem1;
  address payable elem2;
  address payable elem3;
  }
struct T10 {
  address payable v5020;
  address payable v5021;
  address payable v5022;
  address payable v5023;
  T5[3] v5038;
  }
struct T11 {
  uint256 elem0;
  }
struct T12 {
  address payable elem0;
  address payable elem1;
  address payable elem2;
  address payable elem3;
  T0 elem4;
  bool elem5;
  bool elem6;
  uint256 elem7;
  T5[3] elem8;
  uint256 elem9;
  }
contract ReachContract is Stdlib {
  uint256 current_step;
  uint256 current_time;
    bytes current_svbs;
  uint256 creation_time;
     bool locked;
  function _reachCreationTime() external view returns (uint256) { return creation_time; }
  function _reachCurrentTime() external view returns (uint256) { return current_time; }
  function _reachCurrentState() external view returns (uint256, bytes memory) { return (current_step, current_svbs); }
  function array_set6(T5[3] memory arr, uint256 idx, T5 memory val) internal  returns (T5[3] memory arrp) {
    for (uint256 i = 0; i < 3; i++){
      arrp[i] = arr[i];
      }
    arrp[idx] = val;
    }
  event _reach_e0(address _who, T9 _a);
  event _reach_e1(address _who, T11 _a);
  event _reach_e3(address _who, T11 _a);
  event _reach_e4(address _who, T4 _a);
  event _reach_oe_v5102(bool v0);
  event _reach_oe_v5857(bool v0);
  event _reach_oe_v6469(bool v0);
  event _reach_oe_v7081(bool v0);
  event _reach_oe_v7647(bool v0);
  event _reach_oe_v8204(bool v0);
  event _reach_oe_v8756(bool v0);
  event price_change(uint256 v0, uint256 v1, uint256 v2);
  event purchase(bytes6 v0, address payable v1);
  event restock(uint256 v0, uint256 v1, uint256 v2);
  receive () external payable {}
  fallback () external payable {}
  struct Memory {
    bool nil;
    bool _reachr_buyer_api_purchase_bronze;
    bool _reachr_buyer_api_purchase_gold;
    bool _reachr_buyer_api_purchase_silver;
    T0 _reachr_coin_prices;
    T0 _reachr_coin_supply;
    bool _reachr_controller_api_restock;
    bool _reachr_controller_api_set_prices;
    bool _reachr_controller_api_terminate;
    bool _reachr_controller_api_toggle_pause;
    bool _reachr_is_paused;
    }
  struct _F13725 {
    bool v13682;
    T3 v13683;
    }
  function _reacha_buyer_api_purchase_bronze(bool _a, Memory memory _Memory) internal  {
    _F13725 memory _f;
    _f.v13683.which = _enum_T3.buyer_api_purchase_bronze0_177;
    _f.v13683._buyer_api_purchase_bronze0_177 = _f.v13682;
    T4  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v13683;
    _reachi_4(_ja, _Memory);
    }
  struct _F13726 {
    bool v13686;
    T3 v13687;
    }
  function _reacha_buyer_api_purchase_gold(bool _a, Memory memory _Memory) internal  {
    _F13726 memory _f;
    _f.v13687.which = _enum_T3.buyer_api_purchase_gold0_177;
    _f.v13687._buyer_api_purchase_gold0_177 = _f.v13686;
    T4  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v13687;
    _reachi_4(_ja, _Memory);
    }
  struct _F13727 {
    bool v13690;
    T3 v13691;
    }
  function _reacha_buyer_api_purchase_silver(bool _a, Memory memory _Memory) internal  {
    _F13727 memory _f;
    _f.v13691.which = _enum_T3.buyer_api_purchase_silver0_177;
    _f.v13691._buyer_api_purchase_silver0_177 = _f.v13690;
    T4  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v13691;
    _reachi_4(_ja, _Memory);
    }
  function _reacha_coin_prices(bool _a, Memory memory _Memory) internal view {
    if ((current_step < uint256(5))) {
      reachRequire(((current_step == uint256(3))), uint256(7) /*'(./src/contracts/coin_shop.rsh:78:20:property binding,[],Just "Incorrect state: not leaf")'*/);
      (T7 memory _svs) = abi.decode(current_svbs, (T7));
      _Memory._reachr_coin_prices = _svs.v5062;
      }
    else {
      reachRequire(((current_step == uint256(5))), uint256(8) /*'(./src/contracts/coin_shop.rsh:78:20:property binding,[],Just "Incorrect state: not leaf")'*/);
      (T8 memory _svs) = abi.decode(current_svbs, (T8));
      _Memory._reachr_coin_prices = _svs.v5062;
      }
    }
  function _reacha_coin_supply(bool _a, Memory memory _Memory) internal view {
    if ((current_step < uint256(5))) {
      reachRequire(((current_step == uint256(3))), uint256(9) /*'(./src/contracts/coin_shop.rsh:77:20:property binding,[],Just "Incorrect state: not leaf")'*/);
      (T7 memory _svs) = abi.decode(current_svbs, (T7));
      _Memory._reachr_coin_supply = _svs.v9323;
      }
    else {
      reachRequire(((current_step == uint256(5))), uint256(10) /*'(./src/contracts/coin_shop.rsh:77:20:property binding,[],Just "Incorrect state: not leaf")'*/);
      (T8 memory _svs) = abi.decode(current_svbs, (T8));
      _Memory._reachr_coin_supply = _svs.v5111;
      }
    }
  struct _F13730 {
    T2 v13695;
    T3 v13696;
    }
  function _reacha_controller_api_restock(T0 memory _a, Memory memory _Memory) internal  {
    _F13730 memory _f;
    _f.v13695.elem0 = _a;
    _f.v13696.which = _enum_T3.controller_api_restock0_177;
    _f.v13696._controller_api_restock0_177 = _f.v13695;
    T4  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v13696;
    _reachi_4(_ja, _Memory);
    }
  struct _F13731 {
    T2 v13701;
    T3 v13702;
    }
  function _reacha_controller_api_set_prices(T0 memory _a, Memory memory _Memory) internal  {
    _F13731 memory _f;
    _f.v13701.elem0 = _a;
    _f.v13702.which = _enum_T3.controller_api_set_prices0_177;
    _f.v13702._controller_api_set_prices0_177 = _f.v13701;
    T4  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v13702;
    _reachi_4(_ja, _Memory);
    }
  struct _F13732 {
    bool v13706;
    T3 v13707;
    }
  function _reacha_controller_api_terminate(bool _a, Memory memory _Memory) internal  {
    _F13732 memory _f;
    _f.v13707.which = _enum_T3.controller_api_terminate0_177;
    _f.v13707._controller_api_terminate0_177 = _f.v13706;
    T4  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v13707;
    _reachi_4(_ja, _Memory);
    }
  struct _F13733 {
    bool v13710;
    T3 v13711;
    }
  function _reacha_controller_api_toggle_pause(bool _a, Memory memory _Memory) internal  {
    _F13733 memory _f;
    _f.v13711.which = _enum_T3.controller_api_toggle_pause0_177;
    _f.v13711._controller_api_toggle_pause0_177 = _f.v13710;
    T4  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v13711;
    _reachi_4(_ja, _Memory);
    }
  function _reacha_is_paused(bool _a, Memory memory _Memory) internal view {
    if ((current_step < uint256(5))) {
      reachRequire(((current_step == uint256(3))), uint256(11) /*'(./src/contracts/coin_shop.rsh:79:18:property binding,[],Just "Incorrect state: not leaf")'*/);
      (T7 memory _svs) = abi.decode(current_svbs, (T7));
      _Memory._reachr_is_paused = _svs.v5063;
      }
    else {
      reachRequire(((current_step == uint256(5))), uint256(12) /*'(./src/contracts/coin_shop.rsh:79:18:property binding,[],Just "Incorrect state: not leaf")'*/);
      (T8 memory _svs) = abi.decode(current_svbs, (T8));
      _Memory._reachr_is_paused = _svs.v5063;
      }
    }
  struct _F13735 {
    T5 v4997;
    T5[3] v4998;
    T5[3] v5028;
    T5[3] v5032;
    }
  function _reachi_0(T9 memory _a, Memory memory _Memory) internal  {
    _F13735 memory _f;
    reachRequire((! locked), uint256(13) /*'locked'*/);
    emit _reach_e0(msg.sender, _a);
    reachRequire((((_a.elem0) == uint256(0)) || (current_time == (_a.elem0))), uint256(14) /*'time check at ./src/contracts/coin_shop.rsh:102:11:dot'*/);
    _f.v4997.elem0 = uint256(0);
    _f.v4997.elem1 = uint256(0);
    _f.v4997.elem2 = false;
    _f.v4998[0] = _f.v4997;
    _f.v4998[1] = _f.v4997;
    _f.v4998[2] = _f.v4997;
    _f.v5028 = array_set6(_f.v4998, uint256(0), (T5({elem0: uint256(0), elem1: (_f.v4998[uint256(0)]).elem1, elem2: (_f.v4998[uint256(0)]).elem2})));
    _f.v5032 = array_set6(_f.v5028, uint256(1), (T5({elem0: uint256(0), elem1: (_f.v5028[uint256(1)]).elem1, elem2: (_f.v5028[uint256(1)]).elem2})));
    reachRequire(((((_a.elem2) == (_a.elem1)) ? false : true)), uint256(15) /*'(./src/contracts/coin_shop.rsh:102:11:dot,[],Just "non-network tokens distinct")'*/);
    reachRequire(((((_a.elem3) == (_a.elem1)) ? false : (((_a.elem3) == (_a.elem2)) ? false : true))), uint256(16) /*'(./src/contracts/coin_shop.rsh:102:11:dot,[],Just "non-network tokens distinct")'*/);
    
    
    
    reachRequire((msg.value == uint256(0)), uint256(17) /*'(./src/contracts/coin_shop.rsh:102:11:dot,[],"verify network token pay amount")'*/);
    reachRequire((((((_a.elem1) == (_a.elem2)) ? false : (((_a.elem1) == (_a.elem3)) ? false : true)) ? (((_a.elem2) == (_a.elem3)) ? false : true) : false)), uint256(18) /*'(reach standard library:57:5:application,[at ./src/contracts/coin_shop.rsh:105:10:application call to "check" (defined at: reach standard library:49:32:function exp)],Nothing)'*/);
    T10 memory nsvs;
    nsvs.v5020 = payable(msg.sender);
    nsvs.v5021 = (_a.elem1);
    nsvs.v5022 = (_a.elem2);
    nsvs.v5023 = (_a.elem3);
    nsvs.v5038 = (array_set6(_f.v5032, uint256(2), (T5({elem0: uint256(0), elem1: (_f.v5032[uint256(2)]).elem1, elem2: (_f.v5032[uint256(2)]).elem2}))));
    current_step = uint256(1);
    current_time = uint256(block.number);
    current_svbs = abi.encode(nsvs);
    }
  struct _F13736 {
    T0 v5061;
    }
  function _reachi_1(T11 memory _a, Memory memory _Memory) internal  {
    _F13736 memory _f;
    reachRequire((current_step == uint256(1)), uint256(19) /*'state check at ./src/contracts/coin_shop.rsh:111:11:dot'*/);
    (T10 memory _svs) = abi.decode(current_svbs, (T10));
    reachRequire((! locked), uint256(20) /*'locked'*/);
    emit _reach_e1(msg.sender, _a);
    reachRequire((((_a.elem0) == uint256(0)) || (current_time == (_a.elem0))), uint256(21) /*'time check at ./src/contracts/coin_shop.rsh:111:11:dot'*/);
    reachRequire((msg.value == uint256(0)), uint256(22) /*'(./src/contracts/coin_shop.rsh:111:11:dot,[],"verify network token pay amount")'*/);
    reachRequire(((_svs.v5020 == payable(msg.sender))), uint256(23) /*'(./src/contracts/coin_shop.rsh:111:11:dot,[],Just "sender correct")'*/);
    _f.v5061.elem0 = uint256(10000000);
    _f.v5061.elem1 = uint256(20000000);
    _f.v5061.elem2 = uint256(30000000);
    T12  memory _ja;
    _ja.elem0 = _svs.v5020;
    _ja.elem1 = _svs.v5021;
    _ja.elem2 = _svs.v5022;
    _ja.elem3 = _svs.v5023;
    _ja.elem4 = _f.v5061;
    _ja.elem5 = false;
    _ja.elem6 = false;
    _ja.elem7 = uint256(block.number);
    _ja.elem8 = _svs.v5038;
    _ja.elem9 = uint256(0);
    _reachl_2(_ja, _Memory);
    }
  struct _F13737 {
    uint256 v9368;
    T5[3] v9373;
    uint256 v9379;
    }
  function _reachi_3(T11 memory _a, Memory memory _Memory) internal  {
    _F13737 memory _f;
    reachRequire((current_step == uint256(3)), uint256(24) /*'state check at reach standard library:197:11:dot'*/);
    (T7 memory _svs) = abi.decode(current_svbs, (T7));
    reachRequire((! locked), uint256(25) /*'locked'*/);
    emit _reach_e3(msg.sender, _a);
    reachRequire((((_a.elem0) == uint256(0)) || (current_time == (_a.elem0))), uint256(26) /*'time check at reach standard library:197:11:dot'*/);
    reachRequire((msg.value == uint256(0)), uint256(27) /*'(reach standard library:197:11:dot,[at ./src/contracts/coin_shop.rsh:289:12:application call to "closeTo" (defined at: reach standard library:195:8:function exp)],"verify network token pay amount")'*/);
    reachRequire(((_svs.v5020 == payable(msg.sender))), uint256(28) /*'(reach standard library:197:11:dot,[at ./src/contracts/coin_shop.rsh:289:12:application call to "closeTo" (defined at: reach standard library:195:8:function exp)],Just "sender correct")'*/);
    reachRequire((((unsafeSub(_svs.v5072, _svs.v5072)) >= uint256(0))), uint256(29) /*'(reach standard library:198:46:application,[at ./src/contracts/coin_shop.rsh:289:12:application call to "closeTo" (defined at: reach standard library:195:8:function exp)],Just "assume >= 0")'*/);
    _svs.v5020.transfer(_svs.v5072);
    _f.v9368 = unsafeSub(_svs.v9318, _svs.v9318);
    reachRequire(((_f.v9368 >= uint256(0))), uint256(30) /*'(reach standard library:198:46:application,[at ./src/contracts/coin_shop.rsh:289:12:application call to "closeTo" (defined at: reach standard library:195:8:function exp)],Just "assume >= 0")'*/);
    _f.v9373 = array_set6(_svs.v5071, uint256(0), (T5({elem0: _f.v9368, elem1: _svs.v9317.elem1, elem2: _svs.v9317.elem2})));
    safeTokenTransfer(_svs.v5021, _svs.v5020, _svs.v9318);
    _f.v9379 = unsafeSub(((_f.v9373[uint256(1)]).elem0), _svs.v9320);
    reachRequire(((_f.v9379 >= uint256(0))), uint256(31) /*'(reach standard library:198:46:application,[at ./src/contracts/coin_shop.rsh:289:12:application call to "closeTo" (defined at: reach standard library:195:8:function exp)],Just "assume >= 0")'*/);
    safeTokenTransfer(_svs.v5022, _svs.v5020, _svs.v9320);
    reachRequire((((unsafeSub((((array_set6(_f.v9373, uint256(1), (T5({elem0: _f.v9379, elem1: (_f.v9373[uint256(1)]).elem1, elem2: (_f.v9373[uint256(1)]).elem2}))))[uint256(2)]).elem0), _svs.v9322)) >= uint256(0))), uint256(32) /*'(reach standard library:198:46:application,[at ./src/contracts/coin_shop.rsh:289:12:application call to "closeTo" (defined at: reach standard library:195:8:function exp)],Just "assume >= 0")'*/);
    safeTokenTransfer(_svs.v5023, _svs.v5020, _svs.v9322);
    current_step = 0x0;
    current_time = 0x0;
    delete current_svbs;
    }
  struct _F13738 {
    uint256 v5761;
    uint256 v5820;
    uint256 v5850;
    bytes6 v5856;
    uint256 v6297;
    uint256 v6432;
    uint256 v6462;
    bytes6 v6468;
    uint256 v6833;
    uint256 v7044;
    uint256 v7074;
    bytes6 v7080;
    T2 v7170;
    uint256 v7374;
    T5[3] v7379;
    uint256 v7382;
    T5[3] v7387;
    uint256 v7390;
    T5[3] v7395;
    T2 v7706;
    }
  function _reachi_4(T4 memory _a, Memory memory _Memory) internal  {
    _F13738 memory _f;
    reachRequire((current_step == uint256(5)), uint256(33) /*'state check at ./src/contracts/coin_shop.rsh:114:64:dot'*/);
    (T8 memory _svs) = abi.decode(current_svbs, (T8));
    reachRequire((! locked), uint256(34) /*'locked'*/);
    emit _reach_e4(msg.sender, _a);
    reachRequire((((_a.elem0) == uint256(0)) || (current_time == (_a.elem0))), uint256(35) /*'time check at ./src/contracts/coin_shop.rsh:114:64:dot'*/);
    if ((_a.elem1).which == _enum_T3.buyer_api_purchase_bronze0_177) {
    reachRequire((_svs.v5104), uint256(36) /*'(reach standard library:57:5:application,[at ./src/contracts/coin_shop.rsh:153:18:application call to "check" (defined at: reach standard library:49:32:function exp),at ./src/contracts/coin_shop.rsh:152:41:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:152:41:function exp),at ./src/contracts/coin_shop.rsh:114:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:152:41:function exp),at ./src/contracts/coin_shop.rsh:114:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:114:64:function exp),at ./src/contracts/coin_shop.rsh:126:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:126:18:function exp)],Just "contract is currently inactive")'*/);
    reachRequire(((_svs.v5106 >= uint256(1))), uint256(37) /*'(reach standard library:57:5:application,[at ./src/contracts/coin_shop.rsh:154:18:application call to "check" (defined at: reach standard library:49:32:function exp),at ./src/contracts/coin_shop.rsh:152:41:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:152:41:function exp),at ./src/contracts/coin_shop.rsh:114:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:152:41:function exp),at ./src/contracts/coin_shop.rsh:114:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:114:64:function exp),at ./src/contracts/coin_shop.rsh:126:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:126:18:function exp)],Just "balance insufficient for transaction")'*/);
    _f.v5761 = unsafeAdd(_svs.v5072, _svs.v5113);
    reachRequire(((_f.v5761 <= uint256(115792089237316195423570985008687907853269984665640564039457584007913129639935))), uint256(38) /*'(./src/contracts/coin_shop.rsh:114:64:dot,[],Just "assume <= UInt.max")'*/);
    reachRequire((msg.value == _svs.v5113), uint256(39) /*'(./src/contracts/coin_shop.rsh:114:64:dot,[],"verify network token pay amount")'*/);
    reachRequire(((_svs.v5106 <= uint256(115792089237316195423570985008687907853269984665640564039457584007913129639935))), uint256(40) /*'(./src/contracts/coin_shop.rsh:114:64:dot,[],Just "assume <= UInt.max")'*/);
    reachRequire((checkPayAmt(msg.sender, _svs.v5021, uint256(0))), uint256(41) /*'(./src/contracts/coin_shop.rsh:114:64:dot,[],"verify non-network token pay amount")'*/);
    reachRequire(((_svs.v5108 <= uint256(115792089237316195423570985008687907853269984665640564039457584007913129639935))), uint256(42) /*'(./src/contracts/coin_shop.rsh:114:64:dot,[],Just "assume <= UInt.max")'*/);
    reachRequire((checkPayAmt(msg.sender, _svs.v5022, uint256(0))), uint256(43) /*'(./src/contracts/coin_shop.rsh:114:64:dot,[],"verify non-network token pay amount")'*/);
    reachRequire(((_svs.v5110 <= uint256(115792089237316195423570985008687907853269984665640564039457584007913129639935))), uint256(44) /*'(./src/contracts/coin_shop.rsh:114:64:dot,[],Just "assume <= UInt.max")'*/);
    reachRequire((checkPayAmt(msg.sender, _svs.v5023, uint256(0))), uint256(45) /*'(./src/contracts/coin_shop.rsh:114:64:dot,[],"verify non-network token pay amount")'*/);
    _f.v5820 = unsafeSub(_f.v5761, _f.v5761);
    reachRequire(((_f.v5820 >= uint256(0))), uint256(46) /*'(./src/contracts/coin_shop.rsh:161:64:application,[at ./src/contracts/coin_shop.rsh:159:27:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:159:27:function exp)],Just "assume >= 0")'*/);
    _svs.v5020.transfer(_f.v5761);
    _f.v5850 = unsafeSub(_svs.v5106, uint256(1));
    reachRequire(((_f.v5850 >= uint256(0))), uint256(47) /*'(./src/contracts/coin_shop.rsh:162:56:application,[at ./src/contracts/coin_shop.rsh:159:27:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:159:27:function exp)],Just "assume >= 0")'*/);
    safeTokenTransfer(_svs.v5021, payable(msg.sender), uint256(1));
    _f.v5856 = hex'62726f6e7a65';
    emit purchase( _f.v5856,  payable(msg.sender));
    emit _reach_oe_v5857( (true));
    _Memory._reachr_buyer_api_purchase_bronze = (true);
    T12  memory _ja;
    _ja.elem0 = _svs.v5020;
    _ja.elem1 = _svs.v5021;
    _ja.elem2 = _svs.v5022;
    _ja.elem3 = _svs.v5023;
    _ja.elem4 = _svs.v5062;
    _ja.elem5 = _svs.v5063;
    _ja.elem6 = _svs.v5064;
    _ja.elem7 = uint256(block.number);
    _ja.elem8 = (array_set6(_svs.v5071, uint256(0), (T5({elem0: _f.v5850, elem1: _svs.v5105.elem1, elem2: _svs.v5105.elem2}))));
    _ja.elem9 = _f.v5820;
    _reachl_2(_ja, _Memory);
    } else if ((_a.elem1).which == _enum_T3.buyer_api_purchase_gold0_177) {
    reachRequire((_svs.v5104), uint256(48) /*'(reach standard library:57:5:application,[at ./src/contracts/coin_shop.rsh:193:18:application call to "check" (defined at: reach standard library:49:32:function exp),at ./src/contracts/coin_shop.rsh:192:39:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:192:39:function exp),at ./src/contracts/coin_shop.rsh:114:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:192:39:function exp),at ./src/contracts/coin_shop.rsh:114:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:114:64:function exp),at ./src/contracts/coin_shop.rsh:126:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:126:18:function exp)],Just "contract is currently inactive")'*/);
    reachRequire(((_svs.v5110 >= uint256(1))), uint256(49) /*'(reach standard library:57:5:application,[at ./src/contracts/coin_shop.rsh:194:18:application call to "check" (defined at: reach standard library:49:32:function exp),at ./src/contracts/coin_shop.rsh:192:39:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:192:39:function exp),at ./src/contracts/coin_shop.rsh:114:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:192:39:function exp),at ./src/contracts/coin_shop.rsh:114:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:114:64:function exp),at ./src/contracts/coin_shop.rsh:126:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:126:18:function exp)],Just "balance insufficient for transaction")'*/);
    _f.v6297 = unsafeAdd(_svs.v5072, _svs.v5115);
    reachRequire(((_f.v6297 <= uint256(115792089237316195423570985008687907853269984665640564039457584007913129639935))), uint256(50) /*'(./src/contracts/coin_shop.rsh:114:64:dot,[],Just "assume <= UInt.max")'*/);
    reachRequire((msg.value == _svs.v5115), uint256(51) /*'(./src/contracts/coin_shop.rsh:114:64:dot,[],"verify network token pay amount")'*/);
    reachRequire(((_svs.v5106 <= uint256(115792089237316195423570985008687907853269984665640564039457584007913129639935))), uint256(52) /*'(./src/contracts/coin_shop.rsh:114:64:dot,[],Just "assume <= UInt.max")'*/);
    reachRequire((checkPayAmt(msg.sender, _svs.v5021, uint256(0))), uint256(53) /*'(./src/contracts/coin_shop.rsh:114:64:dot,[],"verify non-network token pay amount")'*/);
    reachRequire(((_svs.v5108 <= uint256(115792089237316195423570985008687907853269984665640564039457584007913129639935))), uint256(54) /*'(./src/contracts/coin_shop.rsh:114:64:dot,[],Just "assume <= UInt.max")'*/);
    reachRequire((checkPayAmt(msg.sender, _svs.v5022, uint256(0))), uint256(55) /*'(./src/contracts/coin_shop.rsh:114:64:dot,[],"verify non-network token pay amount")'*/);
    reachRequire(((_svs.v5110 <= uint256(115792089237316195423570985008687907853269984665640564039457584007913129639935))), uint256(56) /*'(./src/contracts/coin_shop.rsh:114:64:dot,[],Just "assume <= UInt.max")'*/);
    reachRequire((checkPayAmt(msg.sender, _svs.v5023, uint256(0))), uint256(57) /*'(./src/contracts/coin_shop.rsh:114:64:dot,[],"verify non-network token pay amount")'*/);
    _f.v6432 = unsafeSub(_f.v6297, _f.v6297);
    reachRequire(((_f.v6432 >= uint256(0))), uint256(58) /*'(./src/contracts/coin_shop.rsh:201:64:application,[at ./src/contracts/coin_shop.rsh:199:27:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:199:27:function exp)],Just "assume >= 0")'*/);
    _svs.v5020.transfer(_f.v6297);
    _f.v6462 = unsafeSub(_svs.v5110, uint256(1));
    reachRequire(((_f.v6462 >= uint256(0))), uint256(59) /*'(./src/contracts/coin_shop.rsh:202:56:application,[at ./src/contracts/coin_shop.rsh:199:27:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:199:27:function exp)],Just "assume >= 0")'*/);
    safeTokenTransfer(_svs.v5023, payable(msg.sender), uint256(1));
    _f.v6468 = hex'676f6c640000';
    emit purchase( _f.v6468,  payable(msg.sender));
    emit _reach_oe_v6469( (true));
    _Memory._reachr_buyer_api_purchase_gold = (true);
    T12  memory _ja;
    _ja.elem0 = _svs.v5020;
    _ja.elem1 = _svs.v5021;
    _ja.elem2 = _svs.v5022;
    _ja.elem3 = _svs.v5023;
    _ja.elem4 = _svs.v5062;
    _ja.elem5 = _svs.v5063;
    _ja.elem6 = _svs.v5064;
    _ja.elem7 = uint256(block.number);
    _ja.elem8 = (array_set6(_svs.v5071, uint256(2), (T5({elem0: _f.v6462, elem1: _svs.v5109.elem1, elem2: _svs.v5109.elem2}))));
    _ja.elem9 = _f.v6432;
    _reachl_2(_ja, _Memory);
    } else if ((_a.elem1).which == _enum_T3.buyer_api_purchase_silver0_177) {
    reachRequire((_svs.v5104), uint256(60) /*'(reach standard library:57:5:application,[at ./src/contracts/coin_shop.rsh:173:18:application call to "check" (defined at: reach standard library:49:32:function exp),at ./src/contracts/coin_shop.rsh:172:41:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:172:41:function exp),at ./src/contracts/coin_shop.rsh:114:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:172:41:function exp),at ./src/contracts/coin_shop.rsh:114:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:114:64:function exp),at ./src/contracts/coin_shop.rsh:126:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:126:18:function exp)],Just "contract is currently inactive")'*/);
    reachRequire(((_svs.v5108 >= uint256(1))), uint256(61) /*'(reach standard library:57:5:application,[at ./src/contracts/coin_shop.rsh:174:18:application call to "check" (defined at: reach standard library:49:32:function exp),at ./src/contracts/coin_shop.rsh:172:41:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:172:41:function exp),at ./src/contracts/coin_shop.rsh:114:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:172:41:function exp),at ./src/contracts/coin_shop.rsh:114:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:114:64:function exp),at ./src/contracts/coin_shop.rsh:126:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:126:18:function exp)],Just "balance insufficient for transaction")'*/);
    _f.v6833 = unsafeAdd(_svs.v5072, _svs.v5114);
    reachRequire(((_f.v6833 <= uint256(115792089237316195423570985008687907853269984665640564039457584007913129639935))), uint256(62) /*'(./src/contracts/coin_shop.rsh:114:64:dot,[],Just "assume <= UInt.max")'*/);
    reachRequire((msg.value == _svs.v5114), uint256(63) /*'(./src/contracts/coin_shop.rsh:114:64:dot,[],"verify network token pay amount")'*/);
    reachRequire(((_svs.v5106 <= uint256(115792089237316195423570985008687907853269984665640564039457584007913129639935))), uint256(64) /*'(./src/contracts/coin_shop.rsh:114:64:dot,[],Just "assume <= UInt.max")'*/);
    reachRequire((checkPayAmt(msg.sender, _svs.v5021, uint256(0))), uint256(65) /*'(./src/contracts/coin_shop.rsh:114:64:dot,[],"verify non-network token pay amount")'*/);
    reachRequire(((_svs.v5108 <= uint256(115792089237316195423570985008687907853269984665640564039457584007913129639935))), uint256(66) /*'(./src/contracts/coin_shop.rsh:114:64:dot,[],Just "assume <= UInt.max")'*/);
    reachRequire((checkPayAmt(msg.sender, _svs.v5022, uint256(0))), uint256(67) /*'(./src/contracts/coin_shop.rsh:114:64:dot,[],"verify non-network token pay amount")'*/);
    reachRequire(((_svs.v5110 <= uint256(115792089237316195423570985008687907853269984665640564039457584007913129639935))), uint256(68) /*'(./src/contracts/coin_shop.rsh:114:64:dot,[],Just "assume <= UInt.max")'*/);
    reachRequire((checkPayAmt(msg.sender, _svs.v5023, uint256(0))), uint256(69) /*'(./src/contracts/coin_shop.rsh:114:64:dot,[],"verify non-network token pay amount")'*/);
    _f.v7044 = unsafeSub(_f.v6833, _f.v6833);
    reachRequire(((_f.v7044 >= uint256(0))), uint256(70) /*'(./src/contracts/coin_shop.rsh:181:64:application,[at ./src/contracts/coin_shop.rsh:179:27:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:179:27:function exp)],Just "assume >= 0")'*/);
    _svs.v5020.transfer(_f.v6833);
    _f.v7074 = unsafeSub(_svs.v5108, uint256(1));
    reachRequire(((_f.v7074 >= uint256(0))), uint256(71) /*'(./src/contracts/coin_shop.rsh:182:56:application,[at ./src/contracts/coin_shop.rsh:179:27:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:179:27:function exp)],Just "assume >= 0")'*/);
    safeTokenTransfer(_svs.v5022, payable(msg.sender), uint256(1));
    _f.v7080 = hex'73696c766572';
    emit purchase( _f.v7080,  payable(msg.sender));
    emit _reach_oe_v7081( (true));
    _Memory._reachr_buyer_api_purchase_silver = (true);
    T12  memory _ja;
    _ja.elem0 = _svs.v5020;
    _ja.elem1 = _svs.v5021;
    _ja.elem2 = _svs.v5022;
    _ja.elem3 = _svs.v5023;
    _ja.elem4 = _svs.v5062;
    _ja.elem5 = _svs.v5063;
    _ja.elem6 = _svs.v5064;
    _ja.elem7 = uint256(block.number);
    _ja.elem8 = (array_set6(_svs.v5071, uint256(1), (T5({elem0: _f.v7074, elem1: _svs.v5107.elem1, elem2: _svs.v5107.elem2}))));
    _ja.elem9 = _f.v7044;
    _reachl_2(_ja, _Memory);
    } else if ((_a.elem1).which == _enum_T3.controller_api_restock0_177) {
    _f.v7170 = (_a.elem1)._controller_api_restock0_177;
    reachRequire(((payable(msg.sender) == _svs.v5020)), uint256(72) /*'(reach standard library:57:5:application,[at ./src/contracts/coin_shop.rsh:216:18:application call to "check" (defined at: reach standard library:49:32:function exp),at ./src/contracts/coin_shop.rsh:215:42:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:215:42:function exp),at ./src/contracts/coin_shop.rsh:114:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:215:42:function exp),at ./src/contracts/coin_shop.rsh:114:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:114:64:function exp),at ./src/contracts/coin_shop.rsh:126:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:126:18:function exp)],Just "action not authorized")'*/);
    reachRequire(((((((_f.v7170.elem0).elem0) <= uint256(1200)) ? (((_f.v7170.elem0).elem1) <= uint256(600)) : false) ? (((_f.v7170.elem0).elem2) <= uint256(200)) : false)), uint256(73) /*'(reach standard library:57:5:application,[at ./src/contracts/coin_shop.rsh:217:18:application call to "check" (defined at: reach standard library:49:32:function exp),at ./src/contracts/coin_shop.rsh:215:42:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:215:42:function exp),at ./src/contracts/coin_shop.rsh:114:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:215:42:function exp),at ./src/contracts/coin_shop.rsh:114:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:114:64:function exp),at ./src/contracts/coin_shop.rsh:126:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:126:18:function exp)],Just "illegal param(s) were provided")'*/);
    reachRequire(((_svs.v5072 <= uint256(115792089237316195423570985008687907853269984665640564039457584007913129639935))), uint256(74) /*'(./src/contracts/coin_shop.rsh:114:64:dot,[],Just "assume <= UInt.max")'*/);
    reachRequire((msg.value == uint256(0)), uint256(75) /*'(./src/contracts/coin_shop.rsh:114:64:dot,[],"verify network token pay amount")'*/);
    _f.v7374 = unsafeAdd(_svs.v5106, ((_f.v7170.elem0).elem0));
    reachRequire(((_f.v7374 <= uint256(115792089237316195423570985008687907853269984665640564039457584007913129639935))), uint256(76) /*'(./src/contracts/coin_shop.rsh:114:64:dot,[],Just "assume <= UInt.max")'*/);
    _f.v7379 = array_set6(_svs.v5071, uint256(0), (T5({elem0: _f.v7374, elem1: _svs.v5105.elem1, elem2: _svs.v5105.elem2})));
    reachRequire((checkPayAmt(msg.sender, _svs.v5021, ((_f.v7170.elem0).elem0))), uint256(77) /*'(./src/contracts/coin_shop.rsh:114:64:dot,[],"verify non-network token pay amount")'*/);
    _f.v7382 = unsafeAdd(((_f.v7379[uint256(1)]).elem0), ((_f.v7170.elem0).elem1));
    reachRequire(((_f.v7382 <= uint256(115792089237316195423570985008687907853269984665640564039457584007913129639935))), uint256(78) /*'(./src/contracts/coin_shop.rsh:114:64:dot,[],Just "assume <= UInt.max")'*/);
    _f.v7387 = array_set6(_f.v7379, uint256(1), (T5({elem0: _f.v7382, elem1: (_f.v7379[uint256(1)]).elem1, elem2: (_f.v7379[uint256(1)]).elem2})));
    reachRequire((checkPayAmt(msg.sender, _svs.v5022, ((_f.v7170.elem0).elem1))), uint256(79) /*'(./src/contracts/coin_shop.rsh:114:64:dot,[],"verify non-network token pay amount")'*/);
    _f.v7390 = unsafeAdd(((_f.v7387[uint256(2)]).elem0), ((_f.v7170.elem0).elem2));
    reachRequire(((_f.v7390 <= uint256(115792089237316195423570985008687907853269984665640564039457584007913129639935))), uint256(80) /*'(./src/contracts/coin_shop.rsh:114:64:dot,[],Just "assume <= UInt.max")'*/);
    _f.v7395 = array_set6(_f.v7387, uint256(2), (T5({elem0: _f.v7390, elem1: (_f.v7387[uint256(2)]).elem1, elem2: (_f.v7387[uint256(2)]).elem2})));
    reachRequire((checkPayAmt(msg.sender, _svs.v5023, ((_f.v7170.elem0).elem2))), uint256(81) /*'(./src/contracts/coin_shop.rsh:114:64:dot,[],"verify non-network token pay amount")'*/);
    emit restock( ((_f.v7395[uint256(0)]).elem0),  ((_f.v7395[uint256(1)]).elem0),  ((_f.v7395[uint256(2)]).elem0));
    emit _reach_oe_v7647( (true));
    _Memory._reachr_controller_api_restock = (true);
    T12  memory _ja;
    _ja.elem0 = _svs.v5020;
    _ja.elem1 = _svs.v5021;
    _ja.elem2 = _svs.v5022;
    _ja.elem3 = _svs.v5023;
    _ja.elem4 = _svs.v5062;
    _ja.elem5 = _svs.v5063;
    _ja.elem6 = _svs.v5064;
    _ja.elem7 = uint256(block.number);
    _ja.elem8 = _f.v7395;
    _ja.elem9 = _svs.v5072;
    _reachl_2(_ja, _Memory);
    } else if ((_a.elem1).which == _enum_T3.controller_api_set_prices0_177) {
    _f.v7706 = (_a.elem1)._controller_api_set_prices0_177;
    reachRequire(((payable(msg.sender) == _svs.v5020)), uint256(82) /*'(reach standard library:57:5:application,[at ./src/contracts/coin_shop.rsh:234:18:application call to "check" (defined at: reach standard library:49:32:function exp),at ./src/contracts/coin_shop.rsh:233:50:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:233:50:function exp),at ./src/contracts/coin_shop.rsh:114:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:233:50:function exp),at ./src/contracts/coin_shop.rsh:114:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:114:64:function exp),at ./src/contracts/coin_shop.rsh:126:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:126:18:function exp)],Just "action not authorized")'*/);
    reachRequire(((_svs.v5072 <= uint256(115792089237316195423570985008687907853269984665640564039457584007913129639935))), uint256(83) /*'(./src/contracts/coin_shop.rsh:114:64:dot,[],Just "assume <= UInt.max")'*/);
    reachRequire((msg.value == uint256(0)), uint256(84) /*'(./src/contracts/coin_shop.rsh:114:64:dot,[],"verify network token pay amount")'*/);
    reachRequire(((_svs.v5106 <= uint256(115792089237316195423570985008687907853269984665640564039457584007913129639935))), uint256(85) /*'(./src/contracts/coin_shop.rsh:114:64:dot,[],Just "assume <= UInt.max")'*/);
    reachRequire((checkPayAmt(msg.sender, _svs.v5021, uint256(0))), uint256(86) /*'(./src/contracts/coin_shop.rsh:114:64:dot,[],"verify non-network token pay amount")'*/);
    reachRequire(((_svs.v5108 <= uint256(115792089237316195423570985008687907853269984665640564039457584007913129639935))), uint256(87) /*'(./src/contracts/coin_shop.rsh:114:64:dot,[],Just "assume <= UInt.max")'*/);
    reachRequire((checkPayAmt(msg.sender, _svs.v5022, uint256(0))), uint256(88) /*'(./src/contracts/coin_shop.rsh:114:64:dot,[],"verify non-network token pay amount")'*/);
    reachRequire(((_svs.v5110 <= uint256(115792089237316195423570985008687907853269984665640564039457584007913129639935))), uint256(89) /*'(./src/contracts/coin_shop.rsh:114:64:dot,[],Just "assume <= UInt.max")'*/);
    reachRequire((checkPayAmt(msg.sender, _svs.v5023, uint256(0))), uint256(90) /*'(./src/contracts/coin_shop.rsh:114:64:dot,[],"verify non-network token pay amount")'*/);
    emit price_change( ((_f.v7706.elem0).elem0),  ((_f.v7706.elem0).elem1),  ((_f.v7706.elem0).elem2));
    emit _reach_oe_v8204( (true));
    _Memory._reachr_controller_api_set_prices = (true);
    T12  memory _ja;
    _ja.elem0 = _svs.v5020;
    _ja.elem1 = _svs.v5021;
    _ja.elem2 = _svs.v5022;
    _ja.elem3 = _svs.v5023;
    _ja.elem4 = (_f.v7706.elem0);
    _ja.elem5 = _svs.v5063;
    _ja.elem6 = _svs.v5064;
    _ja.elem7 = uint256(block.number);
    _ja.elem8 = _svs.v5071;
    _ja.elem9 = _svs.v5072;
    _reachl_2(_ja, _Memory);
    } else if ((_a.elem1).which == _enum_T3.controller_api_terminate0_177) {
    reachRequire(((payable(msg.sender) == _svs.v5020)), uint256(91) /*'(reach standard library:57:5:application,[at ./src/contracts/coin_shop.rsh:271:18:application call to "check" (defined at: reach standard library:49:32:function exp),at ./src/contracts/coin_shop.rsh:270:40:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:270:40:function exp),at ./src/contracts/coin_shop.rsh:114:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:270:40:function exp),at ./src/contracts/coin_shop.rsh:114:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:114:64:function exp),at ./src/contracts/coin_shop.rsh:126:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:126:18:function exp)],Just "action not authorized")'*/);
    reachRequire(((_svs.v5072 <= uint256(115792089237316195423570985008687907853269984665640564039457584007913129639935))), uint256(92) /*'(./src/contracts/coin_shop.rsh:114:64:dot,[],Just "assume <= UInt.max")'*/);
    reachRequire((msg.value == uint256(0)), uint256(93) /*'(./src/contracts/coin_shop.rsh:114:64:dot,[],"verify network token pay amount")'*/);
    reachRequire(((_svs.v5106 <= uint256(115792089237316195423570985008687907853269984665640564039457584007913129639935))), uint256(94) /*'(./src/contracts/coin_shop.rsh:114:64:dot,[],Just "assume <= UInt.max")'*/);
    reachRequire((checkPayAmt(msg.sender, _svs.v5021, uint256(0))), uint256(95) /*'(./src/contracts/coin_shop.rsh:114:64:dot,[],"verify non-network token pay amount")'*/);
    reachRequire(((_svs.v5108 <= uint256(115792089237316195423570985008687907853269984665640564039457584007913129639935))), uint256(96) /*'(./src/contracts/coin_shop.rsh:114:64:dot,[],Just "assume <= UInt.max")'*/);
    reachRequire((checkPayAmt(msg.sender, _svs.v5022, uint256(0))), uint256(97) /*'(./src/contracts/coin_shop.rsh:114:64:dot,[],"verify non-network token pay amount")'*/);
    reachRequire(((_svs.v5110 <= uint256(115792089237316195423570985008687907853269984665640564039457584007913129639935))), uint256(98) /*'(./src/contracts/coin_shop.rsh:114:64:dot,[],Just "assume <= UInt.max")'*/);
    reachRequire((checkPayAmt(msg.sender, _svs.v5023, uint256(0))), uint256(99) /*'(./src/contracts/coin_shop.rsh:114:64:dot,[],"verify non-network token pay amount")'*/);
    emit _reach_oe_v8756( (true));
    _Memory._reachr_controller_api_terminate = (true);
    T12  memory _ja;
    _ja.elem0 = _svs.v5020;
    _ja.elem1 = _svs.v5021;
    _ja.elem2 = _svs.v5022;
    _ja.elem3 = _svs.v5023;
    _ja.elem4 = _svs.v5062;
    _ja.elem5 = _svs.v5063;
    _ja.elem6 = true;
    _ja.elem7 = uint256(block.number);
    _ja.elem8 = _svs.v5071;
    _ja.elem9 = _svs.v5072;
    _reachl_2(_ja, _Memory);
    } else if ((_a.elem1).which == _enum_T3.controller_api_toggle_pause0_177) {
    reachRequire(((payable(msg.sender) == _svs.v5020)), uint256(100) /*'(reach standard library:57:5:application,[at ./src/contracts/coin_shop.rsh:251:18:application call to "check" (defined at: reach standard library:49:32:function exp),at ./src/contracts/coin_shop.rsh:250:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:250:43:function exp),at ./src/contracts/coin_shop.rsh:114:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:250:43:function exp),at ./src/contracts/coin_shop.rsh:114:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:114:64:function exp),at ./src/contracts/coin_shop.rsh:126:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:126:18:function exp)],Just "action not authorized")'*/);
    reachRequire(((_svs.v5072 <= uint256(115792089237316195423570985008687907853269984665640564039457584007913129639935))), uint256(101) /*'(./src/contracts/coin_shop.rsh:114:64:dot,[],Just "assume <= UInt.max")'*/);
    reachRequire((msg.value == uint256(0)), uint256(102) /*'(./src/contracts/coin_shop.rsh:114:64:dot,[],"verify network token pay amount")'*/);
    reachRequire(((_svs.v5106 <= uint256(115792089237316195423570985008687907853269984665640564039457584007913129639935))), uint256(103) /*'(./src/contracts/coin_shop.rsh:114:64:dot,[],Just "assume <= UInt.max")'*/);
    reachRequire((checkPayAmt(msg.sender, _svs.v5021, uint256(0))), uint256(104) /*'(./src/contracts/coin_shop.rsh:114:64:dot,[],"verify non-network token pay amount")'*/);
    reachRequire(((_svs.v5108 <= uint256(115792089237316195423570985008687907853269984665640564039457584007913129639935))), uint256(105) /*'(./src/contracts/coin_shop.rsh:114:64:dot,[],Just "assume <= UInt.max")'*/);
    reachRequire((checkPayAmt(msg.sender, _svs.v5022, uint256(0))), uint256(106) /*'(./src/contracts/coin_shop.rsh:114:64:dot,[],"verify non-network token pay amount")'*/);
    reachRequire(((_svs.v5110 <= uint256(115792089237316195423570985008687907853269984665640564039457584007913129639935))), uint256(107) /*'(./src/contracts/coin_shop.rsh:114:64:dot,[],Just "assume <= UInt.max")'*/);
    reachRequire((checkPayAmt(msg.sender, _svs.v5023, uint256(0))), uint256(108) /*'(./src/contracts/coin_shop.rsh:114:64:dot,[],"verify non-network token pay amount")'*/);
    emit _reach_oe_v5102( _svs.v5102);
    _Memory._reachr_controller_api_toggle_pause = _svs.v5102;
    T12  memory _ja;
    _ja.elem0 = _svs.v5020;
    _ja.elem1 = _svs.v5021;
    _ja.elem2 = _svs.v5022;
    _ja.elem3 = _svs.v5023;
    _ja.elem4 = _svs.v5062;
    _ja.elem5 = _svs.v5102;
    _ja.elem6 = _svs.v5064;
    _ja.elem7 = uint256(block.number);
    _ja.elem8 = _svs.v5071;
    _ja.elem9 = _svs.v5072;
    _reachl_2(_ja, _Memory);
    }
    }
  struct _F13739 {
    T0 v5111;
    T0 v9323;
    }
  function _reachl_2(T12 memory _a, Memory memory _Memory) internal  {
    _F13739 memory _f;
    if (_a.elem6) {
      _f.v9323.elem0 = ((_a.elem8[uint256(0)]).elem0);
      _f.v9323.elem1 = ((_a.elem8[uint256(1)]).elem0);
      _f.v9323.elem2 = ((_a.elem8[uint256(2)]).elem0);
      T7 memory nsvs;
      nsvs.v5020 = _a.elem0;
      nsvs.v5021 = _a.elem1;
      nsvs.v5022 = _a.elem2;
      nsvs.v5023 = _a.elem3;
      nsvs.v5062 = _a.elem4;
      nsvs.v5063 = _a.elem5;
      nsvs.v5071 = _a.elem8;
      nsvs.v5072 = _a.elem9;
      nsvs.v9317 = (_a.elem8[uint256(0)]);
      nsvs.v9318 = ((_a.elem8[uint256(0)]).elem0);
      nsvs.v9320 = ((_a.elem8[uint256(1)]).elem0);
      nsvs.v9322 = ((_a.elem8[uint256(2)]).elem0);
      nsvs.v9323 = _f.v9323;
      current_step = uint256(3);
      current_time = uint256(block.number);
      current_svbs = abi.encode(nsvs);
      }
    else {
      _f.v5111.elem0 = ((_a.elem8[uint256(0)]).elem0);
      _f.v5111.elem1 = ((_a.elem8[uint256(1)]).elem0);
      _f.v5111.elem2 = ((_a.elem8[uint256(2)]).elem0);
      T8 memory nsvs;
      nsvs.v5020 = _a.elem0;
      nsvs.v5021 = _a.elem1;
      nsvs.v5022 = _a.elem2;
      nsvs.v5023 = _a.elem3;
      nsvs.v5062 = _a.elem4;
      nsvs.v5063 = _a.elem5;
      nsvs.v5064 = false;
      nsvs.v5071 = _a.elem8;
      nsvs.v5072 = _a.elem9;
      nsvs.v5102 = (_a.elem5 ? false : true);
      nsvs.v5104 = (_a.elem5 ? false : true);
      nsvs.v5105 = (_a.elem8[uint256(0)]);
      nsvs.v5106 = ((_a.elem8[uint256(0)]).elem0);
      nsvs.v5107 = (_a.elem8[uint256(1)]);
      nsvs.v5108 = ((_a.elem8[uint256(1)]).elem0);
      nsvs.v5109 = (_a.elem8[uint256(2)]);
      nsvs.v5110 = ((_a.elem8[uint256(2)]).elem0);
      nsvs.v5111 = _f.v5111;
      nsvs.v5113 = (_a.elem4.elem0);
      nsvs.v5114 = (_a.elem4.elem1);
      nsvs.v5115 = (_a.elem4.elem2);
      current_step = uint256(5);
      current_time = uint256(block.number);
      current_svbs = abi.encode(nsvs);
      }
    }
  constructor(T9 memory v13715) payable {
    current_step = 0x0;
    creation_time = uint256(block.number);
    Memory memory _Memory;
    _reachi_0(v13715, _Memory);
    }
  function _reachp_1(T11 calldata v13718) external payable returns (bool) {
    Memory memory _Memory;
    _reachi_1(v13718, _Memory);
    }
  function _reachp_3(T11 calldata v13721) external payable returns (bool) {
    Memory memory _Memory;
    _reachi_3(v13721, _Memory);
    }
  function _reachp_4(T4 calldata v13724) external payable returns (bool) {
    Memory memory _Memory;
    _reachi_4(v13724, _Memory);
    }
  function buyer_api_purchase_bronze() external payable returns (bool) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_buyer_api_purchase_bronze(_ja, _Memory);
    return _Memory._reachr_buyer_api_purchase_bronze;
    }
  function buyer_api_purchase_gold() external payable returns (bool) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_buyer_api_purchase_gold(_ja, _Memory);
    return _Memory._reachr_buyer_api_purchase_gold;
    }
  function buyer_api_purchase_silver() external payable returns (bool) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_buyer_api_purchase_silver(_ja, _Memory);
    return _Memory._reachr_buyer_api_purchase_silver;
    }
  function coin_prices() external view returns (T0 memory) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_coin_prices(_ja, _Memory);
    return _Memory._reachr_coin_prices;
    }
  function coin_supply() external view returns (T0 memory) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_coin_supply(_ja, _Memory);
    return _Memory._reachr_coin_supply;
    }
  function controller_api_restock(T0 calldata v13698) external payable returns (bool) {
    Memory memory _Memory;
    _reacha_controller_api_restock(v13698, _Memory);
    return _Memory._reachr_controller_api_restock;
    }
  function controller_api_set_prices(T0 calldata v13704) external payable returns (bool) {
    Memory memory _Memory;
    _reacha_controller_api_set_prices(v13704, _Memory);
    return _Memory._reachr_controller_api_set_prices;
    }
  function controller_api_terminate() external payable returns (bool) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_controller_api_terminate(_ja, _Memory);
    return _Memory._reachr_controller_api_terminate;
    }
  function controller_api_toggle_pause() external payable returns (bool) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_controller_api_toggle_pause(_ja, _Memory);
    return _Memory._reachr_controller_api_toggle_pause;
    }
  function is_paused() external view returns (bool) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_is_paused(_ja, _Memory);
    return _Memory._reachr_is_paused;
    }
  }
