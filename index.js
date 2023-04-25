/*<script>
function toggleDefinition(event) {
const definition = event.target.nextElementSibling;
    const nTitle = definition.nextElementSibling;
if (definition.style.display === 'none') {
  definition.style.display = 'block';
  nTitle.style.display = 'block';
} else {
  definition.style.display = 'none';
  nTitle.style.display = 'none';
}
}

function togglen(event) {
    const nList = event.target.nextElementSibling;
    if (nList.style.display === 'none') {
        nList.style.display = 'block';
    } else {
        nList.style.display = 'none';
    }
}


function displayWord(word, definition, n) {
const wordDiv = document.createElement('div');
wordDiv.className = 'word';
wordDiv.textContent = word;
wordDiv.addEventListener('click', toggleDefinition);

const definitionDiv = document.createElement('div');
definitionDiv.className = 'definition';
definitionDiv.textContent = definition;
    
    const nTitleDiv = document.createElement('div');
    nTitleDiv.className = 'nTitle';
    nTitleDiv.textContent = 'n';
    nTitleDiv.addEventListener('click', togglen);
    
    const nListDiv = document.createElement('div');
    nListDiv.className = 'nList';
    nListDiv.textContent = n;

document.body.appendChild(wordDiv);
document.body.appendChild(definitionDiv);
    document.body.appendChild(nTitleDiv);
    document.body.appendChild(nListDiv);

}

</script>*/