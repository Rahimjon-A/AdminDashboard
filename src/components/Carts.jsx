const Carts = ({cartTitle, qunatitiy, isSelected, onSelect}) => {
    return (
      <div onClick={onSelect} className={`border py-7 px-8 text-center grow rounded-lg ${isSelected ? 'border-[--blue]' : null }`} >
          <p className={`text-[19px] font-bold  mb-3 ${isSelected ? 'text-[--blue]' : "text-[--grey]" } `} > {cartTitle} </p>
          <span className={` text-[40px] font-bold  ${isSelected ? 'text-[--blue]' : "text-[--black]" } `} > {qunatitiy} </span>
      </div>
    )
  }
  
  export default Carts;
  
