// Automatically generated with Reach 0.1.13 (f79282c4)
/* eslint-disable */
export const _version = '0.1.13';
export const _versionHash = '0.1.13 (f79282c4)';
export const _backendVersion = 27;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'));
  const ctc2 = stdlib.T_Address;
  return {
    price_change: [ctc0, ctc0, ctc0],
    purchase: [ctc1, ctc2],
    restock: [ctc0, ctc0, ctc0]
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc2, ctc2, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc6 = stdlib.T_Tuple([ctc2, ctc2, ctc2]);
  
  const _coin_prices = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v5020, v5021, v5022, v5023, v5038] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v5020, v5021, v5022, v5023, v5062, v5063, v5071, v5072, v9317, v9318, v9320, v9322, v9323] = svs;
      return (await ((async () => {
        
        
        return v5062;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v5020, v5021, v5022, v5023, v5062, v5063, v5064, v5071, v5072, v5102, v5104, v5105, v5106, v5107, v5108, v5109, v5110, v5111, v5113, v5114, v5115] = svs;
      return (await ((async () => {
        
        
        return v5062;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _coin_supply = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v5020, v5021, v5022, v5023, v5038] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v5020, v5021, v5022, v5023, v5062, v5063, v5071, v5072, v9317, v9318, v9320, v9322, v9323] = svs;
      return (await ((async () => {
        
        
        return v9323;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v5020, v5021, v5022, v5023, v5062, v5063, v5064, v5071, v5072, v5102, v5104, v5105, v5106, v5107, v5108, v5109, v5110, v5111, v5113, v5114, v5115] = svs;
      return (await ((async () => {
        
        
        return v5111;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _is_paused = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v5020, v5021, v5022, v5023, v5038] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v5020, v5021, v5022, v5023, v5062, v5063, v5071, v5072, v9317, v9318, v9320, v9322, v9323] = svs;
      return (await ((async () => {
        
        
        return v5063;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v5020, v5021, v5022, v5023, v5062, v5063, v5064, v5071, v5072, v5102, v5104, v5105, v5106, v5107, v5108, v5109, v5110, v5111, v5113, v5114, v5115] = svs;
      return (await ((async () => {
        
        
        return v5063;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  return {
    infos: {
      coin_prices: {
        decode: _coin_prices,
        dom: [],
        rng: ctc6
        },
      coin_supply: {
        decode: _coin_supply,
        dom: [],
        rng: ctc6
        },
      is_paused: {
        decode: _is_paused,
        dom: [],
        rng: ctc3
        }
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc1, ctc5],
      3: [ctc0, ctc1, ctc1, ctc1, ctc6, ctc3, ctc5, ctc2, ctc4, ctc2, ctc2, ctc2, ctc6],
      5: [ctc0, ctc1, ctc1, ctc1, ctc6, ctc3, ctc3, ctc5, ctc2, ctc3, ctc3, ctc4, ctc2, ctc4, ctc2, ctc4, ctc2, ctc6, ctc2, ctc2, ctc2]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Admin(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Admin expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Admin expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_Tuple([ctc0, ctc0, ctc0]);
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Tuple([]);
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Tuple([ctc4, ctc4, ctc4]);
  const ctc6 = stdlib.T_Tuple([ctc5]);
  const ctc7 = stdlib.T_Data({
    buyer_api_purchase_bronze0_177: ctc3,
    buyer_api_purchase_gold0_177: ctc3,
    buyer_api_purchase_silver0_177: ctc3,
    controller_api_restock0_177: ctc6,
    controller_api_set_prices0_177: ctc6,
    controller_api_terminate0_177: ctc3,
    controller_api_toggle_pause0_177: ctc3
    });
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Address;
  const ctc10 = stdlib.T_Tuple([ctc4, ctc4, ctc8]);
  const ctc11 = stdlib.T_Array(ctc10, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  
  
  const v4997 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v4998 = [v4997, v4997, v4997];
  const v5002 = stdlib.protect(ctc1, interact.coin_asa_ids, 'for Admin\'s interact field coin_asa_ids');
  const v5003 = v5002[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:56:30:application', stdlib.UInt_max, '0')];
  const v5004 = v5002[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:56:30:application', stdlib.UInt_max, '1')];
  const v5005 = v5002[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:56:30:application', stdlib.UInt_max, '2')];
  
  const v5011 = stdlib.tokenEq(v5003, v5004);
  const v5013 = stdlib.tokenEq(v5003, v5005);
  const v5014 = v5013 ? false : true;
  const v5015 = v5011 ? false : v5014;
  const v5016 = stdlib.tokenEq(v5004, v5005);
  const v5017 = v5016 ? false : true;
  const v5018 = v5015 ? v5017 : false;
  stdlib.assert(v5018, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/coin_shop.rsh:97:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:94:15:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:94:19:function exp)'],
    msg: 'Token asa ids are not all unique!',
    who: 'Admin'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v5003, v5004, v5005],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:102:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0, ctc0],
    pay: [stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:102:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v5021, v5022, v5023], secs: v5025, time: v5024, didSend: v72, from: v5020 } = txn1;
      
      const v5026 = v4998[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:102:11:dot', stdlib.UInt_max, '0')];
      const v5027 = stdlib.Array_set(v5026, '0', stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:102:11:dot', stdlib.UInt_max, '0'));
      const v5028 = stdlib.Array_set(v4998, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:102:11:dot', stdlib.UInt_max, '0'), v5027);
      const v5030 = v5028[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:102:11:dot', stdlib.UInt_max, '1')];
      const v5031 = stdlib.Array_set(v5030, '0', stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:102:11:dot', stdlib.UInt_max, '0'));
      const v5032 = stdlib.Array_set(v5028, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:102:11:dot', stdlib.UInt_max, '1'), v5031);
      const v5036 = v5032[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:102:11:dot', stdlib.UInt_max, '2')];
      const v5037 = stdlib.Array_set(v5036, '0', stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:102:11:dot', stdlib.UInt_max, '0'));
      const v5038 = stdlib.Array_set(v5032, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:102:11:dot', stdlib.UInt_max, '2'), v5037);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v5021
        });
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v5022
        });
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v5023
        });
      ;
      const v5054 = await ctc.getContractInfo();
      const v5055 = await ctc.getContractAddress();
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v5021, v5022, v5023], secs: v5025, time: v5024, didSend: v72, from: v5020 } = txn1;
  const v5026 = v4998[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:102:11:dot', stdlib.UInt_max, '0')];
  const v5027 = stdlib.Array_set(v5026, '0', stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:102:11:dot', stdlib.UInt_max, '0'));
  const v5028 = stdlib.Array_set(v4998, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:102:11:dot', stdlib.UInt_max, '0'), v5027);
  const v5030 = v5028[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:102:11:dot', stdlib.UInt_max, '1')];
  const v5031 = stdlib.Array_set(v5030, '0', stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:102:11:dot', stdlib.UInt_max, '0'));
  const v5032 = stdlib.Array_set(v5028, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:102:11:dot', stdlib.UInt_max, '1'), v5031);
  const v5034 = stdlib.tokenEq(v5022, v5021);
  const v5035 = v5034 ? false : true;
  stdlib.assert(v5035, {
    at: './src/contracts/coin_shop.rsh:102:11:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'Admin'
    });
  const v5036 = v5032[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:102:11:dot', stdlib.UInt_max, '2')];
  const v5037 = stdlib.Array_set(v5036, '0', stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:102:11:dot', stdlib.UInt_max, '0'));
  const v5038 = stdlib.Array_set(v5032, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:102:11:dot', stdlib.UInt_max, '2'), v5037);
  const v5040 = stdlib.tokenEq(v5023, v5021);
  const v5042 = stdlib.tokenEq(v5023, v5022);
  const v5043 = v5042 ? false : true;
  const v5044 = v5040 ? false : v5043;
  stdlib.assert(v5044, {
    at: './src/contracts/coin_shop.rsh:102:11:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'Admin'
    });
  ;
  ;
  ;
  ;
  const v5045 = stdlib.tokenEq(v5021, v5022);
  const v5047 = stdlib.tokenEq(v5021, v5023);
  const v5048 = v5047 ? false : true;
  const v5049 = v5045 ? false : v5048;
  const v5050 = stdlib.tokenEq(v5022, v5023);
  const v5051 = v5050 ? false : true;
  const v5052 = v5049 ? v5051 : false;
  stdlib.assert(v5052, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/coin_shop.rsh:105:10:application call to "check" (defined at: reach standard library:49:32:function exp)'],
    msg: null,
    who: 'Admin'
    });
  const v5054 = await ctc.getContractInfo();
  const v5055 = await ctc.getContractAddress();
  stdlib.protect(ctc2, await interact.deployed(v5054, v5055), {
    at: './src/contracts/coin_shop.rsh:110:28:application',
    fs: ['at ./src/contracts/coin_shop.rsh:110:28:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:110:28:function exp)', 'at ./src/contracts/coin_shop.rsh:110:28:application call to "liftedInteract" (defined at: ./src/contracts/coin_shop.rsh:110:28:application)'],
    msg: 'deployed',
    who: 'Admin'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v5020, v5021, v5022, v5023, v5038],
    evt_cnt: 0,
    funcNum: 1,
    lct: v5024,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:111:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v5059, time: v5058, didSend: v113, from: v5057 } = txn2;
      
      ;
      const v5061 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10000000'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20000000'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '30000000')];
      const v5062 = v5061;
      const v5063 = false;
      const v5064 = false;
      const v5065 = v5058;
      const v5071 = v5038;
      const v5072 = stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:91:11:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v5089 = v5064 ? false : true;
        
        return v5089;})()) {
        const v5102 = v5063 ? false : true;
        const v5103 = v5064 ? false : true;
        const v5104 = v5063 ? false : v5103;
        const v5105 = v5071[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:132:24:application', stdlib.UInt_max, '0')];
        const v5106 = v5105[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:132:24:application', stdlib.UInt_max, '0')];
        const v5107 = v5071[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:133:24:application', stdlib.UInt_max, '1')];
        const v5108 = v5107[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:133:24:application', stdlib.UInt_max, '0')];
        const v5109 = v5071[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:134:24:application', stdlib.UInt_max, '2')];
        const v5110 = v5109[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:134:24:application', stdlib.UInt_max, '0')];
        const v5111 = [v5106, v5108, v5110];
        const v5113 = v5062[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:147:33:application', stdlib.UInt_max, '0')];
        const v5114 = v5062[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:147:33:application', stdlib.UInt_max, '1')];
        const v5115 = v5062[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:147:33:application', stdlib.UInt_max, '2')];
        sim_r.isHalt = false;
        }
      else {
        const v9317 = v5071[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:132:24:application', stdlib.UInt_max, '0')];
        const v9318 = v9317[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:132:24:application', stdlib.UInt_max, '0')];
        const v9319 = v5071[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:133:24:application', stdlib.UInt_max, '1')];
        const v9320 = v9319[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:133:24:application', stdlib.UInt_max, '0')];
        const v9321 = v5071[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:134:24:application', stdlib.UInt_max, '2')];
        const v9322 = v9321[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:134:24:application', stdlib.UInt_max, '0')];
        const v9323 = [v9318, v9320, v9322];
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc9, ctc0, ctc0, ctc0, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v5059, time: v5058, didSend: v113, from: v5057 } = txn2;
  ;
  const v5060 = stdlib.addressEq(v5020, v5057);
  stdlib.assert(v5060, {
    at: './src/contracts/coin_shop.rsh:111:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Admin'
    });
  const v5061 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10000000'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20000000'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '30000000')];
  let v5062 = v5061;
  let v5063 = false;
  let v5064 = false;
  let v5065 = v5058;
  let v5071 = v5038;
  let v5072 = stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:91:11:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  let txn3 = txn2;
  while (await (async () => {
    const v5089 = v5064 ? false : true;
    
    return v5089;})()) {
    const v5102 = v5063 ? false : true;
    const v5103 = v5064 ? false : true;
    const v5104 = v5063 ? false : v5103;
    const v5105 = v5071[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:132:24:application', stdlib.UInt_max, '0')];
    const v5106 = v5105[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:132:24:application', stdlib.UInt_max, '0')];
    const v5107 = v5071[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:133:24:application', stdlib.UInt_max, '1')];
    const v5108 = v5107[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:133:24:application', stdlib.UInt_max, '0')];
    const v5109 = v5071[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:134:24:application', stdlib.UInt_max, '2')];
    const v5110 = v5109[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:134:24:application', stdlib.UInt_max, '0')];
    const v5111 = [v5106, v5108, v5110];
    const v5113 = v5062[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:147:33:application', stdlib.UInt_max, '0')];
    const v5114 = v5062[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:147:33:application', stdlib.UInt_max, '1')];
    const v5115 = v5062[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:147:33:application', stdlib.UInt_max, '2')];
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 4,
      out_tys: [ctc7],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v5559], secs: v5561, time: v5560, didSend: v4073, from: v5558 } = txn4;
    switch (v5559[0]) {
      case 'buyer_api_purchase_bronze0_177': {
        const v5562 = v5559[1];
        undefined /* setApiDetails */;
        stdlib.assert(v5104, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./src/contracts/coin_shop.rsh:153:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:152:41:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:152:41:function exp)', 'at ./src/contracts/coin_shop.rsh:114:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:152:41:function exp)', 'at ./src/contracts/coin_shop.rsh:114:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:114:64:function exp)', 'at ./src/contracts/coin_shop.rsh:126:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:126:18:function exp)'],
          msg: 'contract is currently inactive',
          who: 'Admin'
          });
        const v5570 = stdlib.ge(v5106, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:154:37:decimal', stdlib.UInt_max, '1'));
        stdlib.assert(v5570, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./src/contracts/coin_shop.rsh:154:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:152:41:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:152:41:function exp)', 'at ./src/contracts/coin_shop.rsh:114:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:152:41:function exp)', 'at ./src/contracts/coin_shop.rsh:114:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:114:64:function exp)', 'at ./src/contracts/coin_shop.rsh:126:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:126:18:function exp)'],
          msg: 'balance insufficient for transaction',
          who: 'Admin'
          });
        const v5761 = stdlib.add(v5072, v5113);
        const v5762 = stdlib.le(v5761, stdlib.UInt_max);
        stdlib.assert(v5762, {
          at: './src/contracts/coin_shop.rsh:114:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        ;
        const v5767 = stdlib.le(v5106, stdlib.UInt_max);
        stdlib.assert(v5767, {
          at: './src/contracts/coin_shop.rsh:114:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        ;
        const v5775 = stdlib.le(v5108, stdlib.UInt_max);
        stdlib.assert(v5775, {
          at: './src/contracts/coin_shop.rsh:114:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        ;
        const v5783 = stdlib.le(v5110, stdlib.UInt_max);
        stdlib.assert(v5783, {
          at: './src/contracts/coin_shop.rsh:114:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        ;
        const v5820 = stdlib.sub(v5761, v5761);
        const v5821 = stdlib.ge(v5820, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:161:64:application', stdlib.UInt_max, '0'));
        stdlib.assert(v5821, {
          at: './src/contracts/coin_shop.rsh:161:64:application',
          fs: ['at ./src/contracts/coin_shop.rsh:159:27:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:159:27:function exp)'],
          msg: 'assume >= 0',
          who: 'Admin'
          });
        ;
        const v5850 = stdlib.sub(v5106, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:162:44:decimal', stdlib.UInt_max, '1'));
        const v5851 = stdlib.ge(v5850, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:162:56:application', stdlib.UInt_max, '0'));
        stdlib.assert(v5851, {
          at: './src/contracts/coin_shop.rsh:162:56:application',
          fs: ['at ./src/contracts/coin_shop.rsh:159:27:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:159:27:function exp)'],
          msg: 'assume >= 0',
          who: 'Admin'
          });
        const v5854 = stdlib.Array_set(v5105, '0', v5850);
        const v5855 = stdlib.Array_set(v5071, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:162:56:application', stdlib.UInt_max, '0'), v5854);
        ;
        const v5856 = 'bronze';
        null;
        const v5857 = true;
        await txn4.getOutput('buyer_api_purchase_bronze', 'v5857', ctc8, v5857);
        const cv5062 = v5062;
        const cv5063 = v5063;
        const cv5064 = v5064;
        const cv5065 = v5560;
        const cv5071 = v5855;
        const cv5072 = v5820;
        
        v5062 = cv5062;
        v5063 = cv5063;
        v5064 = cv5064;
        v5065 = cv5065;
        v5071 = cv5071;
        v5072 = cv5072;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'buyer_api_purchase_gold0_177': {
        const v6098 = v5559[1];
        undefined /* setApiDetails */;
        stdlib.assert(v5104, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./src/contracts/coin_shop.rsh:193:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:192:39:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:192:39:function exp)', 'at ./src/contracts/coin_shop.rsh:114:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:192:39:function exp)', 'at ./src/contracts/coin_shop.rsh:114:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:114:64:function exp)', 'at ./src/contracts/coin_shop.rsh:126:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:126:18:function exp)'],
          msg: 'contract is currently inactive',
          who: 'Admin'
          });
        const v6129 = stdlib.ge(v5110, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:194:37:decimal', stdlib.UInt_max, '1'));
        stdlib.assert(v6129, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./src/contracts/coin_shop.rsh:194:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:192:39:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:192:39:function exp)', 'at ./src/contracts/coin_shop.rsh:114:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:192:39:function exp)', 'at ./src/contracts/coin_shop.rsh:114:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:114:64:function exp)', 'at ./src/contracts/coin_shop.rsh:126:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:126:18:function exp)'],
          msg: 'balance insufficient for transaction',
          who: 'Admin'
          });
        const v6297 = stdlib.add(v5072, v5115);
        const v6298 = stdlib.le(v6297, stdlib.UInt_max);
        stdlib.assert(v6298, {
          at: './src/contracts/coin_shop.rsh:114:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        ;
        const v6303 = stdlib.le(v5106, stdlib.UInt_max);
        stdlib.assert(v6303, {
          at: './src/contracts/coin_shop.rsh:114:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        ;
        const v6311 = stdlib.le(v5108, stdlib.UInt_max);
        stdlib.assert(v6311, {
          at: './src/contracts/coin_shop.rsh:114:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        ;
        const v6319 = stdlib.le(v5110, stdlib.UInt_max);
        stdlib.assert(v6319, {
          at: './src/contracts/coin_shop.rsh:114:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        ;
        const v6432 = stdlib.sub(v6297, v6297);
        const v6433 = stdlib.ge(v6432, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:201:64:application', stdlib.UInt_max, '0'));
        stdlib.assert(v6433, {
          at: './src/contracts/coin_shop.rsh:201:64:application',
          fs: ['at ./src/contracts/coin_shop.rsh:199:27:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:199:27:function exp)'],
          msg: 'assume >= 0',
          who: 'Admin'
          });
        ;
        const v6462 = stdlib.sub(v5110, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:202:50:decimal', stdlib.UInt_max, '1'));
        const v6463 = stdlib.ge(v6462, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:202:56:application', stdlib.UInt_max, '0'));
        stdlib.assert(v6463, {
          at: './src/contracts/coin_shop.rsh:202:56:application',
          fs: ['at ./src/contracts/coin_shop.rsh:199:27:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:199:27:function exp)'],
          msg: 'assume >= 0',
          who: 'Admin'
          });
        const v6466 = stdlib.Array_set(v5109, '0', v6462);
        const v6467 = stdlib.Array_set(v5071, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:202:56:application', stdlib.UInt_max, '2'), v6466);
        ;
        const v6468 = 'gold  ';
        null;
        const v6469 = true;
        await txn4.getOutput('buyer_api_purchase_gold', 'v6469', ctc8, v6469);
        const cv5062 = v5062;
        const cv5063 = v5063;
        const cv5064 = v5064;
        const cv5065 = v5560;
        const cv5071 = v6467;
        const cv5072 = v6432;
        
        v5062 = cv5062;
        v5063 = cv5063;
        v5064 = cv5064;
        v5065 = cv5065;
        v5071 = cv5071;
        v5072 = cv5072;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'buyer_api_purchase_silver0_177': {
        const v6634 = v5559[1];
        undefined /* setApiDetails */;
        stdlib.assert(v5104, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./src/contracts/coin_shop.rsh:173:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:172:41:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:172:41:function exp)', 'at ./src/contracts/coin_shop.rsh:114:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:172:41:function exp)', 'at ./src/contracts/coin_shop.rsh:114:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:114:64:function exp)', 'at ./src/contracts/coin_shop.rsh:126:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:126:18:function exp)'],
          msg: 'contract is currently inactive',
          who: 'Admin'
          });
        const v6688 = stdlib.ge(v5108, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:174:37:decimal', stdlib.UInt_max, '1'));
        stdlib.assert(v6688, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./src/contracts/coin_shop.rsh:174:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:172:41:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:172:41:function exp)', 'at ./src/contracts/coin_shop.rsh:114:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:172:41:function exp)', 'at ./src/contracts/coin_shop.rsh:114:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:114:64:function exp)', 'at ./src/contracts/coin_shop.rsh:126:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:126:18:function exp)'],
          msg: 'balance insufficient for transaction',
          who: 'Admin'
          });
        const v6833 = stdlib.add(v5072, v5114);
        const v6834 = stdlib.le(v6833, stdlib.UInt_max);
        stdlib.assert(v6834, {
          at: './src/contracts/coin_shop.rsh:114:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        ;
        const v6839 = stdlib.le(v5106, stdlib.UInt_max);
        stdlib.assert(v6839, {
          at: './src/contracts/coin_shop.rsh:114:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        ;
        const v6847 = stdlib.le(v5108, stdlib.UInt_max);
        stdlib.assert(v6847, {
          at: './src/contracts/coin_shop.rsh:114:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        ;
        const v6855 = stdlib.le(v5110, stdlib.UInt_max);
        stdlib.assert(v6855, {
          at: './src/contracts/coin_shop.rsh:114:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        ;
        const v7044 = stdlib.sub(v6833, v6833);
        const v7045 = stdlib.ge(v7044, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:181:64:application', stdlib.UInt_max, '0'));
        stdlib.assert(v7045, {
          at: './src/contracts/coin_shop.rsh:181:64:application',
          fs: ['at ./src/contracts/coin_shop.rsh:179:27:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:179:27:function exp)'],
          msg: 'assume >= 0',
          who: 'Admin'
          });
        ;
        const v7074 = stdlib.sub(v5108, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:182:47:decimal', stdlib.UInt_max, '1'));
        const v7075 = stdlib.ge(v7074, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:182:56:application', stdlib.UInt_max, '0'));
        stdlib.assert(v7075, {
          at: './src/contracts/coin_shop.rsh:182:56:application',
          fs: ['at ./src/contracts/coin_shop.rsh:179:27:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:179:27:function exp)'],
          msg: 'assume >= 0',
          who: 'Admin'
          });
        const v7078 = stdlib.Array_set(v5107, '0', v7074);
        const v7079 = stdlib.Array_set(v5071, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:182:56:application', stdlib.UInt_max, '1'), v7078);
        ;
        const v7080 = 'silver';
        null;
        const v7081 = true;
        await txn4.getOutput('buyer_api_purchase_silver', 'v7081', ctc8, v7081);
        const cv5062 = v5062;
        const cv5063 = v5063;
        const cv5064 = v5064;
        const cv5065 = v5560;
        const cv5071 = v7079;
        const cv5072 = v7044;
        
        v5062 = cv5062;
        v5063 = cv5063;
        v5064 = cv5064;
        v5065 = cv5065;
        v5071 = cv5071;
        v5072 = cv5072;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'controller_api_restock0_177': {
        const v7170 = v5559[1];
        undefined /* setApiDetails */;
        const v7244 = v7170[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:215:14:spread', stdlib.UInt_max, '0')];
        const v7245 = stdlib.addressEq(v5558, v5020);
        stdlib.assert(v7245, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./src/contracts/coin_shop.rsh:216:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:215:42:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:215:42:function exp)', 'at ./src/contracts/coin_shop.rsh:114:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:215:42:function exp)', 'at ./src/contracts/coin_shop.rsh:114:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:114:64:function exp)', 'at ./src/contracts/coin_shop.rsh:126:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:126:18:function exp)'],
          msg: 'action not authorized',
          who: 'Admin'
          });
        const v7247 = v7244[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:45:9:array ref', stdlib.UInt_max, '0')];
        const v7248 = stdlib.le(v7247, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:34:29:decimal', stdlib.UInt_max, '1200'));
        const v7249 = v7244[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:45:33:array ref', stdlib.UInt_max, '1')];
        const v7250 = stdlib.le(v7249, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:34:35:decimal', stdlib.UInt_max, '600'));
        const v7251 = v7248 ? v7250 : false;
        const v7252 = v7244[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:45:57:array ref', stdlib.UInt_max, '2')];
        const v7253 = stdlib.le(v7252, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:34:40:decimal', stdlib.UInt_max, '200'));
        const v7254 = v7251 ? v7253 : false;
        stdlib.assert(v7254, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./src/contracts/coin_shop.rsh:217:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:215:42:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:215:42:function exp)', 'at ./src/contracts/coin_shop.rsh:114:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:215:42:function exp)', 'at ./src/contracts/coin_shop.rsh:114:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:114:64:function exp)', 'at ./src/contracts/coin_shop.rsh:126:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:126:18:function exp)'],
          msg: 'illegal param(s) were provided',
          who: 'Admin'
          });
        const v7370 = stdlib.le(v5072, stdlib.UInt_max);
        stdlib.assert(v7370, {
          at: './src/contracts/coin_shop.rsh:114:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        ;
        const v7374 = stdlib.add(v5106, v7247);
        const v7375 = stdlib.le(v7374, stdlib.UInt_max);
        stdlib.assert(v7375, {
          at: './src/contracts/coin_shop.rsh:114:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        const v7378 = stdlib.Array_set(v5105, '0', v7374);
        const v7379 = stdlib.Array_set(v5071, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:114:64:dot', stdlib.UInt_max, '0'), v7378);
        ;
        const v7380 = v7379[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:114:64:dot', stdlib.UInt_max, '1')];
        const v7381 = v7380[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:114:64:dot', stdlib.UInt_max, '0')];
        const v7382 = stdlib.add(v7381, v7249);
        const v7383 = stdlib.le(v7382, stdlib.UInt_max);
        stdlib.assert(v7383, {
          at: './src/contracts/coin_shop.rsh:114:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        const v7386 = stdlib.Array_set(v7380, '0', v7382);
        const v7387 = stdlib.Array_set(v7379, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:114:64:dot', stdlib.UInt_max, '1'), v7386);
        ;
        const v7388 = v7387[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:114:64:dot', stdlib.UInt_max, '2')];
        const v7389 = v7388[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:114:64:dot', stdlib.UInt_max, '0')];
        const v7390 = stdlib.add(v7389, v7252);
        const v7391 = stdlib.le(v7390, stdlib.UInt_max);
        stdlib.assert(v7391, {
          at: './src/contracts/coin_shop.rsh:114:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        const v7394 = stdlib.Array_set(v7388, '0', v7390);
        const v7395 = stdlib.Array_set(v7387, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:114:64:dot', stdlib.UInt_max, '2'), v7394);
        ;
        const v7638 = v7395[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:132:24:application', stdlib.UInt_max, '0')];
        const v7639 = v7638[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:132:24:application', stdlib.UInt_max, '0')];
        const v7640 = v7395[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:133:24:application', stdlib.UInt_max, '1')];
        const v7641 = v7640[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:133:24:application', stdlib.UInt_max, '0')];
        const v7642 = v7395[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:134:24:application', stdlib.UInt_max, '2')];
        const v7643 = v7642[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:134:24:application', stdlib.UInt_max, '0')];
        null;
        const v7646 = 'Successfully restocked coins';
        stdlib.protect(ctc2, await interact.log(v7646), {
          at: './src/contracts/coin_shop.rsh:225:39:application',
          fs: ['at ./src/contracts/coin_shop.rsh:225:39:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:225:39:function exp)', 'at ./src/contracts/coin_shop.rsh:225:39:application call to "liftedInteract" (defined at: ./src/contracts/coin_shop.rsh:225:39:application)', 'at ./src/contracts/coin_shop.rsh:221:27:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:221:27:function exp)'],
          msg: 'log',
          who: 'Admin'
          });
        
        const v7647 = true;
        await txn4.getOutput('controller_api_restock', 'v7647', ctc8, v7647);
        const cv5062 = v5062;
        const cv5063 = v5063;
        const cv5064 = v5064;
        const cv5065 = v5560;
        const cv5071 = v7395;
        const cv5072 = v5072;
        
        v5062 = cv5062;
        v5063 = cv5063;
        v5064 = cv5064;
        v5065 = cv5065;
        v5071 = cv5071;
        v5072 = cv5072;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'controller_api_set_prices0_177': {
        const v7706 = v5559[1];
        undefined /* setApiDetails */;
        const v7813 = stdlib.addressEq(v5558, v5020);
        stdlib.assert(v7813, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./src/contracts/coin_shop.rsh:234:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:233:50:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:233:50:function exp)', 'at ./src/contracts/coin_shop.rsh:114:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:233:50:function exp)', 'at ./src/contracts/coin_shop.rsh:114:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:114:64:function exp)', 'at ./src/contracts/coin_shop.rsh:126:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:126:18:function exp)'],
          msg: 'action not authorized',
          who: 'Admin'
          });
        const v7906 = stdlib.le(v5072, stdlib.UInt_max);
        stdlib.assert(v7906, {
          at: './src/contracts/coin_shop.rsh:114:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        ;
        const v7911 = stdlib.le(v5106, stdlib.UInt_max);
        stdlib.assert(v7911, {
          at: './src/contracts/coin_shop.rsh:114:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        ;
        const v7919 = stdlib.le(v5108, stdlib.UInt_max);
        stdlib.assert(v7919, {
          at: './src/contracts/coin_shop.rsh:114:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        ;
        const v7927 = stdlib.le(v5110, stdlib.UInt_max);
        stdlib.assert(v7927, {
          at: './src/contracts/coin_shop.rsh:114:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        ;
        const v8195 = v7706[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:233:14:spread', stdlib.UInt_max, '0')];
        const v8199 = v8195[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:240:41:spread', stdlib.UInt_max, '0')];
        const v8200 = v8195[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:240:41:spread', stdlib.UInt_max, '1')];
        const v8201 = v8195[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:240:41:spread', stdlib.UInt_max, '2')];
        null;
        const v8203 = 'Successfully changed coin prices';
        stdlib.protect(ctc2, await interact.log(v8203), {
          at: './src/contracts/coin_shop.rsh:242:39:application',
          fs: ['at ./src/contracts/coin_shop.rsh:242:39:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:242:39:function exp)', 'at ./src/contracts/coin_shop.rsh:242:39:application call to "liftedInteract" (defined at: ./src/contracts/coin_shop.rsh:242:39:application)', 'at ./src/contracts/coin_shop.rsh:238:27:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:238:27:function exp)'],
          msg: 'log',
          who: 'Admin'
          });
        
        const v8204 = true;
        await txn4.getOutput('controller_api_set_prices', 'v8204', ctc8, v8204);
        const cv5062 = v8195;
        const cv5063 = v5063;
        const cv5064 = v5064;
        const cv5065 = v5560;
        const cv5071 = v5071;
        const cv5072 = v5072;
        
        v5062 = cv5062;
        v5063 = cv5063;
        v5064 = cv5064;
        v5065 = cv5065;
        v5071 = cv5071;
        v5072 = cv5072;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'controller_api_terminate0_177': {
        const v8242 = v5559[1];
        undefined /* setApiDetails */;
        const v8368 = stdlib.addressEq(v5558, v5020);
        stdlib.assert(v8368, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./src/contracts/coin_shop.rsh:271:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:270:40:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:270:40:function exp)', 'at ./src/contracts/coin_shop.rsh:114:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:270:40:function exp)', 'at ./src/contracts/coin_shop.rsh:114:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:114:64:function exp)', 'at ./src/contracts/coin_shop.rsh:126:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:126:18:function exp)'],
          msg: 'action not authorized',
          who: 'Admin'
          });
        const v8442 = stdlib.le(v5072, stdlib.UInt_max);
        stdlib.assert(v8442, {
          at: './src/contracts/coin_shop.rsh:114:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        ;
        const v8447 = stdlib.le(v5106, stdlib.UInt_max);
        stdlib.assert(v8447, {
          at: './src/contracts/coin_shop.rsh:114:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        ;
        const v8455 = stdlib.le(v5108, stdlib.UInt_max);
        stdlib.assert(v8455, {
          at: './src/contracts/coin_shop.rsh:114:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        ;
        const v8463 = stdlib.le(v5110, stdlib.UInt_max);
        stdlib.assert(v8463, {
          at: './src/contracts/coin_shop.rsh:114:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        ;
        const v8755 = 'Terminating Contract Execution';
        stdlib.protect(ctc2, await interact.log(v8755), {
          at: './src/contracts/coin_shop.rsh:276:39:application',
          fs: ['at ./src/contracts/coin_shop.rsh:276:39:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:276:39:function exp)', 'at ./src/contracts/coin_shop.rsh:276:39:application call to "liftedInteract" (defined at: ./src/contracts/coin_shop.rsh:276:39:application)', 'at ./src/contracts/coin_shop.rsh:275:27:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:275:27:function exp)'],
          msg: 'log',
          who: 'Admin'
          });
        
        const v8756 = true;
        await txn4.getOutput('controller_api_terminate', 'v8756', ctc8, v8756);
        const cv5062 = v5062;
        const cv5063 = v5063;
        const cv5064 = true;
        const cv5065 = v5560;
        const cv5071 = v5071;
        const cv5072 = v5072;
        
        v5062 = cv5062;
        v5063 = cv5063;
        v5064 = cv5064;
        v5065 = cv5065;
        v5071 = cv5071;
        v5072 = cv5072;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'controller_api_toggle_pause0_177': {
        const v8778 = v5559[1];
        undefined /* setApiDetails */;
        const v8923 = stdlib.addressEq(v5558, v5020);
        stdlib.assert(v8923, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./src/contracts/coin_shop.rsh:251:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:250:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:250:43:function exp)', 'at ./src/contracts/coin_shop.rsh:114:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:250:43:function exp)', 'at ./src/contracts/coin_shop.rsh:114:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:114:64:function exp)', 'at ./src/contracts/coin_shop.rsh:126:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:126:18:function exp)'],
          msg: 'action not authorized',
          who: 'Admin'
          });
        const v8978 = stdlib.le(v5072, stdlib.UInt_max);
        stdlib.assert(v8978, {
          at: './src/contracts/coin_shop.rsh:114:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        ;
        const v8983 = stdlib.le(v5106, stdlib.UInt_max);
        stdlib.assert(v8983, {
          at: './src/contracts/coin_shop.rsh:114:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        ;
        const v8991 = stdlib.le(v5108, stdlib.UInt_max);
        stdlib.assert(v8991, {
          at: './src/contracts/coin_shop.rsh:114:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        ;
        const v8999 = stdlib.le(v5110, stdlib.UInt_max);
        stdlib.assert(v8999, {
          at: './src/contracts/coin_shop.rsh:114:64:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        ;
        const v9302 = 'Resuming Contract APIs        ';
        const v9303 = 'Pausing Contract APIs         ';
        const v9304 = v5063 ? v9302 : v9303;
        stdlib.protect(ctc2, await interact.log(v9304), {
          at: './src/contracts/coin_shop.rsh:260:39:application',
          fs: ['at ./src/contracts/coin_shop.rsh:260:39:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:260:39:function exp)', 'at ./src/contracts/coin_shop.rsh:260:39:application call to "liftedInteract" (defined at: ./src/contracts/coin_shop.rsh:260:39:application)', 'at ./src/contracts/coin_shop.rsh:255:27:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:255:27:function exp)'],
          msg: 'log',
          who: 'Admin'
          });
        
        await txn4.getOutput('controller_api_toggle_pause', 'v5102', ctc8, v5102);
        const cv5062 = v5062;
        const cv5063 = v5102;
        const cv5064 = v5064;
        const cv5065 = v5560;
        const cv5071 = v5071;
        const cv5072 = v5072;
        
        v5062 = cv5062;
        v5063 = cv5063;
        v5064 = cv5064;
        v5065 = cv5065;
        v5071 = cv5071;
        v5072 = cv5072;
        
        txn3 = txn4;
        continue;
        break;
        }
      }
    
    }
  const v9317 = v5071[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:132:24:application', stdlib.UInt_max, '0')];
  const v9318 = v9317[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:132:24:application', stdlib.UInt_max, '0')];
  const v9319 = v5071[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:133:24:application', stdlib.UInt_max, '1')];
  const v9320 = v9319[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:133:24:application', stdlib.UInt_max, '0')];
  const v9321 = v5071[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:134:24:application', stdlib.UInt_max, '2')];
  const v9322 = v9321[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:134:24:application', stdlib.UInt_max, '0')];
  const v9323 = [v9318, v9320, v9322];
  const txn4 = await (ctc.sendrecv({
    args: [v5020, v5021, v5022, v5023, v5062, v5063, v5071, v5072, v9317, v9318, v9320, v9322, v9323],
    evt_cnt: 0,
    funcNum: 3,
    lct: v5065,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn4) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v9336, time: v9335, didSend: v4618, from: v9334 } = txn4;
      
      ;
      sim_r.txns.push({
        kind: 'from',
        to: v5020,
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        kind: 'from',
        to: v5020,
        tok: v5021
        });
      sim_r.txns.push({
        kind: 'from',
        to: v5020,
        tok: v5022
        });
      sim_r.txns.push({
        kind: 'from',
        to: v5020,
        tok: v5023
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: v5023
        })
      sim_r.txns.push({
        kind: 'halt',
        tok: v5022
        })
      sim_r.txns.push({
        kind: 'halt',
        tok: v5021
        })
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc9, ctc0, ctc0, ctc0, ctc5, ctc8, ctc11, ctc4, ctc10, ctc4, ctc4, ctc4, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v9336, time: v9335, didSend: v4618, from: v9334 } = txn4;
  ;
  const v9337 = stdlib.addressEq(v5020, v9334);
  stdlib.assert(v9337, {
    at: 'reach standard library:197:11:dot',
    fs: ['at ./src/contracts/coin_shop.rsh:289:12:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: 'sender correct',
    who: 'Admin'
    });
  const v9360 = stdlib.sub(v5072, v5072);
  const v9361 = stdlib.ge(v9360, stdlib.checkedBigNumberify('reach standard library:198:46:application', stdlib.UInt_max, '0'));
  stdlib.assert(v9361, {
    at: 'reach standard library:198:46:application',
    fs: ['at ./src/contracts/coin_shop.rsh:289:12:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: 'assume >= 0',
    who: 'Admin'
    });
  ;
  const v9368 = stdlib.sub(v9318, v9318);
  const v9369 = stdlib.ge(v9368, stdlib.checkedBigNumberify('reach standard library:198:46:application', stdlib.UInt_max, '0'));
  stdlib.assert(v9369, {
    at: 'reach standard library:198:46:application',
    fs: ['at ./src/contracts/coin_shop.rsh:289:12:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: 'assume >= 0',
    who: 'Admin'
    });
  const v9372 = stdlib.Array_set(v9317, '0', v9368);
  const v9373 = stdlib.Array_set(v5071, stdlib.checkedBigNumberify('reach standard library:198:46:application', stdlib.UInt_max, '0'), v9372);
  ;
  const v9374 = v9373[stdlib.checkedBigNumberify('reach standard library:198:46:application', stdlib.UInt_max, '1')];
  const v9375 = v9374[stdlib.checkedBigNumberify('reach standard library:198:46:application', stdlib.UInt_max, '0')];
  const v9379 = stdlib.sub(v9375, v9320);
  const v9380 = stdlib.ge(v9379, stdlib.checkedBigNumberify('reach standard library:198:46:application', stdlib.UInt_max, '0'));
  stdlib.assert(v9380, {
    at: 'reach standard library:198:46:application',
    fs: ['at ./src/contracts/coin_shop.rsh:289:12:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: 'assume >= 0',
    who: 'Admin'
    });
  const v9383 = stdlib.Array_set(v9374, '0', v9379);
  const v9384 = stdlib.Array_set(v9373, stdlib.checkedBigNumberify('reach standard library:198:46:application', stdlib.UInt_max, '1'), v9383);
  ;
  const v9385 = v9384[stdlib.checkedBigNumberify('reach standard library:198:46:application', stdlib.UInt_max, '2')];
  const v9386 = v9385[stdlib.checkedBigNumberify('reach standard library:198:46:application', stdlib.UInt_max, '0')];
  const v9390 = stdlib.sub(v9386, v9322);
  const v9391 = stdlib.ge(v9390, stdlib.checkedBigNumberify('reach standard library:198:46:application', stdlib.UInt_max, '0'));
  stdlib.assert(v9391, {
    at: 'reach standard library:198:46:application',
    fs: ['at ./src/contracts/coin_shop.rsh:289:12:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: 'assume >= 0',
    who: 'Admin'
    });
  ;
  const v9409 = 'Closing contract...';
  stdlib.protect(ctc2, await interact.log(v9409), {
    at: './src/contracts/coin_shop.rsh:292:31:application',
    fs: ['at ./src/contracts/coin_shop.rsh:292:31:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:292:31:function exp)', 'at ./src/contracts/coin_shop.rsh:292:31:application call to "liftedInteract" (defined at: ./src/contracts/coin_shop.rsh:292:31:application)', 'at reach standard library:200:8:application call to "after" (defined at: ./src/contracts/coin_shop.rsh:291:12:function exp)', 'at ./src/contracts/coin_shop.rsh:289:12:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: 'log',
    who: 'Admin'
    });
  
  return;
  
  
  
  
  
  
  };
export async function _buyer_api_purchase_bronze5(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _buyer_api_purchase_bronze5 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _buyer_api_purchase_bronze5 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Tuple([ctc2, ctc2, ctc2]);
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Tuple([ctc2, ctc2, ctc4]);
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Tuple([ctc3]);
  const ctc9 = stdlib.T_Data({
    buyer_api_purchase_bronze0_177: ctc7,
    buyer_api_purchase_gold0_177: ctc7,
    buyer_api_purchase_silver0_177: ctc7,
    controller_api_restock0_177: ctc8,
    controller_api_set_prices0_177: ctc8,
    controller_api_terminate0_177: ctc7,
    controller_api_toggle_pause0_177: ctc7
    });
  const ctc10 = stdlib.T_Null;
  
  
  const [v5020, v5021, v5022, v5023, v5062, v5063, v5064, v5071, v5072, v5102, v5104, v5105, v5106, v5107, v5108, v5109, v5110, v5111, v5113, v5114, v5115] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc0, ctc1, ctc1, ctc1, ctc3, ctc4, ctc4, ctc6, ctc2, ctc4, ctc4, ctc5, ctc2, ctc5, ctc2, ctc5, ctc2, ctc3, ctc2, ctc2, ctc2]);
  const v5118 = stdlib.protect(ctc7, await interact.in(), {
    at: './src/contracts/coin_shop.rsh:1:23:application',
    fs: ['at ./src/contracts/coin_shop.rsh:152:41:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:152:41:function exp)', 'at ./src/contracts/coin_shop.rsh:114:64:application call to "runbuyer_api_purchase_bronze0_177" (defined at: ./src/contracts/coin_shop.rsh:152:14:function exp)', 'at ./src/contracts/coin_shop.rsh:114:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:114:64:function exp)'],
    msg: 'in',
    who: 'buyer_api_purchase_bronze'
    });
  stdlib.assert(v5104, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/coin_shop.rsh:153:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:152:41:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:152:41:function exp)', 'at ./src/contracts/coin_shop.rsh:114:64:application call to "runbuyer_api_purchase_bronze0_177" (defined at: ./src/contracts/coin_shop.rsh:152:14:function exp)', 'at ./src/contracts/coin_shop.rsh:114:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:114:64:function exp)'],
    msg: 'contract is currently inactive',
    who: 'buyer_api_purchase_bronze'
    });
  const v5122 = stdlib.ge(v5106, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:154:37:decimal', stdlib.UInt_max, '1'));
  stdlib.assert(v5122, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/coin_shop.rsh:154:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:152:41:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:152:41:function exp)', 'at ./src/contracts/coin_shop.rsh:114:64:application call to "runbuyer_api_purchase_bronze0_177" (defined at: ./src/contracts/coin_shop.rsh:152:14:function exp)', 'at ./src/contracts/coin_shop.rsh:114:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:114:64:function exp)'],
    msg: 'balance insufficient for transaction',
    who: 'buyer_api_purchase_bronze'
    });
  const v5127 = ['buyer_api_purchase_bronze0_177', v5118];
  
  const txn1 = await (ctc.sendrecv({
    args: [v5020, v5021, v5022, v5023, v5062, v5063, v5064, v5071, v5072, v5102, v5104, v5105, v5106, v5107, v5108, v5109, v5110, v5111, v5113, v5114, v5115, v5127],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [v5113, [[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:158:43:decimal', stdlib.UInt_max, '0'), v5021], [stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:158:46:decimal', stdlib.UInt_max, '0'), v5022], [stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:158:49:decimal', stdlib.UInt_max, '0'), v5023]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v5559], secs: v5561, time: v5560, didSend: v4073, from: v5558 } = txn1;
      
      switch (v5559[0]) {
        case 'buyer_api_purchase_bronze0_177': {
          const v5562 = v5559[1];
          sim_r.txns.push({
            kind: 'api',
            who: "buyer_api_purchase_bronze"
            });
          const v5761 = stdlib.add(v5072, v5113);
          sim_r.txns.push({
            amt: v5113,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          ;
          ;
          ;
          const v5820 = stdlib.sub(v5761, v5761);
          sim_r.txns.push({
            kind: 'from',
            to: v5020,
            tok: undefined /* Nothing */
            });
          const v5850 = stdlib.sub(v5106, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:162:44:decimal', stdlib.UInt_max, '1'));
          const v5854 = stdlib.Array_set(v5105, '0', v5850);
          const v5855 = stdlib.Array_set(v5071, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:162:56:application', stdlib.UInt_max, '0'), v5854);
          sim_r.txns.push({
            kind: 'from',
            to: v5558,
            tok: v5021
            });
          const v5856 = 'bronze';
          null;
          const v5857 = true;
          const v5858 = await txn1.getOutput('buyer_api_purchase_bronze', 'v5857', ctc4, v5857);
          
          const v11317 = v5062;
          const v11318 = v5063;
          const v11319 = v5064;
          const v11321 = v5855;
          const v11322 = v5820;
          const v11323 = v5064 ? false : true;
          if (v5064) {
            const v11337 = v5855[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:132:24:application', stdlib.UInt_max, '0')];
            const v11338 = v11337[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:132:24:application', stdlib.UInt_max, '0')];
            const v11339 = v5855[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:133:24:application', stdlib.UInt_max, '1')];
            const v11340 = v11339[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:133:24:application', stdlib.UInt_max, '0')];
            const v11341 = v5855[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:134:24:application', stdlib.UInt_max, '2')];
            const v11342 = v11341[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:134:24:application', stdlib.UInt_max, '0')];
            const v11343 = [v11338, v11340, v11342];
            sim_r.isHalt = false;
            }
          else {
            const v11324 = v5063 ? false : true;
            const v11326 = v5063 ? false : v11323;
            const v11327 = v5855[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:132:24:application', stdlib.UInt_max, '0')];
            const v11328 = v11327[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:132:24:application', stdlib.UInt_max, '0')];
            const v11329 = v5855[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:133:24:application', stdlib.UInt_max, '1')];
            const v11330 = v11329[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:133:24:application', stdlib.UInt_max, '0')];
            const v11331 = v5855[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:134:24:application', stdlib.UInt_max, '2')];
            const v11332 = v11331[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:134:24:application', stdlib.UInt_max, '0')];
            const v11333 = [v11328, v11330, v11332];
            const v11334 = v5062[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:147:33:application', stdlib.UInt_max, '0')];
            const v11335 = v5062[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:147:33:application', stdlib.UInt_max, '1')];
            const v11336 = v5062[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:147:33:application', stdlib.UInt_max, '2')];
            sim_r.isHalt = false;
            }
          break;
          }
        case 'buyer_api_purchase_gold0_177': {
          const v6098 = v5559[1];
          
          break;
          }
        case 'buyer_api_purchase_silver0_177': {
          const v6634 = v5559[1];
          
          break;
          }
        case 'controller_api_restock0_177': {
          const v7170 = v5559[1];
          
          break;
          }
        case 'controller_api_set_prices0_177': {
          const v7706 = v5559[1];
          
          break;
          }
        case 'controller_api_terminate0_177': {
          const v8242 = v5559[1];
          
          break;
          }
        case 'controller_api_toggle_pause0_177': {
          const v8778 = v5559[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc1, ctc3, ctc4, ctc4, ctc6, ctc2, ctc4, ctc4, ctc5, ctc2, ctc5, ctc2, ctc5, ctc2, ctc3, ctc2, ctc2, ctc2, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v5559], secs: v5561, time: v5560, didSend: v4073, from: v5558 } = txn1;
  switch (v5559[0]) {
    case 'buyer_api_purchase_bronze0_177': {
      const v5562 = v5559[1];
      undefined /* setApiDetails */;
      stdlib.assert(v5104, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./src/contracts/coin_shop.rsh:153:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:152:41:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:152:41:function exp)', 'at ./src/contracts/coin_shop.rsh:114:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:152:41:function exp)', 'at ./src/contracts/coin_shop.rsh:114:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:114:64:function exp)', 'at ./src/contracts/coin_shop.rsh:126:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:126:18:function exp)'],
        msg: 'contract is currently inactive',
        who: 'buyer_api_purchase_bronze'
        });
      const v5570 = stdlib.ge(v5106, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:154:37:decimal', stdlib.UInt_max, '1'));
      stdlib.assert(v5570, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./src/contracts/coin_shop.rsh:154:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:152:41:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:152:41:function exp)', 'at ./src/contracts/coin_shop.rsh:114:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:152:41:function exp)', 'at ./src/contracts/coin_shop.rsh:114:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:114:64:function exp)', 'at ./src/contracts/coin_shop.rsh:126:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:126:18:function exp)'],
        msg: 'balance insufficient for transaction',
        who: 'buyer_api_purchase_bronze'
        });
      const v5761 = stdlib.add(v5072, v5113);
      const v5762 = stdlib.le(v5761, stdlib.UInt_max);
      stdlib.assert(v5762, {
        at: './src/contracts/coin_shop.rsh:114:64:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'buyer_api_purchase_bronze'
        });
      ;
      const v5767 = stdlib.le(v5106, stdlib.UInt_max);
      stdlib.assert(v5767, {
        at: './src/contracts/coin_shop.rsh:114:64:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'buyer_api_purchase_bronze'
        });
      ;
      const v5775 = stdlib.le(v5108, stdlib.UInt_max);
      stdlib.assert(v5775, {
        at: './src/contracts/coin_shop.rsh:114:64:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'buyer_api_purchase_bronze'
        });
      ;
      const v5783 = stdlib.le(v5110, stdlib.UInt_max);
      stdlib.assert(v5783, {
        at: './src/contracts/coin_shop.rsh:114:64:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'buyer_api_purchase_bronze'
        });
      ;
      const v5820 = stdlib.sub(v5761, v5761);
      const v5821 = stdlib.ge(v5820, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:161:64:application', stdlib.UInt_max, '0'));
      stdlib.assert(v5821, {
        at: './src/contracts/coin_shop.rsh:161:64:application',
        fs: ['at ./src/contracts/coin_shop.rsh:159:27:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:159:27:function exp)'],
        msg: 'assume >= 0',
        who: 'buyer_api_purchase_bronze'
        });
      ;
      const v5850 = stdlib.sub(v5106, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:162:44:decimal', stdlib.UInt_max, '1'));
      const v5851 = stdlib.ge(v5850, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:162:56:application', stdlib.UInt_max, '0'));
      stdlib.assert(v5851, {
        at: './src/contracts/coin_shop.rsh:162:56:application',
        fs: ['at ./src/contracts/coin_shop.rsh:159:27:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:159:27:function exp)'],
        msg: 'assume >= 0',
        who: 'buyer_api_purchase_bronze'
        });
      const v5854 = stdlib.Array_set(v5105, '0', v5850);
      const v5855 = stdlib.Array_set(v5071, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:162:56:application', stdlib.UInt_max, '0'), v5854);
      ;
      const v5856 = 'bronze';
      null;
      const v5857 = true;
      const v5858 = await txn1.getOutput('buyer_api_purchase_bronze', 'v5857', ctc4, v5857);
      if (v4073) {
        stdlib.protect(ctc10, await interact.out(v5562, v5858), {
          at: './src/contracts/coin_shop.rsh:152:15:application',
          fs: ['at ./src/contracts/coin_shop.rsh:152:15:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:152:15:function exp)', 'at ./src/contracts/coin_shop.rsh:166:28:application call to "retFunc" (defined at: ./src/contracts/coin_shop.rsh:159:27:function exp)', 'at ./src/contracts/coin_shop.rsh:159:27:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:159:27:function exp)'],
          msg: 'out',
          who: 'buyer_api_purchase_bronze'
          });
        }
      else {
        }
      
      const v11317 = v5062;
      const v11318 = v5063;
      const v11319 = v5064;
      const v11321 = v5855;
      const v11322 = v5820;
      const v11323 = v5064 ? false : true;
      if (v5064) {
        const v11337 = v5855[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:132:24:application', stdlib.UInt_max, '0')];
        const v11338 = v11337[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:132:24:application', stdlib.UInt_max, '0')];
        const v11339 = v5855[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:133:24:application', stdlib.UInt_max, '1')];
        const v11340 = v11339[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:133:24:application', stdlib.UInt_max, '0')];
        const v11341 = v5855[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:134:24:application', stdlib.UInt_max, '2')];
        const v11342 = v11341[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:134:24:application', stdlib.UInt_max, '0')];
        const v11343 = [v11338, v11340, v11342];
        return;
        }
      else {
        const v11324 = v5063 ? false : true;
        const v11326 = v5063 ? false : v11323;
        const v11327 = v5855[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:132:24:application', stdlib.UInt_max, '0')];
        const v11328 = v11327[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:132:24:application', stdlib.UInt_max, '0')];
        const v11329 = v5855[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:133:24:application', stdlib.UInt_max, '1')];
        const v11330 = v11329[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:133:24:application', stdlib.UInt_max, '0')];
        const v11331 = v5855[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:134:24:application', stdlib.UInt_max, '2')];
        const v11332 = v11331[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:134:24:application', stdlib.UInt_max, '0')];
        const v11333 = [v11328, v11330, v11332];
        const v11334 = v5062[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:147:33:application', stdlib.UInt_max, '0')];
        const v11335 = v5062[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:147:33:application', stdlib.UInt_max, '1')];
        const v11336 = v5062[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:147:33:application', stdlib.UInt_max, '2')];
        return;
        }
      break;
      }
    case 'buyer_api_purchase_gold0_177': {
      const v6098 = v5559[1];
      return;
      break;
      }
    case 'buyer_api_purchase_silver0_177': {
      const v6634 = v5559[1];
      return;
      break;
      }
    case 'controller_api_restock0_177': {
      const v7170 = v5559[1];
      return;
      break;
      }
    case 'controller_api_set_prices0_177': {
      const v7706 = v5559[1];
      return;
      break;
      }
    case 'controller_api_terminate0_177': {
      const v8242 = v5559[1];
      return;
      break;
      }
    case 'controller_api_toggle_pause0_177': {
      const v8778 = v5559[1];
      return;
      break;
      }
    }
  
  
  };
export async function _buyer_api_purchase_gold5(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _buyer_api_purchase_gold5 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _buyer_api_purchase_gold5 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Tuple([ctc2, ctc2, ctc2]);
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Tuple([ctc2, ctc2, ctc4]);
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Tuple([ctc3]);
  const ctc9 = stdlib.T_Data({
    buyer_api_purchase_bronze0_177: ctc7,
    buyer_api_purchase_gold0_177: ctc7,
    buyer_api_purchase_silver0_177: ctc7,
    controller_api_restock0_177: ctc8,
    controller_api_set_prices0_177: ctc8,
    controller_api_terminate0_177: ctc7,
    controller_api_toggle_pause0_177: ctc7
    });
  const ctc10 = stdlib.T_Null;
  
  
  const [v5020, v5021, v5022, v5023, v5062, v5063, v5064, v5071, v5072, v5102, v5104, v5105, v5106, v5107, v5108, v5109, v5110, v5111, v5113, v5114, v5115] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc0, ctc1, ctc1, ctc1, ctc3, ctc4, ctc4, ctc6, ctc2, ctc4, ctc4, ctc5, ctc2, ctc5, ctc2, ctc5, ctc2, ctc3, ctc2, ctc2, ctc2]);
  const v5144 = stdlib.protect(ctc7, await interact.in(), {
    at: './src/contracts/coin_shop.rsh:1:23:application',
    fs: ['at ./src/contracts/coin_shop.rsh:192:39:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:192:39:function exp)', 'at ./src/contracts/coin_shop.rsh:114:64:application call to "runbuyer_api_purchase_gold0_177" (defined at: ./src/contracts/coin_shop.rsh:192:14:function exp)', 'at ./src/contracts/coin_shop.rsh:114:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:114:64:function exp)'],
    msg: 'in',
    who: 'buyer_api_purchase_gold'
    });
  stdlib.assert(v5104, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/coin_shop.rsh:193:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:192:39:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:192:39:function exp)', 'at ./src/contracts/coin_shop.rsh:114:64:application call to "runbuyer_api_purchase_gold0_177" (defined at: ./src/contracts/coin_shop.rsh:192:14:function exp)', 'at ./src/contracts/coin_shop.rsh:114:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:114:64:function exp)'],
    msg: 'contract is currently inactive',
    who: 'buyer_api_purchase_gold'
    });
  const v5148 = stdlib.ge(v5110, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:194:37:decimal', stdlib.UInt_max, '1'));
  stdlib.assert(v5148, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/coin_shop.rsh:194:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:192:39:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:192:39:function exp)', 'at ./src/contracts/coin_shop.rsh:114:64:application call to "runbuyer_api_purchase_gold0_177" (defined at: ./src/contracts/coin_shop.rsh:192:14:function exp)', 'at ./src/contracts/coin_shop.rsh:114:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:114:64:function exp)'],
    msg: 'balance insufficient for transaction',
    who: 'buyer_api_purchase_gold'
    });
  const v5153 = ['buyer_api_purchase_gold0_177', v5144];
  
  const txn1 = await (ctc.sendrecv({
    args: [v5020, v5021, v5022, v5023, v5062, v5063, v5064, v5071, v5072, v5102, v5104, v5105, v5106, v5107, v5108, v5109, v5110, v5111, v5113, v5114, v5115, v5153],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [v5115, [[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:198:43:decimal', stdlib.UInt_max, '0'), v5021], [stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:198:46:decimal', stdlib.UInt_max, '0'), v5022], [stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:198:49:decimal', stdlib.UInt_max, '0'), v5023]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v5559], secs: v5561, time: v5560, didSend: v4073, from: v5558 } = txn1;
      
      switch (v5559[0]) {
        case 'buyer_api_purchase_bronze0_177': {
          const v5562 = v5559[1];
          
          break;
          }
        case 'buyer_api_purchase_gold0_177': {
          const v6098 = v5559[1];
          sim_r.txns.push({
            kind: 'api',
            who: "buyer_api_purchase_gold"
            });
          const v6297 = stdlib.add(v5072, v5115);
          sim_r.txns.push({
            amt: v5115,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          ;
          ;
          ;
          const v6432 = stdlib.sub(v6297, v6297);
          sim_r.txns.push({
            kind: 'from',
            to: v5020,
            tok: undefined /* Nothing */
            });
          const v6462 = stdlib.sub(v5110, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:202:50:decimal', stdlib.UInt_max, '1'));
          const v6466 = stdlib.Array_set(v5109, '0', v6462);
          const v6467 = stdlib.Array_set(v5071, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:202:56:application', stdlib.UInt_max, '2'), v6466);
          sim_r.txns.push({
            kind: 'from',
            to: v5558,
            tok: v5023
            });
          const v6468 = 'gold  ';
          null;
          const v6469 = true;
          const v6470 = await txn1.getOutput('buyer_api_purchase_gold', 'v6469', ctc4, v6469);
          
          const v11701 = v5062;
          const v11702 = v5063;
          const v11703 = v5064;
          const v11705 = v6467;
          const v11706 = v6432;
          const v11707 = v5064 ? false : true;
          if (v5064) {
            const v11721 = v6467[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:132:24:application', stdlib.UInt_max, '0')];
            const v11722 = v11721[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:132:24:application', stdlib.UInt_max, '0')];
            const v11723 = v6467[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:133:24:application', stdlib.UInt_max, '1')];
            const v11724 = v11723[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:133:24:application', stdlib.UInt_max, '0')];
            const v11725 = v6467[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:134:24:application', stdlib.UInt_max, '2')];
            const v11726 = v11725[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:134:24:application', stdlib.UInt_max, '0')];
            const v11727 = [v11722, v11724, v11726];
            sim_r.isHalt = false;
            }
          else {
            const v11708 = v5063 ? false : true;
            const v11710 = v5063 ? false : v11707;
            const v11711 = v6467[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:132:24:application', stdlib.UInt_max, '0')];
            const v11712 = v11711[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:132:24:application', stdlib.UInt_max, '0')];
            const v11713 = v6467[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:133:24:application', stdlib.UInt_max, '1')];
            const v11714 = v11713[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:133:24:application', stdlib.UInt_max, '0')];
            const v11715 = v6467[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:134:24:application', stdlib.UInt_max, '2')];
            const v11716 = v11715[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:134:24:application', stdlib.UInt_max, '0')];
            const v11717 = [v11712, v11714, v11716];
            const v11718 = v5062[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:147:33:application', stdlib.UInt_max, '0')];
            const v11719 = v5062[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:147:33:application', stdlib.UInt_max, '1')];
            const v11720 = v5062[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:147:33:application', stdlib.UInt_max, '2')];
            sim_r.isHalt = false;
            }
          break;
          }
        case 'buyer_api_purchase_silver0_177': {
          const v6634 = v5559[1];
          
          break;
          }
        case 'controller_api_restock0_177': {
          const v7170 = v5559[1];
          
          break;
          }
        case 'controller_api_set_prices0_177': {
          const v7706 = v5559[1];
          
          break;
          }
        case 'controller_api_terminate0_177': {
          const v8242 = v5559[1];
          
          break;
          }
        case 'controller_api_toggle_pause0_177': {
          const v8778 = v5559[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc1, ctc3, ctc4, ctc4, ctc6, ctc2, ctc4, ctc4, ctc5, ctc2, ctc5, ctc2, ctc5, ctc2, ctc3, ctc2, ctc2, ctc2, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v5559], secs: v5561, time: v5560, didSend: v4073, from: v5558 } = txn1;
  switch (v5559[0]) {
    case 'buyer_api_purchase_bronze0_177': {
      const v5562 = v5559[1];
      return;
      break;
      }
    case 'buyer_api_purchase_gold0_177': {
      const v6098 = v5559[1];
      undefined /* setApiDetails */;
      stdlib.assert(v5104, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./src/contracts/coin_shop.rsh:193:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:192:39:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:192:39:function exp)', 'at ./src/contracts/coin_shop.rsh:114:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:192:39:function exp)', 'at ./src/contracts/coin_shop.rsh:114:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:114:64:function exp)', 'at ./src/contracts/coin_shop.rsh:126:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:126:18:function exp)'],
        msg: 'contract is currently inactive',
        who: 'buyer_api_purchase_gold'
        });
      const v6129 = stdlib.ge(v5110, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:194:37:decimal', stdlib.UInt_max, '1'));
      stdlib.assert(v6129, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./src/contracts/coin_shop.rsh:194:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:192:39:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:192:39:function exp)', 'at ./src/contracts/coin_shop.rsh:114:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:192:39:function exp)', 'at ./src/contracts/coin_shop.rsh:114:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:114:64:function exp)', 'at ./src/contracts/coin_shop.rsh:126:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:126:18:function exp)'],
        msg: 'balance insufficient for transaction',
        who: 'buyer_api_purchase_gold'
        });
      const v6297 = stdlib.add(v5072, v5115);
      const v6298 = stdlib.le(v6297, stdlib.UInt_max);
      stdlib.assert(v6298, {
        at: './src/contracts/coin_shop.rsh:114:64:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'buyer_api_purchase_gold'
        });
      ;
      const v6303 = stdlib.le(v5106, stdlib.UInt_max);
      stdlib.assert(v6303, {
        at: './src/contracts/coin_shop.rsh:114:64:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'buyer_api_purchase_gold'
        });
      ;
      const v6311 = stdlib.le(v5108, stdlib.UInt_max);
      stdlib.assert(v6311, {
        at: './src/contracts/coin_shop.rsh:114:64:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'buyer_api_purchase_gold'
        });
      ;
      const v6319 = stdlib.le(v5110, stdlib.UInt_max);
      stdlib.assert(v6319, {
        at: './src/contracts/coin_shop.rsh:114:64:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'buyer_api_purchase_gold'
        });
      ;
      const v6432 = stdlib.sub(v6297, v6297);
      const v6433 = stdlib.ge(v6432, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:201:64:application', stdlib.UInt_max, '0'));
      stdlib.assert(v6433, {
        at: './src/contracts/coin_shop.rsh:201:64:application',
        fs: ['at ./src/contracts/coin_shop.rsh:199:27:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:199:27:function exp)'],
        msg: 'assume >= 0',
        who: 'buyer_api_purchase_gold'
        });
      ;
      const v6462 = stdlib.sub(v5110, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:202:50:decimal', stdlib.UInt_max, '1'));
      const v6463 = stdlib.ge(v6462, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:202:56:application', stdlib.UInt_max, '0'));
      stdlib.assert(v6463, {
        at: './src/contracts/coin_shop.rsh:202:56:application',
        fs: ['at ./src/contracts/coin_shop.rsh:199:27:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:199:27:function exp)'],
        msg: 'assume >= 0',
        who: 'buyer_api_purchase_gold'
        });
      const v6466 = stdlib.Array_set(v5109, '0', v6462);
      const v6467 = stdlib.Array_set(v5071, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:202:56:application', stdlib.UInt_max, '2'), v6466);
      ;
      const v6468 = 'gold  ';
      null;
      const v6469 = true;
      const v6470 = await txn1.getOutput('buyer_api_purchase_gold', 'v6469', ctc4, v6469);
      if (v4073) {
        stdlib.protect(ctc10, await interact.out(v6098, v6470), {
          at: './src/contracts/coin_shop.rsh:192:15:application',
          fs: ['at ./src/contracts/coin_shop.rsh:192:15:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:192:15:function exp)', 'at ./src/contracts/coin_shop.rsh:206:28:application call to "retFunc" (defined at: ./src/contracts/coin_shop.rsh:199:27:function exp)', 'at ./src/contracts/coin_shop.rsh:199:27:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:199:27:function exp)'],
          msg: 'out',
          who: 'buyer_api_purchase_gold'
          });
        }
      else {
        }
      
      const v11701 = v5062;
      const v11702 = v5063;
      const v11703 = v5064;
      const v11705 = v6467;
      const v11706 = v6432;
      const v11707 = v5064 ? false : true;
      if (v5064) {
        const v11721 = v6467[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:132:24:application', stdlib.UInt_max, '0')];
        const v11722 = v11721[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:132:24:application', stdlib.UInt_max, '0')];
        const v11723 = v6467[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:133:24:application', stdlib.UInt_max, '1')];
        const v11724 = v11723[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:133:24:application', stdlib.UInt_max, '0')];
        const v11725 = v6467[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:134:24:application', stdlib.UInt_max, '2')];
        const v11726 = v11725[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:134:24:application', stdlib.UInt_max, '0')];
        const v11727 = [v11722, v11724, v11726];
        return;
        }
      else {
        const v11708 = v5063 ? false : true;
        const v11710 = v5063 ? false : v11707;
        const v11711 = v6467[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:132:24:application', stdlib.UInt_max, '0')];
        const v11712 = v11711[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:132:24:application', stdlib.UInt_max, '0')];
        const v11713 = v6467[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:133:24:application', stdlib.UInt_max, '1')];
        const v11714 = v11713[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:133:24:application', stdlib.UInt_max, '0')];
        const v11715 = v6467[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:134:24:application', stdlib.UInt_max, '2')];
        const v11716 = v11715[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:134:24:application', stdlib.UInt_max, '0')];
        const v11717 = [v11712, v11714, v11716];
        const v11718 = v5062[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:147:33:application', stdlib.UInt_max, '0')];
        const v11719 = v5062[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:147:33:application', stdlib.UInt_max, '1')];
        const v11720 = v5062[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:147:33:application', stdlib.UInt_max, '2')];
        return;
        }
      break;
      }
    case 'buyer_api_purchase_silver0_177': {
      const v6634 = v5559[1];
      return;
      break;
      }
    case 'controller_api_restock0_177': {
      const v7170 = v5559[1];
      return;
      break;
      }
    case 'controller_api_set_prices0_177': {
      const v7706 = v5559[1];
      return;
      break;
      }
    case 'controller_api_terminate0_177': {
      const v8242 = v5559[1];
      return;
      break;
      }
    case 'controller_api_toggle_pause0_177': {
      const v8778 = v5559[1];
      return;
      break;
      }
    }
  
  
  };
export async function _buyer_api_purchase_silver5(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _buyer_api_purchase_silver5 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _buyer_api_purchase_silver5 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Tuple([ctc2, ctc2, ctc2]);
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Tuple([ctc2, ctc2, ctc4]);
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Tuple([ctc3]);
  const ctc9 = stdlib.T_Data({
    buyer_api_purchase_bronze0_177: ctc7,
    buyer_api_purchase_gold0_177: ctc7,
    buyer_api_purchase_silver0_177: ctc7,
    controller_api_restock0_177: ctc8,
    controller_api_set_prices0_177: ctc8,
    controller_api_terminate0_177: ctc7,
    controller_api_toggle_pause0_177: ctc7
    });
  const ctc10 = stdlib.T_Null;
  
  
  const [v5020, v5021, v5022, v5023, v5062, v5063, v5064, v5071, v5072, v5102, v5104, v5105, v5106, v5107, v5108, v5109, v5110, v5111, v5113, v5114, v5115] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc0, ctc1, ctc1, ctc1, ctc3, ctc4, ctc4, ctc6, ctc2, ctc4, ctc4, ctc5, ctc2, ctc5, ctc2, ctc5, ctc2, ctc3, ctc2, ctc2, ctc2]);
  const v5131 = stdlib.protect(ctc7, await interact.in(), {
    at: './src/contracts/coin_shop.rsh:1:23:application',
    fs: ['at ./src/contracts/coin_shop.rsh:172:41:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:172:41:function exp)', 'at ./src/contracts/coin_shop.rsh:114:64:application call to "runbuyer_api_purchase_silver0_177" (defined at: ./src/contracts/coin_shop.rsh:172:14:function exp)', 'at ./src/contracts/coin_shop.rsh:114:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:114:64:function exp)'],
    msg: 'in',
    who: 'buyer_api_purchase_silver'
    });
  stdlib.assert(v5104, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/coin_shop.rsh:173:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:172:41:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:172:41:function exp)', 'at ./src/contracts/coin_shop.rsh:114:64:application call to "runbuyer_api_purchase_silver0_177" (defined at: ./src/contracts/coin_shop.rsh:172:14:function exp)', 'at ./src/contracts/coin_shop.rsh:114:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:114:64:function exp)'],
    msg: 'contract is currently inactive',
    who: 'buyer_api_purchase_silver'
    });
  const v5135 = stdlib.ge(v5108, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:174:37:decimal', stdlib.UInt_max, '1'));
  stdlib.assert(v5135, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/coin_shop.rsh:174:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:172:41:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:172:41:function exp)', 'at ./src/contracts/coin_shop.rsh:114:64:application call to "runbuyer_api_purchase_silver0_177" (defined at: ./src/contracts/coin_shop.rsh:172:14:function exp)', 'at ./src/contracts/coin_shop.rsh:114:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:114:64:function exp)'],
    msg: 'balance insufficient for transaction',
    who: 'buyer_api_purchase_silver'
    });
  const v5140 = ['buyer_api_purchase_silver0_177', v5131];
  
  const txn1 = await (ctc.sendrecv({
    args: [v5020, v5021, v5022, v5023, v5062, v5063, v5064, v5071, v5072, v5102, v5104, v5105, v5106, v5107, v5108, v5109, v5110, v5111, v5113, v5114, v5115, v5140],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [v5114, [[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:178:43:decimal', stdlib.UInt_max, '0'), v5021], [stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:178:46:decimal', stdlib.UInt_max, '0'), v5022], [stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:178:49:decimal', stdlib.UInt_max, '0'), v5023]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v5559], secs: v5561, time: v5560, didSend: v4073, from: v5558 } = txn1;
      
      switch (v5559[0]) {
        case 'buyer_api_purchase_bronze0_177': {
          const v5562 = v5559[1];
          
          break;
          }
        case 'buyer_api_purchase_gold0_177': {
          const v6098 = v5559[1];
          
          break;
          }
        case 'buyer_api_purchase_silver0_177': {
          const v6634 = v5559[1];
          sim_r.txns.push({
            kind: 'api',
            who: "buyer_api_purchase_silver"
            });
          const v6833 = stdlib.add(v5072, v5114);
          sim_r.txns.push({
            amt: v5114,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          ;
          ;
          ;
          const v7044 = stdlib.sub(v6833, v6833);
          sim_r.txns.push({
            kind: 'from',
            to: v5020,
            tok: undefined /* Nothing */
            });
          const v7074 = stdlib.sub(v5108, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:182:47:decimal', stdlib.UInt_max, '1'));
          const v7078 = stdlib.Array_set(v5107, '0', v7074);
          const v7079 = stdlib.Array_set(v5071, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:182:56:application', stdlib.UInt_max, '1'), v7078);
          sim_r.txns.push({
            kind: 'from',
            to: v5558,
            tok: v5022
            });
          const v7080 = 'silver';
          null;
          const v7081 = true;
          const v7082 = await txn1.getOutput('buyer_api_purchase_silver', 'v7081', ctc4, v7081);
          
          const v12085 = v5062;
          const v12086 = v5063;
          const v12087 = v5064;
          const v12089 = v7079;
          const v12090 = v7044;
          const v12091 = v5064 ? false : true;
          if (v5064) {
            const v12105 = v7079[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:132:24:application', stdlib.UInt_max, '0')];
            const v12106 = v12105[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:132:24:application', stdlib.UInt_max, '0')];
            const v12107 = v7079[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:133:24:application', stdlib.UInt_max, '1')];
            const v12108 = v12107[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:133:24:application', stdlib.UInt_max, '0')];
            const v12109 = v7079[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:134:24:application', stdlib.UInt_max, '2')];
            const v12110 = v12109[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:134:24:application', stdlib.UInt_max, '0')];
            const v12111 = [v12106, v12108, v12110];
            sim_r.isHalt = false;
            }
          else {
            const v12092 = v5063 ? false : true;
            const v12094 = v5063 ? false : v12091;
            const v12095 = v7079[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:132:24:application', stdlib.UInt_max, '0')];
            const v12096 = v12095[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:132:24:application', stdlib.UInt_max, '0')];
            const v12097 = v7079[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:133:24:application', stdlib.UInt_max, '1')];
            const v12098 = v12097[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:133:24:application', stdlib.UInt_max, '0')];
            const v12099 = v7079[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:134:24:application', stdlib.UInt_max, '2')];
            const v12100 = v12099[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:134:24:application', stdlib.UInt_max, '0')];
            const v12101 = [v12096, v12098, v12100];
            const v12102 = v5062[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:147:33:application', stdlib.UInt_max, '0')];
            const v12103 = v5062[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:147:33:application', stdlib.UInt_max, '1')];
            const v12104 = v5062[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:147:33:application', stdlib.UInt_max, '2')];
            sim_r.isHalt = false;
            }
          break;
          }
        case 'controller_api_restock0_177': {
          const v7170 = v5559[1];
          
          break;
          }
        case 'controller_api_set_prices0_177': {
          const v7706 = v5559[1];
          
          break;
          }
        case 'controller_api_terminate0_177': {
          const v8242 = v5559[1];
          
          break;
          }
        case 'controller_api_toggle_pause0_177': {
          const v8778 = v5559[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc1, ctc3, ctc4, ctc4, ctc6, ctc2, ctc4, ctc4, ctc5, ctc2, ctc5, ctc2, ctc5, ctc2, ctc3, ctc2, ctc2, ctc2, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v5559], secs: v5561, time: v5560, didSend: v4073, from: v5558 } = txn1;
  switch (v5559[0]) {
    case 'buyer_api_purchase_bronze0_177': {
      const v5562 = v5559[1];
      return;
      break;
      }
    case 'buyer_api_purchase_gold0_177': {
      const v6098 = v5559[1];
      return;
      break;
      }
    case 'buyer_api_purchase_silver0_177': {
      const v6634 = v5559[1];
      undefined /* setApiDetails */;
      stdlib.assert(v5104, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./src/contracts/coin_shop.rsh:173:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:172:41:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:172:41:function exp)', 'at ./src/contracts/coin_shop.rsh:114:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:172:41:function exp)', 'at ./src/contracts/coin_shop.rsh:114:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:114:64:function exp)', 'at ./src/contracts/coin_shop.rsh:126:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:126:18:function exp)'],
        msg: 'contract is currently inactive',
        who: 'buyer_api_purchase_silver'
        });
      const v6688 = stdlib.ge(v5108, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:174:37:decimal', stdlib.UInt_max, '1'));
      stdlib.assert(v6688, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./src/contracts/coin_shop.rsh:174:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:172:41:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:172:41:function exp)', 'at ./src/contracts/coin_shop.rsh:114:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:172:41:function exp)', 'at ./src/contracts/coin_shop.rsh:114:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:114:64:function exp)', 'at ./src/contracts/coin_shop.rsh:126:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:126:18:function exp)'],
        msg: 'balance insufficient for transaction',
        who: 'buyer_api_purchase_silver'
        });
      const v6833 = stdlib.add(v5072, v5114);
      const v6834 = stdlib.le(v6833, stdlib.UInt_max);
      stdlib.assert(v6834, {
        at: './src/contracts/coin_shop.rsh:114:64:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'buyer_api_purchase_silver'
        });
      ;
      const v6839 = stdlib.le(v5106, stdlib.UInt_max);
      stdlib.assert(v6839, {
        at: './src/contracts/coin_shop.rsh:114:64:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'buyer_api_purchase_silver'
        });
      ;
      const v6847 = stdlib.le(v5108, stdlib.UInt_max);
      stdlib.assert(v6847, {
        at: './src/contracts/coin_shop.rsh:114:64:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'buyer_api_purchase_silver'
        });
      ;
      const v6855 = stdlib.le(v5110, stdlib.UInt_max);
      stdlib.assert(v6855, {
        at: './src/contracts/coin_shop.rsh:114:64:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'buyer_api_purchase_silver'
        });
      ;
      const v7044 = stdlib.sub(v6833, v6833);
      const v7045 = stdlib.ge(v7044, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:181:64:application', stdlib.UInt_max, '0'));
      stdlib.assert(v7045, {
        at: './src/contracts/coin_shop.rsh:181:64:application',
        fs: ['at ./src/contracts/coin_shop.rsh:179:27:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:179:27:function exp)'],
        msg: 'assume >= 0',
        who: 'buyer_api_purchase_silver'
        });
      ;
      const v7074 = stdlib.sub(v5108, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:182:47:decimal', stdlib.UInt_max, '1'));
      const v7075 = stdlib.ge(v7074, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:182:56:application', stdlib.UInt_max, '0'));
      stdlib.assert(v7075, {
        at: './src/contracts/coin_shop.rsh:182:56:application',
        fs: ['at ./src/contracts/coin_shop.rsh:179:27:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:179:27:function exp)'],
        msg: 'assume >= 0',
        who: 'buyer_api_purchase_silver'
        });
      const v7078 = stdlib.Array_set(v5107, '0', v7074);
      const v7079 = stdlib.Array_set(v5071, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:182:56:application', stdlib.UInt_max, '1'), v7078);
      ;
      const v7080 = 'silver';
      null;
      const v7081 = true;
      const v7082 = await txn1.getOutput('buyer_api_purchase_silver', 'v7081', ctc4, v7081);
      if (v4073) {
        stdlib.protect(ctc10, await interact.out(v6634, v7082), {
          at: './src/contracts/coin_shop.rsh:172:15:application',
          fs: ['at ./src/contracts/coin_shop.rsh:172:15:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:172:15:function exp)', 'at ./src/contracts/coin_shop.rsh:186:28:application call to "retFunc" (defined at: ./src/contracts/coin_shop.rsh:179:27:function exp)', 'at ./src/contracts/coin_shop.rsh:179:27:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:179:27:function exp)'],
          msg: 'out',
          who: 'buyer_api_purchase_silver'
          });
        }
      else {
        }
      
      const v12085 = v5062;
      const v12086 = v5063;
      const v12087 = v5064;
      const v12089 = v7079;
      const v12090 = v7044;
      const v12091 = v5064 ? false : true;
      if (v5064) {
        const v12105 = v7079[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:132:24:application', stdlib.UInt_max, '0')];
        const v12106 = v12105[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:132:24:application', stdlib.UInt_max, '0')];
        const v12107 = v7079[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:133:24:application', stdlib.UInt_max, '1')];
        const v12108 = v12107[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:133:24:application', stdlib.UInt_max, '0')];
        const v12109 = v7079[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:134:24:application', stdlib.UInt_max, '2')];
        const v12110 = v12109[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:134:24:application', stdlib.UInt_max, '0')];
        const v12111 = [v12106, v12108, v12110];
        return;
        }
      else {
        const v12092 = v5063 ? false : true;
        const v12094 = v5063 ? false : v12091;
        const v12095 = v7079[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:132:24:application', stdlib.UInt_max, '0')];
        const v12096 = v12095[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:132:24:application', stdlib.UInt_max, '0')];
        const v12097 = v7079[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:133:24:application', stdlib.UInt_max, '1')];
        const v12098 = v12097[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:133:24:application', stdlib.UInt_max, '0')];
        const v12099 = v7079[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:134:24:application', stdlib.UInt_max, '2')];
        const v12100 = v12099[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:134:24:application', stdlib.UInt_max, '0')];
        const v12101 = [v12096, v12098, v12100];
        const v12102 = v5062[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:147:33:application', stdlib.UInt_max, '0')];
        const v12103 = v5062[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:147:33:application', stdlib.UInt_max, '1')];
        const v12104 = v5062[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:147:33:application', stdlib.UInt_max, '2')];
        return;
        }
      break;
      }
    case 'controller_api_restock0_177': {
      const v7170 = v5559[1];
      return;
      break;
      }
    case 'controller_api_set_prices0_177': {
      const v7706 = v5559[1];
      return;
      break;
      }
    case 'controller_api_terminate0_177': {
      const v8242 = v5559[1];
      return;
      break;
      }
    case 'controller_api_toggle_pause0_177': {
      const v8778 = v5559[1];
      return;
      break;
      }
    }
  
  
  };
export async function _controller_api_restock5(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _controller_api_restock5 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _controller_api_restock5 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Tuple([ctc2, ctc2, ctc2]);
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Tuple([ctc2, ctc2, ctc4]);
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc7 = stdlib.T_Tuple([ctc3]);
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Data({
    buyer_api_purchase_bronze0_177: ctc8,
    buyer_api_purchase_gold0_177: ctc8,
    buyer_api_purchase_silver0_177: ctc8,
    controller_api_restock0_177: ctc7,
    controller_api_set_prices0_177: ctc7,
    controller_api_terminate0_177: ctc8,
    controller_api_toggle_pause0_177: ctc8
    });
  const ctc10 = stdlib.T_Null;
  
  
  const [v5020, v5021, v5022, v5023, v5062, v5063, v5064, v5071, v5072, v5102, v5104, v5105, v5106, v5107, v5108, v5109, v5110, v5111, v5113, v5114, v5115] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc0, ctc1, ctc1, ctc1, ctc3, ctc4, ctc4, ctc6, ctc2, ctc4, ctc4, ctc5, ctc2, ctc5, ctc2, ctc5, ctc2, ctc3, ctc2, ctc2, ctc2]);
  const v5155 = ctc.selfAddress();
  const v5157 = stdlib.protect(ctc7, await interact.in(), {
    at: './src/contracts/coin_shop.rsh:1:23:application',
    fs: ['at ./src/contracts/coin_shop.rsh:215:42:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:215:42:function exp)', 'at ./src/contracts/coin_shop.rsh:114:64:application call to "runcontroller_api_restock0_177" (defined at: ./src/contracts/coin_shop.rsh:215:14:function exp)', 'at ./src/contracts/coin_shop.rsh:114:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:114:64:function exp)'],
    msg: 'in',
    who: 'controller_api_restock'
    });
  const v5158 = v5157[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v5159 = v5158[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v5160 = v5158[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v5161 = v5158[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:1:23:application', stdlib.UInt_max, '2')];
  const v5163 = stdlib.addressEq(v5155, v5020);
  stdlib.assert(v5163, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/coin_shop.rsh:216:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:215:42:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:215:42:function exp)', 'at ./src/contracts/coin_shop.rsh:114:64:application call to "runcontroller_api_restock0_177" (defined at: ./src/contracts/coin_shop.rsh:215:14:function exp)', 'at ./src/contracts/coin_shop.rsh:114:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:114:64:function exp)'],
    msg: 'action not authorized',
    who: 'controller_api_restock'
    });
  const v5166 = stdlib.le(v5159, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:34:29:decimal', stdlib.UInt_max, '1200'));
  const v5168 = stdlib.le(v5160, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:34:35:decimal', stdlib.UInt_max, '600'));
  const v5169 = v5166 ? v5168 : false;
  const v5171 = stdlib.le(v5161, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:34:40:decimal', stdlib.UInt_max, '200'));
  const v5172 = v5169 ? v5171 : false;
  stdlib.assert(v5172, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/coin_shop.rsh:217:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:215:42:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:215:42:function exp)', 'at ./src/contracts/coin_shop.rsh:114:64:application call to "runcontroller_api_restock0_177" (defined at: ./src/contracts/coin_shop.rsh:215:14:function exp)', 'at ./src/contracts/coin_shop.rsh:114:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:114:64:function exp)'],
    msg: 'illegal param(s) were provided',
    who: 'controller_api_restock'
    });
  const v5182 = ['controller_api_restock0_177', v5157];
  
  const txn1 = await (ctc.sendrecv({
    args: [v5020, v5021, v5022, v5023, v5062, v5063, v5064, v5071, v5072, v5102, v5104, v5105, v5106, v5107, v5108, v5109, v5110, v5111, v5113, v5114, v5115, v5182],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:220:28:decimal', stdlib.UInt_max, '0'), [[v5159, v5021], [v5160, v5022], [v5161, v5023]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v5559], secs: v5561, time: v5560, didSend: v4073, from: v5558 } = txn1;
      
      switch (v5559[0]) {
        case 'buyer_api_purchase_bronze0_177': {
          const v5562 = v5559[1];
          
          break;
          }
        case 'buyer_api_purchase_gold0_177': {
          const v6098 = v5559[1];
          
          break;
          }
        case 'buyer_api_purchase_silver0_177': {
          const v6634 = v5559[1];
          
          break;
          }
        case 'controller_api_restock0_177': {
          const v7170 = v5559[1];
          sim_r.txns.push({
            kind: 'api',
            who: "controller_api_restock"
            });
          const v7244 = v7170[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:215:14:spread', stdlib.UInt_max, '0')];
          const v7247 = v7244[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:45:9:array ref', stdlib.UInt_max, '0')];
          const v7249 = v7244[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:45:33:array ref', stdlib.UInt_max, '1')];
          const v7252 = v7244[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:45:57:array ref', stdlib.UInt_max, '2')];
          ;
          const v7374 = stdlib.add(v5106, v7247);
          const v7378 = stdlib.Array_set(v5105, '0', v7374);
          const v7379 = stdlib.Array_set(v5071, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:114:64:dot', stdlib.UInt_max, '0'), v7378);
          sim_r.txns.push({
            amt: v7247,
            kind: 'to',
            tok: v5021
            });
          const v7380 = v7379[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:114:64:dot', stdlib.UInt_max, '1')];
          const v7381 = v7380[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:114:64:dot', stdlib.UInt_max, '0')];
          const v7382 = stdlib.add(v7381, v7249);
          const v7386 = stdlib.Array_set(v7380, '0', v7382);
          const v7387 = stdlib.Array_set(v7379, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:114:64:dot', stdlib.UInt_max, '1'), v7386);
          sim_r.txns.push({
            amt: v7249,
            kind: 'to',
            tok: v5022
            });
          const v7388 = v7387[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:114:64:dot', stdlib.UInt_max, '2')];
          const v7389 = v7388[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:114:64:dot', stdlib.UInt_max, '0')];
          const v7390 = stdlib.add(v7389, v7252);
          const v7394 = stdlib.Array_set(v7388, '0', v7390);
          const v7395 = stdlib.Array_set(v7387, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:114:64:dot', stdlib.UInt_max, '2'), v7394);
          sim_r.txns.push({
            amt: v7252,
            kind: 'to',
            tok: v5023
            });
          const v7638 = v7395[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:132:24:application', stdlib.UInt_max, '0')];
          const v7639 = v7638[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:132:24:application', stdlib.UInt_max, '0')];
          const v7640 = v7395[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:133:24:application', stdlib.UInt_max, '1')];
          const v7641 = v7640[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:133:24:application', stdlib.UInt_max, '0')];
          const v7642 = v7395[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:134:24:application', stdlib.UInt_max, '2')];
          const v7643 = v7642[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:134:24:application', stdlib.UInt_max, '0')];
          null;
          const v7647 = true;
          const v7648 = await txn1.getOutput('controller_api_restock', 'v7647', ctc4, v7647);
          
          const v12469 = v5062;
          const v12470 = v5063;
          const v12471 = v5064;
          const v12473 = v7395;
          const v12474 = v5072;
          const v12475 = v5064 ? false : true;
          if (v5064) {
            const v12495 = [v7639, v7641, v7643];
            sim_r.isHalt = false;
            }
          else {
            const v12476 = v5063 ? false : true;
            const v12478 = v5063 ? false : v12475;
            const v12485 = [v7639, v7641, v7643];
            const v12486 = v5062[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:147:33:application', stdlib.UInt_max, '0')];
            const v12487 = v5062[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:147:33:application', stdlib.UInt_max, '1')];
            const v12488 = v5062[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:147:33:application', stdlib.UInt_max, '2')];
            sim_r.isHalt = false;
            }
          break;
          }
        case 'controller_api_set_prices0_177': {
          const v7706 = v5559[1];
          
          break;
          }
        case 'controller_api_terminate0_177': {
          const v8242 = v5559[1];
          
          break;
          }
        case 'controller_api_toggle_pause0_177': {
          const v8778 = v5559[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc1, ctc3, ctc4, ctc4, ctc6, ctc2, ctc4, ctc4, ctc5, ctc2, ctc5, ctc2, ctc5, ctc2, ctc3, ctc2, ctc2, ctc2, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v5559], secs: v5561, time: v5560, didSend: v4073, from: v5558 } = txn1;
  switch (v5559[0]) {
    case 'buyer_api_purchase_bronze0_177': {
      const v5562 = v5559[1];
      return;
      break;
      }
    case 'buyer_api_purchase_gold0_177': {
      const v6098 = v5559[1];
      return;
      break;
      }
    case 'buyer_api_purchase_silver0_177': {
      const v6634 = v5559[1];
      return;
      break;
      }
    case 'controller_api_restock0_177': {
      const v7170 = v5559[1];
      undefined /* setApiDetails */;
      const v7244 = v7170[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:215:14:spread', stdlib.UInt_max, '0')];
      const v7245 = stdlib.addressEq(v5558, v5020);
      stdlib.assert(v7245, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./src/contracts/coin_shop.rsh:216:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:215:42:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:215:42:function exp)', 'at ./src/contracts/coin_shop.rsh:114:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:215:42:function exp)', 'at ./src/contracts/coin_shop.rsh:114:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:114:64:function exp)', 'at ./src/contracts/coin_shop.rsh:126:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:126:18:function exp)'],
        msg: 'action not authorized',
        who: 'controller_api_restock'
        });
      const v7247 = v7244[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:45:9:array ref', stdlib.UInt_max, '0')];
      const v7248 = stdlib.le(v7247, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:34:29:decimal', stdlib.UInt_max, '1200'));
      const v7249 = v7244[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:45:33:array ref', stdlib.UInt_max, '1')];
      const v7250 = stdlib.le(v7249, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:34:35:decimal', stdlib.UInt_max, '600'));
      const v7251 = v7248 ? v7250 : false;
      const v7252 = v7244[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:45:57:array ref', stdlib.UInt_max, '2')];
      const v7253 = stdlib.le(v7252, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:34:40:decimal', stdlib.UInt_max, '200'));
      const v7254 = v7251 ? v7253 : false;
      stdlib.assert(v7254, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./src/contracts/coin_shop.rsh:217:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:215:42:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:215:42:function exp)', 'at ./src/contracts/coin_shop.rsh:114:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:215:42:function exp)', 'at ./src/contracts/coin_shop.rsh:114:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:114:64:function exp)', 'at ./src/contracts/coin_shop.rsh:126:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:126:18:function exp)'],
        msg: 'illegal param(s) were provided',
        who: 'controller_api_restock'
        });
      const v7370 = stdlib.le(v5072, stdlib.UInt_max);
      stdlib.assert(v7370, {
        at: './src/contracts/coin_shop.rsh:114:64:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'controller_api_restock'
        });
      ;
      const v7374 = stdlib.add(v5106, v7247);
      const v7375 = stdlib.le(v7374, stdlib.UInt_max);
      stdlib.assert(v7375, {
        at: './src/contracts/coin_shop.rsh:114:64:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'controller_api_restock'
        });
      const v7378 = stdlib.Array_set(v5105, '0', v7374);
      const v7379 = stdlib.Array_set(v5071, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:114:64:dot', stdlib.UInt_max, '0'), v7378);
      ;
      const v7380 = v7379[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:114:64:dot', stdlib.UInt_max, '1')];
      const v7381 = v7380[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:114:64:dot', stdlib.UInt_max, '0')];
      const v7382 = stdlib.add(v7381, v7249);
      const v7383 = stdlib.le(v7382, stdlib.UInt_max);
      stdlib.assert(v7383, {
        at: './src/contracts/coin_shop.rsh:114:64:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'controller_api_restock'
        });
      const v7386 = stdlib.Array_set(v7380, '0', v7382);
      const v7387 = stdlib.Array_set(v7379, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:114:64:dot', stdlib.UInt_max, '1'), v7386);
      ;
      const v7388 = v7387[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:114:64:dot', stdlib.UInt_max, '2')];
      const v7389 = v7388[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:114:64:dot', stdlib.UInt_max, '0')];
      const v7390 = stdlib.add(v7389, v7252);
      const v7391 = stdlib.le(v7390, stdlib.UInt_max);
      stdlib.assert(v7391, {
        at: './src/contracts/coin_shop.rsh:114:64:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'controller_api_restock'
        });
      const v7394 = stdlib.Array_set(v7388, '0', v7390);
      const v7395 = stdlib.Array_set(v7387, stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:114:64:dot', stdlib.UInt_max, '2'), v7394);
      ;
      const v7638 = v7395[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:132:24:application', stdlib.UInt_max, '0')];
      const v7639 = v7638[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:132:24:application', stdlib.UInt_max, '0')];
      const v7640 = v7395[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:133:24:application', stdlib.UInt_max, '1')];
      const v7641 = v7640[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:133:24:application', stdlib.UInt_max, '0')];
      const v7642 = v7395[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:134:24:application', stdlib.UInt_max, '2')];
      const v7643 = v7642[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:134:24:application', stdlib.UInt_max, '0')];
      null;
      const v7647 = true;
      const v7648 = await txn1.getOutput('controller_api_restock', 'v7647', ctc4, v7647);
      if (v4073) {
        stdlib.protect(ctc10, await interact.out(v7170, v7648), {
          at: './src/contracts/coin_shop.rsh:215:15:application',
          fs: ['at ./src/contracts/coin_shop.rsh:215:15:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:215:15:function exp)', 'at ./src/contracts/coin_shop.rsh:227:28:application call to "retFunc" (defined at: ./src/contracts/coin_shop.rsh:221:27:function exp)', 'at ./src/contracts/coin_shop.rsh:221:27:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:221:27:function exp)'],
          msg: 'out',
          who: 'controller_api_restock'
          });
        }
      else {
        }
      
      const v12469 = v5062;
      const v12470 = v5063;
      const v12471 = v5064;
      const v12473 = v7395;
      const v12474 = v5072;
      const v12475 = v5064 ? false : true;
      if (v5064) {
        const v12495 = [v7639, v7641, v7643];
        return;
        }
      else {
        const v12476 = v5063 ? false : true;
        const v12478 = v5063 ? false : v12475;
        const v12485 = [v7639, v7641, v7643];
        const v12486 = v5062[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:147:33:application', stdlib.UInt_max, '0')];
        const v12487 = v5062[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:147:33:application', stdlib.UInt_max, '1')];
        const v12488 = v5062[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:147:33:application', stdlib.UInt_max, '2')];
        return;
        }
      break;
      }
    case 'controller_api_set_prices0_177': {
      const v7706 = v5559[1];
      return;
      break;
      }
    case 'controller_api_terminate0_177': {
      const v8242 = v5559[1];
      return;
      break;
      }
    case 'controller_api_toggle_pause0_177': {
      const v8778 = v5559[1];
      return;
      break;
      }
    }
  
  
  };
export async function _controller_api_set_prices5(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _controller_api_set_prices5 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _controller_api_set_prices5 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Tuple([ctc2, ctc2, ctc2]);
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Tuple([ctc2, ctc2, ctc4]);
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc7 = stdlib.T_Tuple([ctc3]);
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Data({
    buyer_api_purchase_bronze0_177: ctc8,
    buyer_api_purchase_gold0_177: ctc8,
    buyer_api_purchase_silver0_177: ctc8,
    controller_api_restock0_177: ctc7,
    controller_api_set_prices0_177: ctc7,
    controller_api_terminate0_177: ctc8,
    controller_api_toggle_pause0_177: ctc8
    });
  const ctc10 = stdlib.T_Null;
  
  
  const [v5020, v5021, v5022, v5023, v5062, v5063, v5064, v5071, v5072, v5102, v5104, v5105, v5106, v5107, v5108, v5109, v5110, v5111, v5113, v5114, v5115] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc0, ctc1, ctc1, ctc1, ctc3, ctc4, ctc4, ctc6, ctc2, ctc4, ctc4, ctc5, ctc2, ctc5, ctc2, ctc5, ctc2, ctc3, ctc2, ctc2, ctc2]);
  const v5184 = ctc.selfAddress();
  const v5186 = stdlib.protect(ctc7, await interact.in(), {
    at: './src/contracts/coin_shop.rsh:1:23:application',
    fs: ['at ./src/contracts/coin_shop.rsh:233:50:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:233:50:function exp)', 'at ./src/contracts/coin_shop.rsh:114:64:application call to "runcontroller_api_set_prices0_177" (defined at: ./src/contracts/coin_shop.rsh:233:14:function exp)', 'at ./src/contracts/coin_shop.rsh:114:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:114:64:function exp)'],
    msg: 'in',
    who: 'controller_api_set_prices'
    });
  const v5192 = stdlib.addressEq(v5184, v5020);
  stdlib.assert(v5192, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/coin_shop.rsh:234:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:233:50:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:233:50:function exp)', 'at ./src/contracts/coin_shop.rsh:114:64:application call to "runcontroller_api_set_prices0_177" (defined at: ./src/contracts/coin_shop.rsh:233:14:function exp)', 'at ./src/contracts/coin_shop.rsh:114:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:114:64:function exp)'],
    msg: 'action not authorized',
    who: 'controller_api_set_prices'
    });
  const v5202 = ['controller_api_set_prices0_177', v5186];
  
  const txn1 = await (ctc.sendrecv({
    args: [v5020, v5021, v5022, v5023, v5062, v5063, v5064, v5071, v5072, v5102, v5104, v5105, v5106, v5107, v5108, v5109, v5110, v5111, v5113, v5114, v5115, v5202],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:237:28:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:237:31:decimal', stdlib.UInt_max, '0'), v5021], [stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:237:34:decimal', stdlib.UInt_max, '0'), v5022], [stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:237:37:decimal', stdlib.UInt_max, '0'), v5023]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v5559], secs: v5561, time: v5560, didSend: v4073, from: v5558 } = txn1;
      
      switch (v5559[0]) {
        case 'buyer_api_purchase_bronze0_177': {
          const v5562 = v5559[1];
          
          break;
          }
        case 'buyer_api_purchase_gold0_177': {
          const v6098 = v5559[1];
          
          break;
          }
        case 'buyer_api_purchase_silver0_177': {
          const v6634 = v5559[1];
          
          break;
          }
        case 'controller_api_restock0_177': {
          const v7170 = v5559[1];
          
          break;
          }
        case 'controller_api_set_prices0_177': {
          const v7706 = v5559[1];
          sim_r.txns.push({
            kind: 'api',
            who: "controller_api_set_prices"
            });
          ;
          ;
          ;
          ;
          const v8195 = v7706[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:233:14:spread', stdlib.UInt_max, '0')];
          const v8199 = v8195[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:240:41:spread', stdlib.UInt_max, '0')];
          const v8200 = v8195[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:240:41:spread', stdlib.UInt_max, '1')];
          const v8201 = v8195[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:240:41:spread', stdlib.UInt_max, '2')];
          null;
          const v8204 = true;
          const v8205 = await txn1.getOutput('controller_api_set_prices', 'v8204', ctc4, v8204);
          
          const v12853 = v8195;
          const v12854 = v5063;
          const v12855 = v5064;
          const v12857 = v5071;
          const v12858 = v5072;
          const v12859 = v5064 ? false : true;
          if (v5064) {
            const v12873 = v5071[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:132:24:application', stdlib.UInt_max, '0')];
            const v12874 = v12873[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:132:24:application', stdlib.UInt_max, '0')];
            const v12875 = v5071[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:133:24:application', stdlib.UInt_max, '1')];
            const v12876 = v12875[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:133:24:application', stdlib.UInt_max, '0')];
            const v12877 = v5071[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:134:24:application', stdlib.UInt_max, '2')];
            const v12878 = v12877[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:134:24:application', stdlib.UInt_max, '0')];
            const v12879 = [v12874, v12876, v12878];
            sim_r.isHalt = false;
            }
          else {
            const v12860 = v5063 ? false : true;
            const v12862 = v5063 ? false : v12859;
            const v12863 = v5071[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:132:24:application', stdlib.UInt_max, '0')];
            const v12864 = v12863[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:132:24:application', stdlib.UInt_max, '0')];
            const v12865 = v5071[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:133:24:application', stdlib.UInt_max, '1')];
            const v12866 = v12865[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:133:24:application', stdlib.UInt_max, '0')];
            const v12867 = v5071[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:134:24:application', stdlib.UInt_max, '2')];
            const v12868 = v12867[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:134:24:application', stdlib.UInt_max, '0')];
            const v12869 = [v12864, v12866, v12868];
            sim_r.isHalt = false;
            }
          break;
          }
        case 'controller_api_terminate0_177': {
          const v8242 = v5559[1];
          
          break;
          }
        case 'controller_api_toggle_pause0_177': {
          const v8778 = v5559[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc1, ctc3, ctc4, ctc4, ctc6, ctc2, ctc4, ctc4, ctc5, ctc2, ctc5, ctc2, ctc5, ctc2, ctc3, ctc2, ctc2, ctc2, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v5559], secs: v5561, time: v5560, didSend: v4073, from: v5558 } = txn1;
  switch (v5559[0]) {
    case 'buyer_api_purchase_bronze0_177': {
      const v5562 = v5559[1];
      return;
      break;
      }
    case 'buyer_api_purchase_gold0_177': {
      const v6098 = v5559[1];
      return;
      break;
      }
    case 'buyer_api_purchase_silver0_177': {
      const v6634 = v5559[1];
      return;
      break;
      }
    case 'controller_api_restock0_177': {
      const v7170 = v5559[1];
      return;
      break;
      }
    case 'controller_api_set_prices0_177': {
      const v7706 = v5559[1];
      undefined /* setApiDetails */;
      const v7813 = stdlib.addressEq(v5558, v5020);
      stdlib.assert(v7813, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./src/contracts/coin_shop.rsh:234:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:233:50:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:233:50:function exp)', 'at ./src/contracts/coin_shop.rsh:114:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:233:50:function exp)', 'at ./src/contracts/coin_shop.rsh:114:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:114:64:function exp)', 'at ./src/contracts/coin_shop.rsh:126:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:126:18:function exp)'],
        msg: 'action not authorized',
        who: 'controller_api_set_prices'
        });
      const v7906 = stdlib.le(v5072, stdlib.UInt_max);
      stdlib.assert(v7906, {
        at: './src/contracts/coin_shop.rsh:114:64:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'controller_api_set_prices'
        });
      ;
      const v7911 = stdlib.le(v5106, stdlib.UInt_max);
      stdlib.assert(v7911, {
        at: './src/contracts/coin_shop.rsh:114:64:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'controller_api_set_prices'
        });
      ;
      const v7919 = stdlib.le(v5108, stdlib.UInt_max);
      stdlib.assert(v7919, {
        at: './src/contracts/coin_shop.rsh:114:64:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'controller_api_set_prices'
        });
      ;
      const v7927 = stdlib.le(v5110, stdlib.UInt_max);
      stdlib.assert(v7927, {
        at: './src/contracts/coin_shop.rsh:114:64:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'controller_api_set_prices'
        });
      ;
      const v8195 = v7706[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:233:14:spread', stdlib.UInt_max, '0')];
      const v8199 = v8195[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:240:41:spread', stdlib.UInt_max, '0')];
      const v8200 = v8195[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:240:41:spread', stdlib.UInt_max, '1')];
      const v8201 = v8195[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:240:41:spread', stdlib.UInt_max, '2')];
      null;
      const v8204 = true;
      const v8205 = await txn1.getOutput('controller_api_set_prices', 'v8204', ctc4, v8204);
      if (v4073) {
        stdlib.protect(ctc10, await interact.out(v7706, v8205), {
          at: './src/contracts/coin_shop.rsh:233:15:application',
          fs: ['at ./src/contracts/coin_shop.rsh:233:15:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:233:15:function exp)', 'at ./src/contracts/coin_shop.rsh:244:28:application call to "retFunc" (defined at: ./src/contracts/coin_shop.rsh:238:27:function exp)', 'at ./src/contracts/coin_shop.rsh:238:27:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:238:27:function exp)'],
          msg: 'out',
          who: 'controller_api_set_prices'
          });
        }
      else {
        }
      
      const v12853 = v8195;
      const v12854 = v5063;
      const v12855 = v5064;
      const v12857 = v5071;
      const v12858 = v5072;
      const v12859 = v5064 ? false : true;
      if (v5064) {
        const v12873 = v5071[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:132:24:application', stdlib.UInt_max, '0')];
        const v12874 = v12873[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:132:24:application', stdlib.UInt_max, '0')];
        const v12875 = v5071[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:133:24:application', stdlib.UInt_max, '1')];
        const v12876 = v12875[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:133:24:application', stdlib.UInt_max, '0')];
        const v12877 = v5071[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:134:24:application', stdlib.UInt_max, '2')];
        const v12878 = v12877[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:134:24:application', stdlib.UInt_max, '0')];
        const v12879 = [v12874, v12876, v12878];
        return;
        }
      else {
        const v12860 = v5063 ? false : true;
        const v12862 = v5063 ? false : v12859;
        const v12863 = v5071[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:132:24:application', stdlib.UInt_max, '0')];
        const v12864 = v12863[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:132:24:application', stdlib.UInt_max, '0')];
        const v12865 = v5071[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:133:24:application', stdlib.UInt_max, '1')];
        const v12866 = v12865[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:133:24:application', stdlib.UInt_max, '0')];
        const v12867 = v5071[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:134:24:application', stdlib.UInt_max, '2')];
        const v12868 = v12867[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:134:24:application', stdlib.UInt_max, '0')];
        const v12869 = [v12864, v12866, v12868];
        return;
        }
      break;
      }
    case 'controller_api_terminate0_177': {
      const v8242 = v5559[1];
      return;
      break;
      }
    case 'controller_api_toggle_pause0_177': {
      const v8778 = v5559[1];
      return;
      break;
      }
    }
  
  
  };
export async function _controller_api_terminate5(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _controller_api_terminate5 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _controller_api_terminate5 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Tuple([ctc2, ctc2, ctc2]);
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Tuple([ctc2, ctc2, ctc4]);
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Tuple([ctc3]);
  const ctc9 = stdlib.T_Data({
    buyer_api_purchase_bronze0_177: ctc7,
    buyer_api_purchase_gold0_177: ctc7,
    buyer_api_purchase_silver0_177: ctc7,
    controller_api_restock0_177: ctc8,
    controller_api_set_prices0_177: ctc8,
    controller_api_terminate0_177: ctc7,
    controller_api_toggle_pause0_177: ctc7
    });
  const ctc10 = stdlib.T_Null;
  
  
  const [v5020, v5021, v5022, v5023, v5062, v5063, v5064, v5071, v5072, v5102, v5104, v5105, v5106, v5107, v5108, v5109, v5110, v5111, v5113, v5114, v5115] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc0, ctc1, ctc1, ctc1, ctc3, ctc4, ctc4, ctc6, ctc2, ctc4, ctc4, ctc5, ctc2, ctc5, ctc2, ctc5, ctc2, ctc3, ctc2, ctc2, ctc2]);
  const v5214 = ctc.selfAddress();
  const v5216 = stdlib.protect(ctc7, await interact.in(), {
    at: './src/contracts/coin_shop.rsh:1:23:application',
    fs: ['at ./src/contracts/coin_shop.rsh:270:40:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:270:40:function exp)', 'at ./src/contracts/coin_shop.rsh:114:64:application call to "runcontroller_api_terminate0_177" (defined at: ./src/contracts/coin_shop.rsh:270:14:function exp)', 'at ./src/contracts/coin_shop.rsh:114:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:114:64:function exp)'],
    msg: 'in',
    who: 'controller_api_terminate'
    });
  const v5217 = stdlib.addressEq(v5214, v5020);
  stdlib.assert(v5217, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/coin_shop.rsh:271:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:270:40:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:270:40:function exp)', 'at ./src/contracts/coin_shop.rsh:114:64:application call to "runcontroller_api_terminate0_177" (defined at: ./src/contracts/coin_shop.rsh:270:14:function exp)', 'at ./src/contracts/coin_shop.rsh:114:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:114:64:function exp)'],
    msg: 'action not authorized',
    who: 'controller_api_terminate'
    });
  const v5222 = ['controller_api_terminate0_177', v5216];
  
  const txn1 = await (ctc.sendrecv({
    args: [v5020, v5021, v5022, v5023, v5062, v5063, v5064, v5071, v5072, v5102, v5104, v5105, v5106, v5107, v5108, v5109, v5110, v5111, v5113, v5114, v5115, v5222],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:274:28:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:274:31:decimal', stdlib.UInt_max, '0'), v5021], [stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:274:34:decimal', stdlib.UInt_max, '0'), v5022], [stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:274:37:decimal', stdlib.UInt_max, '0'), v5023]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v5559], secs: v5561, time: v5560, didSend: v4073, from: v5558 } = txn1;
      
      switch (v5559[0]) {
        case 'buyer_api_purchase_bronze0_177': {
          const v5562 = v5559[1];
          
          break;
          }
        case 'buyer_api_purchase_gold0_177': {
          const v6098 = v5559[1];
          
          break;
          }
        case 'buyer_api_purchase_silver0_177': {
          const v6634 = v5559[1];
          
          break;
          }
        case 'controller_api_restock0_177': {
          const v7170 = v5559[1];
          
          break;
          }
        case 'controller_api_set_prices0_177': {
          const v7706 = v5559[1];
          
          break;
          }
        case 'controller_api_terminate0_177': {
          const v8242 = v5559[1];
          sim_r.txns.push({
            kind: 'api',
            who: "controller_api_terminate"
            });
          ;
          ;
          ;
          ;
          const v8756 = true;
          const v8757 = await txn1.getOutput('controller_api_terminate', 'v8756', ctc4, v8756);
          
          const v13237 = v5062;
          const v13238 = v5063;
          const v13241 = v5071;
          const v13242 = v5072;
          const v13257 = v5071[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:132:24:application', stdlib.UInt_max, '0')];
          const v13258 = v13257[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:132:24:application', stdlib.UInt_max, '0')];
          const v13259 = v5071[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:133:24:application', stdlib.UInt_max, '1')];
          const v13260 = v13259[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:133:24:application', stdlib.UInt_max, '0')];
          const v13261 = v5071[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:134:24:application', stdlib.UInt_max, '2')];
          const v13262 = v13261[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:134:24:application', stdlib.UInt_max, '0')];
          const v13263 = [v13258, v13260, v13262];
          sim_r.isHalt = false;
          
          break;
          }
        case 'controller_api_toggle_pause0_177': {
          const v8778 = v5559[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc1, ctc3, ctc4, ctc4, ctc6, ctc2, ctc4, ctc4, ctc5, ctc2, ctc5, ctc2, ctc5, ctc2, ctc3, ctc2, ctc2, ctc2, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v5559], secs: v5561, time: v5560, didSend: v4073, from: v5558 } = txn1;
  switch (v5559[0]) {
    case 'buyer_api_purchase_bronze0_177': {
      const v5562 = v5559[1];
      return;
      break;
      }
    case 'buyer_api_purchase_gold0_177': {
      const v6098 = v5559[1];
      return;
      break;
      }
    case 'buyer_api_purchase_silver0_177': {
      const v6634 = v5559[1];
      return;
      break;
      }
    case 'controller_api_restock0_177': {
      const v7170 = v5559[1];
      return;
      break;
      }
    case 'controller_api_set_prices0_177': {
      const v7706 = v5559[1];
      return;
      break;
      }
    case 'controller_api_terminate0_177': {
      const v8242 = v5559[1];
      undefined /* setApiDetails */;
      const v8368 = stdlib.addressEq(v5558, v5020);
      stdlib.assert(v8368, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./src/contracts/coin_shop.rsh:271:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:270:40:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:270:40:function exp)', 'at ./src/contracts/coin_shop.rsh:114:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:270:40:function exp)', 'at ./src/contracts/coin_shop.rsh:114:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:114:64:function exp)', 'at ./src/contracts/coin_shop.rsh:126:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:126:18:function exp)'],
        msg: 'action not authorized',
        who: 'controller_api_terminate'
        });
      const v8442 = stdlib.le(v5072, stdlib.UInt_max);
      stdlib.assert(v8442, {
        at: './src/contracts/coin_shop.rsh:114:64:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'controller_api_terminate'
        });
      ;
      const v8447 = stdlib.le(v5106, stdlib.UInt_max);
      stdlib.assert(v8447, {
        at: './src/contracts/coin_shop.rsh:114:64:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'controller_api_terminate'
        });
      ;
      const v8455 = stdlib.le(v5108, stdlib.UInt_max);
      stdlib.assert(v8455, {
        at: './src/contracts/coin_shop.rsh:114:64:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'controller_api_terminate'
        });
      ;
      const v8463 = stdlib.le(v5110, stdlib.UInt_max);
      stdlib.assert(v8463, {
        at: './src/contracts/coin_shop.rsh:114:64:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'controller_api_terminate'
        });
      ;
      const v8756 = true;
      const v8757 = await txn1.getOutput('controller_api_terminate', 'v8756', ctc4, v8756);
      if (v4073) {
        stdlib.protect(ctc10, await interact.out(v8242, v8757), {
          at: './src/contracts/coin_shop.rsh:270:15:application',
          fs: ['at ./src/contracts/coin_shop.rsh:270:15:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:270:15:function exp)', 'at ./src/contracts/coin_shop.rsh:279:28:application call to "retFunc" (defined at: ./src/contracts/coin_shop.rsh:275:27:function exp)', 'at ./src/contracts/coin_shop.rsh:275:27:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:275:27:function exp)'],
          msg: 'out',
          who: 'controller_api_terminate'
          });
        }
      else {
        }
      
      const v13237 = v5062;
      const v13238 = v5063;
      const v13241 = v5071;
      const v13242 = v5072;
      const v13257 = v5071[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:132:24:application', stdlib.UInt_max, '0')];
      const v13258 = v13257[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:132:24:application', stdlib.UInt_max, '0')];
      const v13259 = v5071[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:133:24:application', stdlib.UInt_max, '1')];
      const v13260 = v13259[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:133:24:application', stdlib.UInt_max, '0')];
      const v13261 = v5071[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:134:24:application', stdlib.UInt_max, '2')];
      const v13262 = v13261[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:134:24:application', stdlib.UInt_max, '0')];
      const v13263 = [v13258, v13260, v13262];
      return;
      
      break;
      }
    case 'controller_api_toggle_pause0_177': {
      const v8778 = v5559[1];
      return;
      break;
      }
    }
  
  
  };
export async function _controller_api_toggle_pause5(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _controller_api_toggle_pause5 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _controller_api_toggle_pause5 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Tuple([ctc2, ctc2, ctc2]);
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Tuple([ctc2, ctc2, ctc4]);
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Tuple([ctc3]);
  const ctc9 = stdlib.T_Data({
    buyer_api_purchase_bronze0_177: ctc7,
    buyer_api_purchase_gold0_177: ctc7,
    buyer_api_purchase_silver0_177: ctc7,
    controller_api_restock0_177: ctc8,
    controller_api_set_prices0_177: ctc8,
    controller_api_terminate0_177: ctc7,
    controller_api_toggle_pause0_177: ctc7
    });
  const ctc10 = stdlib.T_Null;
  
  
  const [v5020, v5021, v5022, v5023, v5062, v5063, v5064, v5071, v5072, v5102, v5104, v5105, v5106, v5107, v5108, v5109, v5110, v5111, v5113, v5114, v5115] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc0, ctc1, ctc1, ctc1, ctc3, ctc4, ctc4, ctc6, ctc2, ctc4, ctc4, ctc5, ctc2, ctc5, ctc2, ctc5, ctc2, ctc3, ctc2, ctc2, ctc2]);
  const v5204 = ctc.selfAddress();
  const v5206 = stdlib.protect(ctc7, await interact.in(), {
    at: './src/contracts/coin_shop.rsh:1:23:application',
    fs: ['at ./src/contracts/coin_shop.rsh:250:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:250:43:function exp)', 'at ./src/contracts/coin_shop.rsh:114:64:application call to "runcontroller_api_toggle_pause0_177" (defined at: ./src/contracts/coin_shop.rsh:250:14:function exp)', 'at ./src/contracts/coin_shop.rsh:114:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:114:64:function exp)'],
    msg: 'in',
    who: 'controller_api_toggle_pause'
    });
  const v5207 = stdlib.addressEq(v5204, v5020);
  stdlib.assert(v5207, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/coin_shop.rsh:251:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:250:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:250:43:function exp)', 'at ./src/contracts/coin_shop.rsh:114:64:application call to "runcontroller_api_toggle_pause0_177" (defined at: ./src/contracts/coin_shop.rsh:250:14:function exp)', 'at ./src/contracts/coin_shop.rsh:114:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:114:64:function exp)'],
    msg: 'action not authorized',
    who: 'controller_api_toggle_pause'
    });
  const v5212 = ['controller_api_toggle_pause0_177', v5206];
  
  const txn1 = await (ctc.sendrecv({
    args: [v5020, v5021, v5022, v5023, v5062, v5063, v5064, v5071, v5072, v5102, v5104, v5105, v5106, v5107, v5108, v5109, v5110, v5111, v5113, v5114, v5115, v5212],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:254:28:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:254:31:decimal', stdlib.UInt_max, '0'), v5021], [stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:254:34:decimal', stdlib.UInt_max, '0'), v5022], [stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:254:37:decimal', stdlib.UInt_max, '0'), v5023]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v5559], secs: v5561, time: v5560, didSend: v4073, from: v5558 } = txn1;
      
      switch (v5559[0]) {
        case 'buyer_api_purchase_bronze0_177': {
          const v5562 = v5559[1];
          
          break;
          }
        case 'buyer_api_purchase_gold0_177': {
          const v6098 = v5559[1];
          
          break;
          }
        case 'buyer_api_purchase_silver0_177': {
          const v6634 = v5559[1];
          
          break;
          }
        case 'controller_api_restock0_177': {
          const v7170 = v5559[1];
          
          break;
          }
        case 'controller_api_set_prices0_177': {
          const v7706 = v5559[1];
          
          break;
          }
        case 'controller_api_terminate0_177': {
          const v8242 = v5559[1];
          
          break;
          }
        case 'controller_api_toggle_pause0_177': {
          const v8778 = v5559[1];
          sim_r.txns.push({
            kind: 'api',
            who: "controller_api_toggle_pause"
            });
          ;
          ;
          ;
          ;
          const v9307 = await txn1.getOutput('controller_api_toggle_pause', 'v5102', ctc4, v5102);
          
          const v13621 = v5062;
          const v13622 = v5102;
          const v13623 = v5064;
          const v13625 = v5071;
          const v13626 = v5072;
          const v13627 = v5064 ? false : true;
          if (v5064) {
            const v13641 = v5071[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:132:24:application', stdlib.UInt_max, '0')];
            const v13642 = v13641[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:132:24:application', stdlib.UInt_max, '0')];
            const v13643 = v5071[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:133:24:application', stdlib.UInt_max, '1')];
            const v13644 = v13643[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:133:24:application', stdlib.UInt_max, '0')];
            const v13645 = v5071[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:134:24:application', stdlib.UInt_max, '2')];
            const v13646 = v13645[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:134:24:application', stdlib.UInt_max, '0')];
            const v13647 = [v13642, v13644, v13646];
            sim_r.isHalt = false;
            }
          else {
            const v13628 = v5102 ? false : true;
            const v13630 = v5102 ? false : v13627;
            const v13631 = v5071[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:132:24:application', stdlib.UInt_max, '0')];
            const v13632 = v13631[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:132:24:application', stdlib.UInt_max, '0')];
            const v13633 = v5071[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:133:24:application', stdlib.UInt_max, '1')];
            const v13634 = v13633[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:133:24:application', stdlib.UInt_max, '0')];
            const v13635 = v5071[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:134:24:application', stdlib.UInt_max, '2')];
            const v13636 = v13635[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:134:24:application', stdlib.UInt_max, '0')];
            const v13637 = [v13632, v13634, v13636];
            const v13638 = v5062[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:147:33:application', stdlib.UInt_max, '0')];
            const v13639 = v5062[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:147:33:application', stdlib.UInt_max, '1')];
            const v13640 = v5062[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:147:33:application', stdlib.UInt_max, '2')];
            sim_r.isHalt = false;
            }
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc1, ctc3, ctc4, ctc4, ctc6, ctc2, ctc4, ctc4, ctc5, ctc2, ctc5, ctc2, ctc5, ctc2, ctc3, ctc2, ctc2, ctc2, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v5559], secs: v5561, time: v5560, didSend: v4073, from: v5558 } = txn1;
  switch (v5559[0]) {
    case 'buyer_api_purchase_bronze0_177': {
      const v5562 = v5559[1];
      return;
      break;
      }
    case 'buyer_api_purchase_gold0_177': {
      const v6098 = v5559[1];
      return;
      break;
      }
    case 'buyer_api_purchase_silver0_177': {
      const v6634 = v5559[1];
      return;
      break;
      }
    case 'controller_api_restock0_177': {
      const v7170 = v5559[1];
      return;
      break;
      }
    case 'controller_api_set_prices0_177': {
      const v7706 = v5559[1];
      return;
      break;
      }
    case 'controller_api_terminate0_177': {
      const v8242 = v5559[1];
      return;
      break;
      }
    case 'controller_api_toggle_pause0_177': {
      const v8778 = v5559[1];
      undefined /* setApiDetails */;
      const v8923 = stdlib.addressEq(v5558, v5020);
      stdlib.assert(v8923, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./src/contracts/coin_shop.rsh:251:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/coin_shop.rsh:250:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:250:43:function exp)', 'at ./src/contracts/coin_shop.rsh:114:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:250:43:function exp)', 'at ./src/contracts/coin_shop.rsh:114:64:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:114:64:function exp)', 'at ./src/contracts/coin_shop.rsh:126:18:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:126:18:function exp)'],
        msg: 'action not authorized',
        who: 'controller_api_toggle_pause'
        });
      const v8978 = stdlib.le(v5072, stdlib.UInt_max);
      stdlib.assert(v8978, {
        at: './src/contracts/coin_shop.rsh:114:64:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'controller_api_toggle_pause'
        });
      ;
      const v8983 = stdlib.le(v5106, stdlib.UInt_max);
      stdlib.assert(v8983, {
        at: './src/contracts/coin_shop.rsh:114:64:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'controller_api_toggle_pause'
        });
      ;
      const v8991 = stdlib.le(v5108, stdlib.UInt_max);
      stdlib.assert(v8991, {
        at: './src/contracts/coin_shop.rsh:114:64:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'controller_api_toggle_pause'
        });
      ;
      const v8999 = stdlib.le(v5110, stdlib.UInt_max);
      stdlib.assert(v8999, {
        at: './src/contracts/coin_shop.rsh:114:64:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'controller_api_toggle_pause'
        });
      ;
      const v9307 = await txn1.getOutput('controller_api_toggle_pause', 'v5102', ctc4, v5102);
      if (v4073) {
        stdlib.protect(ctc10, await interact.out(v8778, v9307), {
          at: './src/contracts/coin_shop.rsh:250:15:application',
          fs: ['at ./src/contracts/coin_shop.rsh:250:15:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:250:15:function exp)', 'at ./src/contracts/coin_shop.rsh:263:28:application call to "retFunc" (defined at: ./src/contracts/coin_shop.rsh:255:27:function exp)', 'at ./src/contracts/coin_shop.rsh:255:27:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:255:27:function exp)'],
          msg: 'out',
          who: 'controller_api_toggle_pause'
          });
        }
      else {
        }
      
      const v13621 = v5062;
      const v13622 = v5102;
      const v13623 = v5064;
      const v13625 = v5071;
      const v13626 = v5072;
      const v13627 = v5064 ? false : true;
      if (v5064) {
        const v13641 = v5071[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:132:24:application', stdlib.UInt_max, '0')];
        const v13642 = v13641[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:132:24:application', stdlib.UInt_max, '0')];
        const v13643 = v5071[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:133:24:application', stdlib.UInt_max, '1')];
        const v13644 = v13643[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:133:24:application', stdlib.UInt_max, '0')];
        const v13645 = v5071[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:134:24:application', stdlib.UInt_max, '2')];
        const v13646 = v13645[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:134:24:application', stdlib.UInt_max, '0')];
        const v13647 = [v13642, v13644, v13646];
        return;
        }
      else {
        const v13628 = v5102 ? false : true;
        const v13630 = v5102 ? false : v13627;
        const v13631 = v5071[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:132:24:application', stdlib.UInt_max, '0')];
        const v13632 = v13631[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:132:24:application', stdlib.UInt_max, '0')];
        const v13633 = v5071[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:133:24:application', stdlib.UInt_max, '1')];
        const v13634 = v13633[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:133:24:application', stdlib.UInt_max, '0')];
        const v13635 = v5071[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:134:24:application', stdlib.UInt_max, '2')];
        const v13636 = v13635[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:134:24:application', stdlib.UInt_max, '0')];
        const v13637 = [v13632, v13634, v13636];
        const v13638 = v5062[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:147:33:application', stdlib.UInt_max, '0')];
        const v13639 = v5062[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:147:33:application', stdlib.UInt_max, '1')];
        const v13640 = v5062[stdlib.checkedBigNumberify('./src/contracts/coin_shop.rsh:147:33:application', stdlib.UInt_max, '2')];
        return;
        }
      break;
      }
    }
  
  
  };
export async function buyer_api_purchase_bronze(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for buyer_api_purchase_bronze expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for buyer_api_purchase_bronze expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 5) {return _buyer_api_purchase_bronze5(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function buyer_api_purchase_gold(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for buyer_api_purchase_gold expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for buyer_api_purchase_gold expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 5) {return _buyer_api_purchase_gold5(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function buyer_api_purchase_silver(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for buyer_api_purchase_silver expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for buyer_api_purchase_silver expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 5) {return _buyer_api_purchase_silver5(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function controller_api_restock(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for controller_api_restock expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for controller_api_restock expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 5) {return _controller_api_restock5(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function controller_api_set_prices(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for controller_api_set_prices expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for controller_api_set_prices expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 5) {return _controller_api_set_prices5(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function controller_api_terminate(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for controller_api_terminate expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for controller_api_terminate expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 5) {return _controller_api_terminate5(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function controller_api_toggle_pause(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for controller_api_toggle_pause expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for controller_api_toggle_pause expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 5) {return _controller_api_toggle_pause5(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`_reachp_0((uint64,uint64,uint64,uint64))void`, `_reachp_1((uint64))void`, `_reachp_3((uint64))void`, `_reachp_4((uint64,(byte,byte[24])))void`, `buyer_api_purchase_bronze()byte`, `buyer_api_purchase_gold()byte`, `buyer_api_purchase_silver()byte`, `controller_api_restock((uint64,uint64,uint64))byte`, `controller_api_set_prices((uint64,uint64,uint64))byte`, `controller_api_terminate()byte`, `controller_api_toggle_pause()byte`],
    pure: [`coin_prices()(uint64,uint64,uint64)`, `coin_supply()(uint64,uint64,uint64)`, `is_paused()byte`],
    sigs: [`_reachp_0((uint64,uint64,uint64,uint64))void`, `_reachp_1((uint64))void`, `_reachp_3((uint64))void`, `_reachp_4((uint64,(byte,byte[24])))void`, `buyer_api_purchase_bronze()byte`, `buyer_api_purchase_gold()byte`, `buyer_api_purchase_silver()byte`, `coin_prices()(uint64,uint64,uint64)`, `coin_supply()(uint64,uint64,uint64)`, `controller_api_restock((uint64,uint64,uint64))byte`, `controller_api_set_prices((uint64,uint64,uint64))byte`, `controller_api_terminate()byte`, `controller_api_toggle_pause()byte`, `is_paused()byte`]
    },
  GlobalNumByteSlice: 4,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `CCAMAP///////////wEBCAUDEKCNBiAoMAQmBQTDuqqJAAEAAQEBAjEYQQhCKWRJIls1ASVbNQIqZCtkUCcEZFCCDgQDr6M8BAodJkkEFCCDHwQcjzblBD4NOmkER5E3lARLXyJOBJeLeTgErigdzQS2wXn5BMWkOxEE1tGMcATf2SMoBO4udxE2GgCODgeUB68ICwf9CAgIBQfyB/UH5ge6B+kH7AekB+8ANBdENBUkD0Q0GTQQCEk1CyMORDQQiAoUNBUjDkQ0EyMORDQRIw5ENAtJCUk1DCIPRDQLNCKICQY0FSQJSTULIg9EJDQhMQCICPCABmJyb256ZTUNKDQNUDEAULAkNQ2ACAAAAAAAABbhNA0WUQcIULA0DRZRBwg1BDIGNBo0FjQLFlwAXAA0DDUZNRo1GzQcQQePNBpXABFJNRAiWzUPNBpXEREiWzUONBpXIhEiWzUNNA8WNA4WUDQNFlA1DDQiNCEWUDQgFlA0HxZQNB5QNB0WUQcIUDQaUDQZFlA0EFA0DxZQNA4WUDQNFlA0DFCBPa9QIQUyBjUCNQEqSwFXAH9nK0sBV39/ZycETFf+DGcpNAEWNAIWUGcxGSISRIgJVjQDQAAKgAQVH3x1NARQsCRDNBdENBEkD0Q0GTQOCEk1CyMORDQOiAjiNBUjDkQ0EyMORDQRIw5ENAtJCUk1DCIPRDQLNCKIB9Q0ESQJSTULIg9EJDQfMQCIB76ABmdvbGQAADUNKDQNUDEAULAkNQ2ACAAAAAAAABlFNA0WUQcIULA0DRZRBwg1BDIGNBo0EjQLFlwAXCI0DDUZNRo1G0L+yzQXRDQTJA9ENBk0DwhJNQsjDkQ0D4gIUTQVIw5ENBMjDkQ0ESMORDQLSQlJNQwiD0Q0CzQiiAdDNBMkCUk1CyIPRCQ0IDEAiActgAZzaWx2ZXI1DSg0DVAxAFCwJDUNgAgAAAAAAAAbqTQNFlEHCFCwNA0WUQcINQQyBjQaNBQ0CxZcAFwRNAw1GTUaNRtC/jo0DVcBGDULMQA0IhJENAsiWzUONAslWzUNNAshBls1DDQOgbAJDjQNgdgEDhA0DIHIAQ4QRDQZIw5ENBU0DghJNQsjDkQ0GjQWNAsWXABcADUPNA40IYgHoTQPVxERSTUQIls0DQhJNQ4jDkQ0DzQQNA4WXABcETULNA00IIgHejQLVyIRSTUPIls0DAhJNQ4jDkQ0CzQPNA4WXABcIjUNNAw0H4gHUzQNVwARIls1DjQNVxERIls1DDQNVyIRIls1C4AEB/YAYTQOFlA0DBZQNAsWULAkNQuACAAAAAAAAB3fNAsWUQcIULA0CxZRBwg1BDIGNA01GjUbQv09MQA0IhJENBkjDkQ0FSMORDQTIw5ENBEjDkQ0DVcBGEk1DCJbNQ40DCVbNQ00DCEGWzULgATfKLQMNA4WUDQNFlA0CxZQsCQ1C4AIAAAAAAAAIAw0CxZRBwhQsDQLFlEHCDUENAwyBjUbNR5C/M8xADQiEkQ0GSMORDQVIw5ENBMjDkQ0ESMORCQ1C4AIAAAAAAAAIjQ0CxZRBwhQsDQLFlEHCDUEJDIGNRs1HEL8jjEANCISRDQZIw5ENBUjDkQ0EyMORDQRIw5EgAgAAAAAAAAT7jQYFlEHCFCwNBgWUQcINQQ0GDIGNRs1HUL8T4EhrzULIQQ0ARJEiAUDNAsiWzUMNAtXCBk1DYAEKm21WjQMFlA0DVCwNAyIBNk0DSJVjQcDjAOPA5IDlQOYA5sDnkL7e4AhAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANQtC/5iAIQAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADULQv9wNAEhBAxBBBE0ASEFEkSIBPQ0HjUEMRkiEkRC/DU0ASEEDEEEBDQBIQUSRIgE1zQMNQRC/+Alr4ABAzQLUFA1C0L/LSWvgAEENAtQUDULQv8fgCEAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1C0L+94AhAAAAAAAAAAAGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANQtC/s80ASEEDEEDkDQBIQUSRIgEUzQdFlEHCDUEQv9YMQA1IjQLIls1DDQLJVs1ITQLIQZbNSA0C4EYWzUfgAT27avSNAwWUDQhFlA0IBZQNB8WULA0DIgDe4ERr0k1DElQNAxQSTULSVcAESWvXABcAEk1DElXERElr1wAXBE1CzQgNCETRDQLSVciESWvXABcIjUNNB80IRM0HzQgExBEIQeIBDEiNCEyCogDGyEHiAQkIjQgMgqIAw4hB4gEFyI0HzIKiAMBNCE0IBM0ITQfExA0IDQfExBENCI0IRZQNCAWUDQfFlA0DVCBnwGvUCQyBkL6kCQ0ARJESVcAIDUiSSEIWzUhSSEJWzUgSSEKWzUfVzgzNQ00Cxc1DIAE1RUZFDQMFlCwNAyIAqg0IjEAEkSAGAAAAAAAmJaAAAAAAAExLQAAAAAAAcnDgCIiMgY0DSI1GTUaNRs1HDUdNR5C+bohBTQBEkSIAvw0Cxc1DIAE1Axs1jQMFlCwNAyIAlQ0IjEAEkQ0GUkJIg9ENBk0IogCODQPSQlJNQwiD0Q0GjQQNAwWXABcADULNA80ITQiiAIUNAtXERFJNQ8iWzQOCUk1DCIPRDQONCA0IogB+DQLNA80DBZcAFwRVyIRIls0DQkiD0Q0DTQfNCKIAdkiNB8yCjIJiAMGIjQgMgoyCYgC/CI0ITIKMgmIAvIxGSEEEkSIAu8iMgoyCYgC80L5jogBrCEHiAKtNhoBNQtC/e6IAZw2GgE1C0L+uYgBkTYaATULQv8biAGGNhoBNQtC/IAiMTQSRCELMTUSRCIxNhJEIjE3EkSIAWaBigKvIiJC+RJC/MRC/FRC/JZC/ONC/P02GgE1C0L9DTYaATULQv0TQv0eQv1DQv1oQvfwQvkfQvmtQvo7Qvs1QvugQvveNB0UNRg0HRQ1FzQaVwARSTUWIls1FTQaVxERSTUUIls1EzQaVyIRSTUSIls1ETQVFjQTFlA0ERZQNQw0HiJbNRA0HiVbNQ80HiEGWzUOIjUcNCI0IRZQNCAWUDQfFlA0HlA0HRZRBwhQNBwWUQcIUDQaUDQZFlA0GBZRBwhQNBcWUQcIUDQWUDQVFlA0FFA0ExZQNBJQNBEWUDQMUDQQFlA0DxZQNA4WUCEEMgZC+CUisgEkshCyB7IIs4kisgEhC7IQshSyEbISs4k0ASEEEkSIAFo0HjUEQvvsNAEhBBJEiABKNAw1BEL73DQBIQQSRIgAOjQdFlEHCDUEQvvISIlMCUk1BjIJiAARiQlJQf/uSTUGiADzibFC/6CxQv+QJDUDiUkiEkw0AhIRRIlJVwAgNSJJIQhbNSFJIQlbNSBJIQpbNR9JVzgYNR5JV1ABFzUdSVdRARc1HElXUjM1GkmBhQFbNRlJV40BFzUYSVeOARc1F0lXjxE1FkmBoAFbNRVJV6gRNRRJgbkBWzUTSVfBETUSSYHSAVs1EUlX2hg1DEmB8gFbNRBJgfoBWzUPgYICWzUOiUlXACA1IkkhCFs1IUkhCVs1IEkhCls1H0lXOBg1HklXUAEXNR1JV1EzNRpJgYQBWzUZSVeMETUQSYGdAVs1D0mBpQFbNQ5Jga0BWzUNV7UYNQyJMRY0ACQISTUACUcCOAcyChJEOBAkEkQ4CBJEiTQGCDUGiTEWNAAkCEk1AAlHAzgUMgoSRDgQIQsSRDgRTwISRDgSEkSJsbIVQv5nNAY0B0oPQf6jQv6rsbIJQv5J`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `2`,
    100: `24`,
    1000: `652`,
    1001: `653`,
    1002: `653`,
    1003: `654`,
    1004: `655`,
    1005: `655`,
    1006: `655`,
    1007: `656`,
    1008: `656`,
    1009: `657`,
    101: `24`,
    1010: `657`,
    1011: `658`,
    1012: `658`,
    1013: `659`,
    1014: `659`,
    1015: `660`,
    1016: `660`,
    1017: `661`,
    1018: `661`,
    1019: `661`,
    102: `24`,
    1020: `663`,
    1021: `663`,
    1022: `664`,
    1023: `664`,
    1024: `665`,
    1025: `666`,
    1026: `674`,
    1027: `674`,
    1028: `675`,
    1029: `676`,
    103: `24`,
    1030: `677`,
    1031: `680`,
    1032: `680`,
    1033: `681`,
    1034: `682`,
    1035: `683`,
    1036: `686`,
    1037: `686`,
    1038: `687`,
    1039: `688`,
    104: `24`,
    1040: `689`,
    1041: `692`,
    1042: `692`,
    1043: `693`,
    1044: `694`,
    1045: `695`,
    1046: `698`,
    1047: `698`,
    1048: `699`,
    1049: `699`,
    105: `24`,
    1050: `699`,
    1051: `700`,
    1052: `701`,
    1053: `701`,
    1054: `702`,
    1055: `703`,
    1056: `704`,
    1057: `704`,
    1058: `705`,
    1059: `705`,
    106: `24`,
    1060: `706`,
    1061: `707`,
    1062: `708`,
    1063: `708`,
    1064: `709`,
    1065: `709`,
    1066: `710`,
    1067: `710`,
    1068: `711`,
    1069: `712`,
    107: `24`,
    1070: `712`,
    1071: `713`,
    1072: `713`,
    1073: `713`,
    1074: `713`,
    1075: `713`,
    1076: `713`,
    1077: `714`,
    1078: `714`,
    1079: `715`,
    108: `24`,
    1080: `716`,
    1081: `717`,
    1082: `717`,
    1083: `718`,
    1084: `719`,
    1085: `720`,
    1086: `720`,
    1087: `721`,
    1088: `722`,
    1089: `723`,
    109: `24`,
    1090: `725`,
    1091: `726`,
    1092: `726`,
    1093: `727`,
    1094: `727`,
    1095: `727`,
    1096: `727`,
    1097: `727`,
    1098: `727`,
    1099: `727`,
    11: `2`,
    110: `24`,
    1100: `727`,
    1101: `727`,
    1102: `727`,
    1103: `728`,
    1104: `728`,
    1105: `729`,
    1106: `730`,
    1107: `730`,
    1108: `730`,
    1109: `731`,
    111: `24`,
    1110: `732`,
    1111: `733`,
    1112: `733`,
    1113: `734`,
    1114: `735`,
    1115: `735`,
    1116: `735`,
    1117: `736`,
    1118: `736`,
    1119: `737`,
    112: `24`,
    1120: `737`,
    1121: `738`,
    1122: `738`,
    1123: `739`,
    1124: `739`,
    1125: `740`,
    1126: `740`,
    1127: `741`,
    1128: `741`,
    1129: `741`,
    113: `24`,
    1130: `743`,
    1131: `743`,
    1132: `744`,
    1133: `744`,
    1134: `745`,
    1135: `746`,
    1136: `754`,
    1137: `754`,
    1138: `755`,
    1139: `756`,
    114: `24`,
    1140: `757`,
    1141: `760`,
    1142: `760`,
    1143: `761`,
    1144: `762`,
    1145: `763`,
    1146: `766`,
    1147: `766`,
    1148: `767`,
    1149: `768`,
    115: `24`,
    1150: `769`,
    1151: `772`,
    1152: `772`,
    1153: `773`,
    1154: `774`,
    1155: `775`,
    1156: `778`,
    1157: `779`,
    1158: `779`,
    1159: `780`,
    116: `24`,
    1160: `780`,
    1161: `780`,
    1162: `780`,
    1163: `780`,
    1164: `780`,
    1165: `780`,
    1166: `780`,
    1167: `780`,
    1168: `780`,
    1169: `781`,
    117: `24`,
    1170: `781`,
    1171: `782`,
    1172: `783`,
    1173: `783`,
    1174: `783`,
    1175: `784`,
    1176: `785`,
    1177: `786`,
    1178: `786`,
    1179: `787`,
    118: `24`,
    1180: `788`,
    1181: `788`,
    1182: `788`,
    1183: `789`,
    1184: `789`,
    1185: `790`,
    1186: `791`,
    1187: `791`,
    1188: `792`,
    1189: `792`,
    119: `24`,
    1190: `793`,
    1191: `793`,
    1192: `794`,
    1193: `794`,
    1194: `794`,
    1195: `796`,
    1196: `796`,
    1197: `797`,
    1198: `797`,
    1199: `798`,
    12: `2`,
    120: `24`,
    1200: `799`,
    1201: `807`,
    1202: `807`,
    1203: `808`,
    1204: `809`,
    1205: `810`,
    1206: `813`,
    1207: `813`,
    1208: `814`,
    1209: `815`,
    121: `24`,
    1210: `816`,
    1211: `819`,
    1212: `819`,
    1213: `820`,
    1214: `821`,
    1215: `822`,
    1216: `825`,
    1217: `825`,
    1218: `826`,
    1219: `827`,
    122: `24`,
    1220: `828`,
    1221: `831`,
    1222: `831`,
    1223: `831`,
    1224: `831`,
    1225: `831`,
    1226: `831`,
    1227: `831`,
    1228: `831`,
    1229: `831`,
    123: `24`,
    1230: `831`,
    1231: `832`,
    1232: `832`,
    1233: `833`,
    1234: `834`,
    1235: `834`,
    1236: `834`,
    1237: `835`,
    1238: `836`,
    1239: `837`,
    124: `24`,
    1240: `837`,
    1241: `838`,
    1242: `839`,
    1243: `839`,
    1244: `839`,
    1245: `840`,
    1246: `840`,
    1247: `841`,
    1248: `841`,
    1249: `842`,
    125: `24`,
    1250: `842`,
    1251: `843`,
    1252: `843`,
    1253: `844`,
    1254: `844`,
    1255: `845`,
    1256: `845`,
    1257: `845`,
    1258: `847`,
    1259: `847`,
    126: `24`,
    1260: `848`,
    1261: `849`,
    1262: `849`,
    1263: `851`,
    1264: `851`,
    1265: `852`,
    1266: `852`,
    1267: `853`,
    1268: `854`,
    1269: `855`,
    127: `24`,
    1270: `855`,
    1271: `855`,
    1272: `856`,
    1273: `856`,
    1274: `857`,
    1275: `858`,
    1276: `859`,
    1277: `859`,
    1278: `860`,
    1279: `860`,
    128: `24`,
    1280: `861`,
    1281: `861`,
    1282: `861`,
    1283: `862`,
    1284: `862`,
    1285: `863`,
    1286: `863`,
    1287: `863`,
    1288: `863`,
    1289: `863`,
    129: `24`,
    1290: `863`,
    1291: `864`,
    1292: `864`,
    1293: `865`,
    1294: `866`,
    1295: `867`,
    1296: `867`,
    1297: `868`,
    1298: `869`,
    1299: `871`,
    13: `2`,
    130: `24`,
    1300: `871`,
    1301: `872`,
    1302: `872`,
    1303: `872`,
    1304: `873`,
    1305: `873`,
    1306: `874`,
    1307: `875`,
    1308: `876`,
    1309: `876`,
    131: `24`,
    1310: `876`,
    1311: `876`,
    1312: `876`,
    1313: `876`,
    1314: `876`,
    1315: `876`,
    1316: `876`,
    1317: `876`,
    1318: `876`,
    1319: `876`,
    132: `24`,
    1320: `876`,
    1321: `876`,
    1322: `876`,
    1323: `876`,
    1324: `877`,
    1325: `877`,
    1326: `877`,
    1327: `879`,
    1328: `879`,
    1329: `879`,
    133: `24`,
    1330: `879`,
    1331: `879`,
    1332: `879`,
    1333: `879`,
    1334: `879`,
    1335: `879`,
    1336: `879`,
    1337: `879`,
    1338: `879`,
    1339: `879`,
    134: `24`,
    1340: `879`,
    1341: `879`,
    1342: `879`,
    1343: `879`,
    1344: `879`,
    1345: `879`,
    1346: `879`,
    1347: `879`,
    1348: `879`,
    1349: `879`,
    135: `24`,
    1350: `879`,
    1351: `879`,
    1352: `879`,
    1353: `879`,
    1354: `879`,
    1355: `879`,
    1356: `879`,
    1357: `879`,
    1358: `879`,
    1359: `879`,
    136: `24`,
    1360: `879`,
    1361: `879`,
    1362: `880`,
    1363: `880`,
    1364: `881`,
    1365: `881`,
    1366: `881`,
    1367: `883`,
    1368: `883`,
    1369: `883`,
    137: `25`,
    1370: `883`,
    1371: `883`,
    1372: `883`,
    1373: `883`,
    1374: `883`,
    1375: `883`,
    1376: `883`,
    1377: `883`,
    1378: `883`,
    1379: `883`,
    138: `25`,
    1380: `883`,
    1381: `883`,
    1382: `883`,
    1383: `883`,
    1384: `883`,
    1385: `883`,
    1386: `883`,
    1387: `883`,
    1388: `883`,
    1389: `883`,
    139: `25`,
    1390: `883`,
    1391: `883`,
    1392: `883`,
    1393: `883`,
    1394: `883`,
    1395: `883`,
    1396: `883`,
    1397: `883`,
    1398: `883`,
    1399: `883`,
    14: `2`,
    140: `26`,
    1400: `883`,
    1401: `883`,
    1402: `884`,
    1403: `884`,
    1404: `885`,
    1405: `885`,
    1406: `885`,
    1407: `887`,
    1408: `887`,
    1409: `888`,
    141: `26`,
    1410: `888`,
    1411: `889`,
    1412: `890`,
    1413: `890`,
    1414: `890`,
    1415: `891`,
    1416: `891`,
    1417: `892`,
    1418: `892`,
    1419: `893`,
    142: `26`,
    1420: `894`,
    1421: `897`,
    1422: `897`,
    1423: `897`,
    1424: `898`,
    1425: `898`,
    1426: `899`,
    1427: `899`,
    1428: `901`,
    1429: `901`,
    143: `26`,
    1430: `902`,
    1431: `903`,
    1432: `904`,
    1433: `906`,
    1434: `906`,
    1435: `906`,
    1436: `908`,
    1437: `908`,
    1438: `909`,
    1439: `909`,
    144: `26`,
    1440: `910`,
    1441: `911`,
    1442: `911`,
    1443: `911`,
    1444: `912`,
    1445: `912`,
    1446: `913`,
    1447: `913`,
    1448: `914`,
    1449: `915`,
    145: `26`,
    1450: `918`,
    1451: `918`,
    1452: `918`,
    1453: `919`,
    1454: `919`,
    1455: `920`,
    1456: `920`,
    1457: `921`,
    1458: `921`,
    1459: `921`,
    146: `26`,
    1460: `923`,
    1461: `924`,
    1462: `925`,
    1463: `925`,
    1464: `925`,
    1465: `926`,
    1466: `926`,
    1467: `927`,
    1468: `928`,
    1469: `929`,
    147: `26`,
    1470: `929`,
    1471: `930`,
    1472: `930`,
    1473: `930`,
    1474: `932`,
    1475: `933`,
    1476: `934`,
    1477: `934`,
    1478: `934`,
    1479: `935`,
    148: `26`,
    1480: `935`,
    1481: `936`,
    1482: `937`,
    1483: `938`,
    1484: `938`,
    1485: `939`,
    1486: `939`,
    1487: `939`,
    1488: `941`,
    1489: `941`,
    149: `26`,
    1490: `941`,
    1491: `941`,
    1492: `941`,
    1493: `941`,
    1494: `941`,
    1495: `941`,
    1496: `941`,
    1497: `941`,
    1498: `941`,
    1499: `941`,
    15: `2`,
    150: `26`,
    1500: `941`,
    1501: `941`,
    1502: `941`,
    1503: `941`,
    1504: `941`,
    1505: `941`,
    1506: `941`,
    1507: `941`,
    1508: `941`,
    1509: `941`,
    151: `26`,
    1510: `941`,
    1511: `941`,
    1512: `941`,
    1513: `941`,
    1514: `941`,
    1515: `941`,
    1516: `941`,
    1517: `941`,
    1518: `941`,
    1519: `941`,
    152: `26`,
    1520: `941`,
    1521: `941`,
    1522: `941`,
    1523: `942`,
    1524: `942`,
    1525: `943`,
    1526: `943`,
    1527: `943`,
    1528: `945`,
    1529: `945`,
    153: `26`,
    1530: `945`,
    1531: `945`,
    1532: `945`,
    1533: `945`,
    1534: `945`,
    1535: `945`,
    1536: `945`,
    1537: `945`,
    1538: `945`,
    1539: `945`,
    154: `26`,
    1540: `945`,
    1541: `945`,
    1542: `945`,
    1543: `945`,
    1544: `945`,
    1545: `945`,
    1546: `945`,
    1547: `945`,
    1548: `945`,
    1549: `945`,
    155: `26`,
    1550: `945`,
    1551: `945`,
    1552: `945`,
    1553: `945`,
    1554: `945`,
    1555: `945`,
    1556: `945`,
    1557: `945`,
    1558: `945`,
    1559: `945`,
    156: `26`,
    1560: `945`,
    1561: `945`,
    1562: `945`,
    1563: `946`,
    1564: `946`,
    1565: `947`,
    1566: `947`,
    1567: `947`,
    1568: `949`,
    1569: `949`,
    157: `26`,
    1570: `950`,
    1571: `950`,
    1572: `951`,
    1573: `952`,
    1574: `952`,
    1575: `952`,
    1576: `953`,
    1577: `953`,
    1578: `954`,
    1579: `954`,
    158: `26`,
    1580: `955`,
    1581: `956`,
    1582: `959`,
    1583: `959`,
    1584: `959`,
    1585: `960`,
    1586: `960`,
    1587: `961`,
    1588: `962`,
    1589: `962`,
    159: `26`,
    1590: `962`,
    1591: `963`,
    1592: `963`,
    1593: `964`,
    1594: `964`,
    1595: `964`,
    1596: `966`,
    1597: `966`,
    1598: `967`,
    1599: `967`,
    16: `2`,
    160: `26`,
    1600: `968`,
    1601: `968`,
    1602: `969`,
    1603: `970`,
    1604: `971`,
    1605: `971`,
    1606: `972`,
    1607: `972`,
    1608: `973`,
    1609: `974`,
    161: `26`,
    1610: `975`,
    1611: `975`,
    1612: `976`,
    1613: `976`,
    1614: `977`,
    1615: `977`,
    1616: `978`,
    1617: `979`,
    1618: `979`,
    1619: `980`,
    162: `26`,
    1620: `980`,
    1621: `981`,
    1622: `981`,
    1623: `982`,
    1624: `983`,
    1625: `983`,
    1626: `984`,
    1627: `984`,
    1628: `984`,
    1629: `984`,
    163: `26`,
    1630: `984`,
    1631: `984`,
    1632: `985`,
    1633: `985`,
    1634: `986`,
    1635: `987`,
    1636: `988`,
    1637: `988`,
    1638: `989`,
    1639: `990`,
    164: `26`,
    1640: `991`,
    1641: `991`,
    1642: `992`,
    1643: `993`,
    1644: `994`,
    1645: `994`,
    1646: `995`,
    1647: `996`,
    1648: `997`,
    1649: `999`,
    165: `26`,
    1650: `999`,
    1651: `1000`,
    1652: `1000`,
    1653: `1000`,
    1654: `1001`,
    1655: `1001`,
    1656: `1002`,
    1657: `1003`,
    1658: `1004`,
    1659: `1004`,
    166: `26`,
    1660: `1005`,
    1661: `1006`,
    1662: `1007`,
    1663: `1007`,
    1664: `1008`,
    1665: `1009`,
    1666: `1010`,
    1667: `1010`,
    1668: `1011`,
    1669: `1012`,
    167: `26`,
    1670: `1012`,
    1671: `1012`,
    1672: `1013`,
    1673: `1014`,
    1674: `1015`,
    1675: `1015`,
    1676: `1016`,
    1677: `1016`,
    1678: `1017`,
    1679: `1018`,
    168: `26`,
    1680: `1018`,
    1681: `1019`,
    1682: `1020`,
    1683: `1020`,
    1684: `1020`,
    1685: `1021`,
    1686: `1022`,
    1687: `1023`,
    1688: `1023`,
    1689: `1024`,
    169: `26`,
    1690: `1024`,
    1691: `1025`,
    1692: `1025`,
    1693: `1026`,
    1694: `1026`,
    1695: `1027`,
    1696: `1027`,
    1697: `1028`,
    1698: `1029`,
    1699: `1032`,
    17: `2`,
    170: `28`,
    1700: `1032`,
    1701: `1033`,
    1702: `1034`,
    1703: `1034`,
    1704: `1034`,
    1705: `1035`,
    1706: `1036`,
    1707: `1037`,
    1708: `1037`,
    1709: `1038`,
    171: `30`,
    1710: `1038`,
    1711: `1039`,
    1712: `1039`,
    1713: `1040`,
    1714: `1040`,
    1715: `1041`,
    1716: `1041`,
    1717: `1042`,
    1718: `1043`,
    1719: `1043`,
    172: `30`,
    1720: `1044`,
    1721: `1044`,
    1722: `1045`,
    1723: `1046`,
    1724: `1047`,
    1725: `1050`,
    1726: `1050`,
    1727: `1051`,
    1728: `1051`,
    1729: `1051`,
    173: `31`,
    1730: `1052`,
    1731: `1054`,
    1732: `1054`,
    1733: `1055`,
    1734: `1055`,
    1735: `1056`,
    1736: `1056`,
    1737: `1056`,
    1738: `1057`,
    1739: `1057`,
    174: `39`,
    1740: `1058`,
    1741: `1058`,
    1742: `1058`,
    1743: `1059`,
    1744: `1061`,
    1745: `1061`,
    1746: `1062`,
    1747: `1062`,
    1748: `1063`,
    1749: `1063`,
    175: `39`,
    1750: `1063`,
    1751: `1064`,
    1752: `1064`,
    1753: `1065`,
    1754: `1065`,
    1755: `1065`,
    1756: `1066`,
    1757: `1068`,
    1758: `1068`,
    1759: `1069`,
    176: `40`,
    1760: `1069`,
    1761: `1070`,
    1762: `1070`,
    1763: `1070`,
    1764: `1071`,
    1765: `1071`,
    1766: `1072`,
    1767: `1072`,
    1768: `1073`,
    1769: `1074`,
    177: `41`,
    1770: `1074`,
    1771: `1075`,
    1772: `1075`,
    1773: `1076`,
    1774: `1077`,
    1775: `1078`,
    1776: `1078`,
    1777: `1079`,
    1778: `1079`,
    1779: `1080`,
    178: `42`,
    1780: `1081`,
    1781: `1082`,
    1782: `1087`,
    1783: `1087`,
    1784: `1088`,
    1785: `1088`,
    1786: `1089`,
    1787: `1090`,
    1788: `1091`,
    1789: `1091`,
    179: `50`,
    1790: `1092`,
    1791: `1093`,
    1792: `1094`,
    1793: `1094`,
    1794: `1095`,
    1795: `1096`,
    1796: `1097`,
    1797: `1097`,
    1798: `1098`,
    1799: `1099`,
    18: `2`,
    180: `50`,
    1800: `1099`,
    1801: `1099`,
    1802: `1100`,
    1803: `1101`,
    1804: `1102`,
    1805: `1103`,
    1806: `1103`,
    1807: `1104`,
    1808: `1104`,
    1809: `1104`,
    181: `51`,
    1810: `1106`,
    1811: `1107`,
    1812: `1107`,
    1813: `1108`,
    1814: `1109`,
    1815: `1111`,
    1816: `1112`,
    1817: `1112`,
    1818: `1112`,
    1819: `1113`,
    182: `51`,
    1820: `1113`,
    1821: `1114`,
    1822: `1115`,
    1823: `1115`,
    1824: `1116`,
    1825: `1117`,
    1826: `1117`,
    1827: `1118`,
    1828: `1119`,
    1829: `1119`,
    183: `52`,
    1830: `1120`,
    1831: `1121`,
    1832: `1121`,
    1833: `1122`,
    1834: `1123`,
    1835: `1123`,
    1836: `1124`,
    1837: `1125`,
    1838: `1125`,
    1839: `1126`,
    184: `53`,
    1840: `1126`,
    1841: `1126`,
    1842: `1127`,
    1843: `1127`,
    1844: `1128`,
    1845: `1128`,
    1846: `1129`,
    1847: `1130`,
    1848: `1130`,
    1849: `1131`,
    185: `54`,
    1850: `1131`,
    1851: `1131`,
    1852: `1131`,
    1853: `1131`,
    1854: `1131`,
    1855: `1132`,
    1856: `1132`,
    1857: `1133`,
    1858: `1134`,
    1859: `1135`,
    186: `54`,
    1860: `1137`,
    1861: `1137`,
    1862: `1138`,
    1863: `1138`,
    1864: `1138`,
    1865: `1139`,
    1866: `1139`,
    1867: `1140`,
    1868: `1140`,
    1869: `1141`,
    187: `55`,
    1870: `1142`,
    1871: `1145`,
    1872: `1145`,
    1873: `1145`,
    1874: `1145`,
    1875: `1145`,
    1876: `1145`,
    1877: `1145`,
    1878: `1145`,
    1879: `1145`,
    188: `56`,
    1880: `1145`,
    1881: `1145`,
    1882: `1145`,
    1883: `1145`,
    1884: `1145`,
    1885: `1145`,
    1886: `1145`,
    1887: `1145`,
    1888: `1145`,
    1889: `1145`,
    189: `57`,
    1890: `1145`,
    1891: `1145`,
    1892: `1145`,
    1893: `1145`,
    1894: `1145`,
    1895: `1145`,
    1896: `1145`,
    1897: `1146`,
    1898: `1147`,
    1899: `1148`,
    19: `2`,
    190: `60`,
    1900: `1148`,
    1901: `1149`,
    1902: `1149`,
    1903: `1150`,
    1904: `1151`,
    1905: `1151`,
    1906: `1152`,
    1907: `1152`,
    1908: `1153`,
    1909: `1153`,
    191: `60`,
    1910: `1154`,
    1911: `1154`,
    1912: `1155`,
    1913: `1155`,
    1914: `1156`,
    1915: `1156`,
    1916: `1157`,
    1917: `1157`,
    1918: `1157`,
    1919: `1159`,
    192: `61`,
    1920: `1159`,
    1921: `1160`,
    1922: `1160`,
    1923: `1161`,
    1924: `1162`,
    1925: `1163`,
    1926: `1163`,
    1927: `1163`,
    1928: `1164`,
    1929: `1164`,
    193: `61`,
    1930: `1165`,
    1931: `1166`,
    1932: `1166`,
    1933: `1167`,
    1934: `1167`,
    1935: `1167`,
    1936: `1167`,
    1937: `1167`,
    1938: `1167`,
    1939: `1168`,
    194: `61`,
    1940: `1168`,
    1941: `1169`,
    1942: `1170`,
    1943: `1171`,
    1944: `1173`,
    1945: `1173`,
    1946: `1174`,
    1947: `1174`,
    1948: `1174`,
    1949: `1175`,
    195: `64`,
    1950: `1175`,
    1951: `1176`,
    1952: `1176`,
    1953: `1177`,
    1954: `1178`,
    1955: `1182`,
    1956: `1182`,
    1957: `1183`,
    1958: `1184`,
    1959: `1185`,
    196: `64`,
    1960: `1186`,
    1961: `1187`,
    1962: `1191`,
    1963: `1191`,
    1964: `1193`,
    1965: `1193`,
    1966: `1194`,
    1967: `1194`,
    1968: `1194`,
    1969: `1195`,
    197: `65`,
    1970: `1195`,
    1971: `1196`,
    1972: `1197`,
    1973: `1198`,
    1974: `1199`,
    1975: `1199`,
    1976: `1200`,
    1977: `1201`,
    1978: `1202`,
    1979: `1206`,
    198: `66`,
    1980: `1206`,
    1981: `1207`,
    1982: `1207`,
    1983: `1208`,
    1984: `1208`,
    1985: `1209`,
    1986: `1210`,
    1987: `1210`,
    1988: `1211`,
    1989: `1211`,
    199: `67`,
    1990: `1212`,
    1991: `1212`,
    1992: `1213`,
    1993: `1213`,
    1994: `1215`,
    1995: `1215`,
    1996: `1216`,
    1997: `1216`,
    1998: `1217`,
    1999: `1217`,
    2: `2`,
    20: `2`,
    200: `70`,
    2000: `1217`,
    2001: `1218`,
    2002: `1218`,
    2003: `1219`,
    2004: `1219`,
    2005: `1219`,
    2006: `1220`,
    2007: `1221`,
    2008: `1221`,
    2009: `1222`,
    201: `70`,
    2010: `1223`,
    2011: `1224`,
    2012: `1224`,
    2013: `1225`,
    2014: `1226`,
    2015: `1227`,
    2016: `1227`,
    2017: `1228`,
    2018: `1229`,
    2019: `1230`,
    202: `71`,
    2020: `1234`,
    2021: `1234`,
    2022: `1236`,
    2023: `1236`,
    2024: `1237`,
    2025: `1237`,
    2026: `1238`,
    2027: `1238`,
    2028: `1238`,
    2029: `1239`,
    203: `72`,
    2030: `1239`,
    2031: `1240`,
    2032: `1240`,
    2033: `1241`,
    2034: `1241`,
    2035: `1242`,
    2036: `1243`,
    2037: `1243`,
    2038: `1244`,
    2039: `1244`,
    204: `73`,
    2040: `1245`,
    2041: `1245`,
    2042: `1245`,
    2043: `1246`,
    2044: `1247`,
    2045: `1248`,
    2046: `1248`,
    2047: `1249`,
    2048: `1250`,
    2049: `1251`,
    205: `76`,
    2050: `1252`,
    2051: `1256`,
    2052: `1256`,
    2053: `1258`,
    2054: `1258`,
    2055: `1259`,
    2056: `1259`,
    2057: `1260`,
    2058: `1260`,
    2059: `1260`,
    206: `76`,
    2060: `1262`,
    2061: `1263`,
    2062: `1263`,
    2063: `1264`,
    2064: `1264`,
    2065: `1265`,
    2066: `1265`,
    2067: `1266`,
    2068: `1266`,
    2069: `1266`,
    207: `77`,
    2070: `1267`,
    2071: `1268`,
    2072: `1268`,
    2073: `1269`,
    2074: `1269`,
    2075: `1270`,
    2076: `1270`,
    2077: `1271`,
    2078: `1271`,
    2079: `1271`,
    208: `78`,
    2080: `1272`,
    2081: `1273`,
    2082: `1273`,
    2083: `1274`,
    2084: `1274`,
    2085: `1275`,
    2086: `1275`,
    2087: `1276`,
    2088: `1276`,
    2089: `1276`,
    209: `79`,
    2090: `1278`,
    2091: `1278`,
    2092: `1279`,
    2093: `1279`,
    2094: `1280`,
    2095: `1281`,
    2096: `1283`,
    2097: `1283`,
    2098: `1283`,
    2099: `1285`,
    21: `2`,
    210: `82`,
    2100: `1286`,
    2101: `1286`,
    2102: `1287`,
    2103: `1287`,
    2104: `1288`,
    2105: `1288`,
    2106: `1288`,
    2107: `1289`,
    2108: `1289`,
    2109: `1289`,
    211: `82`,
    2110: `1291`,
    2111: `1291`,
    2112: `1291`,
    2113: `1292`,
    2114: `1292`,
    2115: `1293`,
    2116: `1293`,
    2117: `1293`,
    2118: `1294`,
    2119: `1294`,
    212: `83`,
    2120: `1294`,
    2121: `1295`,
    2122: `1295`,
    2123: `1296`,
    2124: `1296`,
    2125: `1296`,
    2126: `1298`,
    2127: `1298`,
    2128: `1298`,
    2129: `1299`,
    213: `84`,
    2130: `1299`,
    2131: `1299`,
    2132: `1300`,
    2133: `1300`,
    2134: `1301`,
    2135: `1301`,
    2136: `1301`,
    2137: `1303`,
    2138: `1303`,
    2139: `1303`,
    214: `85`,
    2140: `1304`,
    2141: `1304`,
    2142: `1304`,
    2143: `1305`,
    2144: `1305`,
    2145: `1306`,
    2146: `1306`,
    2147: `1306`,
    2148: `1308`,
    2149: `1308`,
    215: `86`,
    2150: `1308`,
    2151: `1309`,
    2152: `1309`,
    2153: `1309`,
    2154: `1310`,
    2155: `1310`,
    2156: `1311`,
    2157: `1311`,
    2158: `1311`,
    2159: `1313`,
    216: `86`,
    2160: `1314`,
    2161: `1314`,
    2162: `1315`,
    2163: `1316`,
    2164: `1317`,
    2165: `1317`,
    2166: `1318`,
    2167: `1318`,
    2168: `1319`,
    2169: `1320`,
    217: `87`,
    2170: `1321`,
    2171: `1322`,
    2172: `1322`,
    2173: `1323`,
    2174: `1324`,
    2175: `1325`,
    2176: `1326`,
    2177: `1326`,
    2178: `1327`,
    2179: `1328`,
    218: `88`,
    2180: `1329`,
    2181: `1329`,
    2182: `1329`,
    2183: `1330`,
    2184: `1330`,
    2185: `1330`,
    2186: `1331`,
    2187: `1332`,
    2188: `1333`,
    2189: `1334`,
    219: `89`,
    2190: `1334`,
    2191: `1334`,
    2192: `1336`,
    2193: `1336`,
    2194: `1336`,
    2195: `1338`,
    2196: `1338`,
    2197: `1338`,
    2198: `1340`,
    2199: `1340`,
    22: `2`,
    220: `93`,
    2200: `1340`,
    2201: `1342`,
    2202: `1342`,
    2203: `1342`,
    2204: `1344`,
    2205: `1344`,
    2206: `1344`,
    2207: `1346`,
    2208: `1346`,
    2209: `1346`,
    221: `93`,
    2210: `1347`,
    2211: `1347`,
    2212: `1348`,
    2213: `1348`,
    2214: `1348`,
    2215: `1350`,
    2216: `1350`,
    2217: `1350`,
    2218: `1351`,
    2219: `1351`,
    222: `95`,
    2220: `1352`,
    2221: `1352`,
    2222: `1352`,
    2223: `1354`,
    2224: `1354`,
    2225: `1354`,
    2226: `1356`,
    2227: `1356`,
    2228: `1356`,
    2229: `1358`,
    223: `95`,
    2230: `1358`,
    2231: `1358`,
    2232: `1360`,
    2233: `1360`,
    2234: `1360`,
    2235: `1362`,
    2236: `1362`,
    2237: `1362`,
    2238: `1364`,
    2239: `1364`,
    224: `96`,
    2240: `1364`,
    2241: `1366`,
    2242: `1366`,
    2243: `1366`,
    2244: `1368`,
    2245: `1368`,
    2246: `1368`,
    2247: `1370`,
    2248: `1370`,
    2249: `1370`,
    225: `96`,
    2250: `1372`,
    2251: `1372`,
    2252: `1372`,
    2253: `1374`,
    2254: `1374`,
    2255: `1375`,
    2256: `1376`,
    2257: `1376`,
    2258: `1377`,
    2259: `1377`,
    226: `96`,
    2260: `1378`,
    2261: `1379`,
    2262: `1379`,
    2263: `1380`,
    2264: `1380`,
    2265: `1381`,
    2266: `1381`,
    2267: `1381`,
    2268: `1382`,
    2269: `1383`,
    227: `97`,
    2270: `1383`,
    2271: `1384`,
    2272: `1385`,
    2273: `1386`,
    2274: `1386`,
    2275: `1387`,
    2276: `1387`,
    2277: `1388`,
    2278: `1388`,
    2279: `1388`,
    228: `97`,
    2280: `1389`,
    2281: `1390`,
    2282: `1390`,
    2283: `1391`,
    2284: `1392`,
    2285: `1393`,
    2286: `1393`,
    2287: `1394`,
    2288: `1394`,
    2289: `1395`,
    229: `98`,
    2290: `1395`,
    2291: `1395`,
    2292: `1396`,
    2293: `1397`,
    2294: `1397`,
    2295: `1398`,
    2296: `1399`,
    2297: `1400`,
    2298: `1400`,
    2299: `1401`,
    23: `2`,
    230: `99`,
    2300: `1401`,
    2301: `1402`,
    2302: `1403`,
    2303: `1403`,
    2304: `1404`,
    2305: `1405`,
    2306: `1406`,
    2307: `1406`,
    2308: `1407`,
    2309: `1408`,
    231: `100`,
    2310: `1409`,
    2311: `1409`,
    2312: `1410`,
    2313: `1410`,
    2314: `1411`,
    2315: `1412`,
    2316: `1413`,
    2317: `1413`,
    2318: `1414`,
    2319: `1414`,
    232: `101`,
    2320: `1415`,
    2321: `1416`,
    2322: `1417`,
    2323: `1417`,
    2324: `1418`,
    2325: `1418`,
    2326: `1419`,
    2327: `1419`,
    2328: `1420`,
    2329: `1421`,
    233: `101`,
    2330: `1421`,
    2331: `1422`,
    2332: `1423`,
    2333: `1423`,
    2334: `1425`,
    2335: `1425`,
    2336: `1426`,
    2337: `1426`,
    2338: `1427`,
    2339: `1428`,
    234: `102`,
    2340: `1429`,
    2341: `1429`,
    2342: `1430`,
    2343: `1431`,
    2344: `1432`,
    2345: `1432`,
    2346: `1433`,
    2347: `1434`,
    2348: `1435`,
    2349: `1435`,
    235: `103`,
    2350: `1436`,
    2351: `1437`,
    2352: `1437`,
    2353: `1438`,
    2354: `1439`,
    2355: `1439`,
    2356: `1439`,
    2357: `1440`,
    2358: `1441`,
    2359: `1441`,
    236: `104`,
    2360: `1442`,
    2361: `1443`,
    2362: `1443`,
    2363: `1443`,
    2364: `1444`,
    2365: `1445`,
    2366: `1445`,
    2367: `1446`,
    2368: `1447`,
    2369: `1447`,
    237: `108`,
    2370: `1448`,
    2371: `1449`,
    2372: `1450`,
    2373: `1450`,
    2374: `1451`,
    2375: `1452`,
    2376: `1452`,
    2377: `1452`,
    2378: `1453`,
    2379: `1454`,
    238: `110`,
    2380: `1454`,
    2381: `1455`,
    2382: `1456`,
    2383: `1456`,
    2384: `1456`,
    2385: `1457`,
    2386: `1458`,
    2387: `1458`,
    2388: `1459`,
    2389: `1460`,
    239: `110`,
    2390: `1460`,
    2391: `1461`,
    2392: `1462`,
    2393: `1463`,
    2394: `1463`,
    2395: `1464`,
    2396: `1465`,
    2397: `1465`,
    2398: `1466`,
    2399: `1467`,
    24: `2`,
    240: `112`,
    2400: `1468`,
    2401: `1468`,
    2402: `1469`,
    2403: `1470`,
    2404: `1470`,
    2405: `1471`,
    2406: `1472`,
    2407: `1473`,
    2408: `1473`,
    2409: `1474`,
    241: `112`,
    2410: `1475`,
    2411: `1475`,
    2412: `1476`,
    2413: `1477`,
    2414: `1478`,
    2415: `1478`,
    2416: `1479`,
    2417: `1480`,
    2418: `1481`,
    2419: `1481`,
    242: `113`,
    2420: `1482`,
    2421: `1483`,
    2422: `1484`,
    2423: `1484`,
    2424: `1485`,
    2425: `1485`,
    2426: `1486`,
    2427: `1486`,
    2428: `1486`,
    2429: `1488`,
    243: `113`,
    2430: `1489`,
    2431: `1489`,
    2432: `1490`,
    2433: `1491`,
    2434: `1491`,
    2435: `1492`,
    2436: `1492`,
    2437: `1493`,
    2438: `1493`,
    2439: `1494`,
    244: `113`,
    2440: `1495`,
    2441: `1497`,
    2442: `1498`,
    2443: `1498`,
    2444: `1499`,
    2445: `1499`,
    2446: `1500`,
    2447: `1500`,
    2448: `1501`,
    2449: `1501`,
    245: `114`,
    2450: `1502`,
    2451: `1502`,
    2452: `1503`,
    2453: `1503`,
    2454: `1504`,
    2455: `1505`,
    2456: `1507`,
    2457: `1507`,
    2458: `1508`,
    2459: `1508`,
    246: `114`,
    2460: `1509`,
    2461: `1510`,
    2462: `1513`,
    2463: `1513`,
    2464: `1513`,
    2465: `1514`,
    2466: `1514`,
    2467: `1515`,
    2468: `1515`,
    2469: `1516`,
    247: `114`,
    2470: `1516`,
    2471: `1516`,
    2472: `1518`,
    2473: `1518`,
    2474: `1519`,
    2475: `1519`,
    2476: `1520`,
    2477: `1521`,
    2478: `1524`,
    2479: `1524`,
    248: `114`,
    2480: `1524`,
    2481: `1525`,
    2482: `1525`,
    2483: `1526`,
    2484: `1526`,
    2485: `1527`,
    2486: `1527`,
    2487: `1527`,
    2488: `1529`,
    2489: `1529`,
    249: `114`,
    2490: `1530`,
    2491: `1530`,
    2492: `1531`,
    2493: `1532`,
    2494: `1535`,
    2495: `1535`,
    2496: `1535`,
    2497: `1536`,
    2498: `1536`,
    2499: `1537`,
    25: `2`,
    250: `114`,
    2500: `1538`,
    2501: `1538`,
    2502: `1538`,
    2503: `1539`,
    2504: `1539`,
    2505: `1540`,
    2506: `1540`,
    2507: `1540`,
    2508: `1542`,
    2509: `1543`,
    251: `114`,
    2510: `1545`,
    2511: `1546`,
    2512: `1547`,
    2513: `1548`,
    2514: `1548`,
    2515: `1549`,
    2516: `1549`,
    2517: `1550`,
    2518: `1550`,
    2519: `1550`,
    252: `114`,
    2520: `1551`,
    2521: `1553`,
    2522: `1554`,
    2523: `1555`,
    2524: `1555`,
    2525: `1555`,
    2526: `1556`,
    2527: `1557`,
    2528: `1557`,
    2529: `1558`,
    253: `115`,
    2530: `1558`,
    2531: `1558`,
    2532: `1559`,
    2533: `1561`,
    2534: `1562`,
    2535: `1562`,
    2536: `1562`,
    2537: `1564`,
    2538: `1565`,
    2539: `1565`,
    254: `115`,
    2540: `1565`,
    2541: `1567`,
    2542: `1568`,
    2543: `1568`,
    2544: `1569`,
    2545: `1571`,
    2546: `1572`,
    2547: `1573`,
    2548: `1574`,
    2549: `1575`,
    255: `116`,
    2550: `1575`,
    2551: `1576`,
    2552: `1577`,
    2553: `1578`,
    2554: `1579`,
    2555: `1581`,
    2556: `1582`,
    2557: `1582`,
    2558: `1582`,
    2559: `1583`,
    256: `117`,
    2560: `1583`,
    2561: `1584`,
    2562: `1585`,
    2563: `1585`,
    2564: `1586`,
    2565: `1587`,
    2566: `1587`,
    2567: `1588`,
    2568: `1589`,
    2569: `1589`,
    257: `117`,
    2570: `1590`,
    2571: `1591`,
    2572: `1591`,
    2573: `1592`,
    2574: `1593`,
    2575: `1593`,
    2576: `1594`,
    2577: `1595`,
    2578: `1595`,
    2579: `1596`,
    258: `118`,
    2580: `1597`,
    2581: `1597`,
    2582: `1597`,
    2583: `1598`,
    2584: `1598`,
    2585: `1599`,
    2586: `1600`,
    2587: `1600`,
    2588: `1600`,
    2589: `1601`,
    259: `119`,
    2590: `1602`,
    2591: `1602`,
    2592: `1603`,
    2593: `1604`,
    2594: `1604`,
    2595: `1604`,
    2596: `1605`,
    2597: `1606`,
    2598: `1606`,
    2599: `1607`,
    26: `2`,
    260: `119`,
    2600: `1608`,
    2601: `1608`,
    2602: `1608`,
    2603: `1609`,
    2604: `1609`,
    2605: `1610`,
    2606: `1611`,
    2607: `1611`,
    2608: `1611`,
    2609: `1612`,
    261: `120`,
    2610: `1613`,
    2611: `1613`,
    2612: `1614`,
    2613: `1615`,
    2614: `1615`,
    2615: `1615`,
    2616: `1616`,
    2617: `1617`,
    2618: `1617`,
    2619: `1618`,
    262: `121`,
    2620: `1619`,
    2621: `1619`,
    2622: `1619`,
    2623: `1620`,
    2624: `1621`,
    2625: `1621`,
    2626: `1622`,
    2627: `1623`,
    2628: `1623`,
    2629: `1623`,
    263: `123`,
    2630: `1624`,
    2631: `1624`,
    2632: `1625`,
    2633: `1626`,
    2634: `1626`,
    2635: `1626`,
    2636: `1627`,
    2637: `1628`,
    2638: `1628`,
    2639: `1629`,
    264: `124`,
    2640: `1630`,
    2641: `1630`,
    2642: `1630`,
    2643: `1631`,
    2644: `1631`,
    2645: `1632`,
    2646: `1633`,
    2647: `1633`,
    2648: `1633`,
    2649: `1634`,
    265: `124`,
    2650: `1635`,
    2651: `1635`,
    2652: `1636`,
    2653: `1637`,
    2654: `1637`,
    2655: `1637`,
    2656: `1638`,
    2657: `1638`,
    2658: `1639`,
    2659: `1640`,
    266: `125`,
    2660: `1640`,
    2661: `1640`,
    2662: `1641`,
    2663: `1642`,
    2664: `1642`,
    2665: `1643`,
    2666: `1644`,
    2667: `1644`,
    2668: `1644`,
    2669: `1645`,
    267: `125`,
    2670: `1645`,
    2671: `1646`,
    2672: `1647`,
    2673: `1647`,
    2674: `1647`,
    2675: `1648`,
    2676: `1649`,
    2677: `1649`,
    2678: `1650`,
    2679: `1651`,
    268: `125`,
    2680: `1651`,
    2681: `1651`,
    2682: `1652`,
    2683: `1653`,
    2684: `1653`,
    2685: `1654`,
    2686: `1654`,
    2687: `1654`,
    2688: `1655`,
    2689: `1656`,
    269: `125`,
    2690: `1656`,
    2691: `1657`,
    2692: `1659`,
    2693: `1660`,
    2694: `1660`,
    2695: `1660`,
    2696: `1661`,
    2697: `1661`,
    2698: `1662`,
    2699: `1663`,
    27: `2`,
    270: `125`,
    2700: `1663`,
    2701: `1664`,
    2702: `1665`,
    2703: `1665`,
    2704: `1666`,
    2705: `1667`,
    2706: `1667`,
    2707: `1668`,
    2708: `1669`,
    2709: `1669`,
    271: `125`,
    2710: `1670`,
    2711: `1671`,
    2712: `1671`,
    2713: `1672`,
    2714: `1673`,
    2715: `1673`,
    2716: `1674`,
    2717: `1675`,
    2718: `1675`,
    2719: `1675`,
    272: `125`,
    2720: `1676`,
    2721: `1676`,
    2722: `1677`,
    2723: `1678`,
    2724: `1678`,
    2725: `1678`,
    2726: `1679`,
    2727: `1680`,
    2728: `1680`,
    2729: `1681`,
    273: `125`,
    2730: `1682`,
    2731: `1682`,
    2732: `1682`,
    2733: `1683`,
    2734: `1683`,
    2735: `1684`,
    2736: `1685`,
    2737: `1685`,
    2738: `1685`,
    2739: `1686`,
    274: `125`,
    2740: `1687`,
    2741: `1687`,
    2742: `1688`,
    2743: `1689`,
    2744: `1689`,
    2745: `1689`,
    2746: `1690`,
    2747: `1690`,
    2748: `1691`,
    2749: `1692`,
    275: `125`,
    2750: `1692`,
    2751: `1692`,
    2752: `1693`,
    2753: `1694`,
    2754: `1694`,
    2755: `1695`,
    2756: `1696`,
    2757: `1696`,
    2758: `1696`,
    2759: `1697`,
    276: `126`,
    2760: `1698`,
    2761: `1698`,
    2762: `1699`,
    2763: `1700`,
    2764: `1700`,
    2765: `1700`,
    2766: `1701`,
    2767: `1702`,
    2768: `1702`,
    2769: `1703`,
    277: `126`,
    2770: `1703`,
    2771: `1703`,
    2772: `1704`,
    2773: `1704`,
    2774: `1705`,
    2775: `1708`,
    2776: `1708`,
    2777: `1709`,
    2778: `1709`,
    2779: `1710`,
    278: `127`,
    2780: `1711`,
    2781: `1712`,
    2782: `1713`,
    2783: `1713`,
    2784: `1714`,
    2785: `1715`,
    2786: `1715`,
    2787: `1716`,
    2788: `1716`,
    2789: `1717`,
    279: `128`,
    2790: `1717`,
    2791: `1718`,
    2792: `1719`,
    2793: `1720`,
    2794: `1720`,
    2795: `1721`,
    2796: `1722`,
    2797: `1723`,
    2798: `1724`,
    2799: `1724`,
    28: `2`,
    280: `128`,
    2800: `1725`,
    2801: `1726`,
    2802: `1727`,
    2803: `1729`,
    2804: `1729`,
    2805: `1730`,
    2806: `1731`,
    2807: `1731`,
    2808: `1732`,
    2809: `1735`,
    281: `128`,
    2810: `1735`,
    2811: `1736`,
    2812: `1736`,
    2813: `1737`,
    2814: `1738`,
    2815: `1739`,
    2816: `1740`,
    2817: `1740`,
    2818: `1741`,
    2819: `1742`,
    282: `129`,
    2820: `1742`,
    2821: `1743`,
    2822: `1743`,
    2823: `1744`,
    2824: `1744`,
    2825: `1745`,
    2826: `1746`,
    2827: `1747`,
    2828: `1747`,
    2829: `1748`,
    283: `130`,
    2830: `1748`,
    2831: `1749`,
    2832: `1750`,
    2833: `1751`,
    2834: `1751`,
    2835: `1752`,
    2836: `1752`,
    2837: `1753`,
    2838: `1754`,
    2839: `1755`,
    284: `131`,
    2840: `1755`,
    2841: `1756`,
    2842: `1757`,
    2843: `1758`,
    2844: `1760`,
    2845: `1761`,
    2846: `1761`,
    2847: `1762`,
    2848: `1762`,
    2849: `1762`,
    285: `131`,
    2850: `1764`,
    2851: `1764`,
    2852: `1765`,
    2853: `1765`,
    2854: `1766`,
    2855: `1767`,
    2856: `1768`,
    2857: `1768`,
    2858: `1768`,
    2859: `1769`,
    286: `132`,
    2860: `1769`,
    2861: `1769`,
    2862: `1771`,
    2863: `1772`,
    2864: `1772`,
    2865: `1773`,
    287: `133`,
    288: `133`,
    289: `133`,
    29: `2`,
    290: `134`,
    291: `134`,
    292: `135`,
    293: `135`,
    294: `136`,
    295: `136`,
    296: `137`,
    297: `137`,
    298: `138`,
    299: `138`,
    3: `2`,
    30: `2`,
    300: `139`,
    301: `140`,
    302: `140`,
    303: `141`,
    304: `141`,
    305: `142`,
    306: `142`,
    307: `143`,
    308: `143`,
    309: `144`,
    31: `2`,
    310: `144`,
    311: `145`,
    312: `145`,
    313: `147`,
    314: `147`,
    315: `148`,
    316: `148`,
    317: `148`,
    318: `149`,
    319: `149`,
    32: `2`,
    320: `150`,
    321: `150`,
    322: `150`,
    323: `151`,
    324: `152`,
    325: `152`,
    326: `153`,
    327: `154`,
    328: `155`,
    329: `155`,
    33: `2`,
    330: `156`,
    331: `156`,
    332: `157`,
    333: `157`,
    334: `157`,
    335: `158`,
    336: `159`,
    337: `160`,
    338: `160`,
    339: `161`,
    34: `2`,
    340: `161`,
    341: `162`,
    342: `162`,
    343: `162`,
    344: `163`,
    345: `164`,
    346: `165`,
    347: `165`,
    348: `166`,
    349: `166`,
    35: `2`,
    350: `167`,
    351: `168`,
    352: `168`,
    353: `169`,
    354: `170`,
    355: `171`,
    356: `171`,
    357: `172`,
    358: `173`,
    359: `174`,
    36: `2`,
    360: `174`,
    361: `176`,
    362: `176`,
    363: `177`,
    364: `177`,
    365: `178`,
    366: `179`,
    367: `180`,
    368: `180`,
    369: `181`,
    37: `2`,
    370: `182`,
    371: `183`,
    372: `183`,
    373: `184`,
    374: `185`,
    375: `186`,
    376: `186`,
    377: `187`,
    378: `188`,
    379: `188`,
    38: `2`,
    380: `189`,
    381: `190`,
    382: `190`,
    383: `190`,
    384: `191`,
    385: `192`,
    386: `192`,
    387: `193`,
    388: `194`,
    389: `194`,
    39: `2`,
    390: `195`,
    391: `196`,
    392: `197`,
    393: `197`,
    394: `198`,
    395: `199`,
    396: `199`,
    397: `200`,
    398: `201`,
    399: `202`,
    4: `2`,
    40: `4`,
    400: `202`,
    401: `203`,
    402: `204`,
    403: `205`,
    404: `205`,
    405: `206`,
    406: `207`,
    407: `208`,
    408: `208`,
    409: `209`,
    41: `4`,
    410: `210`,
    411: `210`,
    412: `211`,
    413: `212`,
    414: `213`,
    415: `213`,
    416: `214`,
    417: `214`,
    418: `216`,
    419: `216`,
    42: `5`,
    420: `217`,
    421: `217`,
    422: `218`,
    423: `219`,
    424: `219`,
    425: `220`,
    426: `220`,
    427: `220`,
    428: `221`,
    429: `222`,
    43: `5`,
    430: `223`,
    431: `223`,
    432: `224`,
    433: `224`,
    434: `224`,
    435: `225`,
    436: `226`,
    437: `226`,
    438: `227`,
    439: `228`,
    44: `5`,
    440: `228`,
    441: `228`,
    442: `229`,
    443: `230`,
    444: `231`,
    445: `231`,
    446: `232`,
    447: `233`,
    448: `233`,
    449: `234`,
    45: `6`,
    450: `235`,
    451: `236`,
    452: `237`,
    453: `237`,
    454: `238`,
    455: `239`,
    456: `240`,
    457: `242`,
    458: `242`,
    459: `242`,
    46: `7`,
    460: `244`,
    461: `244`,
    462: `245`,
    463: `245`,
    464: `245`,
    465: `247`,
    466: `247`,
    467: `247`,
    468: `247`,
    469: `247`,
    47: `8`,
    470: `247`,
    471: `248`,
    472: `248`,
    473: `249`,
    474: `250`,
    475: `252`,
    476: `253`,
    477: `255`,
    478: `255`,
    479: `256`,
    48: `9`,
    480: `264`,
    481: `264`,
    482: `265`,
    483: `266`,
    484: `267`,
    485: `275`,
    486: `275`,
    487: `276`,
    488: `276`,
    489: `277`,
    49: `10`,
    490: `278`,
    491: `279`,
    492: `279`,
    493: `280`,
    494: `281`,
    495: `282`,
    496: `285`,
    497: `285`,
    498: `286`,
    499: `286`,
    5: `2`,
    50: `11`,
    500: `286`,
    501: `289`,
    502: `289`,
    503: `290`,
    504: `291`,
    505: `292`,
    506: `295`,
    507: `295`,
    508: `296`,
    509: `297`,
    51: `11`,
    510: `298`,
    511: `301`,
    512: `301`,
    513: `302`,
    514: `303`,
    515: `304`,
    516: `307`,
    517: `307`,
    518: `308`,
    519: `309`,
    52: `12`,
    520: `310`,
    521: `311`,
    522: `311`,
    523: `312`,
    524: `313`,
    525: `314`,
    526: `318`,
    527: `318`,
    528: `320`,
    529: `320`,
    53: `13`,
    530: `321`,
    531: `321`,
    532: `321`,
    533: `322`,
    534: `322`,
    535: `323`,
    536: `324`,
    537: `325`,
    538: `326`,
    539: `326`,
    54: `14`,
    540: `327`,
    541: `328`,
    542: `329`,
    543: `333`,
    544: `335`,
    545: `335`,
    546: `337`,
    547: `337`,
    548: `338`,
    549: `338`,
    55: `14`,
    550: `338`,
    551: `339`,
    552: `339`,
    553: `339`,
    554: `339`,
    555: `339`,
    556: `339`,
    557: `339`,
    558: `339`,
    559: `340`,
    56: `15`,
    560: `340`,
    561: `341`,
    562: `342`,
    563: `342`,
    564: `343`,
    565: `344`,
    566: `344`,
    567: `345`,
    568: `346`,
    569: `348`,
    57: `16`,
    570: `349`,
    571: `349`,
    572: `350`,
    573: `350`,
    574: `350`,
    575: `350`,
    576: `350`,
    577: `350`,
    578: `350`,
    579: `350`,
    58: `17`,
    580: `350`,
    581: `350`,
    582: `351`,
    583: `351`,
    584: `352`,
    585: `353`,
    586: `353`,
    587: `353`,
    588: `354`,
    589: `355`,
    59: `18`,
    590: `356`,
    591: `356`,
    592: `357`,
    593: `358`,
    594: `358`,
    595: `358`,
    596: `359`,
    597: `359`,
    598: `360`,
    599: `360`,
    6: `2`,
    60: `19`,
    600: `361`,
    601: `361`,
    602: `362`,
    603: `362`,
    604: `363`,
    605: `363`,
    606: `364`,
    607: `365`,
    608: `365`,
    609: `366`,
    61: `20`,
    610: `366`,
    611: `367`,
    612: `367`,
    613: `368`,
    614: `368`,
    615: `369`,
    616: `369`,
    617: `370`,
    618: `370`,
    619: `371`,
    62: `20`,
    620: `371`,
    621: `371`,
    622: `373`,
    623: `373`,
    624: `374`,
    625: `382`,
    626: `382`,
    627: `383`,
    628: `384`,
    629: `385`,
    63: `21`,
    630: `393`,
    631: `393`,
    632: `394`,
    633: `394`,
    634: `395`,
    635: `396`,
    636: `397`,
    637: `397`,
    638: `398`,
    639: `399`,
    64: `22`,
    640: `400`,
    641: `403`,
    642: `403`,
    643: `404`,
    644: `404`,
    645: `404`,
    646: `407`,
    647: `407`,
    648: `408`,
    649: `409`,
    65: `24`,
    650: `410`,
    651: `413`,
    652: `413`,
    653: `414`,
    654: `415`,
    655: `416`,
    656: `419`,
    657: `419`,
    658: `420`,
    659: `421`,
    66: `24`,
    660: `422`,
    661: `425`,
    662: `425`,
    663: `426`,
    664: `427`,
    665: `428`,
    666: `429`,
    667: `429`,
    668: `430`,
    669: `431`,
    67: `24`,
    670: `432`,
    671: `436`,
    672: `436`,
    673: `438`,
    674: `438`,
    675: `439`,
    676: `439`,
    677: `439`,
    678: `440`,
    679: `440`,
    68: `24`,
    680: `441`,
    681: `442`,
    682: `443`,
    683: `444`,
    684: `444`,
    685: `445`,
    686: `446`,
    687: `447`,
    688: `451`,
    689: `453`,
    69: `24`,
    690: `453`,
    691: `455`,
    692: `455`,
    693: `456`,
    694: `456`,
    695: `456`,
    696: `457`,
    697: `457`,
    698: `457`,
    699: `457`,
    7: `2`,
    70: `24`,
    700: `457`,
    701: `457`,
    702: `457`,
    703: `457`,
    704: `458`,
    705: `458`,
    706: `459`,
    707: `460`,
    708: `460`,
    709: `461`,
    71: `24`,
    710: `462`,
    711: `462`,
    712: `463`,
    713: `464`,
    714: `466`,
    715: `467`,
    716: `467`,
    717: `468`,
    718: `468`,
    719: `468`,
    72: `24`,
    720: `468`,
    721: `468`,
    722: `468`,
    723: `468`,
    724: `468`,
    725: `468`,
    726: `468`,
    727: `469`,
    728: `469`,
    729: `470`,
    73: `24`,
    730: `471`,
    731: `471`,
    732: `471`,
    733: `472`,
    734: `473`,
    735: `474`,
    736: `474`,
    737: `475`,
    738: `476`,
    739: `476`,
    74: `24`,
    740: `476`,
    741: `477`,
    742: `477`,
    743: `478`,
    744: `478`,
    745: `479`,
    746: `479`,
    747: `480`,
    748: `480`,
    749: `481`,
    75: `24`,
    750: `481`,
    751: `482`,
    752: `483`,
    753: `483`,
    754: `484`,
    755: `484`,
    756: `485`,
    757: `485`,
    758: `486`,
    759: `486`,
    76: `24`,
    760: `487`,
    761: `487`,
    762: `488`,
    763: `488`,
    764: `489`,
    765: `489`,
    766: `489`,
    767: `491`,
    768: `491`,
    769: `492`,
    77: `24`,
    770: `492`,
    771: `492`,
    772: `493`,
    773: `493`,
    774: `494`,
    775: `494`,
    776: `495`,
    777: `495`,
    778: `496`,
    779: `497`,
    78: `24`,
    780: `505`,
    781: `505`,
    782: `506`,
    783: `507`,
    784: `508`,
    785: `508`,
    786: `509`,
    787: `509`,
    788: `510`,
    789: `511`,
    79: `24`,
    790: `512`,
    791: `512`,
    792: `513`,
    793: `513`,
    794: `514`,
    795: `514`,
    796: `515`,
    797: `516`,
    798: `516`,
    799: `517`,
    8: `2`,
    80: `24`,
    800: `517`,
    801: `518`,
    802: `518`,
    803: `518`,
    804: `519`,
    805: `520`,
    806: `520`,
    807: `521`,
    808: `521`,
    809: `521`,
    81: `24`,
    810: `522`,
    811: `523`,
    812: `524`,
    813: `524`,
    814: `525`,
    815: `525`,
    816: `525`,
    817: `526`,
    818: `527`,
    819: `528`,
    82: `24`,
    820: `536`,
    821: `536`,
    822: `537`,
    823: `538`,
    824: `539`,
    825: `542`,
    826: `542`,
    827: `543`,
    828: `543`,
    829: `544`,
    83: `24`,
    830: `545`,
    831: `546`,
    832: `546`,
    833: `547`,
    834: `548`,
    835: `549`,
    836: `552`,
    837: `552`,
    838: `553`,
    839: `553`,
    84: `24`,
    840: `554`,
    841: `554`,
    842: `555`,
    843: `556`,
    844: `556`,
    845: `557`,
    846: `557`,
    847: `558`,
    848: `558`,
    849: `559`,
    85: `24`,
    850: `559`,
    851: `560`,
    852: `560`,
    853: `561`,
    854: `561`,
    855: `561`,
    856: `564`,
    857: `564`,
    858: `565`,
    859: `565`,
    86: `24`,
    860: `565`,
    861: `566`,
    862: `567`,
    863: `567`,
    864: `568`,
    865: `569`,
    866: `570`,
    867: `570`,
    868: `571`,
    869: `572`,
    87: `24`,
    870: `573`,
    871: `573`,
    872: `574`,
    873: `575`,
    874: `576`,
    875: `579`,
    876: `579`,
    877: `580`,
    878: `580`,
    879: `581`,
    88: `24`,
    880: `581`,
    881: `582`,
    882: `583`,
    883: `583`,
    884: `584`,
    885: `584`,
    886: `585`,
    887: `585`,
    888: `586`,
    889: `586`,
    89: `24`,
    890: `587`,
    891: `587`,
    892: `588`,
    893: `588`,
    894: `588`,
    895: `591`,
    896: `591`,
    897: `592`,
    898: `592`,
    899: `592`,
    9: `2`,
    90: `24`,
    900: `593`,
    901: `594`,
    902: `594`,
    903: `595`,
    904: `596`,
    905: `597`,
    906: `597`,
    907: `598`,
    908: `599`,
    909: `600`,
    91: `24`,
    910: `600`,
    911: `601`,
    912: `602`,
    913: `603`,
    914: `606`,
    915: `606`,
    916: `607`,
    917: `607`,
    918: `608`,
    919: `608`,
    92: `24`,
    920: `609`,
    921: `610`,
    922: `610`,
    923: `611`,
    924: `611`,
    925: `612`,
    926: `612`,
    927: `613`,
    928: `613`,
    929: `614`,
    93: `24`,
    930: `614`,
    931: `615`,
    932: `615`,
    933: `615`,
    934: `618`,
    935: `618`,
    936: `619`,
    937: `619`,
    938: `619`,
    939: `620`,
    94: `24`,
    940: `621`,
    941: `622`,
    942: `622`,
    943: `623`,
    944: `623`,
    945: `624`,
    946: `624`,
    947: `624`,
    948: `625`,
    949: `626`,
    95: `24`,
    950: `627`,
    951: `627`,
    952: `628`,
    953: `628`,
    954: `629`,
    955: `629`,
    956: `629`,
    957: `630`,
    958: `631`,
    959: `632`,
    96: `24`,
    960: `632`,
    961: `633`,
    962: `633`,
    963: `633`,
    964: `633`,
    965: `633`,
    966: `633`,
    967: `634`,
    968: `634`,
    969: `635`,
    97: `24`,
    970: `636`,
    971: `637`,
    972: `637`,
    973: `638`,
    974: `639`,
    975: `640`,
    976: `640`,
    977: `641`,
    978: `642`,
    979: `643`,
    98: `24`,
    980: `645`,
    981: `646`,
    982: `646`,
    983: `647`,
    984: `647`,
    985: `647`,
    986: `647`,
    987: `647`,
    988: `647`,
    989: `647`,
    99: `24`,
    990: `647`,
    991: `647`,
    992: `647`,
    993: `648`,
    994: `648`,
    995: `649`,
    996: `650`,
    997: `650`,
    998: `650`,
    999: `651`
    },
  appClear: `CA==`,
  appClearMap: {
    },
  companionInfo: null,
  extraPages: 1,
  stateKeys: 3,
  stateSize: 266,
  unsupported: [],
  version: 13,
  warnings: []
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"address payable","name":"elem2","type":"address"},{"internalType":"address payable","name":"elem3","type":"address"}],"internalType":"struct T9","name":"v13715","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"address payable","name":"elem2","type":"address"},{"internalType":"address payable","name":"elem3","type":"address"}],"indexed":false,"internalType":"struct T9","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T11","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T11","name":"_a","type":"tuple"}],"name":"_reach_e3","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_buyer_api_purchase_bronze0_177","type":"bool"},{"internalType":"bool","name":"_buyer_api_purchase_gold0_177","type":"bool"},{"internalType":"bool","name":"_buyer_api_purchase_silver0_177","type":"bool"},{"components":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"internalType":"struct T0","name":"elem0","type":"tuple"}],"internalType":"struct T2","name":"_controller_api_restock0_177","type":"tuple"},{"components":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"internalType":"struct T0","name":"elem0","type":"tuple"}],"internalType":"struct T2","name":"_controller_api_set_prices0_177","type":"tuple"},{"internalType":"bool","name":"_controller_api_terminate0_177","type":"bool"},{"internalType":"bool","name":"_controller_api_toggle_pause0_177","type":"bool"}],"internalType":"struct T3","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T4","name":"_a","type":"tuple"}],"name":"_reach_e4","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v5102","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v5857","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v6469","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v7081","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v7647","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v8204","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v8756","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"v1","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"v2","type":"uint256"}],"name":"price_change","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes6","name":"v0","type":"bytes6"},{"indexed":false,"internalType":"address payable","name":"v1","type":"address"}],"name":"purchase","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"v1","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"v2","type":"uint256"}],"name":"restock","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T11","name":"v13718","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T11","name":"v13721","type":"tuple"}],"name":"_reachp_3","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_buyer_api_purchase_bronze0_177","type":"bool"},{"internalType":"bool","name":"_buyer_api_purchase_gold0_177","type":"bool"},{"internalType":"bool","name":"_buyer_api_purchase_silver0_177","type":"bool"},{"components":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"internalType":"struct T0","name":"elem0","type":"tuple"}],"internalType":"struct T2","name":"_controller_api_restock0_177","type":"tuple"},{"components":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"internalType":"struct T0","name":"elem0","type":"tuple"}],"internalType":"struct T2","name":"_controller_api_set_prices0_177","type":"tuple"},{"internalType":"bool","name":"_controller_api_terminate0_177","type":"bool"},{"internalType":"bool","name":"_controller_api_toggle_pause0_177","type":"bool"}],"internalType":"struct T3","name":"elem1","type":"tuple"}],"internalType":"struct T4","name":"v13724","type":"tuple"}],"name":"_reachp_4","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"buyer_api_purchase_bronze","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"buyer_api_purchase_gold","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"buyer_api_purchase_silver","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"coin_prices","outputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"internalType":"struct T0","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"coin_supply","outputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"internalType":"struct T0","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"internalType":"struct T0","name":"v13698","type":"tuple"}],"name":"controller_api_restock","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"internalType":"struct T0","name":"v13704","type":"tuple"}],"name":"controller_api_set_prices","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"controller_api_terminate","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"controller_api_toggle_pause","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"is_paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x6080601f6200428038819003918201601f19168301916001600160401b0383118484101762000601578084926080946040528339810103126200080c5762000082606060405192620000518462000811565b80518452620000636020820162000849565b6020850152620000766040820162000849565b60408501520162000849565b60608201524360035560405161016081016001600160401b03811182821017620006015760009161014091604052828152826020820152826040820152826060820152620000cf6200085e565b6080820152620000de6200085e565b60a08201528260c08201528260e082015282610100820152826101208201520152604051906200010e8262000811565b620001186200085e565b825260208201620001286200087f565b8152620001346200087f565b6040840152620001436200087f565b606084015260ff60045416620007f3577f445f7d1d3c7ecf7a61d6d64c4194290a54beada7275d0418d50b9c355c8b665360a060405133815284516020820152600180831b036020860151166040820152600180831b036040860151166060820152600180831b036060860151166080820152a181518015908115620007e6575b5015620007cd576000835152600060208451015260006040845101528251815152825160208251015282516040825101525180516040602082015191015115156040519162000213836200082d565b60008352602083015260408201526200022b6200087f565b9160005b6003811062000793575050815280604084015260208101516040602082015191015115156040519162000262836200082d565b60008352602083015260408201526200027a6200087f565b9160005b60038110620007595750506020820152606083015260018060a01b0360408201511660018060a01b0360208301511614600014620007515760005b156200073857606081015160208201516001600160a01b039182169116810362000714575060005b15620006fb5734620006e257602081015160408201516001600160a01b039081169116818103620006be575060005b15620006b55760608201516001600160a01b031603620006ad5760005b1562000694576040519160a08301916001600160401b038311848410176200060157606092604052600084526000602085015260006040850152600083850152620003776200087f565b60808501523384526020818101516001600160a01b0390811682870152604080840151821681880152928501511684860152919092015180830151918201519183015192519092909190151590620003cf836200082d565b6000835260208301526040820152620003e76200087f565b9160005b60038110620006445750506040820152608082015260016000554360015560806040519160018060a01b03815116602084015260018060a01b03602082015116604084015260018060a01b03604082015116606084015260018060a01b0360608201511682840152015160a082016000905b6003821062000617576101a08452836101c081016001600160401b03811182821017620006015760405280516001600160401b0381116200060157600254600181811c91168015620005f6575b6020821014620005e057601f811162000576575b50602091601f82116001146200050c5791819260009262000500575b50508160011b916000199060031b1c1916176002555b6040516139a09081620008e08239f35b015190508280620004da565b601f19821692600260005260206000209160005b8581106200055d5750836001951062000543575b505050811b01600255620004f0565b015160001960f88460031b161c1916905582808062000534565b9192602060018192868501518155019401920162000520565b60026000527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace601f830160051c81019160208410620005d5575b601f0160051c01905b818110620005c85750620004be565b60008155600101620005b9565b9091508190620005b0565b634e487b7160e01b600052602260045260246000fd5b90607f1690620004aa565b634e487b7160e01b600052604160045260246000fd5b6020606060019260408651805183528481015185840152015115156040820152019301910190916200045d565b620006508183620008b7565b516200065d8286620008b7565b526200066a8185620008b7565b5060001981146200067e57600101620003eb565b634e487b7160e01b600052601160045260246000fd5b60405163100960cb60e01b815260126004820152602490fd5b60016200032d565b5060006200032d565b60608301516001600160a01b031603620006da57600062000310565b600162000310565b60405163100960cb60e01b815260116004820152602490fd5b60405163100960cb60e01b815260106004820152602490fd5b60408201516001600160a01b03160362000730576000620002e1565b6001620002e1565b60405163100960cb60e01b8152600f6004820152602490fd5b6001620002b9565b620007658183620008b7565b51620007728286620008b7565b526200077f8185620008b7565b5060001981146200067e576001016200027e565b6200079f8183620008b7565b51620007ac8286620008b7565b52620007b98185620008b7565b5060001981146200067e576001016200022f565b60405163100960cb60e01b8152600e6004820152602490fd5b90506001541438620001c4565b60405163100960cb60e01b8152600d6004820152602490fd5b600080fd5b608081019081106001600160401b038211176200060157604052565b606081019081106001600160401b038211176200060157604052565b51906001600160a01b03821682036200080c57565b604051906200086d826200082d565b60006040838281528260208201520152565b604051906200088e826200082d565b8160005b606081106200089f575050565b602090620008ac6200085e565b818401520162000892565b906003811015620008c95760051b0190565b634e487b7160e01b600052603260045260246000fdfe60806040526004361015610018575b361561001657005b005b60003560e01c80631e93b0f11461015857806341712c0a1461014f578063573b851014610146578063627815801461013d5780636bb2590614610134578063832307571461012b5780638900b867146101225780638c300455146101195780638e19e40d146101105780639d4f8aa914610107578063ab53f2c6146100fe578063abc8014a146100f5578063aed712a0146100ec578063c2e3cb94146100e3578063cd419138146100da5763e091078a0361000e576100d5610a26565b61000e565b506100d56109ee565b506100d56109ae565b506100d5610964565b506100d5610913565b506100d561089e565b506100d5610804565b506100d56107b8565b506100d5610712565b506100d5610635565b506100d5610616565b506100d56105d8565b506100d561057f565b506100d56103ed565b506100d561018d565b5034610177576000366003190112610177576020600354604051908152f35b600080fd5b602090600319011261017757600490565b506101aa61019a3661017c565b6101a2610ce7565b503690610d67565b6101b2611f92565b6103a96000916101c56003845414610fea565b6101cd610b92565b906103826101e5602093848082518301019101611fea565b926102016101fc6101f860045460ff1690565b1590565b61100a565b61024a6040977fd8b4bef0baf1b43e1c773ecc562857f82f7aa078ea677386f72396872c0e8515895180610236843383610f16565b0390a15180159081156103e1575b5061102a565b610254341561104a565b60018060a01b0392610272338561026b8851610dbd565b161461106a565b868080806102886102838a51610dbd565b610dbd565b60e08a0151908282156103d8575bf1156103cb575b86815261037d6102e460c0870151610100880151906102df6102c58d88850151940151151590565b6102cd610c3b565b938d8552888501528d84019015159052565b6122c0565b8383019081526103136102f985890151610dbd565b6103038951610dbd565b90886101208b01519216906121bd565b610354610321825160200190565b51518b6101408a019182519003950194855261033f8c8a0151610dbd565b8861034a8b51610dbd565b92519216906121bd565b51915192808301518a8282015191015115159161036f610c3b565b958652850152151589840152565b612324565b506103906060830151610dbd565b9061016061039e8451610dbd565b9301519216906121bd565b80556103b56000600155565b6103bd6120d8565b5160008152602090f35b0390f35b6103d36120cb565b61029d565b506108fc610296565b90506001541438610244565b506105676103fd61019a3661017c565b6080610407610d85565b9161041660016000541461108a565b61048f610433610424610b92565b60208082518301019101610e7e565b9161044b6104466101f860045460ff1690565b6110aa565b7fcf0e8bec53cd91fa87ecf8f6f405ac75914a22acdb92a3553ee5c294fee815966040518061047b843383610f16565b0390a1518015908115610573575b506110ca565b61049934156110ea565b6104b53360018060a01b036104ae8451610dbd565b161461110a565b629896808351526301312d006020845101526301c9c3806040845101526104da610f62565b926104ee6104e88351610dbd565b85610fdb565b6105076104fe6020840151610dbd565b60208601610fdb565b6105206105176040840151610dbd565b60408601610fdb565b6105396105306060840151610dbd565b60608601610fdb565b5182840152600060a0840152600060c08401524360e084015201516101008201526000610120820152611c83565b60405160008152602090f35b90506001541438610489565b5060003660031901126101775760206060610598610ce7565b6105cc816105a4613915565b85810190600282515251151585825101526105bd613915565b90600082525186820152612848565b01511515604051908152f35b50600036600319011261017757602060406105f1610ce7565b6105cc816105fd613915565b85810190600182515251151585825101526105bd613915565b5034610177576000366003190112610177576020600154604051908152f35b506101a03660031901126101775761064b610ce7565b6040519061065882610adb565b60043582526101803660231901126101775761056791610676610c48565b61067e61241d565b815261068861242c565b6020820152610695612439565b60408201526106a2612446565b60608201526106b0366124a1565b60808201526106be366124df565b60a08201526106cb612453565b60c08201526106d8612461565b60e08201526020820152612848565b6040809180518452602081015160208501520151910152565b60608101929161071091906106e7565b565b50346101775760003660031901126101775761072c610cc8565b506103c760a061073a610ce7565b6000546005811015610784576003610752911461114a565b61018061076f610760610b92565b60208082518301019101611fea565b0151828201525b015160405191829182610700565b6005610790911461112a565b6102206107ad61079e610b92565b602080825183010191016125d1565b015182820152610776565b506000366003190112610177576020806107d0610ce7565b6105cc816107dc613915565b84810190600082515251151585825101526107f5613915565b90600082525185820152612848565b5034610177576000366003190112610177576103c7610861610140610827610ce7565b600054600581101561087357600361083f911461118a565b61085261085960a0610852610760610b92565b0151151590565b151582840152565b60405190151581529081906020820190565b600561087f911461116a565b61089960a061088f61079e610b92565b0151151582840152565b610852565b5034610177576000806003193601126109105780546108bb610b92565b906040519283918252602090604082840152835191826040850152815b8381106108f957505060608094508284010152601f80199101168101030190f35b8086018201518782016060015286945081016108d8565b80fd5b50600036600319011261017757602061010061092d610ce7565b6105cc81610939613915565b85810190600582515251151560c0825101526105bd613915565b606090600319011261017757600490565b50602060c061098a6105cc61097836610953565b610980610ce7565b928391369061246f565b610992613931565b90815152858101906003825152516080825101526105bd613915565b5060003660031901126101775760206101206109c8610ce7565b6105cc816109d4613915565b85810190600682515251151560e0825101526105bd613915565b50602060e0610a026105cc61097836610953565b610a0a613931565b908151528581019060048251525160a0825101526105bd613915565b503461017757600036600319011261017757610a40610cc8565b506103c76080610a4e610ce7565b6000546005811015610a72576003610a6691146111ca565b8161076f610760610b92565b6005610a7e91146111aa565b816107ad61079e610b92565b90600182811c92168015610aba575b6020831014610aa457565b634e487b7160e01b600052602260045260246000fd5b91607f1691610a99565b50634e487b7160e01b600052604160045260246000fd5b604081019081106001600160401b03821117610af657604052565b610afe610ac4565b604052565b606081019081106001600160401b03821117610af657604052565b602081019081106001600160401b03821117610af657604052565b608081019081106001600160401b03821117610af657604052565b60a081019081106001600160401b03821117610af657604052565b601f909101601f19168101906001600160401b03821190821017610af657604052565b6040519060008260025491610ba683610a8a565b808352600193808516908115610c1a5750600114610bcc575b5061071092500383610b6f565b6002600090815260008051602061395483398151915294602093509091905b818310610c02575050610710935082010138610bbf565b85548884018501529485019487945091830191610beb565b905061071094506020925060ff191682840152151560051b82010138610bbf565b6040519061071082610b03565b6040519061010082016001600160401b03811183821017610af657604052565b604051906102a082016001600160401b03811183821017610af657604052565b604051906101a082016001600160401b03811183821017610af657604052565b6040519061028082016001600160401b03811183821017610af657604052565b60405190610cd582610b03565b60006040838281528260208201520152565b6040519061016082016001600160401b03811183821017610d5a575b60405281610140600091828152826020820152826040820152826060820152610d2a610cc8565b6080820152610d37610cc8565b60a08201528260c08201528260e082015282610100820152826101208201520152565b610d62610ac4565b610d03565b919082602091031261017757604051610d7f81610b1e565b91358252565b60405190602082016001600160401b03811183821017610db0575b60405281610dac610cc8565b9052565b610db8610ac4565b610da0565b6001600160a01b031690565b51906001600160a01b038216820361017757565b8015150361017757565b519061071082610ddd565b919082606091031261017757604051610e0a81610b03565b60408082948051845260208101516020850152015191610e2983610ddd565b0152565b81601f820112156101775760405191610e4583610b03565b829061012083019281841161017757915b838310610e64575050505090565b6020606091610e738486610df2565b815201920191610e56565b906101a0828203126101775760405191610ef4919060809060a085016001600160401b03811186821017610efc575b604052610eb981610dc9565b8552610ec760208201610dc9565b6020860152610ed860408201610dc9565b6040860152610ee960608201610dc9565b606086015201610e2d565b608082015290565b610f04610ac4565b610ead565b6001600160a01b03169052565b6001600160a01b0390911681529051602082015260400190565b60405190610f3d82610b03565b8160005b60608110610f4d575050565b602090610f58610cc8565b8184015201610f41565b6040519061014082016001600160401b03811183821017610fce575b60405281610120600091828152826020820152826040820152826060820152610fa5610cc8565b60808201528260a08201528260c08201528260e0820152610fc4610f30565b6101008201520152565b610fd6610ac4565b610f7e565b6001600160a01b039091169052565b15610ff157565b60405163100960cb60e01b815260186004820152602490fd5b1561101157565b60405163100960cb60e01b815260196004820152602490fd5b1561103157565b60405163100960cb60e01b8152601a6004820152602490fd5b1561105157565b60405163100960cb60e01b8152601b6004820152602490fd5b1561107157565b60405163100960cb60e01b8152601c6004820152602490fd5b1561109157565b60405163100960cb60e01b815260136004820152602490fd5b156110b157565b60405163100960cb60e01b815260146004820152602490fd5b156110d157565b60405163100960cb60e01b815260156004820152602490fd5b156110f157565b60405163100960cb60e01b815260166004820152602490fd5b1561111157565b60405163100960cb60e01b815260176004820152602490fd5b1561113157565b60405163100960cb60e01b8152600a6004820152602490fd5b1561115157565b60405163100960cb60e01b815260096004820152602490fd5b1561117157565b60405163100960cb60e01b8152600c6004820152602490fd5b1561119157565b60405163100960cb60e01b8152600b6004820152602490fd5b156111b157565b60405163100960cb60e01b815260086004820152602490fd5b156111d157565b60405163100960cb60e01b815260076004820152602490fd5b156111f157565b60405163100960cb60e01b815260216004820152602490fd5b1561121157565b60405163100960cb60e01b815260226004820152602490fd5b1561123157565b60405163100960cb60e01b815260236004820152602490fd5b1561125157565b60405163100960cb60e01b815260646004820152602490fd5b1561127157565b60405163100960cb60e01b815260666004820152602490fd5b1561129157565b60405163100960cb60e01b815260686004820152602490fd5b156112b157565b60405163100960cb60e01b8152606a6004820152602490fd5b156112d157565b60405163100960cb60e01b8152606c6004820152602490fd5b156112f157565b60405163100960cb60e01b8152605b6004820152602490fd5b1561131157565b60405163100960cb60e01b8152605d6004820152602490fd5b1561133157565b60405163100960cb60e01b8152605f6004820152602490fd5b1561135157565b60405163100960cb60e01b815260616004820152602490fd5b1561137157565b60405163100960cb60e01b815260636004820152602490fd5b1561139157565b60405163100960cb60e01b815260526004820152602490fd5b156113b157565b60405163100960cb60e01b815260546004820152602490fd5b156113d157565b60405163100960cb60e01b815260566004820152602490fd5b156113f157565b60405163100960cb60e01b815260586004820152602490fd5b1561141157565b60405163100960cb60e01b8152605a6004820152602490fd5b1561143157565b60405163100960cb60e01b815260486004820152602490fd5b1561145157565b60405163100960cb60e01b815260496004820152602490fd5b1561147157565b60405163100960cb60e01b8152604b6004820152602490fd5b1561149157565b60405163100960cb60e01b8152604d6004820152602490fd5b156114b157565b60405163100960cb60e01b8152604f6004820152602490fd5b156114d157565b60405163100960cb60e01b815260516004820152602490fd5b156114f157565b60405163100960cb60e01b8152603c6004820152602490fd5b1561151157565b60405163100960cb60e01b8152603d6004820152602490fd5b1561153157565b60405163100960cb60e01b8152603f6004820152602490fd5b1561155157565b60405163100960cb60e01b815260416004820152602490fd5b1561157157565b60405163100960cb60e01b815260436004820152602490fd5b1561159157565b60405163100960cb60e01b815260456004820152602490fd5b156115b157565b60405163100960cb60e01b815260306004820152602490fd5b156115d157565b60405163100960cb60e01b815260316004820152602490fd5b156115f157565b60405163100960cb60e01b815260336004820152602490fd5b1561161157565b60405163100960cb60e01b815260356004820152602490fd5b1561163157565b60405163100960cb60e01b815260376004820152602490fd5b1561165157565b60405163100960cb60e01b815260396004820152602490fd5b1561167157565b602460405163100960cb60e01b8152816004820152fd5b1561168f57565b60405163100960cb60e01b815260256004820152602490fd5b156116af57565b60405163100960cb60e01b815260276004820152602490fd5b156116cf57565b60405163100960cb60e01b815260296004820152602490fd5b156116ef57565b60405163100960cb60e01b8152602b6004820152602490fd5b1561170f57565b60405163100960cb60e01b8152602d6004820152602490fd5b6040519061173582610adb565b8161173e610cc8565b8152602061174a610cc8565b910152565b9060038110156117605760051b0190565b634e487b7160e01b600052603260045260246000fd5b61177e610c68565b90600080835280602084015280604084015280606084015261179e610cc8565b60808401528060a08401528060c08401526117b7610f30565b60e08401528061010084015280610120840152806101408401526117d9610cc8565b610160840152806101808401526117ee610cc8565b6101a0840152806101c0840152611803610cc8565b6101e084015280610200840152611818610cc8565b6102208401528061024084015280610260840152610280830152565b60408091805184526020810151602085015201511515910152565b906000905b6003821061186157505050565b60206060826118736001948751611834565b01930191019091611854565b9190916104c06104e0820193611896838251610f09565b6118a860208201516020850190610f09565b6118ba60408201516040850190610f09565b6118cc60608201516060850190610f09565b6118de608082015160808501906106e7565b60a0810151151560e084015260c081015190611901610100928386019015159052565b60e081015191611917610120938487019061184f565b810151916102409283860152810151611937610260918287019015159052565b6101408201519261194f610280948588019015159052565b6119636101608401516102a0880190611834565b6101808301516103008701526119836101a0840151610320880190611834565b6101c08301516103808701526119a36101e08401516103a0880190611834565b6102008301516104008701526119c36102208401516104208801906106e7565b8201516104808601528101516104a08501520151910152565b8181106119e7575050565b600081556001016119dc565b90601f8211611a00575050565b6107109160026000526020600020906020601f840160051c83019310611a2e575b601f0160051c01906119dc565b9091508190611a21565b80519091906001600160401b038111611b0e575b611a6081611a5b600254610a8a565b6119f3565b602080601f8311600114611a9c5750819293600092611a91575b50508160011b916000199060031b1c191617600255565b015190503880611a7a565b6002600052601f19831694909190600080516020613954833981519152926000905b878210611af6575050836001959610611add575b505050811b01600255565b015160001960f88460031b161c19169055388080611ad2565b80600185968294968601518155019501930190611abe565b611b16610ac4565b611a4c565b604051906101a082016001600160401b03811183821017611ba5575b604052816000808252806020830152806040830152806060830152611b5a610cc8565b60808301528060a0830152611b6d610f30565b60c08301528060e0830152611b80610cc8565b610100830152806101208301528061014083015261016082015261018061174a610cc8565b611bad610ac4565b611b37565b61071090929192610300610180610360830195611bd0848251610f09565b611be260208201516020860190610f09565b611bf460408201516040860190610f09565b611c0660608201516060860190610f09565b611c18608082015160808601906106e7565b60a0810151151560e0850152611c5560c0820151611c3c610100918288019061184f565b60e0830151610220870152820151610240860190611834565b6101208101516102a08501526101408101516102c08501526101608101516102e085015201519101906106e7565b611c8b611728565b60c082015115611ddb57611dd661071092611dc892611d976101009283810190602082515151940193845152611cc2825160200190565b515184516020015281516040015151604085510152611cdf611b1b565b94611cf3611ced8351610dbd565b87610fdb565b611d0c611d036020840151610dbd565b60208801610fdb565b611d25611d1c6040840151610dbd565b60408801610fdb565b611d3e611d356060840151610dbd565b60608801610fdb565b60808201516080870152611d61611d5860a0840151151590565b151560a0880152565b825160c08701526101209182015160e0870152825151908601528151515190850152805160200151516101408501525160400190565b515161016083015251610180820152611db06003600055565b611db943600155565b60405192839160208301611bb2565b03601f198101835282610b6f565b611a38565b611dd6611dc89160406107109461010092611f3184830180515151835152611e04815160200190565b5151835160200152805160400151518584510152611edd611e23611776565b96611e37611e318751610dbd565b89610fdb565b611e50611e476020880151610dbd565b60208a01610fdb565b611e67611e5f88880151610dbd565b888a01610fdb565b611e80611e776060880151610dbd565b60608a01610fdb565b611ed76080870196875160808b015260a0810192611eaa611ea18551151590565b151560a08d0152565b600060c08c0152855160e08c015261012091820151908b0152825115611f8a576000905b8a019015159052565b51151590565b15611f8057611ef260005b1515610140880152565b805151610160870152805151516101808701528051602001516101a0870152805160200151516101c08701528051604001516101e08701525160400190565b515161020085015251610220840152805151610240840152602081510151610260840152510151610280820152611f686005600055565b611f7143600155565b6040519283916020830161187f565b611ef26001611ee8565b600190611ece565b60405190611f9f82610b03565b6000604083828152611faf610f30565b60208201520152565b919082606091031261017757604051611fd081610b03565b604080829480518452602081015160208501520151910152565b9061036082820312610177576120c290610300612005610c88565b9361200f81610dc9565b855261201d60208201610dc9565b602086015261202e60408201610dc9565b604086015261203f60608201610dc9565b60608601526120518360808301611fb8565b608086015261206260e08201610de7565b60a086015261010061207684828401610e2d565b60c087015261022082015160e0870152612094846102408401610df2565b908601526102a08101516101208601526102c08101516101408601526102e081015161016086015201611fb8565b61018082015290565b506040513d6000823e3d90fd5b6120e3600254610a8a565b806120eb5750565b601f81116001146120fe57506000600255565b600260005261214390601f0160051c600080516020613954833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf6119dc565b6000602081208160025555565b600080916121b6938260405191602083019263a9059cbb60e01b845260018060a01b038092166024820152600160448201526044815261218f81610b39565b5193165af16121a661219f6121fb565b8092612260565b5060208082518301019101612248565b1561017757565b600091906121b693838093604051602081019363a9059cbb60e01b855260018060a01b03809316602483015260448201526044815261218f81610b39565b3d15612243573d906001600160401b038211612236575b6040519161222a601f8201601f191660200184610b6f565b82523d6000602084013e565b61223e610ac4565b612212565b606090565b90816020910312610177575161225d81610ddd565b90565b156122685790565b80511561227757805190602001fd5b60405163100960cb60e01b815260026004820152602490fd5b156122985790565b8051156122a757805190602001fd5b60405163100960cb60e01b815260016004820152602490fd5b91906122ca610f30565b926000805b600381106122de575050508252565b6122e8818461174f565b516122f3828861174f565b526122fe818761174f565b506000198114612310576001016122cf565b634e487b7160e01b82526011600452602482fd5b919061232e610f30565b926000805b60038110612345575050506020830152565b61234f818461174f565b5161235a828861174f565b52612365818761174f565b50600019811461231057600101612333565b9190612381610f30565b926000805b60038110612398575050506020830152565b6123a2818461174f565b516123ad828861174f565b526123b8818761174f565b50600019811461231057600101612386565b91906123d4610f30565b926000805b600381106123eb575050506040830152565b6123f5818461174f565b51612400828861174f565b5261240b818761174f565b506000198114612310576001016123d9565b60243590600782101561017757565b6044359061071082610ddd565b6064359061071082610ddd565b6084359061071082610ddd565b610164359061071082610ddd565b610184359061071082610ddd565b91908260609103126101775760405161248781610b03565b604080829480358452602081013560208501520135910152565b60609060a319011261017757604051906124ba82610b1e565b604051826124c782610b03565b60a435825260c435602083015260e435604083015252565b60609061010319011261017757604051906124f982610b1e565b6040518261250682610b03565b61010435825261012435602083015261014435604083015252565b612529610ca8565b9060008083528060208401528060408401528060608401528060808401528060a08401528060c08401528060e08401528061010084015280610120840152806101408401528061016084015261257d610d85565b610180840152806101a0840152612592610f30565b6101c0840152806101e08401526125a7610f30565b6102008401526102208301526125bb610f30565b6102408301526125c9610d85565b610260830152565b906104e082820312610177576104c06125e8610c68565b926125f281610dc9565b845261260060208201610dc9565b602085015261261160408201610dc9565b604085015261262260608201610dc9565b60608501526126348360808301611fb8565b608085015261264560e08201610de7565b60a0850152610100612658818301610de7565b60c08601526101209061266d85838501610e2d565b60e08701526102409081840151908701526102609161268d838501610de7565b90870152612713610280956126a3878601610de7565b6101408901526126b7816102a08701610df2565b6101608901526103008501516101808901526126d7816103208701610df2565b6101a08901526103808501516101c08901526126f7816103a08701610df2565b6101e08901526104008501516102008901526104208501611fb8565b610220870152610480830151908601526104a08201519085015201519082015290565b6007111561274057565b634e487b7160e01b600052602160045260246000fd5b9061071091516106e7565b9092916020906101c083019460018060a01b0316835280518284015201519081519160078310156127405760e06101a0916107109460408501526127ae6020820151606086019015159052565b6040810151151560808501526060810151151560a08501526127d8608082015160c0860190612756565b6127eb60a0820151610120860190612756565b60c0810151151561018085015201511515910152565b5160078110156127405790565b6040919493926060820195825260208201520152565b6001600160d01b031990911681526001600160a01b03909116602082015260400190565b612850612521565b61285e6005600054146111ea565b602061287961286b610b92565b8280825183010191016125d1565b9261289161288c6101f860045460ff1690565b61120a565b7f640ca39c61a70e318508627a1982f0bca21418af1fc8aeb9ec35912d33196e6a604051806128c1843383612761565b0390a16128d981518015908115613800575b5061122a565b016128e48151612801565b6128ed81612736565b612b55575090612909612904610140830151151590565b61166a565b61018081019161291d600184511015611688565b6101009161293b8382015161024083019081510184525134146116a8565b602081019461295b6129566129508851610dbd565b3361380c565b6116c8565b6040820161297461296f6129508351610dbd565b6116e8565b606083019161298e6129896129508551610dbd565b611708565b60208501966000885260008080806129a96102838a51610dbd565b8a5190828215612b4c575bf115612b3f575b60001990510194604081019586523389516129d590610dbd565b906129df91612150565b6060016129f4816562726f6e7a6560d01b9052565b516001600160d01b031916604051809133612a0f9183612824565b0360008051602061397483398151915291a1604051600181527f162ccc4066f95ca482153be982549ff54cccb57d43c69096d5db877dccf75dbd90602090a1602001612a5b9060019052565b612a63610f62565b968351612a6f90610dbd565b612a799089610fdb565b51612a8390610dbd565b612a909060208901610fdb565b51612a9a90610dbd565b612aa79060408801610fdb565b51612ab190610dbd565b612abe9060608701610fdb565b6080818101519086015260a08101511515151560a086015260c08101511515151560c08601524360e086015260e0810151915190610160015160208101519060400151612b0a90151590565b90612b13610c3b565b928352602083015215156040820152612b2b916122c0565b908301525161012082015261071090611c83565b612b476120cb565b6129bb565b506108fc6129b4565b6001612b618251612801565b612b6a81612736565b03612dd15750612b86612b81610140840151151590565b6115aa565b610200820191612b9a6001845110156115ca565b61010081015192612bbd61028083019485510194608085019586525134146115ea565b6020820194612bd7612bd26129508851610dbd565b61160a565b6040830190612bf1612bec6129508451610dbd565b61162a565b6060840192612c0b612c066129508651610dbd565b61164a565b600080808060a08a019a818c52612c256102838b51610dbd565b905190828215612dc8575bf115612dbb575b6000199051019460c08101958652338451612c5190610dbd565b90612c5b91612150565b60e001612c6e816319dbdb1960e21b9052565b516001600160d01b031916604051809133612c899183612824565b0360008051602061397483398151915291a1604051600181527f7fff8c7ffeeb0e00a33c4f9286ceb020ba59ee5fecbae8dd5c10fd1ccd39a28690602090a1604001612cd59060019052565b612cdd610f62565b958351612ce990610dbd565b612cf39088610fdb565b51612cfd90610dbd565b612d0a9060208801610fdb565b51612d1490610dbd565b612d219060408701610fdb565b51612d2b90610dbd565b612d389060608601610fdb565b6080818101519085015260a08101511515151560a085015260c08101511515151560c08501524360e085015260e08101519151906101e0015160208101519060400151612d8490151590565b90612d8d610c3b565b928352602083015215156040820152612da5916123ca565b6101008301525161012082015261071090611c83565b612dc36120cb565b612c37565b506108fc612c30565b6002612de08295949551612801565b612de981612736565b0361305757506101209061302e84612e10612e0b610140610710980151151590565b6114ea565b612e2260016101c0830151101561150a565b612e4261010082015161026083019081510161010086015251341461152a565b6020810194612e5c612e576129508851610dbd565b61154a565b612e74612e6f6129506040850151610dbd565b61156a565b612e8c612e876129506060850151610dbd565b61158a565b6000858501526000808080612ea46102838751610dbd565b6101008901519082821561304e575bf115613041575b612f6c60606000196101c085015101926101408701938452612ee833612ee36040880151610dbd565b612150565b600080516020613974833981519152612f30612f226101608a01612f14816539b4b63b32b960d11b9052565b516001600160d01b03191690565b604051918291339083612824565b0390a1604051600181527f4c1bddba71ea0be6e5266b5669ddd4a894f5c7e4dce30b1b7da4b5f321309c929080602081015b0390a10160019052565b612f94611d03612f7a610f62565b97612f8e612f888651610dbd565b8a610fdb565b51610dbd565b612fa4611d1c6040840151610dbd565b612fb4611d356060840151610dbd565b60808201516080870152612fce611d5860a0840151151590565b612fe7612fde60c0840151151590565b151560c0880152565b4360e08701526130296101a060e0840151925193015161300f60406020830151920151151590565b90613018610c3b565b948552602085015215156040840152565b612377565b6101008401520151610120820152611c83565b6130496120cb565b612eba565b506108fc612eb3565b60036130668295949551612801565b61306f81612736565b0361337c5760809051015161018080830191825261309a6130936102838651610dbd565b331461142a565b81515180516104b01061337557610258602082015111155b1561336a5760c860406130c8920151111561144a565b6130d2341561146a565b8301518151515101806101a084015260e0840151906101608501516020810151906040015161310090151590565b90613109610c3b565b928352602083015215156040820152613121916122c0565b936101c083019485526020840194855161313a90610dbd565b835151516131489133613867565b6131519061148a565b5160208101805151845151602001510190816101e0870152516020810151906040015115159061317f610c3b565b92835260208301521515604082015261319791612377565b906102008401918252604085019182516131b090610dbd565b845151602001516131c19133613867565b6131ca906114aa565b51604081018051518551516040015101908161022088015251602081015190604001511515906131f8610c3b565b928352602083015215156040820152613210916123ca565b93610240019384526060850192835161322890610dbd565b905151604001516132399133613867565b613242906114ca565b83518051519060208101515190604001515191604051928392613265928461280e565b037f37fcdf51404943ba64664e05b93d83f80292fdf04381d01241fdbfe57e9d6be391a1604051600181527f97c3e1d871d69804ec1af440e92af3b0fecb27122fe8dd1a6c599b0e8aedd24f90602090a160c0016132c39060019052565b6132cb610f62565b9484516132d790610dbd565b6132e19087610fdb565b516132eb90610dbd565b6132f89060208701610fdb565b5161330290610dbd565b61330f9060408601610fdb565b5161331990610dbd565b6133269060608501610fdb565b6080828101519084015260a08083015115159084015260c0808301511515908401524360e08401525161010080840191909152015161012082015261071090611c83565b506130c8600061144a565b60006130b2565b929190600461338b8551612801565b61339481612736565b0361352c5761026060a06107109551015191019081526133c16133ba6102838451610dbd565b331461138a565b6133cb34156113aa565b6134d26134c960208401946133eb6133e66129508851610dbd565b6113ca565b612f8e611d1c6040870161340a6134056129508351610dbd565b6113ea565b61349e60e060608a01956134296134246129508951610dbd565b61140a565b7fb382548241998489affa3f494b50b2793e7b4982ed2256fd670e6b3758944baa8a51518051613468604060208401519301516040519384938461280e565b0390a1604051600181527f6033f466f00f86ddad99cc4401e0d989fc3740d025696a462ccfe8bd1c56f99c908060208101612f62565b612f8e6134c06134ac610f62565b9a612f8e6134ba8c51610dbd565b8d610fdb565b60208b01610fdb565b60608501610fdb565b515160808301526134f26134e960a0830151151590565b151560a0840152565b61350b61350260c0830151151590565b151560c0840152565b4360e083015260e08101519061010091828401520151610120820152611c83565b5091600561353a8251612801565b61354381612736565b036136605750906107109161356561355e6102838451610dbd565b33146112ea565b61356f341561130a565b60208201916135896135846129508551610dbd565b61132a565b61361a6134c9604083016135a86135a36129508351610dbd565b61134a565b612f8e611d1c60608601926135c86135c36129508651610dbd565b61136a565b604051600181527fc6247e8343513481b655ba3cefe76fbd5150a51a45337176823ac51a3f323bba90602090a1600161010098890152612f8e6134c061360c610f62565b9a612f8e6134ba8b51610dbd565b6080810151608084015261363d61363460a0830151151590565b151560a0850152565b600160c08401524360e084015260e0810151828401520151610120820152611c83565b61366c60069151612801565b61367581612736565b1461367e575050565b815161368990610dbd565b61369290610dbd565b331461369d9061124a565b6136a7341561126a565b602082019182516136b790610dbd565b6136c1903361380c565b6136ca9061128a565b604081019182516136da90610dbd565b6136e4903361380c565b6136ed906112aa565b6060820180516136fc90610dbd565b613706903361380c565b61370f906112ca565b6101209384840192835161372290151590565b60405190151581527f7f690847f454efe9368c7831ba4028e24be9c62dc71eeb29c113165a000bb8dc90602090a18351151590860152613760610f62565b95845161376c90610dbd565b6137769088610fdb565b5161378090610dbd565b61378d9060208801610fdb565b5161379790610dbd565b6137a49060408701610fdb565b516137ae90610dbd565b6137bb9060608601610fdb565b60808281015190850152511515151560a084015260c08101511515151560c08401524360e084015260e081015190610100918285015201519082015261071090611c83565b905060015414386128d3565b600061225d928192826040519160208301926323b872dd60e01b845260018060a01b0380921660248201523060448201528260648201526064815261385081610b54565b5193165af16121a66138606121fb565b8092612290565b60009161225d9383809360405160208101936323b872dd60e01b855260018060a01b03809316602483015230604483015260648201526064815261385081610b54565b6040519061010082016001600160401b03811183821017613908575b6040528160e06000918281528260208201528260408201528260608201526138ec610d85565b60808201526138f9610d85565b60a08201528260c08201520152565b613910610ac4565b6138c6565b6040519061392282610adb565b8160008152602061174a6138aa565b6040519061393e82610adb565b81613947610d85565b8152602061174a6138aa56fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace43559fdbda3802be12785165433940170227c305b1c57d809d0c2950cdff3037a164736f6c6343000811000a`,
  BytecodeLen: 17024,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './src/contracts/coin_shop.rsh:107:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './src/contracts/coin_shop.rsh:288:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./src/contracts/coin_shop.rsh:289:12:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './src/contracts/coin_shop.rsh:114:64:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Admin": Admin,
  "buyer_api_purchase_bronze": buyer_api_purchase_bronze,
  "buyer_api_purchase_gold": buyer_api_purchase_gold,
  "buyer_api_purchase_silver": buyer_api_purchase_silver,
  "controller_api_restock": controller_api_restock,
  "controller_api_set_prices": controller_api_set_prices,
  "controller_api_terminate": controller_api_terminate,
  "controller_api_toggle_pause": controller_api_toggle_pause
  };
export const _APIs = {
  buyer_api: {
    purchase_bronze: buyer_api_purchase_bronze,
    purchase_gold: buyer_api_purchase_gold,
    purchase_silver: buyer_api_purchase_silver
    },
  controller_api: {
    restock: controller_api_restock,
    set_prices: controller_api_set_prices,
    terminate: controller_api_terminate,
    toggle_pause: controller_api_toggle_pause
    }
  };
