var MicroModal = require('micromodal')
async function upvoteClickHandler(event) {
    event.preventDefault();
    console.log('click')
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    const response = await fetch('/api/jokes/upvote', {
      method: 'PUT',
      body: JSON.stringify({
        post_id: id
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.reload();
    } else {
      MicroModal.show('modal-1');
    }
  }
  
  document.querySelector('.upvote-btn').addEventListener('click', upvoteClickHandler);