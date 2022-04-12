
const {execSync} = require('child_process')
const fs = require('fs')

const commandList = [
    'git init ',
    'git add . ',
    "git commit -m 'update' ",
    'git branch -M main ',
    'git remote add origin git@github.com:vt-simple/use-node-run-git-command-demo.git ',
    'git push -u origin main --force '
]

fs.rm('.git', { recursive: true }, (err)=>{
    console.log('delete .git dir done! ...')

    commandList.forEach(command=>{
        execSync(command)
    })

})
