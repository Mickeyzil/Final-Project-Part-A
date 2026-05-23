document.addEventListener('DOMContentLoaded', () => {
    fetch('./data/Stations.json')
       .then(response => response.json())
       .then(data => {
            const container = document.getElementById('stations-container');
            if(!container)
                return;
            container.innerHTML = '';
            data.forEach(station => {
                const card = document.createElement('div');
                card.className = 'station-display-card';
                const connectorsHTML = station.connectors
                .map(c => `<span class="tag-item">${c}</span>`).join(' ');
                const amenitiesHTML = station.amenities
                .map(a => `<span class="tag-item">${a}</span>`).join(' ');

                card.innerHTML = `
                    <div class="station-card-header">
                        <h2 class="station-card-title">${station.name}</h2>
                        <span class="status-dot" style="background-color: ${station.statusColor};"></span>
                    </div>
                    <div class="station-card-body">
                        <div class="info-row-main">
                            <div class="info-block">
                                <span class="info-label">AVAILABLE</span>
                                <span class="info-value-strong">${station.available}</span>
                            </div>
                            <div class="info-block align-right">
                                <span class="info-label">POWER</span>
                                <span class="info-value-highlight">⚡ ${station.power}</span>
                            </div>
                        </div>
                        <div class="price-row">
                            <span class="price-icon">💲</span>
                            <span class="price-value">${station.price}</span>
                        </div>
                        <div class="spec-row">
                            <span class="spec-icon">🔌</span>
                            <div class="tags-container">${connectorsHTML}</div>
                        </div>
                        <div class="spec-row">
                            <span class="spec-icon">📶</span>
                            <div class="tags-container">${amenitiesHTML}</div>
                        </div>
                        <div class="card-actions">
                            <button class="btn-secondary">❤️ Add to Favorites</button>
                            <button class="btn-primary">📅 Make a Reservation</button>
                        </div>
                    </div>
                `;
                container.appendChild(card);
            });
       }).catch(error => console.error('Error loading stations:', error));
});