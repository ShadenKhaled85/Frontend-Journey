
var siteName = document.getElementById("bookmarkName");
var siteURL = document.getElementById("bookmarkURL");

var bookmarksContainer;

if(localStorage.getItem('bookmark') != null){
    bookmarksContainer = JSON.parse(localStorage.getItem('bookmark'));
    displayBookmark(bookmarksContainer);
}
else{
    bookmarksContainer = [];
}

/* ====================================== ADD BOOKMARK ====================================== */

function addBookmark() {
    var name = siteName.value.trim();
    var url = siteURL.value.trim();

    var urlRegex = /^https:\/\/([\w\-]+\.)+[\w\-]{2,}/i;

    if (name === '' || url === '') {
        alert('Please fill in both fields.');
        return;
    }

    var isDuplicate = bookmarksContainer.some(function (bookmark) {
        return bookmark.name.toLowerCase() === name.toLowerCase();
    });

    if (isDuplicate) {
        alert('This website name is already added.');
        return;
    }

    if (!urlRegex.test(url)) {
        alert('Invalid URL! URL must start with "https://" and be in a proper format.');
        return;
    }

    var bookmark = {
        name: name,
        url: url
    };

    bookmarksContainer.push(bookmark);
    localStorage.setItem('bookmark', JSON.stringify(bookmarksContainer));
    console.log(bookmarksContainer);
    displayBookmark(bookmarksContainer);
    clearForm();
}

/* ====================================== DISPLAY BOOKMARK ====================================== */

function displayBookmark(arr){
    var bookmarkStorage = ``;
    for( let websiteIndex = 1; websiteIndex<arr.length; websiteIndex++){
        bookmarkStorage += 
                    `
                    <tr>
                        <td class="pt-3">${websiteIndex}</td>
                        <td class="pt-3">${arr[websiteIndex].name}</td>
                        <td>
                            <button id="visitBtn" class="btn-visit btn-white border-0 px-3 py-2 rounded-3">
                                <i class="fa-solid fa-eye"></i>
                                Visit
                            </button>
                        </td>
                        <td>
                            <button id="deleteBtn" class="btn-white bg-danger border-0 px-3 py-2 rounded-3">
                                <i class="fa-solid fa-trash-can"></i>
                                Delete
                            </button>
                        </td>
                    </tr>
                    `
    }
    document.getElementById("tableContent").innerHTML = bookmarkStorage;
}

/* ====================================== CLEAR FORM ====================================== */

function clearForm(){
    siteName.value = null;
    siteURL.value = null;
}