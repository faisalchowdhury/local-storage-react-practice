
function Bottle({bottle}){
    // console.log(bottle)
  return (
    <>
    
    <div className="border border-slate-300 rounded-2xl p-5 space-y-3" >
        <img className="w-full" src={bottle.img} alt="" />
        <h3 className="text-xl">{bottle.name}</h3>
        <h3 className="text-2xl font-semibold">${bottle.price}</h3>
        <button className="btn bg-teal-600 p-2 text-white font-semibold rounded-md">Add to cart</button>
    </div>

    </>
  )
}

export default Bottle