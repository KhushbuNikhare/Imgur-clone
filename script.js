
    async function fetchText() {
        let response = await fetch('https://api.unsplash.com/photos/?client_id=X7hPhTfcqJJDS0CDXLEvjyIzPZrsNTTAZYOy1MWtHgM');
        let data = await response.json();
        console.log(data);
        fetchText();
