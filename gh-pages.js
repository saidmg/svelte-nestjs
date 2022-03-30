var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'master',
        repo: 'https://github.com/saidmg/svelte-nestjs.git', // Update to point to your repository  
        user: {
            name: 'Said Mghabghab', // update to use your name
            email: 'saidmghabghab@gmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)