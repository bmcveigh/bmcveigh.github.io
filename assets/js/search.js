/**
 * Functionality for global search.
 */

const searchResults = document.querySelector('.search-wrap .search-results ul');

const worker = {
    provideUpDownArrowFunctionality: function() {
        // Get the selected search result or the first search result if nothing has been selected.
        // todo: check validity of the selectors.
        let selected = document.querySelector('.search-results .search-result a.selected');

        // If nothing has been selected, highlight the first search result.
        if (!selected) {
            selected = document.querySelector('.search-results .search-result:first-child a');
        }

        // If still nothing, don't do anything else because most likely there are no search results.
        if (!selected) {
            return;
        }

        // If there is no selected class, we need to
        // add it because nothing has been selected.
        if (!selected.classList.contains('selected')) {
          selected.classList.add('selected');
        }

        switch (event.which) {
          // If the user pressed the down arrow,
          // select the next search result.
          case 40:
            selected.classList.remove('selected');

            if (!selected.parentElement || !selected.parentElement.nextSibling) {
                return;
            }

            // Get the next link if it exists so we can highlight it.
            const nextLink = selected.parentElement.nextSibling.querySelector('a');

            if (nextLink) {
                nextLink.classList.add('selected');
            }
            break;

          // If the user pressed the up arrow,
          // select the previous search result.
           case 38:
            selected.classList.remove('selected');

            if (!selected.parentElement || !selected.parentElement.previousSibling) {
                return;
            }

             // Get the previous link if it exists so we can highlight it.
             const prevLink = selected.parentElement.previousSibling.querySelector('a');

             if (prevLink) {
                  prevLink.classList.add('selected');
                  break;
             }
            
        }
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

    handleKeyUp: function(event) {
        // If the enter key is pressed, go to the url of the
        // selected search result.
        if (event.which === 13) {
            const selected = document
            .querySelector('.search-results .search-result .selected');

            if (!selected) {
                return;
            }

            const destination = selected
                .attributes
                .href
                .value;

            window.location = destination;
        }
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
