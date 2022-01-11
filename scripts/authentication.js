
async function AuthorizeUser(){
  const instance = axios.create({ 
    headers: {'Access-Control-Allow-Origin': '*'}
  })
  const githubResponse = await instance.get('https://github.com/login/oauth/authorize?client_id=08ebcf5c4bfcc1b8e6f8');
  console.log(githubResponse);
}
