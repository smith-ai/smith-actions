const actions = [];

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