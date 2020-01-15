const randColors = () => {
    const color = ["primary", "secondary", "dark", "light", "warning", "success", "danger", "info"]
    let mi = parseInt(7 * Math.random());
    return color[mi];
}
const getMapList = () => {
    const li = document.querySelector("#Make-a-list");
    let html = '';
    dbObj = JSON.parse(db);
    dbObj.map((ob) => {
        html += `<li class="list-group-item"><button class="btn btn-light" onclick="drawOnMap(${ob.lat},${ob.long})">${ob.title}</button></li>`;
    })
    li.innerHTML = html;
}

const drawOnMap = (lat, long) => {

    target = L.latLng(lat, long);

    // Set map's center to target with zoom 14.
    map.setView(target, 9);

    // Place a marker on the same location.
    L.marker(target).addTo(map);
}