/**
 * Use VueJS to make the search functionality interactive.
 */
new Vue({
    el: '#search',
    data: {
        showSearch: false,
        keywords: '',
        posts: [],
        filteredPosts: [],
    },
    methods: {
        handleSearchClick: async function(event) {
            event.preventDefault();

            if (!this.posts.length) {
                this.posts = await fetch('/api/posts.json')
                .then(res => res.json())
                .then(json => json)
                .catch(error => {
                    // catch error.
                });
            }

            this.showSearch = !this.showSearch;
        },
        handleKeyDown: (event) => {
            // If delete key is pressed, set the filtered posts to posts
            // so other results will still show up.
            if (event.which === 8) {
                this.filteredPosts = this.posts;
            }
        },
        handleInput: function(event) {
            this.keywords = event.target.value.toLowerCase();
            this.filteredPosts = [];

            if (!this.keywords.length) {
                this.filteredPosts = [];
                return;
            }

            for (const post of this.posts) {
                if (post.title.toLowerCase().indexOf(this.keywords) > -1) {
                    this.filteredPosts.push(post);
                }
            }
        }
    }
});
