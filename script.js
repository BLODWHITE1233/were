// Giriş animasyonu sonrası ana içeriği göster
setTimeout(() => {
  document.getElementById('splash-screen').style.display = 'none';
  document.getElementById('main-content').style.display = 'block';
}, 3000);

// Log çekme işlemi
async function fetchLogs() {
  const url = document.getElementById('url-input').value;
  if (!url) {
    alert('Lütfen bir URL girin.');
    return;
  }

  const response = await fetch(/api/logs?url=${encodeURIComponent(url)});
  const data = await response.json();

  if (data.error) {
    document.getElementById('log-output').textContent = data.error;
  } else {
    document.getElementById('log-output').textContent = data.logs;
  }
}