/**
 * Copyright (c) 2019-present, Leap DAO (leapdao.org)
 *
 * This source code is licensed under the Mozilla Public License Version 2.0
 * found in the LICENSE file in the root directory of this source tree.
 */

// commpiled https://github.com/leapdao/spending-conditions/blob/master/contracts/ERC20Min.sol
module.exports.ERC20_BYTECODE = Buffer.from(
  '608060405234801561001057600080fd5b50600436106100b0576000357c01000000000000000000000000000000000000000000000000000000009004806340c10f191161008357806340c10f191461017157806370a082311461019f578063a457c2d7146101c5578063a9059cbb146101f1578063dd62ed3e1461021d576100b0565b8063095ea7b3146100b557806318160ddd146100f557806323b872dd1461010f5780633950935114610145575b600080fd5b6100e1600480360360408110156100cb57600080fd5b50600160a060020a03813516906020013561024b565b604080519115158252519081900360200190f35b6100fd6102c9565b60408051918252519081900360200190f35b6100e16004803603606081101561012557600080fd5b50600160a060020a038135811691602081013590911690604001356102cf565b6100e16004803603604081101561015b57600080fd5b50600160a060020a038135169060200135610398565b61019d6004803603604081101561018757600080fd5b50600160a060020a038135169060200135610448565b005b6100fd600480360360208110156101b557600080fd5b5035600160a060020a0316610463565b6100e1600480360360408110156101db57600080fd5b50600160a060020a03813516906020013561047e565b6100e16004803603604081101561020757600080fd5b50600160a060020a0381351690602001356104c9565b6100fd6004803603604081101561023357600080fd5b50600160a060020a03813581169160200135166104df565b6000600160a060020a038316151561026257600080fd5b336000818152600160209081526040808320600160a060020a03881680855290835292819020869055805186815290519293927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925929181900390910190a350600192915050565b60025490565b600160a060020a0383166000908152600160209081526040808320338452909152812054610303908363ffffffff61050a16565b600160a060020a038516600090815260016020908152604080832033845290915290205561033284848461051f565b600160a060020a0384166000818152600160209081526040808320338085529083529281902054815190815290519293927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925929181900390910190a35060019392505050565b6000600160a060020a03831615156103af57600080fd5b336000908152600160209081526040808320600160a060020a03871684529091529020546103e3908363ffffffff6105ec16565b336000818152600160209081526040808320600160a060020a0389168085529083529281902085905580519485525191937f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925929081900390910190a350600192915050565b6001331461045557600080fd5b61045f8282610605565b5050565b600160a060020a031660009081526020819052604090205490565b6000600160a060020a038316151561049557600080fd5b336000908152600160209081526040808320600160a060020a03871684529091529020546103e3908363ffffffff61050a16565b60006104d633848461051f565b50600192915050565b600160a060020a03918216600090815260016020908152604080832093909416825291909152205490565b60008282111561051957600080fd5b50900390565b600160a060020a038216151561053457600080fd5b600160a060020a03831660009081526020819052604090205461055d908263ffffffff61050a16565b600160a060020a038085166000908152602081905260408082209390935590841681522054610592908263ffffffff6105ec16565b600160a060020a038084166000818152602081815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b6000828201838110156105fe57600080fd5b9392505050565b600160a060020a038216151561061a57600080fd5b60025461062d908263ffffffff6105ec16565b600255600160a060020a038216600090815260208190526040902054610659908263ffffffff6105ec16565b600160a060020a0383166000818152602081815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a3505056fea165627a7a72305820124bd6a553093ce99fa3750ded9e22e09a19231654f6b2111b7b4f929e90dff60029',
  'hex'
);

