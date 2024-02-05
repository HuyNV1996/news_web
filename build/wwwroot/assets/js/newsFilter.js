function newsFilterFunc(allPost) {
    //console.log(allPost)


    function calculatePaginationInfo(posts, pageSize) {
        var totalPages = Math.ceil(posts.length / pageSize);
        var currentPage = 1; // Default to the first page

        return {
            totalPages: totalPages,
            currentPage: currentPage
        };
    }

    var pageSize = 6;
    var { totalPages, currentPage } = calculatePaginationInfo(allPosts, pageSize);

    function filterAndPaginate(category, page) {
        console.log(category.length)
        var filteredPosts = filterPosts(category);
        totalPages = Math.ceil(filteredPosts.length / pageSize);
        renderPagination(totalPages, page);
        renderPosts(filteredPosts.slice((page - 1) * pageSize, page * pageSize), category);
    }

    function filterPosts(category) {

        //console.log("categoryAll :",category)
        return allPosts.filter(function (post) {
            return category === 'all' || post.Post.Category.Title.toLowerCase() === category;
        });
    }
    function formatDate(date) {
        const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
        return new Date(date).toLocaleDateString(undefined, options);
    }
    function renderPosts(posts, category) {
        var postsContainer = $('.post_popular');
        postsContainer.empty();

        posts.forEach(function (post) {
            //console.log(post)
            var postHtml = `
                            <div class="col-sm-4">
                                <div class="post-popular_card">
                                    <div class="img_post">
                                        <a href="${post.Post.Permalink}">
                                                <img class="w-full" style="height:240px; object-fit:cover;" src="${post.Post.PrimaryImage.Media?.PublicUrl.substring(1) || '/uploads/default-image.jpg'}" alt="">
                                        </a>
                                    </div>
                                    <div class="news_popular">
                                        <div class="new_popular_title">
                                            ${post.Post.Category.Title}
                                        </div>
                                        <a href="${post.Post.Permalink}" class="new_popular_content short-paragraph">
                                            ${post.Post.Title}
                                        </a>
                                        <div class="new_popular_At">
                                            ${formatDate(post.Post.Published)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `;
            postsContainer.append(postHtml);
        });
    }

    function renderPagination(totalPages, currentPage) {
        var paginationContainer = $('.pagination');

        paginationContainer.empty();

        paginationContainer.append(`
                <li class="page-item">
                    <a class="page-link" href="#" data-action="previous" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
            `);

        for (var n = 1; n <= totalPages; n++) {
            var pageLink = `<li class="page-item ${currentPage === n ? "active" : ""}">
                                    <a class="page-link" href="#" data-action=${n}>${n}</a>
                                </li>`;
            paginationContainer.append(pageLink);
        }

        paginationContainer.append(`
                <li class="page-item">
                    <a class="page-link" href="#" data-action="next" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            `);
    }

    function updatePostCount(count, category) {

        //console.log("count",count)

        //var countText = count > 0 ? ` (${count})` : '';

        //if (count > 1) {
        //    $('.filter_button[data-category="' + category + '"] .post-count').text(countText);
        //} else {
        //    $('.filter_button[data-category="' + category + '"] .post-count').empty();
        //}

        var countText = count > 0 ? ` (${count})` : '';
        $('.filter_button[data-category="' + category + '"] .post-count').text(countText);

    }

    function updateAllPostCounts() {
        $('.filter_button').each(function () {
            var category = $(this).data('category');
            var filteredPosts = filterPosts(category);
            updatePostCount(filteredPosts.length, category);
        });
    }

    $('.filter_button').on('click', function () {
        $('.filter_button').removeClass('active');
        $(this).addClass('active');

        var category = $(this).data('category');
        filterAndPaginate(category, 1);
    });

    $('.pagination-container').on('click', 'a', function (e) {
        e.preventDefault();
        var action = $(this).data('action');

        switch (action) {
            case 'previous':
                currentPage = Math.max(currentPage - 1, 1);
                break;
            case 'next':
                currentPage = Math.min(currentPage + 1, totalPages);
                break;
            default:
                currentPage = parseInt(action, 10);
                break;
        }

        var activeCategory = $('.filter_button.active').data('category');
        filterAndPaginate(activeCategory, currentPage);
    });

    updateAllPostCounts();
    filterAndPaginate('all', 1);
}