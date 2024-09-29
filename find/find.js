// app.js
const data = {
    "pink cup(粉红杯)": "project/pinkcup/project_pinkcup.html",
    "hkdog": "project/hkdog/project_hkdog.html",
    "方圆解释器-中文编程" : "project/方圆/project_fangyuan.html"
    "高一五班运动会照片下载临时入口，如有重要照片请尽快保存！！！" : "project/wbzp/wbzpydh.html"
};

document.getElementById('searchInput').addEventListener('input', function(e) {
    const searchQuery = e.target.value.toLowerCase();
    const resultsContainer = document.getElementById('searchResults');
    resultsContainer.innerHTML = ''; // Clear previous results

    Object.keys(data).forEach(function(key) {
        if (key.toLowerCase().includes(searchQuery)) {
            const listItem = document.createElement('li');
            listItem.textContent = key;
            listItem.addEventListener('click', function() {
                window.location.href = data[key];
            });
            resultsContainer.appendChild(listItem);
        }
    });
});