// compiled from leap-contracts/contracts/ERC721Mint.sol | 8df4d218923f7c1c90940e41757dafa5f5a6ba2e
module.exports.ERC721_BYTECODE = Buffer.from(
  '608060405234801561001057600080fd5b50600436106100c6576000357c01000000000000000000000000000000000000000000000000000000009004806342842e0e1161008e57806342842e0e146101e45780636352211e1461021a57806370a0823114610237578063a22cb4651461026f578063b88d4fde1461029d578063e985e9c514610363576100c6565b806301ffc9a7146100cb578063081812fc1461011b578063095ea7b31461015457806323b872dd1461018257806340c10f19146101b8575b600080fd5b610107600480360360208110156100e157600080fd5b50357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916610391565b604080519115158252519081900360200190f35b6101386004803603602081101561013157600080fd5b50356103c5565b60408051600160a060020a039092168252519081900360200190f35b6101806004803603604081101561016a57600080fd5b50600160a060020a0381351690602001356103f7565b005b6101806004803603606081101561019857600080fd5b50600160a060020a038135811691602081013590911690604001356104ad565b610180600480360360408110156101ce57600080fd5b50600160a060020a0381351690602001356104d2565b610180600480360360608110156101fa57600080fd5b50600160a060020a038135811691602081013590911690604001356104ed565b6101386004803603602081101561023057600080fd5b5035610509565b61025d6004803603602081101561024d57600080fd5b5035600160a060020a0316610533565b60408051918252519081900360200190f35b6101806004803603604081101561028557600080fd5b50600160a060020a0381351690602001351515610566565b610180600480360360808110156102b357600080fd5b600160a060020a038235811692602081013590911691604082013591908101906080810160608201356401000000008111156102ee57600080fd5b82018360208201111561030057600080fd5b8035906020019184600183028401116401000000008311171561032257600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506105ea945050505050565b6101076004803603604081101561037957600080fd5b50600160a060020a0381358116916020013516610612565b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191660009081526020819052604090205460ff1690565b60006103d082610640565b15156103db57600080fd5b50600090815260026020526040902054600160a060020a031690565b600061040282610509565b9050600160a060020a03838116908216141561041d57600080fd5b33600160a060020a038216148061043957506104398133610612565b151561044457600080fd5b600082815260026020526040808220805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0387811691821790925591518593918516917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591a4505050565b6104b7338261065d565b15156104c257600080fd5b6104cd8383836106bc565b505050565b600133146104df57600080fd5b6104e982826107d8565b5050565b6104cd83838360206040519081016040528060008152506105ea565b600081815260016020526040812054600160a060020a031680151561052d57600080fd5b92915050565b6000600160a060020a038216151561054a57600080fd5b50600160a060020a031660009081526003602052604090205490565b600160a060020a03821633141561057c57600080fd5b336000818152600460209081526040808320600160a060020a03871680855290835292819020805460ff1916861515908117909155815190815290519293927f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31929181900390910190a35050565b6105f58484846104ad565b61060184848484610899565b151561060c57600080fd5b50505050565b600160a060020a03918216600090815260046020908152604080832093909416825291909152205460ff1690565b600090815260016020526040902054600160a060020a0316151590565b60008061066983610509565b905080600160a060020a031684600160a060020a031614806106a4575083600160a060020a0316610699846103c5565b600160a060020a0316145b806106b457506106b48185610612565b949350505050565b82600160a060020a03166106cf82610509565b600160a060020a0316146106e257600080fd5b600160a060020a03821615156106f757600080fd5b61070081610a15565b600160a060020a03831660009081526003602052604090205461072a90600163ffffffff610a5f16565b600160a060020a03808516600090815260036020526040808220939093559084168152205461076090600163ffffffff610a7416565b600160a060020a0380841660008181526003602090815260408083209590955585825260019052838120805473ffffffffffffffffffffffffffffffffffffffff1916831790559251849391928716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b600160a060020a03821615156107ed57600080fd5b6107f681610640565b1561080057600080fd5b6000818152600160208181526040808420805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a038816908117909155845260039091529091205461084e91610a74565b600160a060020a0383166000818152600360205260408082209390935591518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b60006108ad84600160a060020a0316610a8d565b15156108bb575060016106b4565b6040517f150b7a020000000000000000000000000000000000000000000000000000000081523360048201818152600160a060020a03888116602485015260448401879052608060648501908152865160848601528651600095928a169463150b7a029490938c938b938b939260a4019060208501908083838e5b8381101561094e578181015183820152602001610936565b50505050905090810190601f16801561097b5780820380516001836020036101000a031916815260200191505b5095505050505050602060405180830381600087803b15801561099d57600080fd5b505af11580156109b1573d6000803e3d6000fd5b505050506040513d60208110156109c757600080fd5b50517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167f150b7a020000000000000000000000000000000000000000000000000000000014915050949350505050565b600081815260026020526040902054600160a060020a031615610a5c576000818152600260205260409020805473ffffffffffffffffffffffffffffffffffffffff191690555b50565b600082821115610a6e57600080fd5b50900390565b600082820183811015610a8657600080fd5b9392505050565b6000903b119056fea165627a7a723058208fe1b6201a30a7b7c670d7f4764310d3fda0df015d1ec460a7200dcb605401ee0029',
  'hex'
);

