
const getActivity = () => {
    fetch('https://www.boredapi.com/api/activity')
    .then(response => response.json() )
    .then ( json => creteCard(json) )

}

const creteCard = a => {

    document.querySelector('#title').innerHTML = a.activity
    document.querySelector('#participants').innerHTML = 'Participants: ' + a.participants
    document.querySelector('#acc').innerHTML = 'Accessibility: ' + a.accessibility
    document.querySelector('#price').innerHTML = 'Price: ' + a.price
    document.querySelector('#cat').innerHTML = 'Category: ' + a.category
}

getActivity()

document.querySelector('#fetch').addEventListener('click', getActivity)





