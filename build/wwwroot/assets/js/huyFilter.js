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

    var pageSize = 4;
    var { totalPages, currentPage } = calculatePaginationInfo(recruitPost, pageSize);

    function filterAndPaginate(page) {
        renderPagination(totalPages, page);
        renderPosts(recruitPost.slice((page - 1) * pageSize, page * pageSize));
    }

    function renderPosts(jobList) {
        var postsContainer = $('.post-recruit');
        postsContainer.empty();
        console.log(jobList)



        jobList.forEach(function (job) {
            var postHtml = `
                    <div class="col-sm-12 col-md-6 col-lg-6 ">
                        <div class="recruit_des">
                            <a href="/viec-lam/${job.Slug}"> 
                                <div class="main_position">
                                    ${job.Level}
                                    
                                </div>
                            </a>
                            <div class="row gap-md-12">
                                <div class="col-sm-12 col-md-3 col-lg-3">
                                    <div class="flex align-center gap-4">
                                        <div class="icon_map">
                                            <svg width="20"
                                                 height="20"
                                                 viewBox="0 0 20 20"
                                                 fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10 17.4169L14.125 13.2919C14.9407 12.4761 15.4963 11.4367 15.7213 10.3052C15.9463 9.17362 15.8308 8.00076 15.3892 6.93489C14.9477 5.86902 14.2 4.95802 13.2408 4.31707C12.2815 3.67612 11.1537 3.33401 10 3.33401C8.8463 3.33401 7.71851 3.67612 6.75924 4.31707C5.79996 4.95802 5.05229 5.86902 4.61076 6.93489C4.16923 8.00076 4.05368 9.17362 4.27871 10.3052C4.50374 11.4367 5.05926 12.4761 5.875 13.2919L10 17.4169ZM10 19.7736L4.69667 14.4703C3.64779 13.4214 2.93349 12.085 2.64411 10.6301C2.35473 9.17528 2.50326 7.66729 3.07092 6.29685C3.63858 4.9264 4.59987 3.75507 5.83324 2.93096C7.0666 2.10686 8.51665 1.66699 10 1.66699C11.4834 1.66699 12.9334 2.10686 14.1668 2.93096C15.4001 3.75507 16.3614 4.9264 16.9291 6.29685C17.4967 7.66729 17.6453 9.17528 17.3559 10.6301C17.0665 12.085 16.3522 13.4214 15.3033 14.4703L10 19.7736ZM10 10.8336C10.442 10.8336 10.866 10.658 11.1785 10.3454C11.4911 10.0329 11.6667 9.60896 11.6667 9.16693C11.6667 8.7249 11.4911 8.30098 11.1785 7.98842C10.866 7.67586 10.442 7.50026 10 7.50026C9.55797 7.50026 9.13405 7.67586 8.82149 7.98842C8.50893 8.30098 8.33334 8.7249 8.33334 9.16693C8.33334 9.60896 8.50893 10.0329 8.82149 10.3454C9.13405 10.658 9.55797 10.8336 10 10.8336ZM10 12.5003C9.11595 12.5003 8.2681 12.1491 7.64298 11.524C7.01786 10.8988 6.66667 10.051 6.66667 9.16693C6.66667 8.28287 7.01786 7.43503 7.64298 6.80991C8.2681 6.18478 9.11595 5.83359 10 5.83359C10.8841 5.83359 11.7319 6.18478 12.357 6.80991C12.9821 7.43503 13.3333 8.28287 13.3333 9.16693C13.3333 10.051 12.9821 10.8988 12.357 11.524C11.7319 12.1491 10.8841 12.5003 10 12.5003Z"
                                                      fill="#5E5E5E" />
                                            </svg>
                                        </div>
                                        <div>
                                          ${job.Address}
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-12 col-md-5 col-lg-5">
                                    <div class="flex align-center gap-4 ">
                                        <div class="icon_brief">
                                            <svg width="20"
                                                 height="20"
                                                 viewBox="0 0 20 20"
                                                 fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5.83464 4.16683V1.66683C5.83464 1.44582 5.92243 1.23385 6.07871 1.07757C6.23499 0.921293 6.44696 0.833496 6.66797 0.833496H13.3346C13.5556 0.833496 13.7676 0.921293 13.9239 1.07757C14.0802 1.23385 14.168 1.44582 14.168 1.66683V4.16683H17.5013C17.7223 4.16683 17.9343 4.25463 18.0906 4.41091C18.2468 4.56719 18.3346 4.77915 18.3346 5.00016V16.6668C18.3346 16.8878 18.2468 17.0998 18.0906 17.2561C17.9343 17.4124 17.7223 17.5002 17.5013 17.5002H2.5013C2.28029 17.5002 2.06833 17.4124 1.91205 17.2561C1.75577 17.0998 1.66797 16.8878 1.66797 16.6668V5.00016C1.66797 4.77915 1.75577 4.56719 1.91205 4.41091C2.06833 4.25463 2.28029 4.16683 2.5013 4.16683H5.83464ZM3.33464 13.3335V15.8335H16.668V13.3335H3.33464ZM3.33464 11.6668H16.668V5.8335H3.33464V11.6668ZM7.5013 2.50016V4.16683H12.5013V2.50016H7.5013ZM9.16797 9.16683H10.8346V10.8335H9.16797V9.16683Z"
                                                      fill="#5E5E5E" />
                                            </svg>
                                        </div>
                                        <div class="one-line  ">
                                         ${job.Level.substring(0, 23) + "..."}
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-12 col-md-4 col-lg-4">
                                    <div class="flex align-center gap-4">
                                        <div class="icon_time">
                                            <svg width="20"
                                                 height="20"
                                                 viewBox="0 0 20 20"
                                                 fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.0013 18.3332C5.3988 18.3332 1.66797 14.6023 1.66797 9.99984C1.66797 5.39734 5.3988 1.6665 10.0013 1.6665C14.6038 1.6665 18.3346 5.39734 18.3346 9.99984C18.3346 14.6023 14.6038 18.3332 10.0013 18.3332ZM10.0013 16.6665C11.7694 16.6665 13.4651 15.9641 14.7153 14.7139C15.9656 13.4636 16.668 11.7679 16.668 9.99984C16.668 8.23173 15.9656 6.53604 14.7153 5.28579C13.4651 4.03555 11.7694 3.33317 10.0013 3.33317C8.23319 3.33317 6.5375 4.03555 5.28726 5.28579C4.03701 6.53604 3.33464 8.23173 3.33464 9.99984C3.33464 11.7679 4.03701 13.4636 5.28726 14.7139C6.5375 15.9641 8.23319 16.6665 10.0013 16.6665ZM10.8346 9.99984H14.168V11.6665H9.16797V5.83317H10.8346V9.99984Z"
                                                      fill="#5E5E5E" />
                                            </svg>
                                        </div>
                                        <div>
                                        ${job.JobType}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            `;
            postsContainer.append(postHtml);
        });
    }

    function renderPagination(totalPages, currentPage) {
        var paginationContainer = $('.pagination-recruit');

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

    $('.pagination-container-recruit').on('click', 'a', function (e) {
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