// compiled from leap-contracts/contracts/ERC1949Breed.sol | d17384a7934012e309452550533a588d5ce337bb
module.exports.ERC1948_BYTECODE = Buffer.from(
  '608060405234801561001057600080fd5b5060043610610112576000357c01000000000000000000000000000000000000000000000000000000009004806342842e0e116100b4578063a22cb46511610083578063a22cb4651461038c578063a983d43f146103ba578063b88d4fde146103dd578063e985e9c5146104a357610112565b806342842e0e146102e1578063451da9f9146103175780636352211e1461034957806370a082311461036657610112565b80631e458bee116100f05780631e458bee146101ce57806323b872dd1461020057806336c9c4571461023657806337ebbc03146102b257610112565b806301ffc9a714610117578063081812fc14610167578063095ea7b3146101a0575b600080fd5b6101536004803603602081101561012d57600080fd5b50357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166104d1565b604080519115158252519081900360200190f35b6101846004803603602081101561017d57600080fd5b5035610505565b60408051600160a060020a039092168252519081900360200190f35b6101cc600480360360408110156101b657600080fd5b50600160a060020a038135169060200135610537565b005b6101cc600480360360608110156101e457600080fd5b50600160a060020a0381351690602081013590604001356105ed565b6101cc6004803603606081101561021657600080fd5b50600160a060020a0381358116916020810135909116906040013561064f565b6101cc6004803603606081101561024c57600080fd5b81359160208101359181019060608101604082013564010000000081111561027357600080fd5b82018360208201111561028557600080fd5b803590602001918460018302840111640100000000831117156102a757600080fd5b509092509050610674565b6102cf600480360360208110156102c857600080fd5b5035610784565b60408051918252519081900360200190f35b6101cc600480360360608110156102f757600080fd5b50600160a060020a038135811691602081013590911690604001356107f8565b6101cc6004803603606081101561032d57600080fd5b50803590600160a060020a036020820135169060400135610814565b6101846004803603602081101561035f57600080fd5b50356109cd565b6102cf6004803603602081101561037c57600080fd5b5035600160a060020a03166109f7565b6101cc600480360360408110156103a257600080fd5b50600160a060020a0381351690602001351515610a2a565b6101cc600480360360408110156103d057600080fd5b5080359060200135610aae565b6101cc600480360360808110156103f357600080fd5b600160a060020a0382358116926020810135909116916040820135919081019060808101606082013564010000000081111561042e57600080fd5b82018360208201111561044057600080fd5b8035906020019184600183028401116401000000008311171561046257600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610b86945050505050565b610153600480360360408110156104b957600080fd5b50600160a060020a0381358116916020013516610bae565b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191660009081526020819052604090205460ff1690565b600061051082610bdc565b151561051b57600080fd5b50600090815260026020526040902054600160a060020a031690565b6000610542826109cd565b9050600160a060020a03838116908216141561055d57600080fd5b33600160a060020a038216148061057957506105798133610bae565b151561058457600080fd5b600082815260026020526040808220805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0387811691821790925591518593918516917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591a4505050565b600133146105fa57600080fd5b6106048383610bf9565b60008281526005602090815260409182902054825190815290810183905281518492600080516020611171833981519152928290030190a26000918252600560205260409091205550565b6106593382610cba565b151561066457600080fd5b61066f838383610d19565b505050565b60006106ca60056000878152602001908152602001600020548585858080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610e3592505050565b90506106d5856109cd565b600160a060020a03828116911614610737576040805160e560020a62461bcd02815260206004820152601360248201527f7369676e6572206e6f74206d61746368696e6700000000000000000000000000604482015290519081900360640190fd5b60008581526005602090815260409182902054825190815290810186905281518792600080516020611171833981519152928290030190a250505060009182526005602052604090912055565b600061078f82610bdc565b15156107e5576040805160e560020a62461bcd02815260206004820152601660248201527f746f6b656e496420646f6573206e6f7420657869737400000000000000000000604482015290519081900360640190fd5b5060009081526005602052604090205490565b61066f8383836020604051908101604052806000815250610b86565b823361081f826109cd565b600160a060020a03161461087d576040805160e560020a62461bcd02815260206004820152601660248201527f73656e646572206e6f7420717565656e206f776e657200000000000000000000604482015290519081900360640190fd5b600061088885610784565b9050600081116108e2576040805160e560020a62461bcd02815260206004820152600f60248201527f717565656e496420746f6f206c6f770000000000000000000000000000000000604482015290519081900360640190fd5b640100000000811061093e576040805160e560020a62461bcd02815260206004820152601060248201527f717565656e496420746f6f206869676800000000000000000000000000000000604482015290519081900360640190fd5b61094b8560018301610aae565b6040805160208082018890528183018490528251808303840181526060909201909252805191012061097d8582610bf9565b60008181526005602090815260409182902054825190815290810186905281518392600080516020611171833981519152928290030190a260009081526005602052604090209290925550505050565b600081815260016020526040812054600160a060020a03168015156109f157600080fd5b92915050565b6000600160a060020a0382161515610a0e57600080fd5b50600160a060020a031660009081526003602052604090205490565b600160a060020a038216331415610a4057600080fd5b336000818152600460209081526040808320600160a060020a03871680855290835292819020805460ff1916861515908117909155815190815290519293927f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31929181900390910190a35050565b610ab7826109cd565b600160a060020a031633600160a060020a03161480610ae6575033610adb83610505565b600160a060020a0316145b1515610b3c576040805160e560020a62461bcd02815260206004820152600d60248201527f6e6f207065726d697373696f6e00000000000000000000000000000000000000604482015290519081900360640190fd5b60008281526005602090815260409182902054825190815290810183905281518492600080516020611171833981519152928290030190a260009182526005602052604090912055565b610b9184848461064f565b610b9d84848484610f7b565b1515610ba857600080fd5b50505050565b600160a060020a03918216600090815260046020908152604080832093909416825291909152205460ff1690565b600090815260016020526040902054600160a060020a0316151590565b600160a060020a0382161515610c0e57600080fd5b610c1781610bdc565b15610c2157600080fd5b6000818152600160208181526040808420805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0388169081179091558452600390915290912054610c6f916110f7565b600160a060020a0383166000818152600360205260408082209390935591518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b600080610cc6836109cd565b905080600160a060020a031684600160a060020a03161480610d01575083600160a060020a0316610cf684610505565b600160a060020a0316145b80610d115750610d118185610bae565b949350505050565b82600160a060020a0316610d2c826109cd565b600160a060020a031614610d3f57600080fd5b600160a060020a0382161515610d5457600080fd5b610d5d81611109565b600160a060020a038316600090815260036020526040902054610d8790600163ffffffff61115316565b600160a060020a038085166000908152600360205260408082209390935590841681522054610dbd90600163ffffffff6110f716565b600160a060020a0380841660008181526003602090815260408083209590955585825260019052838120805473ffffffffffffffffffffffffffffffffffffffff1916831790559251849391928716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b8051600090604114610e4957506000610f74565b60208201516040830151606084015160001a7f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0821115610e8f5760009350505050610f74565b8060ff16601b14158015610ea757508060ff16601c14155b15610eb85760009350505050610f74565b604080517f19457468657265756d205369676e6564204d6573736167653a0a363400000000602080830191909152603c82018a9052605c8083018a905283518084039091018152607c83018085528151918301919091206000909152609c830180855281905260ff851660bc84015260dc830187905260fc8301869052925160019261011c8082019392601f1981019281900390910190855afa158015610f63573d6000803e3d6000fd5b505050602060405103519450505050505b9392505050565b6000610f8f84600160a060020a0316611168565b1515610f9d57506001610d11565b6040517f150b7a020000000000000000000000000000000000000000000000000000000081523360048201818152600160a060020a03888116602485015260448401879052608060648501908152865160848601528651600095928a169463150b7a029490938c938b938b939260a4019060208501908083838e5b83811015611030578181015183820152602001611018565b50505050905090810190601f16801561105d5780820380516001836020036101000a031916815260200191505b5095505050505050602060405180830381600087803b15801561107f57600080fd5b505af1158015611093573d6000803e3d6000fd5b505050506040513d60208110156110a957600080fd5b50517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167f150b7a020000000000000000000000000000000000000000000000000000000014915050949350505050565b600082820183811015610f7457600080fd5b600081815260026020526040902054600160a060020a031615611150576000818152600260205260409020805473ffffffffffffffffffffffffffffffffffffffff191690555b50565b60008282111561116257600080fd5b50900390565b6000903b119056fe8ec06c2117d45dcb6bcb6ecf8918414a7ff1cb1ed07da8175e2cf638d0f4777fa165627a7a7230582036fcf84b1b07428b105afdc52c514e8d840203fb7cbbb1d0f614ebea500937f40029',
  'hex'
);

