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
        selectedSearchResIndex: 0,
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
            const refs = this.$refs;

            // Set the input field to be auto-focused when user clicks
            // search button.
            setTimeout(function() {
                refs.search.focus();
            }, 10);
        },
        handleKeyDown: function(event) {
            // If delete key is pressed, set the filtered posts to posts
            // so other results will still show up.
            if (event.which === 8) {
                this.filteredPosts = this.posts;
            }

            // Highlight next item if down arrow key pressed.
            if (event.which === 40) {
                // Numeric value to see if there is another row after the selected one.
                const nextIndex = this.selectedSearchResIndex + 1;

                if (this.$refs.searchResult && this.$refs.searchResult.length) {
                    if (this.$refs.searchResult[this.selectedSearchResIndex] &&
                        this.$refs.searchResult[this.selectedSearchResIndex].className === ''
                    ) {
                        this.$refs.searchResult[this.selectedSearchResIndex].className = 'selected';
                    }
                    else if (this.$refs.searchResult[nextIndex]) {
                        this.$refs.searchResult[this.selectedSearchResIndex].className = '';
                        this.$refs.searchResult[++this.selectedSearchResIndex].className = 'selected';
                    }
                }
            }
            // Highlight next item if up arrow key pressed.
            else if (event.which === 38) {
                if (this.$refs.searchResult && this.$refs.searchResult.length) {
                    const prevIndex = this.selectedSearchResIndex - 1;
                    
                    if (this.$refs.searchResult[this.selectedSearchResIndex] && this.$refs.searchResult[prevIndex]) {
                        this.$refs.searchResult[this.selectedSearchResIndex].className = '';
                        this.$refs.searchResult[--this.selectedSearchResIndex].className = 'selected';
                    }
                }
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
        },
    }
});
