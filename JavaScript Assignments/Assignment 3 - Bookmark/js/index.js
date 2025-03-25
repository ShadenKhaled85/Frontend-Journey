
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

    // if (name === '' || url === '') {
    //     alert('Please fill in both fields.');
    //     return;
    // }

    if (name === '' || url === '') {
        Swal.fire({
            icon: 'warning',
            title: 'Empty Fields',
            text: 'Please fill in both site name and URL.',
            confirmButtonColor: 'rgb(160, 0, 0)'
        });
        return;
    }
    

    var isDuplicate = bookmarksContainer.some(function (bookmark) {
        return bookmark.name.toLowerCase() === name.toLowerCase();
    });

    // if (isDuplicate) {
    //     alert('This website name is already added.');
    //     return;
    // }

    if (isDuplicate) {
        Swal.fire({
            icon: 'error',
            title: 'Duplicate Name',
            text: 'This website name is already added.',
            confirmButtonColor: 'rgb(160, 0, 0)'
        });
        return;
    }    

    // if (!urlRegex.test(url)) {
    //     alert('Invalid URL! URL must start with "https://" and be in a proper format.');
    //     return;
    // }

    if (!urlRegex.test(url)) {
        Swal.fire({
            icon: 'error',
            title: 'Invalid URL',
            html: `<b>Site Name or URL is not valid.</b><br><br>
                    Please follow the rules below:<br><br>
                    <ul style="text-align: left; list-style: none;">
                        <li><i class="fa-regular fa-circle-right p-2" style="color:rgb(160, 0, 0);"></i> Site name must contain at least 3 characters</li>
                        <li><i class="fa-regular fa-circle-right p-2" style="color:rgb(160, 0, 0);"></i> Site URL must start with <strong>https://</strong> and be valid</li>
                    </ul>`,
                    confirmButtonColor: 'rgb(160, 0, 0)'
                });
        return;
    }
    
    var bookmark = {
        name: name,
        url: url
    };

    bookmarksContainer.push(bookmark);
    localStorage.setItem('bookmark', JSON.stringify(bookmarksContainer));
    console.log(bookmarksContainer);
    Swal.fire({
        icon: 'success',
        title: 'Bookmark Added!',
        showConfirmButton: false,
        timer: 1200
    });    
    displayBookmark(bookmarksContainer);
    clearForm();
}

/* ====================================== DISPLAY BOOKMARK ====================================== */

function displayBookmark(arr){
    var bookmarkStorage = ``;
    for( let websiteIndex = 0; websiteIndex<arr.length; websiteIndex++){
        bookmarkStorage += 
                    `
                    <tr>
                        <td class="pt-3">${websiteIndex+1}</td>
                        <td class="pt-3">${arr[websiteIndex].name}</td>
                        <td>
                            <button onclick="visitBookmark('${arr[websiteIndex].url}')" id="visitBtn" class="btn-visit btn-white border-0 px-3 py-2 rounded-3">
                                <i class="fa-solid fa-eye"></i>
                                Visit
                            </button>
                        </td>
                        <td>
                            <button onclick="deleteBookmark(${websiteIndex})" id="deleteBtn" class="btn-white btn-delete bg-danger border-0 px-3 py-2 rounded-3">
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

/* ====================================== DELETE BOOKMARK ====================================== */

function deleteBookmark(index){
    bookmarksContainer.splice(index,1);
    localStorage.setItem('bookmark', JSON.stringify(bookmarksContainer));
    console.log(bookmarksContainer);
    displayBookmark(bookmarksContainer);
}

/* ====================================== VISIT BOOKMARK ====================================== */

function visitBookmark(url){
    window.open(url, '_blank');
}
