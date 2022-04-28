async function newFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="joke-title"]').value;
    const joke_body = document.querySelector('input[name="joke-body"]').value;
  
    const response = await fetch(`/api/jokes`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        joke_body
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
  
  document.querySelector('.new-joke-form').addEventListener('submit', newFormHandler);
  