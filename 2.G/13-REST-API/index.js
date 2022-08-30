
const getActivity = () => {
    fetch('https://www.boredapi.com/api/activity')
    .then(response => response.json() )
    .then ( json => creteCard(json) )

}

const creteCard = a => {

    document.querySelector('#title').innerHTML = a.activity
    document.querySelector('#participants').innerHTML = a.participants
    document.querySelector('#acc').innerHTML = a.accessibility
    document.querySelector('#price').innerHTML = a.price
    document.querySelector('#cat').innerHTML = a.category
}

getActivity()

document.querySelector('#fetch').addEventListener('click', getActivity)





