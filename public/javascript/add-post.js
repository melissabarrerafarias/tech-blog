async function newForm(event) {
    event.preventDefault();
  
    const title = document.querySelector('#post-title').value;
    const post_description = document.querySelector('#post-description').value.trim();
  
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        post_description
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('#new-post').addEventListener('submit', newForm);