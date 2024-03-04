
const Button = ({name}) => {
    console.log(name)
  return (
    <div>
        <button className="px-5 my-3 m-2 bg-gray-200 rounded-lg">{name}</button>
    </div>
  )
}

export default Button