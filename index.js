/**
 * Store an array of actions, new actions will be appended
 * to this array via the action() function. These actions should
 * then be expored by a module for access by smith-api, to be 
 * indexed ready for execution.
 */
const actions = [];

/**
 * Add a new action to the actions array
 *
 * @param {string} task Task string that the action matches to i.e. ('what is the time')
 * @param {function} func Handler function to call when the action is executed
 */
const action = (task, func) => {
    actions.push({
        task: task.toLowerCase(),
        handler: func,
    });
};

module.exports = {
    action,
    actions,
}