const { Tx } = require('leap-core');

const checkEpochLength = require('./checkEpochLength');

const getInitialState = () => ({
  epoch: {
    epoch: 0,
    epochLength: null,
    epochLengthIndex: -1,
  },
});

describe('checkEpochLength', () => {
  test('wrong type', () => {
    let tx = Tx.transfer([], []);
    expect(() => checkEpochLength({}, tx)).toThrow(
      'epochLength tx V1 expected'
    );

    tx = Tx.epochLength(2, 1);
    expect(() => checkEpochLength({}, tx)).toThrow(
      'epochLength tx V1 expected'
    );
  });

  test('successful tx', () => {
    const state = getInitialState();
    const epochLength = Tx.epochLengthV1(4);

    checkEpochLength(state, epochLength, {
      epochLengths: [[4, 2]],
    });

    expect(state.epoch.epochLength).toBe(4);
  });

  test('series of txs', () => {
    const state = getInitialState();

    const epochLength1 = Tx.epochLengthV1(4);
    checkEpochLength(state, epochLength1, {
      epochLengths: [[4, 2]],
    });

    const epochLength2 = Tx.epochLengthV1(3);
    const bridgeState = {
      epochLength: 4,
      epochLengths: [[4, 2], [3, 5]],
    };
    checkEpochLength(state, epochLength2, bridgeState);

    expect(state.epoch.epochLength).toBe(3);
  });

  test('epoch length mismatch', () => {
    const state = getInitialState();
    const epochLength = Tx.epochLengthV1(4);

    expect(() => {
      checkEpochLength(state, epochLength, {
        epochLengths: [[5, 2]],
      });
    }).toThrow('Wrong epoch length');
  });
});
