// Pagination page travel

function newsFilterFunc(allPost) {

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

    function filterAndPaginate(page) {
        renderPagination(totalPages, page);
        renderPosts(allPosts.slice((page - 1) * pageSize, page * pageSize));
    }

    function renderPosts(posts) {
        var postsContainer = $('.post-travel');
        postsContainer.empty();

        posts.forEach(function (post) {
            var postHtml = `
                <div class="col-12 col-lg-6" >
					<div class="d-flex justify-content-between align-items-center box_shadow">
						<img 
                            class=" img_mb img_pc object-cover min-40"
							 src="${post.Post.PrimaryImage.Media?.PublicUrl.substring(1) || '/uploads/default-image.jpg'}"
							 alt="" />
						<div class="p-3 px-md-4 py-md-3">
                            <p class="body2_semi color_orange underline-hover mb-0 mb-md-2">
							    ${post.Post.Category.Title}
							</p>
                            <a href="${post.Post.Permalink}">                             
                                <p class="heading_3_bold color_teal-dark truncate underline-hover short-paragraph mb-0 mb-md-2">
								${post.Post.Title}
							</p>
                            </a>							
							
							<p class="body2 color_gray-6">
								 ${post.Post.Published.toString()}
							</p>
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
						<a class="page-link" href="#" data-action="previous">
							<svg width="16"
								 height="16"
								 viewBox="0 0 16 16"
								 fill="none"
								 xmlns="http://www.w3.org/2000/svg">
								<path d="M5.21997 7.33312H13.3346V8.66645H5.21997L8.79597 12.2425L7.8533 13.1851L2.66797 7.99979L7.8533 2.81445L8.79597 3.75712L5.21997 7.33312Z"
									  fill="#222222" />
							</svg>
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
						<a class="page-link" href="#" data-action="next">
							<svg width="16"
								 height="16"
								 viewBox="0 0 16 16"
								 fill="none"
								 xmlns="http://www.w3.org/2000/svg">
								<path d="M10.7826 7.33312L7.20663 3.75712L8.1493 2.81445L13.3346 7.99979L8.1493 13.1851L7.20663 12.2425L10.7826 8.66645H2.66797V7.33312H10.7826Z"
									  fill="#222222" />
							</svg>
						</a>
					</li>
        `);
    }

    $('.pagination-container-travel').on('click', 'a', function (e) {
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

        filterAndPaginate(currentPage);
     
    });


    filterAndPaginate(1); // Load the initial page
}
