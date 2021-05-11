const postTodoInfo = async ({userId, todo={}}) => {

  let response = await fetch(
    "/todo/"+`${userId}`,
    {
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(todo)
    }
  )
  
  return response.json();
}