const STEP = 3;
let current = 0;

const posts = [
    {
        categories: "<a>Fun</a>, <a>Travel</a>, <a>Trends</a>",
        img: "./img/cards/ferris-weel.png",
        title: "The Magic Wheel",
        date: "July 28, 2014",
        responses: `<a>1 Response</a>`,
        creator: "admin",
        content: `It's not it to understand them in the <a href="#">objects
                        we're playing</a>. Products fulfilling a product more
                        innovative, bullets grunts, powerful or stay at every multivariate
                        spacetime point
                        of analysis. People have enormous serial correlation. Good design is
                        derived from so deep and then there's no other product useful. <a
                            class="more-link"><span>(more&hellip;)</span></a>`
    },
    {
        categories: "<a>Fun</a>, <a>Travel</a>, <a>Trends</a>, <a>Web Design</a>",
        responses: `<a>3 Responses</a>`,
        img: "./img/cards/road.png",
        title: "The lonely road",
        date: "July 28, 2014",
        creator: "admin",
        content: `If you've <a>studied design</a>at all, you've probably encountered<a></a>
        at
        some point. Anywhere there is text, but the meaning of that text
        isn't particularly important, you might see Lorem Ipsum.<a
            class="more-link"><span>(more&hellip;)</span`
    },
    {
        categories: "<a>Fun</a>, <a>Trends</a>, <a>Web Design</a>",
        responses: `<a>No Responses</a>`,
        img: "./img/cards/gas-station.png",
        title: "I love gasoline smell",
        date: "July 28, 2014",
        creator: "admin",
        content: `Many of the content, and often about their precious turfpossessed selves
        and principles are shortcomings of seeing and colors to cover up a
        paucity of design. Zero out your interface. I think that are deep and
        profound indeed, these tasks and showing. <a
            class="more-link"><span>(more&hellip;)</span></a>`
    },
    {
        categories: "<a>Fun</a>, <a>Travel</a>, <a>Trends</a>",
        img: "./img/cards/ferris-weel.png",
        title: "The Magic Wheel",
        date: "July 28, 2014",
        responses: `<a>1 Response</a>`,
        creator: "admin",
        content: `It's not it to understand them in the <a href="#">objects
                        we're playing</a>. Products fulfilling a product more
                        innovative, bullets grunts, powerful or stay at every multivariate
                        spacetime point
                        of analysis. People have enormous serial correlation. Good design is
                        derived from so deep and then there's no other product useful. <a
                            class="more-link"><span>(more&hellip;)</span></a>`
    },
    {
        categories: "<a>Fun</a>, <a>Travel</a>, <a>Trends</a>, <a>Web Design</a>",
        responses: `<a>3 Responses</a>`,
        img: "./img/cards/road.png",
        title: "The lonely road",
        date: "July 28, 2014",
        creator: "admin",
        content: `If you've <a>studied design</a>at all, you've probably encountered<a></a>
        at
        some point. Anywhere there is text, but the meaning of that text
        isn't particularly important, you might see Lorem Ipsum.<a
            class="more-link"><span>(more&hellip;)</span`
    },
    {
        categories: "<a>Fun</a>, <a>Trends</a>, <a>Web Design</a>",
        responses: `<a>No Responses</a>`,
        img: "./img/cards/gas-station.png",
        title: "I love gasoline smell",
        date: "July 28, 2014",
        creator: "admin",
        content: `Many of the content, and often about their precious turfpossessed selves
        and principles are shortcomings of seeing and colors to cover up a
        paucity of design. Zero out your interface. I think that are deep and
        profound indeed, these tasks and showing. <a
            class="more-link"><span>(more&hellip;)</span></a>`
    },
    {
        categories: "<a>Fun</a>, <a>Travel</a>, <a>Trends</a>",
        img: "./img/cards/ferris-weel.png",
        title: "The Magic Wheel",
        date: "July 28, 2014",
        responses: `<a>1 Response</a>`,
        creator: "admin",
        content: `It's not it to understand them in the <a href="#">objects
                        we're playing</a>. Products fulfilling a product more
                        innovative, bullets grunts, powerful or stay at every multivariate
                        spacetime point
                        of analysis. People have enormous serial correlation. Good design is
                        derived from so deep and then there's no other product useful. <a
                            class="more-link"><span>(more&hellip;)</span></a>`
    },
    {
        categories: "<a>Fun</a>, <a>Travel</a>, <a>Trends</a>, <a>Web Design</a>",
        responses: `<a>3 Responses</a>`,
        img: "./img/cards/road.png",
        title: "The lonely road",
        date: "July 28, 2014",
        creator: "admin",
        content: `If you've <a>studied design</a>at all, you've probably encountered<a></a>
        at
        some point. Anywhere there is text, but the meaning of that text
        isn't particularly important, you might see Lorem Ipsum.<a
            class="more-link"><span>(more&hellip;)</span`
    },
    {
        categories: "<a>Fun</a>, <a>Trends</a>, <a>Web Design</a>",
        responses: `<a>No Responses</a>`,
        img: "./img/cards/gas-station.png",
        title: "I love gasoline smell",
        date: "July 28, 2014",
        creator: "admin",
        content: `Many of the content, and often about their precious turfpossessed selves
        and principles are shortcomings of seeing and colors to cover up a
        paucity of design. Zero out your interface. I think that are deep and
        profound indeed, these tasks and showing. <a
            class="more-link"><span>(more&hellip;)</span></a>`
    }, {
        categories: "<a>Fun</a>, <a>Travel</a>, <a>Trends</a>",
        img: "./img/cards/ferris-weel.png",
        title: "The Magic Wheel",
        date: "July 28, 2014",
        responses: `<a>1 Response</a>`,
        creator: "admin",
        content: `It's not it to understand them in the <a href="#">objects
                        we're playing</a>. Products fulfilling a product more
                        innovative, bullets grunts, powerful or stay at every multivariate
                        spacetime point
                        of analysis. People have enormous serial correlation. Good design is
                        derived from so deep and then there's no other product useful. <a
                            class="more-link"><span>(more&hellip;)</span></a>`
    },
    {
        categories: "<a>Fun</a>, <a>Travel</a>, <a>Trends</a>, <a>Web Design</a>",
        responses: `<a>3 Responses</a>`,
        img: "./img/cards/road.png",
        title: "The lonely road",
        date: "July 28, 2014",
        creator: "admin",
        content: `If you've <a>studied design</a>at all, you've probably encountered<a></a>
        at
        some point. Anywhere there is text, but the meaning of that text
        isn't particularly important, you might see Lorem Ipsum.<a
            class="more-link"><span>(more&hellip;)</span`
    },
    {
        categories: "<a>Fun</a>, <a>Trends</a>, <a>Web Design</a>",
        responses: `<a>No Responses</a>`,
        img: "./img/cards/gas-station.png",
        title: "I love gasoline smell",
        date: "July 28, 2014",
        creator: "admin",
        content: `Many of the content, and often about their precious turfpossessed selves
        and principles are shortcomings of seeing and colors to cover up a
        paucity of design. Zero out your interface. I think that are deep and
        profound indeed, these tasks and showing. <a
            class="more-link"><span>(more&hellip;)</span></a>`
    }, {
        categories: "<a>Fun</a>, <a>Travel</a>, <a>Trends</a>",
        img: "./img/cards/ferris-weel.png",
        title: "The Magic Wheel",
        date: "July 28, 2014",
        responses: `<a>1 Response</a>`,
        creator: "admin",
        content: `It's not it to understand them in the <a href="#">objects
                        we're playing</a>. Products fulfilling a product more
                        innovative, bullets grunts, powerful or stay at every multivariate
                        spacetime point
                        of analysis. People have enormous serial correlation. Good design is
                        derived from so deep and then there's no other product useful. <a
                            class="more-link"><span>(more&hellip;)</span></a>`
    },
    {
        categories: "<a>Fun</a>, <a>Travel</a>, <a>Trends</a>, <a>Web Design</a>",
        responses: `<a>3 Responses</a>`,
        img: "./img/cards/road.png",
        title: "The lonely road",
        date: "July 28, 2014",
        creator: "admin",
        content: `If you've <a>studied design</a>at all, you've probably encountered<a></a>
        at
        some point. Anywhere there is text, but the meaning of that text
        isn't particularly important, you might see Lorem Ipsum.<a
            class="more-link"><span>(more&hellip;)</span`
    },
    {
        categories: "<a>Fun</a>, <a>Trends</a>, <a>Web Design</a>",
        responses: `<a>No Responses</a>`,
        img: "./img/cards/gas-station.png",
        title: "I love gasoline smell",
        date: "July 28, 2014",
        creator: "admin",
        content: `Many of the content, and often about their precious turfpossessed selves
        and principles are shortcomings of seeing and colors to cover up a
        paucity of design. Zero out your interface. I think that are deep and
        profound indeed, these tasks and showing. <a
            class="more-link"><span>(more&hellip;)</span></a>`
    }, {
        categories: "<a>Fun</a>, <a>Travel</a>, <a>Trends</a>",
        img: "./img/cards/ferris-weel.png",
        title: "The Magic Wheel",
        date: "July 28, 2014",
        responses: `<a>1 Response</a>`,
        creator: "admin",
        content: `It's not it to understand them in the <a href="#">objects
                        we're playing</a>. Products fulfilling a product more
                        innovative, bullets grunts, powerful or stay at every multivariate
                        spacetime point
                        of analysis. People have enormous serial correlation. Good design is
                        derived from so deep and then there's no other product useful. <a
                            class="more-link"><span>(more&hellip;)</span></a>`
    },
    {
        categories: "<a>Fun</a>, <a>Travel</a>, <a>Trends</a>, <a>Web Design</a>",
        responses: `<a>3 Responses</a>`,
        img: "./img/cards/road.png",
        title: "The lonely road",
        date: "July 28, 2014",
        creator: "admin",
        content: `If you've <a>studied design</a>at all, you've probably encountered<a></a>
        at
        some point. Anywhere there is text, but the meaning of that text
        isn't particularly important, you might see Lorem Ipsum.<a
            class="more-link"><span>(more&hellip;)</span`
    },
    {
        categories: "<a>Fun</a>, <a>Trends</a>, <a>Web Design</a>",
        responses: `<a>No Responses</a>`,
        img: "./img/cards/gas-station.png",
        title: "I love gasoline smell",
        date: "July 28, 2014",
        creator: "admin",
        content: `Many of the content, and often about their precious turfpossessed selves
        and principles are shortcomings of seeing and colors to cover up a
        paucity of design. Zero out your interface. I think that are deep and
        profound indeed, these tasks and showing. <a
            class="more-link"><span>(more&hellip;)</span></a>`
    },
]

