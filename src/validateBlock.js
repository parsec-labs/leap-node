/**
 * Copyright (c) 2018-present, Parsec Labs (parseclabs.org)
 *
 * This source code is licensed under the Mozilla Public License Version 2.0
 * found in the LICENSE file in the root directory of this source tree.
 */

const { Period, Block, Tx } = require('parsec-lib');
const {
  getSlotsByAddr,
  readSlots,
  sendTransaction,
  GENESIS,
} = require('./utils');

module.exports = async (
  state,
  chainInfo,
  { bridge, web3, account, privKey, node }
) => {
  if (chainInfo.height % 32 === 0) {
    node.previousPeriod = node.currentPeriod;
    node.currentPeriod = new Period();
    node.currentPeriod.prevHash = node.previousPeriod.merkleRoot(); // add to lib?
    node.checkCallsCount = 0;
    const slots = await readSlots(web3, bridge);
    const mySlots = getSlotsByAddr(slots, account.address);
    const currentSlotId = chainInfo.height % slots.length;
    const currentSlot = mySlots.find(slot => slot.id === currentSlotId);

    if (currentSlot) {
      sendTransaction(
        web3,
        bridge.methods.submitPeriod(
          currentSlot.id,
          node.previousPeriod.prevHash || GENESIS,
          node.previousPeriod.merkleRoot()
        ),
        bridge.address,
        privKey
      );
    }
  }

  const b = new Block('0x01', chainInfo.height);
  b.addTx(Tx.coinbase(1, account.address));
  state.mempool.forEach(tx => b.addTx(tx));
  b.sign(privKey);
  node.currentPeriod.addBlock(b);
  state.mempool = [];
};
