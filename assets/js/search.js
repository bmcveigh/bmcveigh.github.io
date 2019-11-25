const worker = {
    provideUpDownArrowFunctionality: function(vueInstance) {
        let text = '';

         // Highlight next item if down arrow key pressed.
         if (event.which === 40) {
            // Numeric value to see if there is another row after the selected one.
            const nextIndex = vueInstance.selectedSearchResIndex + 1;

            if (vueInstance.$refs.searchResult && vueInstance.$refs.searchResult.length) {
                if (vueInstance.$refs.searchResult[vueInstance.selectedSearchResIndex] &&
                    vueInstance.$refs.searchResult[vueInstance.selectedSearchResIndex].className === ''
                ) {
                    vueInstance.$refs.searchResult[vueInstance.selectedSearchResIndex].className = 'selected';
                    text = vueInstance.$refs.searchResult[vueInstance.selectedSearchResIndex].text;
                }
                else if (vueInstance.$refs.searchResult[nextIndex]) {
                    vueInstance.$refs.searchResult[vueInstance.selectedSearchResIndex].className = '';
                    vueInstance.$refs.searchResult[++vueInstance.selectedSearchResIndex].className = 'selected';
                    text = vueInstance.$refs.searchResult[vueInstance.selectedSearchResIndex].text;
                }

               
            }
        }
        // Highlight next item if up arrow key pressed.
        else if (event.which === 38) {
            if (vueInstance.$refs.searchResult && vueInstance.$refs.searchResult.length) {
                const prevIndex = vueInstance.selectedSearchResIndex - 1;
                
                if (vueInstance.$refs.searchResult[vueInstance.selectedSearchResIndex] && vueInstance.$refs.searchResult[prevIndex]) {
                    vueInstance.$refs.searchResult[vueInstance.selectedSearchResIndex].className = '';
                    vueInstance.$refs.searchResult[--vueInstance.selectedSearchResIndex].className = 'selected';
                    text = vueInstance.$refs.searchResult[vueInstance.selectedSearchResIndex].text;
                }
            }
        }
        // If the user selects the Enter key, go to the page they have selected.
        else if (event.which === 13) {
            window.location = document.querySelector('.search-results a.selected').href;
        }
        // Update the search input field value if a search result option was selected.
        if (text.length) {
            vueInstance.keywords = text;
            vueInstance.$refs.search.value = text;
        }
    }
};

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

            worker.provideUpDownArrowFunctionality(this);
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