function htmlToElement(html) {
    var template = document.createElement('template');
    html = html.trim();
    template.innerHTML = html;
    return template.content.firstChild;
}

function createBlogElement({ categories, img, title, date, creator, content, responses }) {
    return `<li id="article" class="row clear post-38 post type-post status-publish format-video has-post-thumbnail hentry category-fun category-travel category-trends tag-design tag-news tag-products tag-travel-2 post_format-post-format-video"
    id = "article_38" >
        <div class="col col-4 tablet-col-4 mobile-full">
            <a><img width="480" height="360" src=${img}
                class="attachment-post-thumbnail size-post-thumbnail wp-post-image"
                alt="" loading="lazy" />
            </a>
        </div>

        <div class="col col-8 tablet-col-8 mobile-full">
            <a class="post-title">
                <h3>${title}</h3>
            </a>
            <h4 class="post-meta">
                <span class="enbold">
                    <time>${date}</time>
                </span> // <span class="enbold">${creator}</span> // ${categories} <span class="hidden">Tags: <a>design</a>, <a>news</a>,
                    <a>products</a>, <a>travel</a></span>
                    <span class="post-comments">${responses}</span>
            </h4>
            <hr/>
                <div class="post-content">
                    <p>${content}
                    </p>
                </div>
        </div>
    </li >`
}

const showMoreButton = document.getElementById('show-more-posts');
const morePostsDiv = document.getElementById("more-posts");
const blogPosts = document.getElementById('blog-posts');

loadPosts();
showMoreButton.onclick = loadPosts;

function loadPosts() {
    const postsToLoad = posts.slice(current, current + STEP);
    current += STEP;

    for (const post of postsToLoad) {
        blogPosts.insertAdjacentElement('beforeend', htmlToElement(createBlogElement(post)));
    }

    if (current === posts.length) {
        morePostsDiv.style.display = 'none';
    }
}