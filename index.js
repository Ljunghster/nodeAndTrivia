const { prompt } = require('inquirer')

const mainMenu = () => {
    prompt({
        type: 'list',
        name: 'action',
        message: 'What would you like to do?',
        choices: ['New Game', 'View Leaderboard']
    })
    .then(({ action }) => {
        console.log(action)
    })
    .catch(err => console.log(err))
}

mainMenu()