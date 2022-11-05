const infoElement = document.getElementById('info')

export function hideInfo(){
    infoElement.style.display = 'none'
}
export function writeInfo(text){
    infoElement.style.display = 'block'
    infoElement.innerHTML = text

}
//! steuerungs info villeicht toggel lieber  