// compiled from leap-contracts/contracts/ERC1949Breed.sol | cce1b813a2acd708d8fbf81ba239661bae1128d1
module.exports.ERC1948_BYTECODE_218508104 = Buffer.from(
  '608060405234801561001057600080fd5b5060043610610107576000357c010000000000000000000000000000000000000000000000000000000090048063451da9f9116100a9578063a22cb46511610083578063a22cb46514610305578063a983d43f14610333578063b88d4fde14610356578063e985e9c51461041c57610107565b8063451da9f9146102905780636352211e146102c257806370a08231146102df57610107565b80631e458bee116100e55780631e458bee146101c357806323b872dd146101f557806337ebbc031461022b57806342842e0e1461025a57610107565b806301ffc9a71461010c578063081812fc1461015c578063095ea7b314610195575b600080fd5b6101486004803603602081101561012257600080fd5b50357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191661044a565b604080519115158252519081900360200190f35b6101796004803603602081101561017257600080fd5b503561047e565b60408051600160a060020a039092168252519081900360200190f35b6101c1600480360360408110156101ab57600080fd5b50600160a060020a0381351690602001356104b0565b005b6101c1600480360360608110156101d957600080fd5b50600160a060020a038135169060208101359060400135610566565b6101c16004803603606081101561020b57600080fd5b50600160a060020a038135811691602081013590911690604001356105da565b6102486004803603602081101561024157600080fd5b50356105ff565b60408051918252519081900360200190f35b6101c16004803603606081101561027057600080fd5b50600160a060020a03813581169160208101359091169060400135610628565b6101c1600480360360608110156102a657600080fd5b50803590600160a060020a036020820135169060400135610644565b610179600480360360208110156102d857600080fd5b5035610854565b610248600480360360208110156102f557600080fd5b5035600160a060020a031661087e565b6101c16004803603604081101561031b57600080fd5b50600160a060020a03813516906020013515156108b1565b6101c16004803603604081101561034957600080fd5b5080359060200135610935565b6101c16004803603608081101561036c57600080fd5b600160a060020a038235811692602081013590911691604082013591908101906080810160608201356401000000008111156103a757600080fd5b8201836020820111156103b957600080fd5b803590602001918460018302840111640100000000831117156103db57600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506109ae945050505050565b6101486004803603604081101561043257600080fd5b50600160a060020a03813581169160200135166109d6565b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191660009081526020819052604090205460ff1690565b600061048982610a04565b151561049457600080fd5b50600090815260026020526040902054600160a060020a031690565b60006104bb82610854565b9050600160a060020a0383811690821614156104d657600080fd5b33600160a060020a03821614806104f257506104f281336109d6565b15156104fd57600080fd5b600082815260026020526040808220805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0387811691821790925591518593918516917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591a4505050565b6001331461057357600080fd5b61057d8383610a21565b600082815260056020908152604091829020548251908152908101839052815184927f8ec06c2117d45dcb6bcb6ecf8918414a7ff1cb1ed07da8175e2cf638d0f4777f928290030190a26000918252600560205260409091205550565b6105e43382610ae2565b15156105ef57600080fd5b6105fa838383610b41565b505050565b600061060a82610a04565b151561061557600080fd5b5060009081526005602052604090205490565b6105fa83838360206040519081016040528060008152506109ae565b823361064f82610854565b600160a060020a0316146106c457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f73656e646572206e6f7420717565656e206f776e657200000000000000000000604482015290519081900360640190fd5b60006106cf856105ff565b90506000811161074057604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f717565656e496420746f6f206c6f770000000000000000000000000000000000604482015290519081900360640190fd5b64010000000081106107b357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f717565656e496420746f6f206869676800000000000000000000000000000000604482015290519081900360640190fd5b6107c08560018301610935565b604080516020808201889052818301849052825180830384018152606090920190925280519101206107f28582610a21565b600081815260056020908152604091829020548251908152908101869052815183927f8ec06c2117d45dcb6bcb6ecf8918414a7ff1cb1ed07da8175e2cf638d0f4777f928290030190a260009081526005602052604090209290925550505050565b600081815260016020526040812054600160a060020a031680151561087857600080fd5b92915050565b6000600160a060020a038216151561089557600080fd5b50600160a060020a031660009081526003602052604090205490565b600160a060020a0382163314156108c757600080fd5b336000818152600460209081526040808320600160a060020a03871680855290835292819020805460ff1916861515908117909155815190815290519293927f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31929181900390910190a35050565b61093e82610854565b600160a060020a0316331461095257600080fd5b600082815260056020908152604091829020548251908152908101839052815184927f8ec06c2117d45dcb6bcb6ecf8918414a7ff1cb1ed07da8175e2cf638d0f4777f928290030190a260009182526005602052604090912055565b6109b98484846105da565b6109c584848484610c5d565b15156109d057600080fd5b50505050565b600160a060020a03918216600090815260046020908152604080832093909416825291909152205460ff1690565b600090815260016020526040902054600160a060020a0316151590565b600160a060020a0382161515610a3657600080fd5b610a3f81610a04565b15610a4957600080fd5b6000818152600160208181526040808420805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0388169081179091558452600390915290912054610a9791610dd9565b600160a060020a0383166000818152600360205260408082209390935591518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b600080610aee83610854565b905080600160a060020a031684600160a060020a03161480610b29575083600160a060020a0316610b1e8461047e565b600160a060020a0316145b80610b395750610b3981856109d6565b949350505050565b82600160a060020a0316610b5482610854565b600160a060020a031614610b6757600080fd5b600160a060020a0382161515610b7c57600080fd5b610b8581610df2565b600160a060020a038316600090815260036020526040902054610baf90600163ffffffff610e3c16565b600160a060020a038085166000908152600360205260408082209390935590841681522054610be590600163ffffffff610dd916565b600160a060020a0380841660008181526003602090815260408083209590955585825260019052838120805473ffffffffffffffffffffffffffffffffffffffff1916831790559251849391928716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b6000610c7184600160a060020a0316610e51565b1515610c7f57506001610b39565b6040517f150b7a020000000000000000000000000000000000000000000000000000000081523360048201818152600160a060020a03888116602485015260448401879052608060648501908152865160848601528651600095928a169463150b7a029490938c938b938b939260a4019060208501908083838e5b83811015610d12578181015183820152602001610cfa565b50505050905090810190601f168015610d3f5780820380516001836020036101000a031916815260200191505b5095505050505050602060405180830381600087803b158015610d6157600080fd5b505af1158015610d75573d6000803e3d6000fd5b505050506040513d6020811015610d8b57600080fd5b50517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167f150b7a020000000000000000000000000000000000000000000000000000000014915050949350505050565b600082820183811015610deb57600080fd5b9392505050565b600081815260026020526040902054600160a060020a031615610e39576000818152600260205260409020805473ffffffffffffffffffffffffffffffffffffffff191690555b50565b600082821115610e4b57600080fd5b50900390565b6000903b119056fea165627a7a72305820fbf6fdce81b3cd9dbe8b63ecce2ea42169fefb7bda6ee0b92ec48aa586527ede0029',
  'hex'
);
