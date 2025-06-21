// assets/js/search.js

document.addEventListener("DOMContentLoaded", function () {
    // 获取当前页面的搜索框
    const searchInput = document.getElementById('searchInput') || document.getElementById('introSearch');

    if (!searchInput) return; // 如果没有搜索框，直接退出

    // 获取当前页面的所有作品项
    const bookItems = document.querySelectorAll('.book-item') || document.querySelectorAll('.intro-card');

    searchInput.addEventListener('input', function () {
        const query = this.value.toLowerCase();
        let firstMatch = null;

        bookItems.forEach(item => {
            const tags = item.getAttribute('data-tags') || '';
            if (tags.toLowerCase().includes(query)) {
                item.style.display = 'block';
                if (!firstMatch) firstMatch = item;
            } else {
                item.style.display = 'none';
            }
        });

        // 自动滚动到第一个匹配项
        if (firstMatch) {
            firstMatch.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    });

    // 支持重置功能（适用于 works 和 introduction 页面）
    window.resetSearch = function () {
        const input = document.getElementById('searchInput');
        if (input) input.value = '';
        bookItems.forEach(item => item.style.display = 'block');
    };

    window.resetIntroSearch = function () {
        const input = document.getElementById('introSearch');
        if (input) input.value = '';
        bookItems.forEach(item => item.style.display = 'block');
    };
});
