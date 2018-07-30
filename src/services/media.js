export function uploadFile(data) {
  return fetch(`https://api.infinum.academy/api/media`, {
    method: 'POST',
    headers: {
      'Authorization': localStorage.getItem('token'),
    },
    body: data,
  }).then((res) => res.json())
    .then((res) => res.data);
}
