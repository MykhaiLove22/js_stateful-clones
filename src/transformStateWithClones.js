'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  let newState = { ...state };
  const result = [];

  for (const action of actions) {
    if (action.type === 'clear') {
      newState = {};
    }

    if (action.type === 'addProperties') {
      Object.assign(newState, action.extraData);
    }

    if (action.type === 'removeProperties') {
      newState = { ...newState };

      for (const y of action.keysToRemove) {
        delete newState[y];
      }
    }
    result.push({ ...newState });
  }

  return result;
}

module.exports = transformStateWithClones;
