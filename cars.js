document.addEventListener('DOMContentLoaded', () => {
    console.log('se apeleaza');
    addCarTypeToSelect();
})
const cars = ['Car', 'SUV', 'Truck'];

function addCarTypeToSelect (){
    const cars = ['Car', 'SUV', 'Truck'];
    const selectCarType=document.getElementById('typex');
    console.log(typeof selectCarType)
    cars.forEach(item =>{
        selectCarType.options.add(new Option(item));    
    })

}
