const searchResults = document.querySelector('.search-wrap .search-results ul');

const worker = {
    provideUpDownArrowFunctionality: function(vueInstance) {
        // todo
    },

    handleSearchClick: async function() {
        const searchWrap = document.querySelector('.search-wrap');
        searchWrap.classList.toggle('hidden');

        this.posts = await fetch('/api/posts.json')
            .then(res => res.json())
            .then(json => json)
            .catch(error => {
                // catch error.
            });
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

        searchResults.innerHTML = '';

        for (const post of this.posts) {
            // Search each title as well as tags for improved search results.
            const searchString = post.title.toLowerCase() + post.tags.toLowerCase();

            if (searchString.indexOf(this.keywords) > -1) {
                // Create an li element.
                const li = document.createElement('li');
                li.classList.add('search-result');
                
                // Create a link and append it to the li.
                const a = document.createElement('a');
                a.setAttribute('href', post.url);
                a.innerHTML = post.title;
                li.appendChild(a);

                // Add the li element with the link.
                searchResults.appendChild(li);
            }
        }
    },
};
