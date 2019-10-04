const actions = [];

const action = (task, func) => {
    actions.push({
        task: task.toLowerCase(),
        handler: func,
    });
};

const handler = (task) => {
    const taskLower = task.toLowerCase();
    const actionToDo = actions.filter((act) => taskLower.includes(act.task))[0];

    let params = null;
    const possibleParams = taskLower.split(actionToDo.task);

    if (possibleParams.length > 1) {
        params = possibleParams[1].trim();
    }

    return actionToDo.handler(params);
};

module.exports = {
    handler,
    action,
    actions,
}