import '../styles/button.css'
    // state = {
    //     visible: false
    // }
function clicMe (){
    alert('Un petit conseil pour toi!')
}
function Recommandation () {
    const currentMonth = new Date().getMonth()
    const isSprint = currentMonth >= 2 && currentMonth <= 5 
    console.log(currentMonth)

    return (
    
    <div>
        {
            (isSprint? (<div><br /> C'est le moment de rempoter</div>) : (<div>Ce n'est pas le moment de rempoter</div>) )
        }

        <div>
        <button disabled onClick={clicMe} className='button-style'>
            Advice
        </button>
        </div>

    </div>
     )

}
export default Recommandation;